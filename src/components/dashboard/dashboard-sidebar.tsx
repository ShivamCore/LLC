"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { calendlyConfig } from "@/data/calendly-config";
import { 
  BarChart3, 
  Target, 
  Users, 
  DollarSign, 
  Calendar, 
  MessageSquare, 
  FileText, 
  TrendingUp,
  Award,
  Zap
} from "lucide-react";
import { cn } from "@/lib/utils";

const sidebarItems = [
  {
    title: "Business Overview",
    items: [
      { href: "/dashboard", label: "Dashboard", icon: BarChart3 },
      { href: "/dashboard/analytics", label: "Performance", icon: TrendingUp },
      { href: "/dashboard/revenue", label: "Revenue", icon: DollarSign },
    ]
  },
  {
    title: "Patient Management",
    items: [
      { href: "/dashboard/appointments", label: "Appointments", icon: Calendar },
      { href: "/dashboard/patients", label: "Patient Database", icon: Users },
      { href: "/dashboard/messages", label: "Communications", icon: MessageSquare },
    ]
  },
  {
    title: "Marketing Results",
    items: [
      { href: "/dashboard/leads", label: "New Leads", icon: Target },
      { href: "/dashboard/campaigns", label: "Campaign Performance", icon: Award },
      { href: "/dashboard/reports", label: "Monthly Reports", icon: FileText },
    ]
  }
];

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:block w-80 gradient-luxury-section border-r border-gold-200 min-h-screen pt-20">
      <div className="p-8">
        {/* Elite Status Badge */}
        <div className="mb-8">
          <div className="ultra-luxury-card rounded-2xl p-6 text-center luxury-glow">
            <div className="w-16 h-16 mx-auto gradient-gold rounded-full flex items-center justify-center shadow-xl mb-4">
              <Zap className="w-8 h-8 text-charcoal-900" />
            </div>
            <h3 className="font-heading text-xl font-light text-charcoal-950 mb-2">
              Elite Status
            </h3>
            <p className="text-sm text-graphite-700 font-light">
              Premium Growth Package
            </p>
            <div className="mt-4 inline-flex items-center px-4 py-2 bg-gold-100 rounded-full">
              <span className="text-xs font-medium text-gold-800 uppercase tracking-widest">
                Active
              </span>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="space-y-8">
          {sidebarItems.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h4 className="text-sm font-medium text-graphite-600 uppercase tracking-widest mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.items.map((item) => {
                  const IconComponent = item.icon;
                  const isActive = pathname === item.href;
                  
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={cn(
                          "flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 group",
                          isActive
                            ? "bg-gold-100 text-gold-800 shadow-lg"
                            : "text-graphite-700 hover:text-charcoal-950 hover:bg-champagne-100"
                        )}
                      >
                        <IconComponent className={cn(
                          "w-5 h-5 transition-colors duration-300",
                          isActive ? "text-gold-600" : "text-graphite-500 group-hover:text-gold-600"
                        )} />
                        <span className="font-medium text-sm tracking-wide">
                          {item.label}
                        </span>
                        {isActive && (
                          <div className="ml-auto w-2 h-2 bg-gold-500 rounded-full"></div>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>

        {/* Quick Actions */}
        <div className="mt-12 pt-8 border-t border-gold-200">
          <h4 className="text-sm font-medium text-graphite-600 uppercase tracking-widest mb-4">
            Quick Actions
          </h4>
          <div className="space-y-3">
            <button
              onClick={() => {
                // Open Calendly for scheduling call
                window.open(calendlyConfig.privateConsultation, '_blank');
              }}
              className="flex items-center space-x-3 px-4 py-3 bg-gold-600 hover:bg-gold-500 text-charcoal-900 rounded-xl transition-all duration-300 group shadow-lg hover:shadow-xl w-full"
            >
              <Calendar className="w-5 h-5" />
              <span className="font-medium text-sm tracking-wide">Schedule Call</span>
            </button>
            <button
              onClick={() => {
                // Open emergency support or contact form
                window.open('mailto:hello@valenzamedia.com?subject=Emergency Support Request', '_blank');
              }}
              className="flex items-center space-x-3 px-4 py-3 bg-ivory-100 hover:bg-ivory-200 text-charcoal-900 rounded-xl transition-all duration-300 group shadow-lg hover:shadow-xl w-full"
            >
              <MessageSquare className="w-5 h-5" />
              <span className="font-medium text-sm tracking-wide">Emergency Support</span>
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
