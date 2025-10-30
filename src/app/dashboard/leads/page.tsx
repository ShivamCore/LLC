"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Users, 
  Phone, 
  Mail, 
  Calendar,
  Filter,
  Search,
  Download,
  Eye,
  MessageSquare,
  Star,
  TrendingUp,
  Clock,
  CheckCircle,
  XCircle,
  BarChart3,
  Target,
  Activity,
  Brain
} from "lucide-react";
import { Button } from "@/components/ui/button";

const leads = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    email: "sarah@luxeaesthetics.com",
    phone: "+1 (555) 123-4567",
    source: "Meta Ads - Botox Campaign",
    status: "qualified",
    value: "$2,400",
    date: "2024-01-15",
    lastContact: "2 hours ago",
    notes: "Interested in Botox treatments, budget confirmed"
  },
  {
    id: 2,
    name: "Maria Rodriguez",
    email: "maria@elitemedspa.com",
    phone: "+1 (555) 987-6543",
    source: "Google Ads - Fillers",
    status: "new",
    value: "$1,800",
    date: "2024-01-14",
    lastContact: "1 day ago",
    notes: "Initial inquiry about dermal fillers"
  },
  {
    id: 3,
    name: "Dr. Michael Chen",
    email: "michael@premiumaesthetics.com",
    phone: "+1 (555) 456-7890",
    source: "Instagram - Aesthetics",
    status: "scheduled",
    value: "$3,200",
    date: "2024-01-13",
    lastContact: "3 hours ago",
    notes: "Consultation scheduled for next week"
  },
  {
    id: 4,
    name: "Jennifer Martinez",
    email: "jennifer@beautyspa.com",
    phone: "+1 (555) 321-9876",
    source: "Retargeting - Premium",
    status: "converted",
    value: "$4,500",
    date: "2024-01-12",
    lastContact: "5 hours ago",
    notes: "Completed treatment, very satisfied"
  }
];

const statusColors = {
  new: "bg-blue-100 text-blue-800",
  qualified: "bg-yellow-100 text-yellow-800",
  scheduled: "bg-purple-100 text-purple-800",
  converted: "bg-green-100 text-green-800",
  lost: "bg-red-100 text-red-800"
};

export default function LeadsPage() {
  const [filterStatus, setFilterStatus] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredLeads = leads.filter(lead => {
    const matchesStatus = filterStatus === "all" || lead.status === filterStatus;
    const matchesSearch = lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lead.email.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
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
              Lead Management
            </h1>
            <p className="text-xl text-graphite-700 font-light">
              Track and manage your qualified leads
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 gradient-gold rounded-full flex items-center justify-center shadow-lg">
              <Users className="w-6 h-6 text-charcoal-900" />
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-charcoal-950">Active Leads</p>
              <p className="text-xs text-gold-600">{leads.length} total</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Stats Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-6"
      >
        <div className="ultra-luxury-card rounded-2xl p-6 luxury-glow">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 gradient-gold rounded-xl flex items-center justify-center shadow-lg">
              <Users className="w-6 h-6 text-charcoal-900" />
            </div>
            <TrendingUp className="w-5 h-5 text-green-600" />
          </div>
          <h3 className="text-3xl font-light text-charcoal-950 mb-1">47</h3>
          <p className="text-sm text-graphite-700 font-light">Total Leads</p>
          <p className="text-xs text-green-600 mt-1">+12% this month</p>
        </div>

        <div className="ultra-luxury-card rounded-2xl p-6 luxury-glow">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 gradient-gold rounded-xl flex items-center justify-center shadow-lg">
              <CheckCircle className="w-6 h-6 text-charcoal-900" />
            </div>
            <TrendingUp className="w-5 h-5 text-green-600" />
          </div>
          <h3 className="text-3xl font-light text-charcoal-950 mb-1">23</h3>
          <p className="text-sm text-graphite-700 font-light">Qualified</p>
          <p className="text-xs text-green-600 mt-1">+8% this month</p>
        </div>

        <div className="ultra-luxury-card rounded-2xl p-6 luxury-glow">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 gradient-gold rounded-xl flex items-center justify-center shadow-lg">
              <Calendar className="w-6 h-6 text-charcoal-900" />
            </div>
            <TrendingUp className="w-5 h-5 text-green-600" />
          </div>
          <h3 className="text-3xl font-light text-charcoal-950 mb-1">15</h3>
          <p className="text-sm text-graphite-700 font-light">Scheduled</p>
          <p className="text-xs text-green-600 mt-1">+5% this month</p>
        </div>

        <div className="ultra-luxury-card rounded-2xl p-6 luxury-glow">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 gradient-gold rounded-xl flex items-center justify-center shadow-lg">
              <Star className="w-6 h-6 text-charcoal-900" />
            </div>
            <TrendingUp className="w-5 h-5 text-green-600" />
          </div>
          <h3 className="text-3xl font-light text-charcoal-950 mb-1">9</h3>
          <p className="text-sm text-graphite-700 font-light">Converted</p>
          <p className="text-xs text-green-600 mt-1">+3% this month</p>
        </div>
      </motion.div>

      {/* Lead Tracking Visualization */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="ultra-luxury-card rounded-2xl p-8 luxury-glow"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-heading text-2xl font-light text-charcoal-950">
            Lead Flow Analytics
          </h2>
          <BarChart3 className="w-6 h-6 text-gold-500" />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Lead Source Performance */}
          <div className="bg-gradient-to-br from-gold-50 to-champagne-50 rounded-xl p-6">
            <h3 className="font-semibold text-charcoal-950 mb-4 flex items-center">
              <Target className="w-5 h-5 text-gold-600 mr-2" />
              Lead Sources Performance
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-charcoal-950">Meta Ads - Botox</span>
                <div className="flex items-center space-x-2">
                  <div className="w-24 bg-champagne-200 rounded-full h-2">
                    <div className="bg-gold-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                  <span className="text-sm font-medium text-charcoal-950">85%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-charcoal-950">Google Ads - Fillers</span>
                <div className="flex items-center space-x-2">
                  <div className="w-24 bg-champagne-200 rounded-full h-2">
                    <div className="bg-gold-500 h-2 rounded-full" style={{ width: '72%' }}></div>
                  </div>
                  <span className="text-sm font-medium text-charcoal-950">72%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-charcoal-950">Instagram Organic</span>
                <div className="flex items-center space-x-2">
                  <div className="w-24 bg-champagne-200 rounded-full h-2">
                    <div className="bg-gold-500 h-2 rounded-full" style={{ width: '58%' }}></div>
                  </div>
                  <span className="text-sm font-medium text-charcoal-950">58%</span>
                </div>
              </div>
            </div>
          </div>

          {/* AI Lead Scoring */}
          <div className="bg-gradient-to-br from-lavender-50 to-gold-50 rounded-xl p-6">
            <h3 className="font-semibold text-charcoal-950 mb-4 flex items-center">
              <Brain className="w-5 h-5 text-gold-600 mr-2" />
              AI Lead Scoring
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-charcoal-950">High Intent Leads</span>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-green-600">12 leads</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-charcoal-950">Medium Intent Leads</span>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm font-medium text-yellow-600">8 leads</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-charcoal-950">Low Intent Leads</span>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-sm font-medium text-red-600">3 leads</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-white rounded-lg">
                <p className="text-xs text-graphite-600">
                  <strong>AI Insight:</strong> Focus on Botox campaigns - 23% higher conversion rate
                </p>
              </div>
            </div>
          </div>
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
                placeholder="Search leads..."
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
              <option value="new">New</option>
              <option value="qualified">Qualified</option>
              <option value="scheduled">Scheduled</option>
              <option value="converted">Converted</option>
            </select>
          </div>
          <div className="flex items-center space-x-3">
            <Button className="btn-gold luxury-button">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
            <Button variant="outline" className="btn-outline-gold">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Leads Table */}
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
                  Lead
                </th>
                <th className="text-left py-4 px-2 text-sm font-medium text-graphite-700 uppercase tracking-widest">
                  Source
                </th>
                <th className="text-left py-4 px-2 text-sm font-medium text-graphite-700 uppercase tracking-widest">
                  Status
                </th>
                <th className="text-right py-4 px-2 text-sm font-medium text-graphite-700 uppercase tracking-widest">
                  Value
                </th>
                <th className="text-left py-4 px-2 text-sm font-medium text-graphite-700 uppercase tracking-widest">
                  Last Contact
                </th>
                <th className="text-center py-4 px-2 text-sm font-medium text-graphite-700 uppercase tracking-widest">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredLeads.map((lead) => (
                <tr key={lead.id} className="border-b border-champagne-100 hover:bg-champagne-50 transition-colors duration-300">
                  <td className="py-4 px-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 gradient-gold rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-charcoal-900 font-medium text-sm">
                          {lead.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="font-medium text-charcoal-950">{lead.name}</div>
                        <div className="text-sm text-graphite-600">{lead.email}</div>
                        <div className="text-sm text-graphite-600">{lead.phone}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-2">
                    <div className="text-sm text-graphite-700">{lead.source}</div>
                  </td>
                  <td className="py-4 px-2">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${statusColors[lead.status as keyof typeof statusColors]}`}>
                      {lead.status}
                    </span>
                  </td>
                  <td className="py-4 px-2 text-right font-medium text-charcoal-950">
                    {lead.value}
                  </td>
                  <td className="py-4 px-2">
                    <div className="text-sm text-graphite-700">{lead.lastContact}</div>
                  </td>
                  <td className="py-4 px-2 text-center">
                    <div className="flex items-center justify-center space-x-2">
                      <Button size="sm" variant="ghost" className="text-gold-600 hover:text-gold-700">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-gold-600 hover:text-gold-700">
                        <MessageSquare className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-gold-600 hover:text-gold-700">
                        <Phone className="w-4 h-4" />
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
