// Authentication utilities for the dashboard
export interface AuthUser {
  id: string
  email: string
  name: string
  medspacName: string
  role: 'client' | 'admin'
  permissions: string[]
  lastLogin?: Date
}

export interface AuthSession {
  user: AuthUser
  token: string
  expiresAt: Date
  refreshToken: string
}

// Mock user data for demonstration
const mockUsers: Record<string, AuthUser> = {
  'bella@luxespa.com': {
    id: '1',
    email: 'bella@luxespa.com',
    name: 'Dr. Bella Rodriguez',
    medspacName: 'Luxe Medical Spa',
    role: 'client',
    permissions: ['dashboard:read', 'campaigns:read', 'reports:read', 'billing:read']
  }
}

// Session storage utilities
export class SessionManager {
  private static readonly SESSION_KEY = 'dashboard-session'
  private static readonly AUTH_KEY = 'dashboard-auth'
  
  static setSession(session: AuthSession): void {
    if (typeof window === 'undefined') return
    
    try {
      localStorage.setItem(this.SESSION_KEY, JSON.stringify({
        ...session,
        expiresAt: session.expiresAt.toISOString()
      }))
      localStorage.setItem(this.AUTH_KEY, 'authenticated')
    } catch (error) {
      console.error('Failed to store session:', error)
    }
  }
  
  static getSession(): AuthSession | null {
    if (typeof window === 'undefined') return null
    
    try {
      const sessionData = localStorage.getItem(this.SESSION_KEY)
      if (!sessionData) return null
      
      const parsed = JSON.parse(sessionData)
      const session: AuthSession = {
        ...parsed,
        expiresAt: new Date(parsed.expiresAt)
      }
      
      // Check if session is expired
      if (new Date() > session.expiresAt) {
        this.clearSession()
        return null
      }
      
      return session
    } catch (error) {
      console.error('Failed to retrieve session:', error)
      this.clearSession()
      return null
    }
  }
  
  static clearSession(): void {
    if (typeof window === 'undefined') return
    
    localStorage.removeItem(this.SESSION_KEY)
    localStorage.removeItem(this.AUTH_KEY)
  }
  
  static isAuthenticated(): boolean {
    const session = this.getSession()
    return session !== null
  }
  
  static getCurrentUser(): AuthUser | null {
    const session = this.getSession()
    return session?.user || null
  }
  
  static refreshSession(): Promise<AuthSession | null> {
    return new Promise((resolve) => {
      const currentSession = this.getSession()
      if (!currentSession) {
        resolve(null)
        return
      }
      
      // Simulate API call to refresh token
      setTimeout(() => {
        const refreshedSession: AuthSession = {
          ...currentSession,
          token: this.generateToken(),
          expiresAt: new Date(Date.now() + 8 * 60 * 60 * 1000) // 8 hours
        }
        
        this.setSession(refreshedSession)
        resolve(refreshedSession)
      }, 100)
    })
  }
  
  private static generateToken(): string {
    return Math.random().toString(36).substring(2) + Date.now().toString(36)
  }
}

// Authentication functions
export async function authenticateUser(email: string, password: string): Promise<AuthSession | null> {
  // Simulate API authentication
  return new Promise((resolve) => {
    setTimeout(() => {
      const user = mockUsers[email]
      
      // Mock password check (in real app, this would be handled by backend)
      if (user && password === 'demo123') {
        const session: AuthSession = {
          user: {
            ...user,
            lastLogin: new Date()
          },
          token: Math.random().toString(36).substring(2) + Date.now().toString(36),
          refreshToken: Math.random().toString(36).substring(2) + Date.now().toString(36),
          expiresAt: new Date(Date.now() + 8 * 60 * 60 * 1000) // 8 hours
        }
        
        resolve(session)
      } else {
        resolve(null)
      }
    }, 500) // Simulate network delay
  })
}

export async function logoutUser(): Promise<void> {
  // Simulate API logout
  return new Promise((resolve) => {
    setTimeout(() => {
      SessionManager.clearSession()
      resolve()
    }, 100)
  })
}

// Permission checking
export function hasPermission(permission: string, user?: AuthUser | null): boolean {
  const currentUser = user || SessionManager.getCurrentUser()
  if (!currentUser) return false
  
  return currentUser.permissions.includes(permission) || currentUser.role === 'admin'
}

export function requiresAuth(permission?: string) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value
    
    descriptor.value = function (...args: any[]) {
      if (!SessionManager.isAuthenticated()) {
        throw new Error('Authentication required')
      }
      
      if (permission && !hasPermission(permission)) {
        throw new Error('Insufficient permissions')
      }
      
      return originalMethod.apply(this, args)
    }
    
    return descriptor
  }
}

// Password strength validation
export function validatePasswordStrength(password: string): {
  isValid: boolean
  errors: string[]
  strength: 'weak' | 'medium' | 'strong'
} {
  const errors: string[] = []
  
  if (password.length < 8) {
    errors.push('Password must be at least 8 characters long')
  }
  
  if (!/[a-z]/.test(password)) {
    errors.push('Password must contain at least one lowercase letter')
  }
  
  if (!/[A-Z]/.test(password)) {
    errors.push('Password must contain at least one uppercase letter')
  }
  
  if (!/\d/.test(password)) {
    errors.push('Password must contain at least one number')
  }
  
  if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
    errors.push('Password must contain at least one special character')
  }
  
  const isValid = errors.length === 0
  
  let strength: 'weak' | 'medium' | 'strong' = 'weak'
  if (password.length >= 12 && isValid) {
    strength = 'strong'
  } else if (password.length >= 8 && errors.length <= 2) {
    strength = 'medium'
  }
  
  return { isValid, errors, strength }
}

// Rate limiting for login attempts
class RateLimiter {
  private attempts: Map<string, { count: number; lastAttempt: Date }> = new Map()
  private readonly maxAttempts = 5
  private readonly windowMs = 15 * 60 * 1000 // 15 minutes
  
  canAttempt(identifier: string): boolean {
    const now = new Date()
    const record = this.attempts.get(identifier)
    
    if (!record) {
      return true
    }
    
    // Reset if window has expired
    if (now.getTime() - record.lastAttempt.getTime() > this.windowMs) {
      this.attempts.delete(identifier)
      return true
    }
    
    return record.count < this.maxAttempts
  }
  
  recordAttempt(identifier: string): void {
    const now = new Date()
    const record = this.attempts.get(identifier)
    
    if (!record || now.getTime() - record.lastAttempt.getTime() > this.windowMs) {
      this.attempts.set(identifier, { count: 1, lastAttempt: now })
    } else {
      this.attempts.set(identifier, { count: record.count + 1, lastAttempt: now })
    }
  }
  
  getRemainingTime(identifier: string): number {
    const record = this.attempts.get(identifier)
    if (!record || record.count < this.maxAttempts) {
      return 0
    }
    
    const now = new Date()
    const elapsed = now.getTime() - record.lastAttempt.getTime()
    return Math.max(0, this.windowMs - elapsed)
  }
}

export const loginRateLimiter = new RateLimiter()

// Security headers and utilities
export function getSecurityHeaders(): Record<string, string> {
  return {
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), location=()',
  }
}

// CSRF protection
export function generateCSRFToken(): string {
  if (typeof window === 'undefined') return ''
  
  const token = Math.random().toString(36).substring(2) + Date.now().toString(36)
  sessionStorage.setItem('csrf-token', token)
  return token
}

export function validateCSRFToken(token: string): boolean {
  if (typeof window === 'undefined') return false
  
  const storedToken = sessionStorage.getItem('csrf-token')
  return storedToken === token
}