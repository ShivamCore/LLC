"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Target, 
  TrendingUp, 
  DollarSign,
  Users,
  Calendar,
  Download,
  Eye,
  BarChart3,
  Award,
  ArrowUp,
  ArrowDown,
  Minus,
  Filter,
  RefreshCw,
  Search,
  Settings
} from "lucide-react";
import { Button } from "@/components/ui/button";

const campaigns = [
  {
    id: 1,
    name: "Botox Premium Campaign",
    platform: "Meta Ads",
    status: "active",
    budget: "$2,400",
    spent: "$1,890",
    leads: 23,
    appointments: 8,
    revenue: "$18,600",
    roi: "675%",
    cpl: "$82",
    startDate: "2024-01-01",
    endDate: "2024-01-31",
    trend: "up"
  },
  {
    id: 2,
    name: "Fillers Elite Campaign",
    platform: "Google Ads",
    status: "active",
    budget: "$1,800",
    spent: "$1,420",
    leads: 18,
    appointments: 6,
    revenue: "$12,400",
    roi: "589%",
    cpl: "$79",
    startDate: "2024-01-05",
    endDate: "2024-01-31",
    trend: "up"
  },
  {
    id: 3,
    name: "Retargeting Campaign",
    platform: "Meta Ads",
    status: "paused",
    budget: "$950",
    spent: "$650",
    leads: 12,
    appointments: 3,
    revenue: "$4,200",
    roi: "342%",
    cpl: "$54",
    startDate: "2024-01-10",
    endDate: "2024-01-25",
    trend: "down"
  },
  {
    id: 4,
    name: "New Client Acquisition",
    platform: "Google Ads",
    status: "active",
    budget: "$3,200",
    spent: "$2,100",
    leads: 31,
    appointments: 5,
    revenue: "$8,900",
    roi: "178%",
    cpl: "$68",
    startDate: "2024-01-15",
    endDate: "2024-02-15",
    trend: "up"
  }
];

const statusColors = {
  active: "bg-green-100 text-green-800",
  paused: "bg-yellow-100 text-yellow-800",
  completed: "bg-blue-100 text-blue-800",
  draft: "bg-gray-100 text-gray-800"
};

export default function CampaignsPage() {
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterPlatform, setFilterPlatform] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCampaigns = campaigns.filter(campaign => {
    const matchesStatus = filterStatus === "all" || campaign.status === filterStatus;
    const matchesPlatform = filterPlatform === "all" || campaign.platform === filterPlatform;
    const matchesSearch = campaign.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesPlatform && matchesSearch;
  });

  const totalSpent = campaigns.reduce((sum, campaign) => sum + parseInt(campaign.spent.replace('$', '').replace(',', '')), 0);
  const totalRevenue = campaigns.reduce((sum, campaign) => sum + parseInt(campaign.revenue.replace('$', '').replace(',', '')), 0);
  const overallROI = ((totalRevenue - totalSpent) / totalSpent * 100).toFixed(0);

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
              Campaign Performance
            </h1>
            <p className="text-xl text-graphite-700 font-light">
              Track your marketing campaigns and their results
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 gradient-gold rounded-full flex items-center justify-center shadow-lg">
              <Target className="w-6 h-6 text-charcoal-900" />
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
          <p className="text-xs text-green-600 mt-1">+22% this month</p>
        </div>

        <div className="ultra-luxury-card rounded-2xl p-6 luxury-glow">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 gradient-gold rounded-xl flex items-center justify-center shadow-lg">
              <Target className="w-6 h-6 text-charcoal-900" />
            </div>
            <ArrowDown className="w-5 h-5 text-red-600" />
          </div>
          <h3 className="text-3xl font-light text-charcoal-950 mb-1">${totalSpent.toLocaleString()}</h3>
          <p className="text-sm text-graphite-700 font-light">Total Spent</p>
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
              <Users className="w-6 h-6 text-charcoal-900" />
            </div>
            <ArrowUp className="w-5 h-5 text-green-600" />
          </div>
          <h3 className="text-3xl font-light text-charcoal-950 mb-1">84</h3>
          <p className="text-sm text-graphite-700 font-light">Total Leads</p>
          <p className="text-xs text-green-600 mt-1">+18% this month</p>
        </div>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="ultra-luxury-card rounded-2xl p-6 luxury-glow"
      >
        <h3 className="text-xl font-semibold text-charcoal-950 mb-6">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <button className="flex items-center space-x-3 p-4 rounded-xl border border-gold-200 hover:border-gold-400 hover:bg-gold-50 transition-all duration-300 group">
            <div className="w-10 h-10 gradient-gold rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Target className="w-5 h-5 text-charcoal-900" />
            </div>
            <div className="text-left">
              <p className="font-semibold text-charcoal-950">Create Campaign</p>
              <p className="text-sm text-graphite-600">Start new ad campaign</p>
            </div>
          </button>

          <button className="flex items-center space-x-3 p-4 rounded-xl border border-gold-200 hover:border-gold-400 hover:bg-gold-50 transition-all duration-300 group">
            <div className="w-10 h-10 gradient-gold rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <BarChart3 className="w-5 h-5 text-charcoal-900" />
            </div>
            <div className="text-left">
              <p className="font-semibold text-charcoal-950">View Analytics</p>
              <p className="text-sm text-graphite-600">Detailed performance</p>
            </div>
          </button>

          <button className="flex items-center space-x-3 p-4 rounded-xl border border-gold-200 hover:border-gold-400 hover:bg-gold-50 transition-all duration-300 group">
            <div className="w-10 h-10 gradient-gold rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Download className="w-5 h-5 text-charcoal-900" />
            </div>
            <div className="text-left">
              <p className="font-semibold text-charcoal-950">Export Data</p>
              <p className="text-sm text-graphite-600">Download reports</p>
            </div>
          </button>

          <button className="flex items-center space-x-3 p-4 rounded-xl border border-gold-200 hover:border-gold-400 hover:bg-gold-50 transition-all duration-300 group">
            <div className="w-10 h-10 gradient-gold rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Settings className="w-5 h-5 text-charcoal-900" />
            </div>
            <div className="text-left">
              <p className="font-semibold text-charcoal-950">Campaign Settings</p>
              <p className="text-sm text-graphite-600">Manage preferences</p>
            </div>
          </button>
        </div>
      </motion.div>

      {/* Filters and Search */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="ultra-luxury-card rounded-2xl p-6 luxury-glow"
      >
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-graphite-500 w-5 h-5" />
              <input
                type="text"
                placeholder="Search campaigns..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gold-200 rounded-xl focus:border-gold-500 focus:ring-2 focus:ring-gold-200 transition-all duration-300 bg-ivory-50 text-charcoal-950"
              />
            </div>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 border border-gold-200 rounded-xl focus:border-gold-500 focus:ring-2 focus:ring-gold-200 transition-all duration-300 bg-ivory-50 text-charcoal-950"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="paused">Paused</option>
              <option value="completed">Completed</option>
            </select>
            <select
              value={filterPlatform}
              onChange={(e) => setFilterPlatform(e.target.value)}
              className="px-4 py-2 border border-gold-200 rounded-xl focus:border-gold-500 focus:ring-2 focus:ring-gold-200 transition-all duration-300 bg-ivory-50 text-charcoal-950"
            >
              <option value="all">All Platforms</option>
              <option value="Meta Ads">Meta Ads</option>
              <option value="Google Ads">Google Ads</option>
            </select>
          </div>
          <div className="flex items-center space-x-3">
            <Button className="btn-gold luxury-button">
              <Target className="w-4 h-4 mr-2" />
              New Campaign
            </Button>
            <Button variant="outline" className="btn-outline-gold">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Campaigns List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="ultra-luxury-card rounded-2xl p-8 luxury-glow"
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gold-200">
                <th className="text-left py-4 px-2 text-sm font-medium text-graphite-700 uppercase tracking-widest">
                  Campaign
                </th>
                <th className="text-center py-4 px-2 text-sm font-medium text-graphite-700 uppercase tracking-widest">
                  Platform
                </th>
                <th className="text-center py-4 px-2 text-sm font-medium text-graphite-700 uppercase tracking-widest">
                  Status
                </th>
                <th className="text-right py-4 px-2 text-sm font-medium text-graphite-700 uppercase tracking-widest">
                  Budget
                </th>
                <th className="text-right py-4 px-2 text-sm font-medium text-graphite-700 uppercase tracking-widest">
                  Spent
                </th>
                <th className="text-right py-4 px-2 text-sm font-medium text-graphite-700 uppercase tracking-widest">
                  Revenue
                </th>
                <th className="text-center py-4 px-2 text-sm font-medium text-graphite-700 uppercase tracking-widest">
                  ROI
                </th>
                <th className="text-center py-4 px-2 text-sm font-medium text-graphite-700 uppercase tracking-widest">
                  Leads
                </th>
                <th className="text-center py-4 px-2 text-sm font-medium text-graphite-700 uppercase tracking-widest">
                  Trend
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredCampaigns.map((campaign) => (
                <tr key={campaign.id} className="border-b border-champagne-100 hover:bg-champagne-50 transition-colors duration-300">
                  <td className="py-4 px-2">
                    <div className="font-medium text-charcoal-950">{campaign.name}</div>
                    <div className="text-sm text-graphite-600">{campaign.startDate} - {campaign.endDate}</div>
                  </td>
                  <td className="py-4 px-2 text-center">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {campaign.platform}
                    </span>
                  </td>
                  <td className="py-4 px-2 text-center">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${statusColors[campaign.status as keyof typeof statusColors]}`}>
                      {campaign.status}
                    </span>
                  </td>
                  <td className="py-4 px-2 text-right font-medium text-charcoal-950">
                    {campaign.budget}
                  </td>
                  <td className="py-4 px-2 text-right font-medium text-charcoal-950">
                    {campaign.spent}
                  </td>
                  <td className="py-4 px-2 text-right font-medium text-charcoal-950">
                    {campaign.revenue}
                  </td>
                  <td className="py-4 px-2 text-center">
                    <span className="text-green-600 font-semibold">{campaign.roi}</span>
                  </td>
                  <td className="py-4 px-2 text-center">
                    <div className="text-sm text-charcoal-950">{campaign.leads}</div>
                    <div className="text-xs text-graphite-600">{campaign.appointments} appointments</div>
                  </td>
                  <td className="py-4 px-2 text-center">
                    {campaign.trend === "up" ? (
                      <ArrowUp className="w-4 h-4 text-green-600 mx-auto" />
                    ) : campaign.trend === "down" ? (
                      <ArrowDown className="w-4 h-4 text-red-600 mx-auto" />
                    ) : (
                      <Minus className="w-4 h-4 text-graphite-500 mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
