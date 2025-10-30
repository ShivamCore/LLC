'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Download, 
  Calendar, 
  TrendingUp, 
  BarChart3, 
  PieChart, 
  FileText,
  Filter,
  Eye,
  Users,
  DollarSign,
  Target,
  Activity,
  ArrowUp,
  ArrowDown
} from 'lucide-react'

const reportTypes = [
  {
    id: 'monthly',
    name: 'Monthly Performance Report',
    description: 'Comprehensive overview of campaign performance, leads, and revenue',
    lastGenerated: '2024-01-28',
    size: '2.4 MB',
    type: 'PDF'
  },
  {
    id: 'quarterly',
    name: 'Quarterly Business Review',
    description: 'In-depth analysis of ROI, trends, and strategic recommendations',
    lastGenerated: '2024-01-15',
    size: '5.8 MB',
    type: 'PDF'
  },
  {
    id: 'campaign',
    name: 'Campaign Deep Dive',
    description: 'Detailed metrics for specific campaigns with optimization insights',
    lastGenerated: '2024-01-20',
    size: '3.2 MB',
    type: 'PDF'
  },
  {
    id: 'roi',
    name: 'ROI Analysis Report',
    description: 'Revenue attribution, cost analysis, and profitability metrics',
    lastGenerated: '2024-01-25',
    size: '1.8 MB',
    type: 'PDF'
  }
]

const quickStats = [
  {
    label: 'Total Reports Generated',
    value: '47',
    change: '+12%',
    trend: 'up',
    icon: FileText,
    color: 'gold'
  },
  {
    label: 'Avg. Report Views',
    value: '156',
    change: '+8.5%',
    trend: 'up', 
    icon: Eye,
    color: 'navy'
  },
  {
    label: 'Data Points Analyzed',
    value: '2.3M',
    change: '+22%',
    trend: 'up',
    icon: BarChart3,
    color: 'success'
  },
  {
    label: 'Insights Generated',
    value: '89',
    change: '+15%',
    trend: 'up',
    icon: Activity,
    color: 'purple'
  }
]

const performanceData = {
  campaigns: {
    total: 8,
    active: 6,
    paused: 2,
    performance: '+12.5%'
  },
  revenue: {
    current: 47800,
    previous: 42100,
    change: '+13.5%'
  },
  leads: {
    current: 342,
    previous: 298,
    change: '+14.8%'
  },
  appointments: {
    current: 127,
    previous: 109,
    change: '+16.5%'
  },
  roas: {
    current: 5.8,
    previous: 5.2,
    change: '+11.5%'
  }
}

export default function ReportsPage() {
  const [selectedPeriod, setSelectedPeriod] = useState('30d')
  const [selectedReportType, setSelectedReportType] = useState('all')

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(amount)
  }

  const handleDownloadReport = (reportId: string) => {
    // In a real app, this would generate and download the PDF
    console.log(`Downloading report: ${reportId}`)
  }

  const handleGenerateCustomReport = () => {
    // In a real app, this would open a custom report builder
    console.log('Opening custom report builder')
  }

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-semibold text-navy-900 mb-2">Reports & Analytics</h1>
          <p className="text-neutral-600">Download comprehensive reports and analyze your performance</p>
        </div>
        <div className="flex gap-3">
          <select 
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="px-4 py-2 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
          >
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
            <option value="12m">Last 12 months</option>
          </select>
          <button
            onClick={handleGenerateCustomReport}
            className="px-6 py-2 bg-gradient-to-r from-gold-500 to-gold-600 text-white rounded-lg hover:from-gold-600 hover:to-gold-700 transition-all flex items-center gap-2"
          >
            <FileText className="w-4 h-4" />
            Custom Report
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {quickStats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-100"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 bg-${stat.color}-100 rounded-xl flex items-center justify-center`}>
                <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
              </div>
              <div className="flex items-center gap-1">
                {stat.trend === 'up' ? (
                  <ArrowUp className="w-4 h-4 text-success-500" />
                ) : (
                  <ArrowDown className="w-4 h-4 text-red-500" />
                )}
                <span className={`text-sm font-medium ${
                  stat.trend === 'up' ? 'text-success-600' : 'text-red-500'
                }`}>
                  {stat.change}
                </span>
              </div>
            </div>
            <div>
              <p className="text-sm text-neutral-500 mb-1">{stat.label}</p>
              <p className="text-2xl font-bold text-navy-900">{stat.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Performance Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-100"
      >
        <h3 className="text-lg font-semibold text-navy-900 mb-6">Performance Overview</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-gold-100 to-gold-200 rounded-2xl flex items-center justify-center mx-auto mb-3">
              <Target className="w-8 h-8 text-gold-600" />
            </div>
            <p className="text-sm text-neutral-500 mb-1">Active Campaigns</p>
            <p className="text-xl font-bold text-navy-900">{performanceData.campaigns.active}</p>
            <p className="text-xs text-success-600">{performanceData.campaigns.performance}</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-success-100 to-success-200 rounded-2xl flex items-center justify-center mx-auto mb-3">
              <DollarSign className="w-8 h-8 text-success-600" />
            </div>
            <p className="text-sm text-neutral-500 mb-1">Revenue</p>
            <p className="text-xl font-bold text-navy-900">{formatCurrency(performanceData.revenue.current)}</p>
            <p className="text-xs text-success-600">{performanceData.revenue.change}</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-navy-100 to-navy-200 rounded-2xl flex items-center justify-center mx-auto mb-3">
              <Users className="w-8 h-8 text-navy-600" />
            </div>
            <p className="text-sm text-neutral-500 mb-1">Leads</p>
            <p className="text-xl font-bold text-navy-900">{performanceData.leads.current}</p>
            <p className="text-xs text-success-600">{performanceData.leads.change}</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-3">
              <Calendar className="w-8 h-8 text-purple-600" />
            </div>
            <p className="text-sm text-neutral-500 mb-1">Appointments</p>
            <p className="text-xl font-bold text-navy-900">{performanceData.appointments.current}</p>
            <p className="text-xs text-success-600">{performanceData.appointments.change}</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-rose-100 to-rose-200 rounded-2xl flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="w-8 h-8 text-rose-600" />
            </div>
            <p className="text-sm text-neutral-500 mb-1">ROAS</p>
            <p className="text-xl font-bold text-navy-900">{performanceData.roas.current}x</p>
            <p className="text-xs text-success-600">{performanceData.roas.change}</p>
          </div>
        </div>
      </motion.div>

      {/* Available Reports */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-100"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-navy-900">Available Reports</h3>
          <div className="flex items-center gap-3">
            <Filter className="w-4 h-4 text-neutral-500" />
            <select 
              value={selectedReportType}
              onChange={(e) => setSelectedReportType(e.target.value)}
              className="px-3 py-1 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
            >
              <option value="all">All Reports</option>
              <option value="monthly">Monthly</option>
              <option value="quarterly">Quarterly</option>
              <option value="campaign">Campaign</option>
              <option value="roi">ROI</option>
            </select>
          </div>
        </div>
        
        <div className="grid gap-4">
          {reportTypes.map((report, index) => (
            <motion.div
              key={report.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              className="border border-neutral-200 rounded-xl p-4 hover:shadow-soft transition-all"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold-100 rounded-xl flex items-center justify-center">
                    <FileText className="w-6 h-6 text-gold-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900 mb-1">{report.name}</h4>
                    <p className="text-sm text-neutral-600 mb-2">{report.description}</p>
                    <div className="flex items-center gap-4 text-xs text-neutral-500">
                      <span>Last generated: {new Date(report.lastGenerated).toLocaleDateString()}</span>
                      <span>Size: {report.size}</span>
                      <span>Format: {report.type}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 text-neutral-500 hover:text-navy-600 hover:bg-neutral-50 rounded-lg transition-all">
                    <Eye className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => handleDownloadReport(report.id)}
                    className="px-4 py-2 bg-gold-500 text-white rounded-lg hover:bg-gold-600 transition-all flex items-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Report Templates */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="bg-gradient-to-br from-gold-50 to-gold-100 rounded-2xl p-6 border border-gold-200"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gold-200 rounded-xl flex items-center justify-center">
            <PieChart className="w-6 h-6 text-gold-700" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gold-900">Custom Report Builder</h3>
            <p className="text-sm text-gold-700">Create personalized reports with your specific metrics</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3 mb-4">
          <span className="px-3 py-1 bg-gold-200 text-gold-800 rounded-full text-sm">Campaign Performance</span>
          <span className="px-3 py-1 bg-gold-200 text-gold-800 rounded-full text-sm">ROI Analysis</span>
          <span className="px-3 py-1 bg-gold-200 text-gold-800 rounded-full text-sm">Lead Attribution</span>
          <span className="px-3 py-1 bg-gold-200 text-gold-800 rounded-full text-sm">Revenue Trends</span>
        </div>
        <button
          onClick={handleGenerateCustomReport}
          className="px-6 py-3 bg-gold-600 text-white rounded-lg hover:bg-gold-700 transition-all flex items-center gap-2"
        >
          <BarChart3 className="w-5 h-5" />
          Build Custom Report
        </button>
      </motion.div>
    </div>
  )
}