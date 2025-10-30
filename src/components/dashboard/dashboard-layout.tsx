"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart3,
  CreditCard,
  FileText,
  Bell,
  Settings,
  LogOut,
  Menu,
  X,
  Home,
  ChevronDown,
  User,
  Shield,
  HelpCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { mockClient } from "@/data/dashboard-data";
import { NotificationBell, useToast, ToastContainer } from "@/components/ui/notifications";

interface NavigationItem {
  name: string;
  href: string;
  icon: React.ElementType;
  badge?: number;
}

const navigation: NavigationItem[] = [
  { name: "Overview", href: "/dashboard", icon: Home },
  { name: "Campaigns", href: "/dashboard/campaigns", icon: BarChart3 },
  { name: "Invoices", href: "/dashboard/invoices", icon: CreditCard },
  { name: "Reports", href: "/dashboard/reports", icon: FileText },
  { 
    name: "Notifications", 
    href: "/dashboard/notifications", 
    icon: Bell,
    badge: mockClient.notifications.filter(n => !n.read).length
  },
];

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const { toasts, addToast, removeToast } = useToast();

  // Check authentication
  useEffect(() => {
    const auth = localStorage.getItem("dashboard-auth");
    if (!auth) {
      router.push("/dashboard/login");
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("dashboard-auth");
    router.push("/dashboard/login");
  };

  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 via-neutral-50 to-lavender-50">
      {/* Mobile sidebar overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={closeSidebar}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.div
        initial={{ x: -320 }}
        animate={{ x: sidebarOpen ? 0 : -320 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed inset-y-0 left-0 w-80 sm:w-72 bg-white shadow-premium border-r border-neutral-200 z-50 lg:translate-x-0 lg:static lg:inset-0 lg:w-64"
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-neutral-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl gradient-gold flex items-center justify-center shadow-glow-gold">
                <span className="text-white font-bold text-xl font-heading">G</span>
              </div>
              <div>
                <h1 className="font-heading text-lg font-bold text-neutral-950">Valenza Media</h1>
                <p className="text-xs font-medium text-gold-700">Client Portal</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={closeSidebar}
              className="lg:hidden"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Client Info */}
          <div className="p-6 border-b border-neutral-200">
            <Card className="bg-gradient-to-br from-lavender-50 to-cream-50 border-lavender-200 p-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-lavender-200 flex items-center justify-center">
                  <User className="w-6 h-6 text-lavender-700" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-neutral-950">{mockClient.name}</h3>
                  <p className="text-sm text-neutral-700">{mockClient.medspacName}</p>
                  <div className="flex items-center mt-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                    <span className="text-xs font-medium text-green-700">
                      {mockClient.subscription.plan}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6">
            <ul className="space-y-2">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={closeSidebar}
                      className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 group ${
                        isActive
                          ? "bg-gold-100 text-gold-800 shadow-soft"
                          : "text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900"
                      }`}
                    >
                      <item.icon
                        className={`w-5 h-5 mr-3 ${
                          isActive ? "text-gold-600" : "text-neutral-500 group-hover:text-neutral-700"
                        }`}
                      />
                      {item.name}
                      {item.badge && item.badge > 0 && (
                        <span className="ml-auto bg-red-500 text-white text-xs rounded-full px-2 py-0.5 min-w-[20px] text-center">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Bottom Actions */}
          <div className="p-4 border-t border-neutral-200 space-y-2">
            <Button
              variant="ghost"
              className="w-full justify-start text-neutral-700 hover:text-neutral-900"
            >
              <Settings className="w-5 h-5 mr-3" />
              Settings
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-neutral-700 hover:text-neutral-900"
            >
              <HelpCircle className="w-5 h-5 mr-3" />
              Help & Support
            </Button>
            <Button
              variant="ghost"
              onClick={handleLogout}
              className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
            >
              <LogOut className="w-5 h-5 mr-3" />
              Sign Out
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="lg:pl-64">
        {/* Top Header */}
        <header className="bg-white/95 backdrop-blur-sm border-b border-neutral-200 shadow-soft sticky top-0 z-30">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden"
              >
                <Menu className="w-6 h-6" />
              </Button>

              {/* Page Title */}
              <div className="flex-1 lg:flex-none">
                <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-neutral-950 font-heading">
                  {pathname === "/dashboard" && "Dashboard Overview"}
                  {pathname === "/dashboard/campaigns" && "Campaign Performance"}
                  {pathname === "/dashboard/invoices" && "Invoices & Billing"}
                  {pathname === "/dashboard/reports" && "Performance Reports"}
                  {pathname === "/dashboard/notifications" && "Notifications"}
                </h1>
              </div>

              {/* Notifications & User Menu */}
              <div className="flex items-center gap-2">
                <NotificationBell />
                <div className="relative">
                  <Button
                    variant="ghost"
                    onClick={() => setUserMenuOpen(!userMenuOpen)}
                    className="flex items-center space-x-2 px-3"
                  >
                  <div className="w-8 h-8 rounded-full bg-lavender-200 flex items-center justify-center">
                    <User className="w-4 h-4 text-lavender-700" />
                  </div>
                  <span className="hidden sm:block text-sm font-medium text-neutral-700">
                    {mockClient.name.split(' ')[0]}
                  </span>
                  <ChevronDown className="w-4 h-4 text-neutral-500" />
                </Button>

                {/* User Dropdown */}
                <AnimatePresence>
                  {userMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-premium border border-neutral-200 z-50"
                    >
                      <div className="p-4 border-b border-neutral-200">
                        <p className="text-sm font-medium text-neutral-950">{mockClient.name}</p>
                        <p className="text-sm text-neutral-600">{mockClient.email}</p>
                      </div>
                      <div className="py-2">
                        <a
                          href="#"
                          className="flex items-center px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50"
                        >
                          <User className="w-4 h-4 mr-3" />
                          Account Settings
                        </a>
                        <a
                          href="#"
                          className="flex items-center px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50"
                        >
                          <Shield className="w-4 h-4 mr-3" />
                          Privacy & Security
                        </a>
                        <button
                          onClick={handleLogout}
                          className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                        >
                          <LogOut className="w-4 h-4 mr-3" />
                          Sign Out
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1">
          <div className="px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </div>
        </main>
      </div>
      
      {/* Toast Notifications */}
      <ToastContainer toasts={toasts} removeToast={removeToast} />
    </div>
  );
}
