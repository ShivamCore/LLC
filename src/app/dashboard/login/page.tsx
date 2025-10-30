"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Crown, Eye, EyeOff, ArrowRight, Shield, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Clear any existing authentication data on page load
  useEffect(() => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login process
    if (email && password) {
      // Store authentication data
      localStorage.setItem('authToken', 'demo-token');
      localStorage.setItem('userData', JSON.stringify({
        name: 'Dr. Sarah Johnson',
        practice: 'Luxe Aesthetics',
        email: email
      }));
      // Redirect to dashboard
      window.location.href = '/dashboard';
    }
  };

  return (
    <div className="min-h-screen gradient-luxury-hero flex items-center justify-center p-4">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-gold-300 rounded-full mix-blend-multiply filter blur-3xl opacity-8 luxury-float"></div>
      <div className="absolute top-40 right-10 w-[500px] h-[500px] bg-champagne-300 rounded-full mix-blend-multiply filter blur-3xl opacity-6 luxury-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-20 left-1/3 w-[400px] h-[400px] bg-ivory-200 rounded-full mix-blend-multiply filter blur-3xl opacity-4 luxury-float" style={{animationDelay: '4s'}}></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 w-full max-w-md"
      >
        {/* Elite Login Card */}
        <div className="ultra-luxury-card rounded-3xl p-10 shadow-2xl luxury-glow">
          {/* Logo & Header */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 mx-auto gradient-charcoal rounded-2xl flex items-center justify-center shadow-2xl mb-6 luxury-glow">
              <Crown className="text-gold-400 w-10 h-10" />
            </div>
            <h1 className="font-heading text-3xl font-light text-charcoal-950 mb-2">
              Elite Portal Access
            </h1>
            <p className="text-graphite-700 font-light">
              Enter your credentials to access your exclusive dashboard
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-charcoal-950 mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gold-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 transition-all duration-300 bg-ivory-50 text-charcoal-950 placeholder-graphite-500"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-charcoal-950 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 pr-12 rounded-xl border border-gold-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 transition-all duration-300 bg-ivory-50 text-charcoal-950 placeholder-graphite-500"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-graphite-500 hover:text-gold-600 transition-colors duration-300"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-gold-600 border-gold-300 rounded focus:ring-gold-500"
                />
                <span className="ml-2 text-sm text-graphite-700">Remember me</span>
              </label>
              <Link
                href="/dashboard/forgot-password"
                className="text-sm text-gold-600 hover:text-gold-700 transition-colors duration-300"
              >
                Forgot password?
              </Link>
            </div>

            <Button
              type="submit"
              className="w-full btn-gold luxury-button text-lg py-4 rounded-xl shadow-2xl font-medium tracking-wide"
            >
              Access Elite Portal
              <ArrowRight className="w-5 h-5 ml-3" />
            </Button>
          </form>

          {/* Security Notice */}
          <div className="mt-8 pt-6 border-t border-gold-200">
            <div className="flex items-center space-x-3 p-4 bg-champagne-50 rounded-xl">
              <Shield className="w-5 h-5 text-gold-600" />
              <div>
                <p className="text-sm font-medium text-charcoal-950">Secure Access</p>
                <p className="text-xs text-graphite-700">
                  Your data is protected with enterprise-grade security
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Main Site */}
        <div className="text-center mt-8">
          <Link
            href="/"
            className="inline-flex items-center text-graphite-700 hover:text-gold-600 transition-colors duration-300"
          >
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Back to Main Site
          </Link>
        </div>
      </motion.div>
    </div>
  );
}