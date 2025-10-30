'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, TrendingUp, Users, DollarSign, Eye, MousePointer, Phone, Calendar as CalendarIcon, ArrowUp, ArrowDown } from 'lucide-react'

const mockCampaignData = [
  {
    id: 1,
    name: "Meta Ads - Botox Campaign",
    status: "active",
    budget: 5000,
    spent: 3250,
    impressions: 125000,
    clicks: 2850,
    leads: 165,
    appointments: 42,
    revenue: 18900,
    startDate: "2024-01-15",
    endDate: "2024-02-15",
    ctr: 2.28,
    cpl: 19.70,
    roas: 5.82,
    trend: "up"
  },
  {
    id: 2,
    name: "Meta Ads - Dermal Fillers",
    status: "active", 
    budget: 4000,
    spent: 2800,
    impressions: 98000,
    clicks: 2100,
    leads: 98,
    appointments: 28,
    revenue: 14200,
    startDate: "2024-01-20",
    endDate: "2024-02-20",
    ctr: 2.14,
    cpl: 28.57,
    roas: 5.07,
    trend: "up"
  },
  {
    id: 3,
    name: "Google Ads - Medical Spa Services",
    status: "paused",
    budget: 3000,
    spent: 1850,
    impressions: 45000,
    clicks: 890,
    leads: 52,
    appointments: 15,
    revenue: 7800,
    startDate: "2024-01-10",
    endDate: "2024-02-10",
    ctr: 1.98,
    cpl: 35.58,
    roas: 4.22,
    trend: "down"
  }
]

export default function CampaignsPage() {
  const [selectedCampaign, setSelectedCampaign] = useState(mockCampaignData[0])
  const [timeRange, setTimeRange] = useState('30d')

  const totalMetrics = {
    budget: mockCampaignData.reduce((sum, camp) => sum + camp.budget, 0),
    spent: mockCampaignData.reduce((sum, camp) => sum + camp.spent, 0),
    leads: mockCampaignData.reduce((sum, camp) => sum + camp.leads, 0),
    appointments: mockCampaignData.reduce((sum, camp) => sum + camp.appointments, 0),
    revenue: mockCampaignData.reduce((sum, camp) => sum + camp.revenue, 0)
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(amount)
  }

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(num)
  }

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-semibold text-navy-900 mb-2">Campaign Overview</h1>
          <p className="text-neutral-600">Monitor your advertising campaigns and performance metrics</p>
        </div>
        <div className="flex gap-3">
          <select 
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-4 py-2 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
          >
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
          </select>
        </div>
      </div>

      {/* Total Performance Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-100"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gold-100 rounded-xl flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-gold-600" />
            </div>
            <div>
              <p className="text-xs sm:text-sm text-neutral-500">Total Budget</p>
              <p className="text-lg sm:text-xl lg:text-2xl font-bold text-navy-900">{formatCurrency(totalMetrics.budget)}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-100"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-lavender-100 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-lavender-600" />
            </div>
            <div>
              <p className="text-sm text-neutral-500">Total Spent</p>
              <p className="text-2xl font-bold text-navy-900">{formatCurrency(totalMetrics.spent)}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-100"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gold-100 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6 text-gold-600" />
            </div>
            <div>
              <p className="text-sm text-neutral-500">Total Leads</p>
              <p className="text-2xl font-bold text-navy-900">{formatNumber(totalMetrics.leads)}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-100"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-lavender-100 rounded-xl flex items-center justify-center">
              <CalendarIcon className="w-6 h-6 text-lavender-600" />
            </div>
            <div>
              <p className="text-sm text-neutral-500">Appointments</p>
              <p className="text-2xl font-bold text-navy-900">{formatNumber(totalMetrics.appointments)}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-100"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gold-100 rounded-xl flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-gold-600" />
            </div>
            <div>
              <p className="text-sm text-neutral-500">Total Revenue</p>
              <p className="text-2xl font-bold text-navy-900">{formatCurrency(totalMetrics.revenue)}</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Campaign List & Details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
        {/* Campaign List */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-100"
        >
          <h3 className="text-lg font-semibold text-navy-900 mb-4">Active Campaigns</h3>
          <div className="space-y-3">
            {mockCampaignData.map((campaign) => (
              <button
                key={campaign.id}
                onClick={() => setSelectedCampaign(campaign)}
                className={`w-full text-left p-4 rounded-xl transition-all ${
                  selectedCampaign.id === campaign.id
                    ? 'bg-gold-50 border-2 border-gold-200'
                    : 'bg-neutral-50 border-2 border-transparent hover:border-neutral-200'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-navy-900">{campaign.name}</h4>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    campaign.status === 'active'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {campaign.status}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm text-neutral-600">
                  <span>Budget: {formatCurrency(campaign.budget)}</span>
                  <span>ROAS: {campaign.roas}x</span>
                  {campaign.trend === 'up' ? (
                    <ArrowUp className="w-4 h-4 text-green-500" />
                  ) : (
                    <ArrowDown className="w-4 h-4 text-red-500" />
                  )}
                </div>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Campaign Details */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
          className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-neutral-100"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-navy-900">{selectedCampaign.name}</h3>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              selectedCampaign.status === 'active'
                ? 'bg-green-100 text-green-700'
                : 'bg-yellow-100 text-yellow-700'
            }`}>
              {selectedCampaign.status}
            </span>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6">
            <div className="text-center p-4 bg-neutral-50 rounded-xl">
              <Eye className="w-6 h-6 text-gold-600 mx-auto mb-2" />
              <p className="text-sm text-neutral-500">Impressions</p>
              <p className="text-lg font-bold text-navy-900">{formatNumber(selectedCampaign.impressions)}</p>
            </div>
            <div className="text-center p-4 bg-neutral-50 rounded-xl">
              <MousePointer className="w-6 h-6 text-lavender-600 mx-auto mb-2" />
              <p className="text-sm text-neutral-500">Clicks</p>
              <p className="text-lg font-bold text-navy-900">{formatNumber(selectedCampaign.clicks)}</p>
            </div>
            <div className="text-center p-4 bg-neutral-50 rounded-xl">
              <Users className="w-6 h-6 text-gold-600 mx-auto mb-2" />
              <p className="text-sm text-neutral-500">Leads</p>
              <p className="text-lg font-bold text-navy-900">{formatNumber(selectedCampaign.leads)}</p>
            </div>
            <div className="text-center p-4 bg-neutral-50 rounded-xl">
              <Phone className="w-6 h-6 text-lavender-600 mx-auto mb-2" />
              <p className="text-sm text-neutral-500">Appointments</p>
              <p className="text-lg font-bold text-navy-900">{formatNumber(selectedCampaign.appointments)}</p>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
            <div className="bg-gold-50 rounded-xl p-4">
              <h4 className="font-medium text-navy-900 mb-2">Click-Through Rate</h4>
              <p className="text-2xl font-bold text-gold-600">{selectedCampaign.ctr}%</p>
            </div>
            <div className="bg-lavender-50 rounded-xl p-4">
              <h4 className="font-medium text-navy-900 mb-2">Cost Per Lead</h4>
              <p className="text-2xl font-bold text-lavender-600">{formatCurrency(selectedCampaign.cpl)}</p>
            </div>
            <div className="bg-green-50 rounded-xl p-4">
              <h4 className="font-medium text-navy-900 mb-2">Return on Ad Spend</h4>
              <p className="text-2xl font-bold text-green-600">{selectedCampaign.roas}x</p>
            </div>
          </div>

          {/* Campaign Details */}
          <div className="mt-6 p-4 bg-neutral-50 rounded-xl">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-neutral-500">Start Date</p>
                <p className="font-medium text-navy-900">{new Date(selectedCampaign.startDate).toLocaleDateString()}</p>
              </div>
              <div>
                <p className="text-neutral-500">End Date</p>
                <p className="font-medium text-navy-900">{new Date(selectedCampaign.endDate).toLocaleDateString()}</p>
              </div>
              <div>
                <p className="text-neutral-500">Budget Spent</p>
                <p className="font-medium text-navy-900">
                  {formatCurrency(selectedCampaign.spent)} / {formatCurrency(selectedCampaign.budget)}
                </p>
              </div>
              <div>
                <p className="text-neutral-500">Total Revenue</p>
                <p className="font-medium text-navy-900">{formatCurrency(selectedCampaign.revenue)}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}