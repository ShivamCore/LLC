"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { 
  DollarSign, 
  TrendingUp, 
  Calendar,
  Download,
  Filter,
  ArrowUp,
  ArrowDown,
  PieChart,
  BarChart3,
  Target,
  Award,
  Eye
} from "lucide-react";
import { Button } from "@/components/ui/button";

const revenueData = [
  {
    service: "Botox Treatments",
    revenue: "$24,600",
    clients: 18,
    avgValue: "$1,367",
    growth: "+23%",
    trend: "up"
  },
  {
    service: "Dermal Fillers",
    revenue: "$18,400",
    clients: 12,
    avgValue: "$1,533",
    growth: "+18%",
    trend: "up"
  },
  {
    service: "Laser Treatments",
    revenue: "$15,200",
    clients: 8,
    avgValue: "$1,900",
    growth: "+15%",
    trend: "up"
  },
  {
    service: "Chemical Peels",
    revenue: "$8,900",
    clients: 14,
    avgValue: "$636",
    growth: "+8%",
    trend: "up"
  }
];

const monthlyRevenue = [
  { month: "Jan", revenue: 42000, clients: 28, avgValue: 1500 },
  { month: "Feb", revenue: 48000, clients: 32, avgValue: 1500 },
  { month: "Mar", revenue: 52000, clients: 35, avgValue: 1486 },
  { month: "Apr", revenue: 61000, clients: 38, avgValue: 1605 },
  { month: "May", revenue: 68000, clients: 42, avgValue: 1619 },
  { month: "Jun", revenue: 72000, clients: 45, avgValue: 1600 }
];

export default function RevenuePage() {
  const [timeframe, setTimeframe] = useState("6months");
  const [viewType, setViewType] = useState("revenue");

  const totalRevenue = revenueData.reduce((sum, item) => sum + parseInt(item.revenue.replace('$', '').replace(',', '')), 0);
  const totalClients = revenueData.reduce((sum, item) => sum + item.clients, 0);
  const avgClientValue = (totalRevenue / totalClients).toFixed(0);

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
          <div>
            <h1 className="font-heading text-4xl font-light text-charcoal-950 mb-2">
              Revenue Analytics
            </h1>
            <p className="text-xl text-graphite-700 font-light">
              Track your revenue performance and growth metrics
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 gradient-gold rounded-full flex items-center justify-center shadow-lg">
              <DollarSign className="w-6 h-6 text-charcoal-900" />
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-charcoal-950">Total Revenue</p>
              <p className="text-xs text-gold-600">${totalRevenue.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Key Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-6"
      >
        <div className="ultra-luxury-card rounded-2xl p-6 luxury-glow">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 gradient-gold rounded-xl flex items-center justify-center shadow-lg">
              <DollarSign className="w-6 h-6 text-charcoal-900" />
            </div>
            <ArrowUp className="w-5 h-5 text-green-600" />
          </div>
          <h3 className="text-3xl font-light text-charcoal-950 mb-1">${totalRevenue.toLocaleString()}</h3>
          <p className="text-sm text-graphite-700 font-light">Total Revenue</p>
          <p className="text-xs text-green-600 mt-1">+22% this month</p>
        </div>

        <div className="ultra-luxury-card rounded-2xl p-6 luxury-glow">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 gradient-gold rounded-xl flex items-center justify-center shadow-lg">
              <TrendingUp className="w-6 h-6 text-charcoal-900" />
            </div>
            <ArrowUp className="w-5 h-5 text-green-600" />
          </div>
          <h3 className="text-3xl font-light text-charcoal-950 mb-1">{totalClients}</h3>
          <p className="text-sm text-graphite-700 font-light">Total Clients</p>
          <p className="text-xs text-green-600 mt-1">+18% this month</p>
        </div>

        <div className="ultra-luxury-card rounded-2xl p-6 luxury-glow">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 gradient-gold rounded-xl flex items-center justify-center shadow-lg">
              <Target className="w-6 h-6 text-charcoal-900" />
            </div>
            <ArrowUp className="w-5 h-5 text-green-600" />
          </div>
          <h3 className="text-3xl font-light text-charcoal-950 mb-1">${avgClientValue}</h3>
          <p className="text-sm text-graphite-700 font-light">Avg Client Value</p>
          <p className="text-xs text-green-600 mt-1">+12% this month</p>
        </div>

        <div className="ultra-luxury-card rounded-2xl p-6 luxury-glow">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 gradient-gold rounded-xl flex items-center justify-center shadow-lg">
              <Award className="w-6 h-6 text-charcoal-900" />
            </div>
            <ArrowUp className="w-5 h-5 text-green-600" />
          </div>
          <h3 className="text-3xl font-light text-charcoal-950 mb-1">$12,400</h3>
          <p className="text-sm text-graphite-700 font-light">Monthly Growth</p>
          <p className="text-xs text-green-600 mt-1">+15% this month</p>
        </div>
      </motion.div>

      {/* Revenue by Service */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="ultra-luxury-card rounded-2xl p-8 luxury-glow"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-heading text-2xl font-light text-charcoal-950">
            Revenue by Service
          </h2>
          <div className="flex items-center space-x-3">
            <select
              value={timeframe}
              onChange={(e) => setTimeframe(e.target.value)}
              className="px-4 py-2 border border-gold-200 rounded-xl focus:border-gold-500 focus:ring-2 focus:ring-gold-200 transition-all duration-300 bg-ivory-50 text-charcoal-950"
            >
              <option value="30days">Last 30 Days</option>
              <option value="3months">Last 3 Months</option>
              <option value="6months">Last 6 Months</option>
              <option value="1year">Last Year</option>
            </select>
            <Button className="btn-gold luxury-button">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gold-200">
                <th className="text-left py-4 px-2 text-sm font-medium text-graphite-700 uppercase tracking-widest">
                  Service
                </th>
                <th className="text-right py-4 px-2 text-sm font-medium text-graphite-700 uppercase tracking-widest">
                  Revenue
                </th>
                <th className="text-center py-4 px-2 text-sm font-medium text-graphite-700 uppercase tracking-widest">
                  Clients
                </th>
                <th className="text-right py-4 px-2 text-sm font-medium text-graphite-700 uppercase tracking-widest">
                  Avg Value
                </th>
                <th className="text-center py-4 px-2 text-sm font-medium text-graphite-700 uppercase tracking-widest">
                  Growth
                </th>
                <th className="text-center py-4 px-2 text-sm font-medium text-graphite-700 uppercase tracking-widest">
                  Trend
                </th>
              </tr>
            </thead>
            <tbody>
              {revenueData.map((service, index) => (
                <tr key={index} className="border-b border-champagne-100 hover:bg-champagne-50 transition-colors duration-300">
                  <td className="py-4 px-2">
                    <div className="font-medium text-charcoal-950">{service.service}</div>
                  </td>
                  <td className="py-4 px-2 text-right font-medium text-charcoal-950">
                    {service.revenue}
                  </td>
                  <td className="py-4 px-2 text-center font-medium text-charcoal-950">
                    {service.clients}
                  </td>
                  <td className="py-4 px-2 text-right font-medium text-charcoal-950">
                    {service.avgValue}
                  </td>
                  <td className="py-4 px-2 text-center">
                    <span className="text-green-600 font-medium">{service.growth}</span>
                  </td>
                  <td className="py-4 px-2 text-center">
                    {service.trend === "up" ? (
                      <ArrowUp className="w-4 h-4 text-green-600 mx-auto" />
                    ) : (
                      <ArrowDown className="w-4 h-4 text-red-600 mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Monthly Trends */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        <div className="ultra-luxury-card rounded-2xl p-8 luxury-glow">
          <h3 className="font-heading text-xl font-light text-charcoal-950 mb-6">
            Monthly Revenue Trend
          </h3>
          <div className="space-y-4">
            {monthlyRevenue.map((month, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="text-sm font-medium text-charcoal-950">{month.month}</div>
                <div className="flex items-center space-x-6">
                  <div className="text-right">
                    <div className="text-sm text-charcoal-950 font-medium">${month.revenue.toLocaleString()}</div>
                    <div className="text-xs text-graphite-700">{month.clients} clients</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gold-600">${month.avgValue} avg</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="ultra-luxury-card rounded-2xl p-8 luxury-glow">
          <h3 className="font-heading text-xl font-light text-charcoal-950 mb-6">
            Revenue Insights
          </h3>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-sm text-graphite-700">Best Performing Service</span>
              <span className="text-lg font-medium text-charcoal-950">Botox Treatments</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-graphite-700">Revenue Growth Rate</span>
              <span className="text-lg font-medium text-green-600">+22%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-graphite-700">Client Retention Rate</span>
              <span className="text-lg font-medium text-charcoal-950">87%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-graphite-700">Repeat Client Revenue</span>
              <span className="text-lg font-medium text-charcoal-950">$18,400</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
