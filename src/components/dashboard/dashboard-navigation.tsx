"use client";

import Link from "next/link";
import { useState } from "react";
import { Crown, Bell, User, Settings, LogOut, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function DashboardNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full glass-effect border-b border-gold-300 shadow-2xl z-50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Elite Logo */}
          <Link href="/dashboard" className="flex items-center space-x-4 group">
            <div className="w-12 h-12 gradient-charcoal rounded-xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-500 luxury-glow">
              <Crown className="text-gold-400 w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-2xl font-light text-charcoal-950 group-hover:text-gold-600 transition-colors duration-500 tracking-wide">
                Elite Portal
              </span>
              <span className="text-xs font-medium text-gold-600 uppercase tracking-widest">
                Valenza Media
              </span>
            </div>
          </Link>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Notifications */}
            <Button
              variant="ghost"
              size="sm"
              className="relative text-charcoal-900 hover:text-gold-600 p-3 rounded-xl transition-all duration-300 hover:bg-champagne-100"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-gold-500 rounded-full"></span>
            </Button>

            {/* User Menu */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 gradient-gold rounded-full flex items-center justify-center shadow-lg">
                <User className="w-5 h-5 text-charcoal-900" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-charcoal-950">Dr. Sarah Johnson</span>
                <span className="text-xs text-graphite-600">Luxe Aesthetics</span>
              </div>
            </div>

            {/* Settings */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                // Redirect to settings page
                window.location.href = '/dashboard/settings';
              }}
              className="text-charcoal-900 hover:text-gold-600 p-3 rounded-xl transition-all duration-300 hover:bg-champagne-100"
            >
              <Settings className="w-5 h-5" />
            </Button>

            {/* Logout */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                // Clear any stored authentication data
                localStorage.removeItem('authToken');
                localStorage.removeItem('userData');
                // Redirect to login page
                window.location.href = '/login';
              }}
              className="text-charcoal-900 hover:text-red-600 p-3 rounded-xl transition-all duration-300 hover:bg-red-50"
            >
              <LogOut className="w-5 h-5" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-charcoal-900 hover:text-gold-600 p-3 rounded-xl transition-all duration-300 hover:bg-champagne-100"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden transition-all duration-300 ease-in-out glass-effect border-t border-gold-300",
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          )}
        >
          <div className="py-6 space-y-4 px-6">
            <div className="flex items-center space-x-3 pb-4 border-b border-gold-300">
              <div className="w-10 h-10 gradient-gold rounded-full flex items-center justify-center shadow-lg">
                <User className="w-5 h-5 text-charcoal-900" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-charcoal-950">Dr. Sarah Johnson</span>
                <span className="text-xs text-graphite-600">Luxe Aesthetics</span>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="flex-1 text-charcoal-900 hover:text-gold-600 py-3 rounded-xl hover:bg-champagne-100"
              >
                <Bell className="w-5 h-5 mr-2" />
                Notifications
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  // Redirect to settings page
                  window.location.href = '/dashboard/settings';
                }}
                className="flex-1 text-charcoal-900 hover:text-gold-600 py-3 rounded-xl hover:bg-champagne-100"
              >
                <Settings className="w-5 h-5 mr-2" />
                Settings
              </Button>
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                // Clear any stored authentication data
                localStorage.removeItem('authToken');
                localStorage.removeItem('userData');
                // Redirect to login page
                window.location.href = '/login';
              }}
              className="w-full text-charcoal-900 hover:text-red-600 py-3 rounded-xl hover:bg-red-50"
            >
              <LogOut className="w-5 h-5 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
