"use client";

import { motion } from "framer-motion";
import { 
  TrendingUp, 
  TrendingDown,
  Users, 
  DollarSign, 
  Target, 
  Calendar,
  ArrowUpRight,
  ArrowDownRight,
  BarChart3,
  PieChart,
  Activity,
  Award
} from "lucide-react";

const analyticsData = [
  {
    title: "Total Revenue",
    value: "$2,847,230",
    change: "+34.2%",
    changeType: "positive",
    icon: DollarSign,
    period: "vs last quarter"
  },
  {
    title: "New Clients",
    value: "1,247",
    change: "+28.7%",
    changeType: "positive",
    icon: Users,
    period: "this quarter"
  },
  {
    title: "Average ROI",
    value: "1,180%",
    change: "+15.3%",
    changeType: "positive",
    icon: TrendingUp,
    period: "across all campaigns"
  },
  {
    title: "Conversion Rate",
    value: "42.8%",
    change: "+8.9%",
    changeType: "positive",
    icon: Target,
    period: "lead to client"
  }
];

const campaignPerformance = [
  { name: "Meta Ads - Botox", spend: "$12,450", revenue: "$147,230", roi: "1,180%", status: "excellent" },
  { name: "Google Ads - Fillers", spend: "$8,920", revenue: "$89,450", roi: "1,002%", status: "excellent" },
  { name: "Instagram - Aesthetics", spend: "$6,780", revenue: "$67,890", roi: "1,001%", status: "excellent" },
  { name: "Retargeting - Premium", spend: "$4,230", revenue: "$52,340", roi: "1,237%", status: "excellent" }
];

const monthlyTrends = [
  { month: "Jan", revenue: 89, leads: 45, appointments: 78 },
  { month: "Feb", revenue: 95, leads: 52, appointments: 85 },
  { month: "Mar", revenue: 112, leads: 61, appointments: 98 },
  { month: "Apr", revenue: 127, leads: 68, appointments: 112 },
  { month: "May", revenue: 134, leads: 74, appointments: 125 },
  { month: "Jun", revenue: 142, leads: 81, appointments: 138 }
];

export default function AnalyticsPage() {
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
              Performance Analytics
            </h1>
            <p className="text-xl text-graphite-700 font-light">
              Comprehensive insights into your practice's growth
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 gradient-gold rounded-full flex items-center justify-center shadow-lg">
              <BarChart3 className="w-6 h-6 text-charcoal-900" />
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-charcoal-950">Real-time Data</p>
              <p className="text-xs text-gold-600">Updated 2 min ago</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Key Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {analyticsData.map((metric, index) => {
          const IconComponent = metric.icon;
          return (
            <div
              key={index}
              className="ultra-luxury-card rounded-2xl p-6 luxury-glow hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 gradient-gold rounded-xl flex items-center justify-center shadow-lg">
                  <IconComponent className="w-6 h-6 text-charcoal-900" />
                </div>
                <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${
                  metric.changeType === 'positive' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {metric.changeType === 'positive' ? (
                    <ArrowUpRight className="w-3 h-3" />
                  ) : (
                    <ArrowDownRight className="w-3 h-3" />
                  )}
                  <span>{metric.change}</span>
                </div>
              </div>
              <h3 className="text-3xl font-light text-charcoal-950 mb-1">
                {metric.value}
              </h3>
              <p className="text-sm text-graphite-700 font-light">
                {metric.title}
              </p>
              <p className="text-xs text-graphite-600 mt-1">
                {metric.period}
              </p>
            </div>
          );
        })}
      </motion.div>

      {/* Campaign Performance Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="ultra-luxury-card rounded-2xl p-8 luxury-glow"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-heading text-2xl font-light text-charcoal-950">
            Campaign Performance
          </h2>
          <Award className="w-6 h-6 text-gold-500" />
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gold-200">
                <th className="text-left py-4 px-2 text-sm font-medium text-graphite-700 uppercase tracking-widest">
                  Campaign
                </th>
                <th className="text-right py-4 px-2 text-sm font-medium text-graphite-700 uppercase tracking-widest">
                  Spend
                </th>
                <th className="text-right py-4 px-2 text-sm font-medium text-graphite-700 uppercase tracking-widest">
                  Revenue
                </th>
                <th className="text-right py-4 px-2 text-sm font-medium text-graphite-700 uppercase tracking-widest">
                  ROI
                </th>
                <th className="text-center py-4 px-2 text-sm font-medium text-graphite-700 uppercase tracking-widest">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {campaignPerformance.map((campaign, index) => (
                <tr key={index} className="border-b border-champagne-100 hover:bg-champagne-50 transition-colors duration-300">
                  <td className="py-4 px-2">
                    <div className="font-medium text-charcoal-950">{campaign.name}</div>
                  </td>
                  <td className="py-4 px-2 text-right font-medium text-charcoal-950">
                    {campaign.spend}
                  </td>
                  <td className="py-4 px-2 text-right font-medium text-green-700">
                    {campaign.revenue}
                  </td>
                  <td className="py-4 px-2 text-right font-medium text-gold-600">
                    {campaign.roi}
                  </td>
                  <td className="py-4 px-2 text-center">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      {campaign.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Monthly Trends Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        {/* Revenue Trend */}
        <div className="ultra-luxury-card rounded-2xl p-8 luxury-glow">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-heading text-xl font-light text-charcoal-950">
              Revenue Trend
            </h3>
            <TrendingUp className="w-5 h-5 text-gold-500" />
          </div>
          
          <div className="space-y-4">
            {monthlyTrends.map((data, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm text-graphite-700 w-12">{data.month}</span>
                <div className="flex-1 mx-4">
                  <div className="w-full bg-champagne-200 rounded-full h-2">
                    <div 
                      className="bg-gold-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${(data.revenue / 150) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <span className="text-sm font-medium text-charcoal-950 w-16 text-right">
                  ${data.revenue}k
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Lead Generation */}
        <div className="ultra-luxury-card rounded-2xl p-8 luxury-glow">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-heading text-xl font-light text-charcoal-950">
              Lead Generation
            </h3>
            <Users className="w-5 h-5 text-gold-500" />
          </div>
          
          <div className="space-y-4">
            {monthlyTrends.map((data, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm text-graphite-700 w-12">{data.month}</span>
                <div className="flex-1 mx-4">
                  <div className="w-full bg-champagne-200 rounded-full h-2">
                    <div 
                      className="bg-gold-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${(data.leads / 90) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <span className="text-sm font-medium text-charcoal-950 w-16 text-right">
                  {data.leads}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Performance Insights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="ultra-luxury-card rounded-2xl p-8 luxury-glow"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-heading text-2xl font-light text-charcoal-950">
            Performance Insights
          </h2>
          <Activity className="w-6 h-6 text-gold-500" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-green-50 rounded-xl">
            <div className="w-16 h-16 mx-auto gradient-gold rounded-full flex items-center justify-center shadow-lg mb-4">
              <TrendingUp className="w-8 h-8 text-charcoal-900" />
            </div>
            <h3 className="font-medium text-charcoal-950 mb-2">Top Performing</h3>
            <p className="text-2xl font-light text-green-600 mb-1">Meta Ads</p>
            <p className="text-xs text-graphite-600">1,180% ROI average</p>
          </div>
          
          <div className="text-center p-6 bg-blue-50 rounded-xl">
            <div className="w-16 h-16 mx-auto gradient-gold rounded-full flex items-center justify-center shadow-lg mb-4">
              <Target className="w-8 h-8 text-charcoal-900" />
            </div>
            <h3 className="font-medium text-charcoal-950 mb-2">Best Converting</h3>
            <p className="text-2xl font-light text-blue-600 mb-1">Botox Campaign</p>
            <p className="text-xs text-graphite-600">47% conversion rate</p>
          </div>
          
          <div className="text-center p-6 bg-purple-50 rounded-xl">
            <div className="w-16 h-16 mx-auto gradient-gold rounded-full flex items-center justify-center shadow-lg mb-4">
              <Calendar className="w-8 h-8 text-charcoal-900" />
            </div>
            <h3 className="font-medium text-charcoal-950 mb-2">Peak Performance</h3>
            <p className="text-2xl font-light text-purple-600 mb-1">June 2024</p>
            <p className="text-xs text-graphite-600">$142k revenue</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
