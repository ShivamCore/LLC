"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { 
  User, 
  Bell, 
  Shield, 
  CreditCard, 
  Globe, 
  Save,
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Building
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");

  const tabs = [
    { id: "profile", label: "Profile", icon: User },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "security", label: "Security", icon: Shield },
    { id: "billing", label: "Billing", icon: CreditCard },
    { id: "preferences", label: "Preferences", icon: Globe },
  ];

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link
              href="/dashboard"
              className="text-charcoal-900 hover:text-gold-600 transition-colors duration-300"
            >
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <div>
              <h1 className="font-heading text-4xl font-light text-charcoal-950 mb-2">
                Settings
              </h1>
              <p className="text-xl text-graphite-700 font-light">
                Manage your account preferences and settings
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Settings Navigation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-1"
        >
          <div className="ultra-luxury-card rounded-2xl p-6 luxury-glow">
            <h3 className="font-heading text-xl font-light text-charcoal-950 mb-6">
              Settings
            </h3>
            <nav className="space-y-2">
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 text-left ${
                      activeTab === tab.id
                        ? "bg-gold-100 text-gold-800 shadow-lg"
                        : "text-graphite-700 hover:text-charcoal-950 hover:bg-champagne-100"
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span className="font-medium text-sm tracking-wide">
                      {tab.label}
                    </span>
                  </button>
                );
              })}
            </nav>
          </div>
        </motion.div>

        {/* Settings Content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-3"
        >
          <div className="ultra-luxury-card rounded-2xl p-8 luxury-glow">
            {activeTab === "profile" && (
              <div className="space-y-8">
                <div>
                  <h2 className="font-heading text-2xl font-light text-charcoal-950 mb-6">
                    Profile Information
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-charcoal-950 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        defaultValue="Dr. Sarah Johnson"
                        className="w-full px-4 py-3 rounded-xl border border-gold-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 transition-all duration-300 bg-ivory-50 text-charcoal-950"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-charcoal-950 mb-2">
                        Practice Name
                      </label>
                      <input
                        type="text"
                        defaultValue="Luxe Aesthetics"
                        className="w-full px-4 py-3 rounded-xl border border-gold-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 transition-all duration-300 bg-ivory-50 text-charcoal-950"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-charcoal-950 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        defaultValue="sarah@luxeaesthetics.com"
                        className="w-full px-4 py-3 rounded-xl border border-gold-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 transition-all duration-300 bg-ivory-50 text-charcoal-950"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-charcoal-950 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        defaultValue="+1 (555) 123-4567"
                        className="w-full px-4 py-3 rounded-xl border border-gold-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 transition-all duration-300 bg-ivory-50 text-charcoal-950"
                      />
                    </div>
                    
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-charcoal-950 mb-2">
                        Practice Address
                      </label>
                      <input
                        type="text"
                        defaultValue="123 Beverly Hills Blvd, Beverly Hills, CA 90210"
                        className="w-full px-4 py-3 rounded-xl border border-gold-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 transition-all duration-300 bg-ivory-50 text-charcoal-950"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "notifications" && (
              <div className="space-y-8">
                <div>
                  <h2 className="font-heading text-2xl font-light text-charcoal-950 mb-6">
                    Notification Preferences
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 bg-champagne-50 rounded-xl">
                      <div>
                        <h3 className="font-medium text-charcoal-950">Email Notifications</h3>
                        <p className="text-sm text-graphite-700">Receive updates via email</p>
                      </div>
                      <input
                        type="checkbox"
                        defaultChecked
                        className="w-5 h-5 text-gold-600 border-gold-300 rounded focus:ring-gold-500"
                      />
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-champagne-50 rounded-xl">
                      <div>
                        <h3 className="font-medium text-charcoal-950">SMS Alerts</h3>
                        <p className="text-sm text-graphite-700">Get urgent updates via SMS</p>
                      </div>
                      <input
                        type="checkbox"
                        defaultChecked
                        className="w-5 h-5 text-gold-600 border-gold-300 rounded focus:ring-gold-500"
                      />
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-champagne-50 rounded-xl">
                      <div>
                        <h3 className="font-medium text-charcoal-950">Performance Reports</h3>
                        <p className="text-sm text-graphite-700">Weekly performance summaries</p>
                      </div>
                      <input
                        type="checkbox"
                        defaultChecked
                        className="w-5 h-5 text-gold-600 border-gold-300 rounded focus:ring-gold-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "security" && (
              <div className="space-y-8">
                <div>
                  <h2 className="font-heading text-2xl font-light text-charcoal-950 mb-6">
                    Security Settings
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="p-6 bg-green-50 rounded-xl border border-green-200">
                      <div className="flex items-center space-x-3 mb-4">
                        <Shield className="w-6 h-6 text-green-600" />
                        <h3 className="font-medium text-charcoal-950">Two-Factor Authentication</h3>
                      </div>
                      <p className="text-sm text-graphite-700 mb-4">
                        Add an extra layer of security to your account
                      </p>
                      <Button className="bg-green-600 hover:bg-green-700 text-white">
                        Enable 2FA
                      </Button>
                    </div>
                    
                    <div className="p-6 bg-champagne-50 rounded-xl">
                      <h3 className="font-medium text-charcoal-950 mb-2">Change Password</h3>
                      <p className="text-sm text-graphite-700 mb-4">
                        Update your account password
                      </p>
                      <Button variant="outline" className="border-gold-300 text-gold-700 hover:bg-gold-50">
                        Change Password
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "billing" && (
              <div className="space-y-8">
                <div>
                  <h2 className="font-heading text-2xl font-light text-charcoal-950 mb-6">
                    Billing Information
                  </h2>
                  
                  <div className="p-6 bg-gold-50 rounded-xl border border-gold-200">
                    <div className="flex items-center space-x-3 mb-4">
                      <CreditCard className="w-6 h-6 text-gold-600" />
                      <h3 className="font-medium text-charcoal-950">Current Plan</h3>
                    </div>
                    <p className="text-2xl font-semibold text-charcoal-950 mb-2">AI Dominance Plan</p>
                    <p className="text-sm font-semibold text-charcoal-700 mb-4">$3,500/month</p>
                    <Button className="bg-gold-600 hover:bg-gold-700 text-white">
                      Manage Billing
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "preferences" && (
              <div className="space-y-8">
                <div>
                  <h2 className="font-heading text-2xl font-light text-charcoal-950 mb-6">
                    Preferences
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-charcoal-950 mb-2">
                        Time Zone
                      </label>
                      <select className="w-full px-4 py-3 rounded-xl border border-gold-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 transition-all duration-300 bg-ivory-50 text-charcoal-950">
                        <option>Pacific Time (PT)</option>
                        <option>Mountain Time (MT)</option>
                        <option>Central Time (CT)</option>
                        <option>Eastern Time (ET)</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-charcoal-950 mb-2">
                        Date Format
                      </label>
                      <select className="w-full px-4 py-3 rounded-xl border border-gold-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 transition-all duration-300 bg-ivory-50 text-charcoal-950">
                        <option>MM/DD/YYYY</option>
                        <option>DD/MM/YYYY</option>
                        <option>YYYY-MM-DD</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Save Button */}
            <div className="mt-8 pt-6 border-t border-gold-200">
              <Button className="btn-gold luxury-button text-lg px-8 py-4 rounded-xl shadow-xl font-medium tracking-wide">
                <Save className="w-5 h-5 mr-3" />
                Save Changes
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
