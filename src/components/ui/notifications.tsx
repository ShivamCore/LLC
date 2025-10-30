'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Bell, 
  X, 
  CheckCircle, 
  AlertCircle, 
  Info, 
  DollarSign,
  TrendingUp,
  Calendar,
  Target,
  Clock,
  CreditCard
} from 'lucide-react'

export interface Notification {
  id: string
  type: 'success' | 'warning' | 'info' | 'payment' | 'campaign' | 'appointment'
  title: string
  message: string
  timestamp: Date
  read: boolean
  action?: {
    label: string
    href?: string
    onClick?: () => void
  }
}

const mockNotifications: Notification[] = [
  {
    id: '1',
    type: 'success',
    title: 'Payment Received',
    message: 'Invoice #INV-2024-001 has been paid successfully ($2,500.00)',
    timestamp: new Date('2024-01-28T10:30:00'),
    read: false,
    action: {
      label: 'View Invoice',
      href: '/client-dashboard/billing'
    }
  },
  {
    id: '2', 
    type: 'campaign',
    title: 'Campaign Performance Alert',
    message: 'Your Botox campaign is performing 25% above target this week',
    timestamp: new Date('2024-01-28T09:15:00'),
    read: false,
    action: {
      label: 'View Campaign',
      href: '/client-dashboard/campaigns'
    }
  },
  {
    id: '3',
    type: 'appointment',
    title: 'New Appointment Scheduled',
    message: '3 new appointments scheduled from your Meta Ads campaign',
    timestamp: new Date('2024-01-27T16:45:00'),
    read: true,
    action: {
      label: 'View Details'
    }
  },
  {
    id: '4',
    type: 'info',
    title: 'Monthly Report Available',
    message: 'Your January performance report is ready for download',
    timestamp: new Date('2024-01-27T14:20:00'),
    read: true,
    action: {
      label: 'Download Report',
      href: '/client-dashboard/reports'
    }
  },
  {
    id: '5',
    type: 'warning',
    title: 'Budget Threshold Reached',
    message: 'Campaign "Dermal Fillers" has reached 80% of monthly budget',
    timestamp: new Date('2024-01-26T11:30:00'),
    read: true,
    action: {
      label: 'Adjust Budget',
      href: '/client-dashboard/campaigns'
    }
  }
]

const getNotificationIcon = (type: string) => {
  switch (type) {
    case 'success':
      return <CheckCircle className="w-5 h-5 text-success-500" />
    case 'warning':
      return <AlertCircle className="w-5 h-5 text-amber-500" />
    case 'info':
      return <Info className="w-5 h-5 text-navy-500" />
    case 'payment':
      return <CreditCard className="w-5 h-5 text-success-500" />
    case 'campaign':
      return <Target className="w-5 h-5 text-gold-500" />
    case 'appointment':
      return <Calendar className="w-5 h-5 text-purple-500" />
    default:
      return <Info className="w-5 h-5 text-slate-500" />
  }
}

const getNotificationBg = (type: string) => {
  switch (type) {
    case 'success':
      return 'bg-success-50 border-success-200'
    case 'warning':
      return 'bg-amber-50 border-amber-200'
    case 'info':
      return 'bg-navy-50 border-navy-200'
    case 'payment':
      return 'bg-success-50 border-success-200'
    case 'campaign':
      return 'bg-gold-50 border-gold-200'
    case 'appointment':
      return 'bg-purple-50 border-purple-200'
    default:
      return 'bg-slate-50 border-slate-200'
  }
}

export function NotificationBell() {
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications)
  const [isOpen, setIsOpen] = useState(false)
  
  const unreadCount = notifications.filter(n => !n.read).length

  const markAsRead = (id: string) => {
    setNotifications(prev => 
      prev.map(n => n.id === id ? { ...n, read: true } : n)
    )
  }

  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(n => ({ ...n, read: true }))
    )
  }

  const removeNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id))
  }

  const formatTime = (date: Date) => {
    const now = new Date()
    const diff = now.getTime() - date.getTime()
    const hours = diff / (1000 * 60 * 60)
    
    if (hours < 1) {
      return 'Just now'
    } else if (hours < 24) {
      return `${Math.floor(hours)}h ago`
    } else {
      return date.toLocaleDateString()
    }
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all"
      >
        <Bell className="w-5 h-5" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
            {unreadCount > 9 ? '9+' : unreadCount}
          </span>
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Notification Panel */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 top-full mt-2 w-80 sm:w-96 bg-white rounded-2xl shadow-luxury border border-slate-200 z-50 max-w-[calc(100vw-2rem)]"
            >
              {/* Header */}
              <div className="p-4 border-b border-slate-200">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-slate-900">Notifications</h3>
                  <div className="flex items-center gap-2">
                    {unreadCount > 0 && (
                      <button
                        onClick={markAllAsRead}
                        className="text-xs text-gold-600 hover:text-gold-700 font-medium"
                      >
                        Mark all read
                      </button>
                    )}
                    <button
                      onClick={() => setIsOpen(false)}
                      className="p-1 hover:bg-slate-100 rounded-lg transition-all"
                    >
                      <X className="w-4 h-4 text-slate-500" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Notification List */}
              <div className="max-h-96 overflow-y-auto">
                {notifications.length === 0 ? (
                  <div className="p-8 text-center">
                    <Bell className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                    <p className="text-slate-500">No notifications</p>
                  </div>
                ) : (
                  <div className="p-2">
                    {notifications.map((notification) => (
                      <motion.div
                        key={notification.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className={`p-3 rounded-xl mb-2 border transition-all hover:shadow-sm ${
                          notification.read 
                            ? 'bg-white border-slate-200' 
                            : getNotificationBg(notification.type)
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className="mt-0.5">
                            {getNotificationIcon(notification.type)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2">
                              <div>
                                <p className="font-medium text-slate-900 text-sm">
                                  {notification.title}
                                </p>
                                <p className="text-slate-600 text-sm mt-1">
                                  {notification.message}
                                </p>
                                <p className="text-slate-400 text-xs mt-2 flex items-center gap-1">
                                  <Clock className="w-3 h-3" />
                                  {formatTime(notification.timestamp)}
                                </p>
                              </div>
                              <button
                                onClick={() => removeNotification(notification.id)}
                                className="p-1 hover:bg-slate-200 rounded-lg transition-all opacity-0 group-hover:opacity-100"
                              >
                                <X className="w-3 h-3 text-slate-500" />
                              </button>
                            </div>
                            {notification.action && (
                              <div className="mt-3">
                                <button
                                  onClick={() => {
                                    markAsRead(notification.id)
                                    if (notification.action?.onClick) {
                                      notification.action.onClick()
                                    }
                                  }}
                                  className="text-xs text-gold-600 hover:text-gold-700 font-medium"
                                >
                                  {notification.action.label}
                                </button>
                              </div>
                            )}
                          </div>
                          {!notification.read && (
                            <div className="w-2 h-2 bg-gold-500 rounded-full mt-2"></div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              {notifications.length > 0 && (
                <div className="p-3 border-t border-slate-200">
                  <button
                    className="w-full text-center text-sm text-slate-600 hover:text-slate-900 font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    View all notifications
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

// Toast Notifications
interface ToastNotification {
  id: string
  type: 'success' | 'error' | 'warning' | 'info'
  title: string
  message?: string
  duration?: number
}

export function useToast() {
  const [toasts, setToasts] = useState<ToastNotification[]>([])

  const addToast = (toast: Omit<ToastNotification, 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9)
    const newToast = { ...toast, id, duration: toast.duration || 5000 }
    
    setToasts(prev => [...prev, newToast])

    // Auto remove toast
    setTimeout(() => {
      removeToast(id)
    }, newToast.duration)

    return id
  }

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id))
  }

  return { toasts, addToast, removeToast }
}

export function ToastContainer({ toasts, removeToast }: { 
  toasts: ToastNotification[]
  removeToast: (id: string) => void 
}) {
  const getToastIcon = (type: string) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-success-500" />
      case 'error':
        return <AlertCircle className="w-5 h-5 text-red-500" />
      case 'warning':
        return <AlertCircle className="w-5 h-5 text-amber-500" />
      default:
        return <Info className="w-5 h-5 text-navy-500" />
    }
  }

  const getToastBg = (type: string) => {
    switch (type) {
      case 'success':
        return 'bg-success-50 border-success-200'
      case 'error':
        return 'bg-red-50 border-red-200'
      case 'warning':
        return 'bg-amber-50 border-amber-200'
      default:
        return 'bg-navy-50 border-navy-200'
    }
  }

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, x: 300, scale: 0.3 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 300, scale: 0.5 }}
            className={`p-4 rounded-xl border shadow-luxury ${getToastBg(toast.type)} max-w-sm`}
          >
            <div className="flex items-start gap-3">
              {getToastIcon(toast.type)}
              <div className="flex-1">
                <p className="font-medium text-slate-900 text-sm">{toast.title}</p>
                {toast.message && (
                  <p className="text-slate-600 text-sm mt-1">{toast.message}</p>
                )}
              </div>
              <button
                onClick={() => removeToast(toast.id)}
                className="p-1 hover:bg-white/50 rounded-lg transition-all"
              >
                <X className="w-4 h-4 text-slate-500" />
              </button>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}