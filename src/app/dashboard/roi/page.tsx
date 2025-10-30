"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { 
  TrendingUp, 
  DollarSign, 
  Target,
  Award,
  BarChart3,
  PieChart,
  Calendar,
  Download,
  Filter,
  ArrowUp,
  ArrowDown,
  Minus,
  Eye,
  RefreshCw
} from "lucide-react";
import { Button } from "@/components/ui/button";

const roiData = [
  {
    campaign: "Botox Premium",
    spend: "$2,400",
    revenue: "$18,600",
    roi: "675%",
    leads: 23,
    conversions: 8,
    status: "excellent",
    trend: "up"
  },
  {
    campaign: "Fillers Elite",
    spend: "$1,800",
    revenue: "$12,400",
    roi: "589%",
    leads: 18,
    conversions: 6,
    status: "excellent",
    trend: "up"
  },
  {
    campaign: "Retargeting",
    spend: "$950",
    revenue: "$4,200",
    roi: "342%",
    leads: 12,
    conversions: 3,
    status: "good",
    trend: "up"
  },
  {
    campaign: "New Client Acquisition",
    spend: "$3,200",
    revenue: "$8,900",
    roi: "178%",
    leads: 31,
    conversions: 5,
    status: "good",
    trend: "down"
  }
];

const monthlyData = [
  { month: "Jan", spend: 8500, revenue: 42000, roi: 394 },
  { month: "Feb", spend: 9200, revenue: 48000, roi: 422 },
  { month: "Mar", spend: 10800, revenue: 52000, roi: 381 },
  { month: "Apr", spend: 12100, revenue: 61000, roi: 404 },
  { month: "May", spend: 13500, revenue: 68000, roi: 404 },
  { month: "Jun", spend: 14200, revenue: 72000, roi: 407 }
];

export default function ROIPage() {
  const [timeframe, setTimeframe] = useState("6months");
  const [selectedCampaign, setSelectedCampaign] = useState("all");

  const totalSpend = roiData.reduce((sum, item) => sum + parseInt(item.spend.replace('$', '').replace(',', '')), 0);
  const totalRevenue = roiData.reduce((sum, item) => sum + parseInt(item.revenue.replace('$', '').replace(',', '')), 0);
  const overallROI = ((totalRevenue - totalSpend) / totalSpend * 100).toFixed(0);

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
              ROI Analysis
            </h1>
            <p className="text-xl text-graphite-700 font-light">
              Track your return on investment across all campaigns
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 gradient-gold rounded-full flex items-center justify-center shadow-lg">
              <Award className="w-6 h-6 text-charcoal-900" />
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-charcoal-950">Overall ROI</p>
              <p className="text-xs text-gold-600">{overallROI}% return</p>
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
          <p className="text-xs text-green-600 mt-1">+18% this month</p>
        </div>

        <div className="ultra-luxury-card rounded-2xl p-6 luxury-glow">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 gradient-charcoal rounded-xl flex items-center justify-center shadow-lg">
              <Target className="w-6 h-6 text-gold-400" />
            </div>
            <ArrowDown className="w-5 h-5 text-red-600" />
          </div>
          <h3 className="text-3xl font-light text-charcoal-950 mb-1">${totalSpend.toLocaleString()}</h3>
          <p className="text-sm text-graphite-700 font-light">Total Spend</p>
          <p className="text-xs text-red-600 mt-1">+5% this month</p>
        </div>

        <div className="ultra-luxury-card rounded-2xl p-6 luxury-glow">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 gradient-gold rounded-xl flex items-center justify-center shadow-lg">
              <TrendingUp className="w-6 h-6 text-charcoal-900" />
            </div>
            <ArrowUp className="w-5 h-5 text-green-600" />
          </div>
          <h3 className="text-3xl font-light text-charcoal-950 mb-1">{overallROI}%</h3>
          <p className="text-sm text-graphite-700 font-light">Overall ROI</p>
          <p className="text-xs text-green-600 mt-1">+12% this month</p>
        </div>

        <div className="ultra-luxury-card rounded-2xl p-6 luxury-glow">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 gradient-gold rounded-xl flex items-center justify-center shadow-lg">
              <BarChart3 className="w-6 h-6 text-charcoal-900" />
            </div>
            <ArrowUp className="w-5 h-5 text-green-600" />
          </div>
          <h3 className="text-3xl font-light text-charcoal-950 mb-1">${(totalRevenue - totalSpend).toLocaleString()}</h3>
          <p className="text-sm text-graphite-700 font-light">Net Profit</p>
          <p className="text-xs text-green-600 mt-1">+22% this month</p>
        </div>
      </motion.div>

      {/* Campaign Performance */}
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
                  Leads
                </th>
                <th className="text-center py-4 px-2 text-sm font-medium text-graphite-700 uppercase tracking-widest">
                  Conversions
                </th>
                <th className="text-center py-4 px-2 text-sm font-medium text-graphite-700 uppercase tracking-widest">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {roiData.map((campaign, index) => (
                <tr key={index} className="border-b border-champagne-100 hover:bg-champagne-50 transition-colors duration-300">
                  <td className="py-4 px-2">
                    <div className="font-medium text-charcoal-950">{campaign.campaign}</div>
                  </td>
                  <td className="py-4 px-2 text-right font-medium text-charcoal-950">
                    {campaign.spend}
                  </td>
                  <td className="py-4 px-2 text-right font-medium text-charcoal-950">
                    {campaign.revenue}
                  </td>
                  <td className="py-4 px-2 text-right">
                    <div className="flex items-center justify-end space-x-2">
                      <span className="font-medium text-charcoal-950">{campaign.roi}</span>
                      {campaign.trend === "up" ? (
                        <ArrowUp className="w-4 h-4 text-green-600" />
                      ) : campaign.trend === "down" ? (
                        <ArrowDown className="w-4 h-4 text-red-600" />
                      ) : (
                        <Minus className="w-4 h-4 text-graphite-500" />
                      )}
                    </div>
                  </td>
                  <td className="py-4 px-2 text-center font-medium text-charcoal-950">
                    {campaign.leads}
                  </td>
                  <td className="py-4 px-2 text-center font-medium text-charcoal-950">
                    {campaign.conversions}
                  </td>
                  <td className="py-4 px-2 text-center">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      campaign.status === 'excellent' ? 'bg-green-100 text-green-800' :
                      campaign.status === 'good' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {campaign.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Monthly Trend Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        <div className="ultra-luxury-card rounded-2xl p-8 luxury-glow">
          <h3 className="font-heading text-xl font-light text-charcoal-950 mb-6">
            Revenue vs Spend Trend
          </h3>
          <div className="space-y-4">
            {monthlyData.map((month, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="text-sm font-medium text-charcoal-950">{month.month}</div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <div className="text-sm text-graphite-700">Spend: ${month.spend.toLocaleString()}</div>
                    <div className="text-sm text-charcoal-950 font-medium">Revenue: ${month.revenue.toLocaleString()}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-gold-600">{month.roi}% ROI</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="ultra-luxury-card rounded-2xl p-8 luxury-glow">
          <h3 className="font-heading text-xl font-light text-charcoal-950 mb-6">
            ROI Performance
          </h3>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-sm text-graphite-700">Average ROI</span>
              <span className="text-2xl font-light text-charcoal-950">412%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-graphite-700">Best Performing Campaign</span>
              <span className="text-lg font-medium text-charcoal-950">Botox Premium</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-graphite-700">ROI Growth</span>
              <span className="text-lg font-medium text-green-600">+18%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-graphite-700">Cost Per Lead</span>
              <span className="text-lg font-medium text-charcoal-950">$89</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

