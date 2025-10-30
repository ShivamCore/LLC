"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Crown, 
  Star, 
  Zap, 
  Filter, 
  Search, 
  Send, 
  Bell, 
  TrendingUp,
  DollarSign,
  Calendar,
  Settings,
  Eye,
  Edit,
  Trash2
} from 'lucide-react';
import { ClientTier, getTierConfig } from '@/data/tier-config';

interface Client {
  id: string;
  name: string;
  email: string;
  tier: ClientTier;
  joinDate: Date;
  lastActive: Date;
  revenue: number;
  status: 'active' | 'inactive' | 'pending';
}

interface Announcement {
  id: string;
  title: string;
  message: string;
  targetTiers: ClientTier[];
  createdAt: Date;
  sent: boolean;
}

export default function AdminDashboard() {
  const [clients, setClients] = useState<Client[]>([]);
  const [filteredClients, setFilteredClients] = useState<Client[]>([]);
  const [selectedTier, setSelectedTier] = useState<ClientTier | 'all'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [showAnnouncementModal, setShowAnnouncementModal] = useState(false);

  useEffect(() => {
    // Mock client data
    const mockClients: Client[] = [
      {
        id: '1',
        name: 'Dr. Sarah Johnson',
        email: 'sarah@luxeaesthetics.com',
        tier: 'ai-dominance',
        joinDate: new Date('2024-01-15'),
        lastActive: new Date('2024-01-20'),
        revenue: 15750,
        status: 'active'
      },
      {
        id: '2',
        name: 'Dr. Michael Chen',
        email: 'michael@beautyspa.com',
        tier: 'growth',
        joinDate: new Date('2024-01-10'),
        lastActive: new Date('2024-01-19'),
        revenue: 8200,
        status: 'active'
      },
      {
        id: '3',
        name: 'Dr. Emily Rodriguez',
        email: 'emily@glowclinic.com',
        tier: 'launch',
        joinDate: new Date('2024-01-05'),
        lastActive: new Date('2024-01-18'),
        revenue: 4200,
        status: 'active'
      },
      {
        id: '4',
        name: 'Dr. James Wilson',
        email: 'james@eliteaesthetics.com',
        tier: 'ai-dominance',
        joinDate: new Date('2023-12-20'),
        lastActive: new Date('2024-01-20'),
        revenue: 18900,
        status: 'active'
      },
      {
        id: '5',
        name: 'Dr. Lisa Thompson',
        email: 'lisa@premiumspa.com',
        tier: 'growth',
        joinDate: new Date('2024-01-12'),
        lastActive: new Date('2024-01-17'),
        revenue: 6800,
        status: 'pending'
      }
    ];

    setClients(mockClients);
    setFilteredClients(mockClients);
  }, []);

  useEffect(() => {
    let filtered = clients;

    if (selectedTier !== 'all') {
      filtered = filtered.filter(client => client.tier === selectedTier);
    }

    if (searchTerm) {
      filtered = filtered.filter(client => 
        client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        client.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredClients(filtered);
  }, [clients, selectedTier, searchTerm]);

  const getTierIcon = (tier: ClientTier) => {
    switch (tier) {
      case 'launch':
        return <Star className="w-4 h-4" />;
      case 'growth':
        return <Crown className="w-4 h-4" />;
      case 'ai-dominance':
        return <Zap className="w-4 h-4" />;
      default:
        return <Star className="w-4 h-4" />;
    }
  };

  const getTierColor = (tier: ClientTier) => {
    switch (tier) {
      case 'launch':
        return 'text-blue-600 bg-blue-50 border-blue-200';
      case 'growth':
        return 'text-gold-600 bg-gold-50 border-gold-200';
      case 'ai-dominance':
        return 'text-purple-600 bg-purple-50 border-purple-200';
      default:
        return 'text-charcoal-600 bg-charcoal-50 border-charcoal-200';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'text-green-600 bg-green-50';
      case 'inactive':
        return 'text-red-600 bg-red-50';
      case 'pending':
        return 'text-yellow-600 bg-yellow-50';
      default:
        return 'text-charcoal-600 bg-charcoal-50';
    }
  };

  const tierStats = {
    launch: clients.filter(c => c.tier === 'launch').length,
    growth: clients.filter(c => c.tier === 'growth').length,
    'ai-dominance': clients.filter(c => c.tier === 'ai-dominance').length,
    total: clients.length
  };

  const totalRevenue = clients.reduce((sum, client) => sum + client.revenue, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-charcoal-50 to-gold-50 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between"
        >
          <div>
            <h1 className="font-heading text-4xl font-light text-charcoal-950 mb-2">
              Admin Dashboard
            </h1>
            <p className="text-xl text-charcoal-700 font-light">
              Manage clients, tiers, and communications
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setShowAnnouncementModal(true)}
              className="btn-gold luxury-button px-6 py-3 rounded-xl shadow-lg font-medium"
            >
              <Send className="w-5 h-5 mr-2" />
              Send Announcement
            </button>
          </div>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          <div className="ultra-luxury-card rounded-2xl p-6 luxury-glow">
            <div className="flex items-center justify-between mb-4">
              <Users className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold text-charcoal-950">{tierStats.total}</span>
            </div>
            <h3 className="text-lg font-semibold text-charcoal-950 mb-1">Total Clients</h3>
            <p className="text-sm text-charcoal-600">All tiers combined</p>
          </div>

          <div className="ultra-luxury-card rounded-2xl p-6 luxury-glow">
            <div className="flex items-center justify-between mb-4">
              <DollarSign className="w-8 h-8 text-green-600" />
              <span className="text-2xl font-bold text-charcoal-950">${totalRevenue.toLocaleString()}</span>
            </div>
            <h3 className="text-lg font-semibold text-charcoal-950 mb-1">Total Revenue</h3>
            <p className="text-sm text-charcoal-600">Monthly recurring</p>
          </div>

          <div className="ultra-luxury-card rounded-2xl p-6 luxury-glow">
            <div className="flex items-center justify-between mb-4">
              <Crown className="w-8 h-8 text-gold-600" />
              <span className="text-2xl font-bold text-charcoal-950">{tierStats.growth}</span>
            </div>
            <h3 className="text-lg font-semibold text-charcoal-950 mb-1">Growth Plan</h3>
            <p className="text-sm text-charcoal-600">Most popular tier</p>
          </div>

          <div className="ultra-luxury-card rounded-2xl p-6 luxury-glow">
            <div className="flex items-center justify-between mb-4">
              <Zap className="w-8 h-8 text-purple-600" />
              <span className="text-2xl font-bold text-charcoal-950">{tierStats['ai-dominance']}</span>
            </div>
            <h3 className="text-lg font-semibold text-charcoal-950 mb-1">AI Dominance</h3>
            <p className="text-sm text-charcoal-600">Premium clients</p>
          </div>
        </motion.div>

        {/* Filters and Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="ultra-luxury-card rounded-2xl p-6 luxury-glow"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-charcoal-400" />
                <input
                  type="text"
                  placeholder="Search clients by name or email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-charcoal-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500"
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Filter className="w-5 h-5 text-charcoal-600" />
              <select
                value={selectedTier}
                onChange={(e) => setSelectedTier(e.target.value as ClientTier | 'all')}
                className="px-4 py-3 border border-charcoal-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500"
              >
                <option value="all">All Tiers</option>
                <option value="launch">Launch Plan</option>
                <option value="growth">Growth Plan</option>
                <option value="ai-dominance">AI Dominance Plan</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Clients Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="ultra-luxury-card rounded-2xl p-6 luxury-glow"
        >
          <h2 className="text-2xl font-semibold text-charcoal-950 mb-6">Client Management</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-charcoal-200">
                  <th className="text-left py-4 px-2 font-semibold text-charcoal-900">Client</th>
                  <th className="text-left py-4 px-2 font-semibold text-charcoal-900">Tier</th>
                  <th className="text-left py-4 px-2 font-semibold text-charcoal-900">Status</th>
                  <th className="text-left py-4 px-2 font-semibold text-charcoal-900">Revenue</th>
                  <th className="text-left py-4 px-2 font-semibold text-charcoal-900">Last Active</th>
                  <th className="text-left py-4 px-2 font-semibold text-charcoal-900">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredClients.map((client) => (
                  <tr key={client.id} className="border-b border-charcoal-100 hover:bg-charcoal-50">
                    <td className="py-4 px-2">
                      <div>
                        <p className="font-medium text-charcoal-950">{client.name}</p>
                        <p className="text-sm text-charcoal-600">{client.email}</p>
                      </div>
                    </td>
                    <td className="py-4 px-2">
                      <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-medium border ${getTierColor(client.tier)}`}>
                        {getTierIcon(client.tier)}
                        <span>{getTierConfig(client.tier).displayName}</span>
                      </span>
                    </td>
                    <td className="py-4 px-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(client.status)}`}>
                        {client.status}
                      </span>
                    </td>
                    <td className="py-4 px-2">
                      <span className="font-medium text-charcoal-950">${client.revenue.toLocaleString()}</span>
                    </td>
                    <td className="py-4 px-2">
                      <span className="text-sm text-charcoal-600">
                        {client.lastActive.toLocaleDateString()}
                      </span>
                    </td>
                    <td className="py-4 px-2">
                      <div className="flex items-center space-x-2">
                        <button className="p-2 text-charcoal-600 hover:text-blue-600 transition-colors">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-charcoal-600 hover:text-gold-600 transition-colors">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-charcoal-600 hover:text-red-600 transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Tier Distribution Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <div className="ultra-luxury-card rounded-2xl p-6 luxury-glow">
            <h3 className="text-xl font-semibold text-charcoal-950 mb-6">Tier Distribution</h3>
            <div className="space-y-4">
              {Object.entries(tierStats).filter(([key]) => key !== 'total').map(([tier, count]) => {
                const percentage = (count / tierStats.total) * 100;
                const tierConfig = getTierConfig(tier as ClientTier);
                return (
                  <div key={tier} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-charcoal-950">{tierConfig.displayName}</span>
                      <span className="text-sm text-charcoal-600">{count} clients</span>
                    </div>
                    <div className="w-full bg-charcoal-200 rounded-full h-3">
                      <div 
                        className="bg-gold-500 h-3 rounded-full transition-all duration-500"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="ultra-luxury-card rounded-2xl p-6 luxury-glow">
            <h3 className="text-xl font-semibold text-charcoal-950 mb-6">Quick Actions</h3>
            <div className="space-y-4">
              <button className="w-full flex items-center space-x-3 p-4 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors">
                <Bell className="w-5 h-5 text-blue-600" />
                <span className="font-medium text-charcoal-950">Send Tier-Specific Updates</span>
              </button>
              <button className="w-full flex items-center space-x-3 p-4 bg-green-50 hover:bg-green-100 rounded-xl transition-colors">
                <TrendingUp className="w-5 h-5 text-green-600" />
                <span className="font-medium text-charcoal-950">View Performance Analytics</span>
              </button>
              <button className="w-full flex items-center space-x-3 p-4 bg-purple-50 hover:bg-purple-100 rounded-xl transition-colors">
                <Settings className="w-5 h-5 text-purple-600" />
                <span className="font-medium text-charcoal-950">Manage Tier Settings</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
