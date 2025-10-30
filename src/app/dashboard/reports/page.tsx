"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { 
  FileText, 
  Download, 
  Calendar,
  TrendingUp,
  BarChart3,
  PieChart,
  Target,
  DollarSign,
  Users,
  Eye,
  Share,
  Filter,
  RefreshCw,
  ArrowUp,
  ArrowDown
} from "lucide-react";
import { Button } from "@/components/ui/button";

const reports = [
  {
    id: 1,
    name: "Monthly Performance Report",
    type: "Performance",
    date: "2024-01-15",
    status: "completed",
    metrics: {
      revenue: "$72,000",
      leads: 45,
      conversions: 18,
      roi: "412%"
    }
  },
  {
    id: 2,
    name: "Campaign Analysis Q4",
    type: "Campaign",
    date: "2024-01-10",
    status: "completed",
    metrics: {
      revenue: "$156,000",
      leads: 89,
      conversions: 34,
      roi: "589%"
    }
  },
  {
    id: 3,
    name: "Client Satisfaction Survey",
    type: "Survey",
    date: "2024-01-08",
    status: "completed",
    metrics: {
      satisfaction: "94%",
      responses: 28,
      nps: "67",
      retention: "87%"
    }
  },
  {
    id: 4,
    name: "Weekly Lead Report",
    type: "Leads",
    date: "2024-01-12",
    status: "generating",
    metrics: {
      leads: 12,
      qualified: 8,
      scheduled: 5,
      converted: 3
    }
  }
];

const reportTypes = [
  { name: "Performance", icon: TrendingUp, color: "text-blue-600" },
  { name: "Campaign", icon: Target, color: "text-green-600" },
  { name: "Survey", icon: Users, color: "text-purple-600" },
  { name: "Leads", icon: Users, color: "text-orange-600" }
];

export default function ReportsPage() {
  const [filterType, setFilterType] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const [selectedReport, setSelectedReport] = useState(null);

  const filteredReports = reports.filter(report => {
    const matchesType = filterType === "all" || report.type === filterType;
    const matchesStatus = filterStatus === "all" || report.status === filterStatus;
    return matchesType && matchesStatus;
  });

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
              Reports & Analytics
            </h1>
            <p className="text-xl text-graphite-700 font-light">
              Generate and manage your performance reports
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 gradient-gold rounded-full flex items-center justify-center shadow-lg">
              <FileText className="w-6 h-6 text-charcoal-900" />
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-charcoal-950">Total Reports</p>
              <p className="text-xs text-gold-600">{reports.length} generated</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Quick Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-6"
      >
        <div className="ultra-luxury-card rounded-2xl p-6 luxury-glow">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 gradient-gold rounded-xl flex items-center justify-center shadow-lg">
              <FileText className="w-6 h-6 text-charcoal-900" />
            </div>
            <ArrowUp className="w-5 h-5 text-green-600" />
          </div>
          <h3 className="text-3xl font-light text-charcoal-950 mb-1">{reports.length}</h3>
          <p className="text-sm text-graphite-700 font-light">Total Reports</p>
          <p className="text-xs text-green-600 mt-1">+2 this month</p>
        </div>

        <div className="ultra-luxury-card rounded-2xl p-6 luxury-glow">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 gradient-gold rounded-xl flex items-center justify-center shadow-lg">
              <TrendingUp className="w-6 h-6 text-charcoal-900" />
            </div>
            <ArrowUp className="w-5 h-5 text-green-600" />
          </div>
          <h3 className="text-3xl font-light text-charcoal-950 mb-1">3</h3>
          <p className="text-sm text-graphite-700 font-light">Completed</p>
          <p className="text-xs text-green-600 mt-1">Ready to view</p>
        </div>

        <div className="ultra-luxury-card rounded-2xl p-6 luxury-glow">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 gradient-gold rounded-xl flex items-center justify-center shadow-lg">
              <RefreshCw className="w-6 h-6 text-charcoal-900" />
            </div>
            <RefreshCw className="w-5 h-5 text-blue-600" />
          </div>
          <h3 className="text-3xl font-light text-charcoal-950 mb-1">1</h3>
          <p className="text-sm text-graphite-700 font-light">Generating</p>
          <p className="text-xs text-blue-600 mt-1">In progress</p>
        </div>

        <div className="ultra-luxury-card rounded-2xl p-6 luxury-glow">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 gradient-gold rounded-xl flex items-center justify-center shadow-lg">
              <Download className="w-6 h-6 text-charcoal-900" />
            </div>
            <ArrowUp className="w-5 h-5 text-green-600" />
          </div>
          <h3 className="text-3xl font-light text-charcoal-950 mb-1">24</h3>
          <p className="text-sm text-graphite-700 font-light">Downloads</p>
          <p className="text-xs text-green-600 mt-1">This month</p>
        </div>
      </motion.div>

      {/* Report Types */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="ultra-luxury-card rounded-2xl p-8 luxury-glow"
      >
        <h2 className="font-heading text-2xl font-light text-charcoal-950 mb-6">
          Report Types
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reportTypes.map((type, index) => {
            const Icon = type.icon;
            return (
              <div key={index} className="ultra-luxury-card rounded-2xl p-6 luxury-glow hover:scale-105 transition-transform duration-300 cursor-pointer">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 gradient-gold rounded-xl flex items-center justify-center shadow-lg">
                    <Icon className={`w-6 h-6 ${type.color}`} />
                  </div>
                  <div>
                    <h3 className="font-medium text-charcoal-950">{type.name}</h3>
                    <p className="text-sm text-graphite-700">Reports</p>
                  </div>
                </div>
                <p className="text-sm text-graphite-600">
                  Generate detailed {type.name.toLowerCase()} reports with key metrics and insights.
                </p>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="ultra-luxury-card rounded-2xl p-6 luxury-glow"
      >
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex items-center space-x-4">
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="px-4 py-2 border border-gold-200 rounded-xl focus:border-gold-500 focus:ring-2 focus:ring-gold-200 transition-all duration-300 bg-ivory-50 text-charcoal-950"
            >
              <option value="all">All Types</option>
              <option value="Performance">Performance</option>
              <option value="Campaign">Campaign</option>
              <option value="Survey">Survey</option>
              <option value="Leads">Leads</option>
            </select>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 border border-gold-200 rounded-xl focus:border-gold-500 focus:ring-2 focus:ring-gold-200 transition-all duration-300 bg-ivory-50 text-charcoal-950"
            >
              <option value="all">All Status</option>
              <option value="completed">Completed</option>
              <option value="generating">Generating</option>
              <option value="scheduled">Scheduled</option>
            </select>
          </div>
          <div className="flex items-center space-x-3">
            <Button className="btn-gold luxury-button">
              <FileText className="w-4 h-4 mr-2" />
              Generate Report
            </Button>
            <Button variant="outline" className="btn-outline-gold luxury-button">
              <Filter className="w-4 h-4 mr-2" />
              Advanced Filters
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Reports List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="ultra-luxury-card rounded-2xl p-8 luxury-glow"
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gold-200">
                <th className="text-left py-4 px-2 text-sm font-medium text-graphite-700 uppercase tracking-widest">
                  Report Name
                </th>
                <th className="text-center py-4 px-2 text-sm font-medium text-graphite-700 uppercase tracking-widest">
                  Type
                </th>
                <th className="text-center py-4 px-2 text-sm font-medium text-graphite-700 uppercase tracking-widest">
                  Status
                </th>
                <th className="text-left py-4 px-2 text-sm font-medium text-graphite-700 uppercase tracking-widest">
                  Key Metrics
                </th>
                <th className="text-left py-4 px-2 text-sm font-medium text-graphite-700 uppercase tracking-widest">
                  Date
                </th>
                <th className="text-center py-4 px-2 text-sm font-medium text-graphite-700 uppercase tracking-widest">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredReports.map((report) => (
                <tr key={report.id} className="border-b border-champagne-100 hover:bg-champagne-50 transition-colors duration-300">
                  <td className="py-4 px-2">
                    <div className="font-medium text-charcoal-950">{report.name}</div>
                  </td>
                  <td className="py-4 px-2 text-center">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {report.type}
                    </span>
                  </td>
                  <td className="py-4 px-2 text-center">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      report.status === 'completed' ? 'bg-green-100 text-green-800' :
                      report.status === 'generating' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {report.status}
                    </span>
                  </td>
                  <td className="py-4 px-2">
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      {Object.entries(report.metrics).slice(0, 2).map(([key, value]) => (
                        <div key={key} className="text-charcoal-950">
                          <span className="text-graphite-600">{key}:</span> {value}
                        </div>
                      ))}
                    </div>
                  </td>
                  <td className="py-4 px-2">
                    <div className="text-sm text-charcoal-950">{report.date}</div>
                  </td>
                  <td className="py-4 px-2 text-center">
                    <div className="flex items-center justify-center space-x-2">
                      <Button size="sm" variant="ghost" className="text-gold-600 hover:text-gold-700 hover:bg-gold-50 luxury-button">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-gold-600 hover:text-gold-700 hover:bg-gold-50 luxury-button">
                        <Download className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-gold-600 hover:text-gold-700 hover:bg-gold-50 luxury-button">
                        <Share className="w-4 h-4" />
                      </Button>
                    </div>
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
