"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail, Shield } from "lucide-react";
import Link from "next/link";

export default function DashboardForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-luxury-hero flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="ultra-luxury-card rounded-3xl p-12 max-w-md w-full text-center luxury-glow"
        >
          <div className="w-20 h-20 gradient-gold rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
            <Mail className="w-10 h-10 text-charcoal-900" />
          </div>
          
          <h1 className="font-heading text-3xl font-light text-charcoal-950 mb-4">
            Check Your Email
          </h1>
          
          <p className="text-graphite-700 mb-8">
            We've sent a password reset link to <strong>{email}</strong>. 
            Please check your email and follow the instructions to reset your password.
          </p>
          
          <div className="space-y-4">
            <Button 
              onClick={() => setIsSubmitted(false)}
              className="btn-gold luxury-button w-full"
            >
              Try Different Email
            </Button>
            
            <Link href="/dashboard/login">
              <Button variant="outline" className="btn-outline-gold w-full">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Login
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-luxury-hero flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="ultra-luxury-card rounded-3xl p-12 max-w-md w-full luxury-glow"
      >
        <div className="text-center mb-8">
          <div className="w-20 h-20 gradient-gold rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Shield className="w-10 h-10 text-charcoal-900" />
          </div>
          
          <h1 className="font-heading text-3xl font-light text-charcoal-950 mb-4">
            Forgot Password?
          </h1>
          
          <p className="text-graphite-700">
            No worries! Enter your email address and we'll send you a link to reset your password.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-charcoal-950 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gold-200 rounded-xl focus:border-gold-500 focus:ring-2 focus:ring-gold-200 transition-all duration-300 bg-ivory-50 text-charcoal-950"
              placeholder="Enter your email address"
            />
          </div>

          <Button 
            type="submit" 
            disabled={isLoading}
            className="btn-gold luxury-button w-full"
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-charcoal-900 border-t-transparent rounded-full animate-spin mr-2"></div>
                Sending...
              </div>
            ) : (
              <>
                <Mail className="w-4 h-4 mr-2" />
                Send Reset Link
              </>
            )}
          </Button>
        </form>

        <div className="mt-8 text-center">
          <Link href="/dashboard/login">
            <Button variant="ghost" className="text-gold-600 hover:text-gold-700">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Login
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

