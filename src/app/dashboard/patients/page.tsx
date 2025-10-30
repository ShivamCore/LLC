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
  Star,
  TrendingUp,
  Clock,
  CheckCircle,
  XCircle,
  Heart,
  Award
} from "lucide-react";
import { Button } from "@/components/ui/button";

const clients = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    email: "sarah@luxeaesthetics.com",
    phone: "+1 (555) 123-4567",
    status: "vip",
    totalSpent: "$12,400",
    lastVisit: "2024-01-10",
    nextAppointment: "2024-01-25",
    services: ["Botox", "Fillers", "Laser"],
    loyaltyPoints: 1240,
    notes: "VIP client, very satisfied with results"
  },
  {
    id: 2,
    name: "Maria Rodriguez",
    email: "maria@elitemedspa.com",
    phone: "+1 (555) 987-6543",
    status: "regular",
    totalSpent: "$8,200",
    lastVisit: "2024-01-08",
    nextAppointment: "2024-02-15",
    services: ["Fillers", "Chemical Peels"],
    loyaltyPoints: 820,
    notes: "Regular client, prefers lip treatments"
  },
  {
    id: 3,
    name: "Dr. Michael Chen",
    email: "michael@premiumaesthetics.com",
    phone: "+1 (555) 456-7890",
    status: "new",
    totalSpent: "$3,200",
    lastVisit: "2024-01-05",
    nextAppointment: "2024-01-20",
    services: ["Laser Treatment"],
    loyaltyPoints: 320,
    notes: "New client, interested in anti-aging treatments"
  },
  {
    id: 4,
    name: "Jennifer Martinez",
    email: "jennifer@beautyspa.com",
    phone: "+1 (555) 321-9876",
    status: "premium",
    totalSpent: "$15,600",
    lastVisit: "2024-01-12",
    nextAppointment: "2024-01-30",
    services: ["Botox", "Fillers", "Laser", "Chemical Peels"],
    loyaltyPoints: 1560,
    notes: "Premium client, very loyal and refers others"
  }
];

const statusColors = {
  vip: "bg-gradient-to-r from-yellow-400 to-yellow-500 text-white border border-yellow-300 shadow-lg font-semibold",
  premium: "bg-gradient-to-r from-purple-400 to-purple-500 text-white border border-purple-300 shadow-lg font-semibold",
  regular: "bg-green-100 text-green-800",
  new: "bg-blue-100 text-blue-800"
};

export default function ClientsPage() {
  const [filterStatus, setFilterStatus] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredClients = clients.filter(client => {
    const matchesStatus = filterStatus === "all" || client.status === filterStatus;
    const matchesSearch = client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         client.email.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const totalRevenue = clients.reduce((sum, client) => sum + parseInt(client.totalSpent.replace('$', '').replace(',', '')), 0);
  const vipClients = clients.filter(c => c.status === 'vip' || c.status === 'premium').length;

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
              Patient Database
            </h1>
            <p className="text-xl text-graphite-700 font-light">
              Manage your patient relationships and track their treatment journey
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 gradient-gold rounded-full flex items-center justify-center shadow-lg">
              <Users className="w-6 h-6 text-charcoal-900" />
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-charcoal-950">Total Patients</p>
              <p className="text-xs text-gold-600">{clients.length} active</p>
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
          <h3 className="text-3xl font-light text-charcoal-950 mb-1">{clients.length}</h3>
          <p className="text-sm text-graphite-700 font-light">Total Patients</p>
          <p className="text-xs text-green-600 mt-1">+12% this month</p>
        </div>

        <div className="ultra-luxury-card rounded-2xl p-6 luxury-glow">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 gradient-gold rounded-xl flex items-center justify-center shadow-lg">
              <Star className="w-6 h-6 text-charcoal-900" />
            </div>
            <TrendingUp className="w-5 h-5 text-green-600" />
          </div>
          <h3 className="text-3xl font-light text-charcoal-950 mb-1">{vipClients}</h3>
          <p className="text-sm text-graphite-700 font-light">VIP Patients</p>
          <p className="text-xs text-green-600 mt-1">+2 this month</p>
        </div>

        <div className="ultra-luxury-card rounded-2xl p-6 luxury-glow">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 gradient-gold rounded-xl flex items-center justify-center shadow-lg">
              <TrendingUp className="w-6 h-6 text-charcoal-900" />
            </div>
            <TrendingUp className="w-5 h-5 text-green-600" />
          </div>
          <h3 className="text-3xl font-light text-charcoal-950 mb-1">${totalRevenue.toLocaleString()}</h3>
          <p className="text-sm text-graphite-700 font-light">Total Revenue</p>
          <p className="text-xs text-green-600 mt-1">+18% this month</p>
        </div>

        <div className="ultra-luxury-card rounded-2xl p-6 luxury-glow">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 gradient-gold rounded-xl flex items-center justify-center shadow-lg">
              <Heart className="w-6 h-6 text-charcoal-900" />
            </div>
            <TrendingUp className="w-5 h-5 text-green-600" />
          </div>
          <h3 className="text-3xl font-light text-charcoal-950 mb-1">87%</h3>
          <p className="text-sm text-graphite-700 font-light">Retention Rate</p>
          <p className="text-xs text-green-600 mt-1">+5% this month</p>
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
                placeholder="Search patients..."
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
              <option value="all">All Patients</option>
              <option value="vip">VIP</option>
              <option value="premium">Premium</option>
              <option value="regular">Regular</option>
              <option value="new">New</option>
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

      {/* Clients List */}
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
                  Patient
                </th>
                <th className="text-center py-4 px-2 text-sm font-medium text-graphite-700 uppercase tracking-widest">
                  Status
                </th>
                <th className="text-right py-4 px-2 text-sm font-medium text-graphite-700 uppercase tracking-widest">
                  Total Spent
                </th>
                <th className="text-left py-4 px-2 text-sm font-medium text-graphite-700 uppercase tracking-widest">
                  Services
                </th>
                <th className="text-center py-4 px-2 text-sm font-medium text-graphite-700 uppercase tracking-widest">
                  Loyalty Points
                </th>
                <th className="text-left py-4 px-2 text-sm font-medium text-graphite-700 uppercase tracking-widest">
                  Next Visit
                </th>
                <th className="text-center py-4 px-2 text-sm font-medium text-graphite-700 uppercase tracking-widest">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredClients.map((client) => (
                <tr key={client.id} className="border-b border-champagne-100 hover:bg-champagne-50 transition-colors duration-300">
                  <td className="py-4 px-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 gradient-gold rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-charcoal-900 font-medium text-sm">
                          {client.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="font-medium text-charcoal-950">{client.name}</div>
                        <div className="text-sm text-graphite-600">{client.email}</div>
                        <div className="text-sm text-graphite-600">{client.phone}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-2 text-center">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${statusColors[client.status as keyof typeof statusColors]}`}>
                      {client.status.toUpperCase()}
                    </span>
                  </td>
                  <td className="py-4 px-2 text-right font-medium text-charcoal-950">
                    {client.totalSpent}
                  </td>
                  <td className="py-4 px-2">
                    <div className="flex flex-wrap gap-1">
                      {client.services.map((service, index) => (
                        <span key={index} className="text-xs bg-champagne-100 text-charcoal-800 px-2 py-1 rounded-full">
                          {service}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-4 px-2 text-center">
                    <div className="flex items-center justify-center space-x-1">
                      <Award className="w-4 h-4 text-gold-600" />
                      <span className="text-sm font-medium text-charcoal-950">{client.loyaltyPoints}</span>
                    </div>
                  </td>
                  <td className="py-4 px-2">
                    <div className="text-sm text-charcoal-950">{client.nextAppointment}</div>
                    <div className="text-xs text-graphite-600">Last: {client.lastVisit}</div>
                  </td>
                  <td className="py-4 px-2 text-center">
                    <div className="flex items-center justify-center space-x-2">
                      <Button size="sm" variant="ghost" className="text-gold-600 hover:text-gold-700">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-gold-600 hover:text-gold-700">
                        <Phone className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-gold-600 hover:text-gold-700">
                        <Mail className="w-4 h-4" />
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
