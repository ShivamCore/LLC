"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  DollarSign, 
  TrendingUp, 
  Activity, 
  AlertTriangle,
  CheckCircle,
  Clock,
  BarChart3,
  Settings,
  Bell,
  Mail,
  Zap
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface SystemMetrics {
  totalClients: number;
  activeClients: number;
  totalRevenue: number;
  monthlyRevenue: number;
  systemUptime: string;
  activeCampaigns: number;
  pendingTasks: number;
  alerts: number;
}

interface RecentActivity {
  id: string;
  type: 'client' | 'payment' | 'campaign' | 'system';
  title: string;
  description: string;
  timestamp: Date;
  status: 'success' | 'warning' | 'error' | 'info';
}

export default function AdminDashboard() {
  const [metrics, setMetrics] = useState<SystemMetrics>({
    totalClients: 0,
    activeClients: 0,
    totalRevenue: 0,
    monthlyRevenue: 0,
    systemUptime: '99.9%',
    activeCampaigns: 0,
    pendingTasks: 0,
    alerts: 0
  });

  const [recentActivity, setRecentActivity] = useState<RecentActivity[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    try {
      setIsLoading(true);
      
      // Load system metrics
      const metricsResponse = await fetch('/api/admin/metrics');
      const metricsData = await metricsResponse.json();
      setMetrics(metricsData.data);

      // Load recent activity
      const activityResponse = await fetch('/api/admin/activity');
      const activityData = await activityResponse.json();
      setRecentActivity(activityData.data);

    } catch (error) {
      console.error('Failed to load dashboard data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGenerateReports = async () => {
    try {
      const response = await fetch('/api/admin/generate-all-reports', {
        method: 'POST'
      });
      
      if (response.ok) {
        alert('All monthly reports generated and sent successfully!');
      } else {
        throw new Error('Failed to generate reports');
      }
    } catch (error) {
      console.error('Failed to generate reports:', error);
      alert('Failed to generate reports. Please try again.');
    }
  };

  const handleSystemHealthCheck = async () => {
    try {
      const response = await fetch('/api/admin/health-check', {
        method: 'POST'
      });
      
      if (response.ok) {
        alert('System health check completed successfully!');
        loadDashboardData(); // Refresh data
      } else {
        throw new Error('Health check failed');
      }
    } catch (error) {
      console.error('Health check failed:', error);
      alert('Health check failed. Please check system status.');
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-charcoal-50 to-gold-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gold-500 mx-auto mb-4"></div>
          <p className="text-charcoal-700">Loading admin dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-charcoal-50 to-gold-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-charcoal-950 mb-2">
            Valenza Media Admin Dashboard
          </h1>
          <p className="text-xl text-charcoal-700">
            Complete system overview and management
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Button
            onClick={handleGenerateReports}
            className="btn-gold luxury-button p-6 h-auto flex flex-col items-center space-y-2"
          >
            <Mail className="w-6 h-6" />
            <span>Generate All Reports</span>
          </Button>
          
          <Button
            onClick={handleSystemHealthCheck}
            className="bg-blue-600 hover:bg-blue-700 text-white p-6 h-auto flex flex-col items-center space-y-2"
          >
            <Activity className="w-6 h-6" />
            <span>System Health Check</span>
          </Button>
          
          <Button
            onClick={() => window.open('/admin/clients', '_blank')}
            className="bg-green-600 hover:bg-green-700 text-white p-6 h-auto flex flex-col items-center space-y-2"
          >
            <Users className="w-6 h-6" />
            <span>Manage Clients</span>
          </Button>
          
          <Button
            onClick={() => window.open('/admin/settings', '_blank')}
            className="bg-purple-600 hover:bg-purple-700 text-white p-6 h-auto flex flex-col items-center space-y-2"
          >
            <Settings className="w-6 h-6" />
            <span>System Settings</span>
          </Button>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="ultra-luxury-card luxury-glow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-charcoal-600">Total Clients</p>
                  <p className="text-3xl font-bold text-charcoal-950">{metrics.totalClients}</p>
                </div>
                <Users className="w-8 h-8 text-gold-500" />
              </div>
              <div className="mt-4">
                <span className="text-sm text-green-600 font-medium">
                  +{metrics.activeClients} active
                </span>
              </div>
            </CardContent>
          </Card>

          <Card className="ultra-luxury-card luxury-glow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-charcoal-600">Monthly Revenue</p>
                  <p className="text-3xl font-bold text-charcoal-950">
                    ${metrics.monthlyRevenue.toLocaleString()}
                  </p>
                </div>
                <DollarSign className="w-8 h-8 text-gold-500" />
              </div>
              <div className="mt-4">
                <span className="text-sm text-green-600 font-medium">
                  +12.5% from last month
                </span>
              </div>
            </CardContent>
          </Card>

          <Card className="ultra-luxury-card luxury-glow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-charcoal-600">System Uptime</p>
                  <p className="text-3xl font-bold text-charcoal-950">{metrics.systemUptime}</p>
                </div>
                <Activity className="w-8 h-8 text-green-500" />
              </div>
              <div className="mt-4">
                <span className="text-sm text-green-600 font-medium">
                  All systems operational
                </span>
              </div>
            </CardContent>
          </Card>

          <Card className="ultra-luxury-card luxury-glow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-charcoal-600">Active Campaigns</p>
                  <p className="text-3xl font-bold text-charcoal-950">{metrics.activeCampaigns}</p>
                </div>
                <BarChart3 className="w-8 h-8 text-blue-500" />
              </div>
              <div className="mt-4">
                <span className="text-sm text-blue-600 font-medium">
                  Running across all clients
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* System Status */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card className="ultra-luxury-card luxury-glow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Zap className="w-5 h-5 text-gold-500" />
                <span>System Status</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-charcoal-700">Stripe Integration</span>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-green-600">Operational</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-charcoal-700">Meta Ads API</span>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-green-600">Operational</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-charcoal-700">Google Ads API</span>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-green-600">Operational</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-charcoal-700">Notion CRM</span>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-green-600">Operational</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-charcoal-700">AI Services</span>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-green-600">Operational</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-charcoal-700">Email Service</span>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-green-600">Operational</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="ultra-luxury-card luxury-glow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Bell className="w-5 h-5 text-gold-500" />
                <span>Recent Activity</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.slice(0, 5).map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-3">
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      activity.status === 'success' ? 'bg-green-500' :
                      activity.status === 'warning' ? 'bg-yellow-500' :
                      activity.status === 'error' ? 'bg-red-500' :
                      'bg-blue-500'
                    }`}></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-charcoal-950">
                        {activity.title}
                      </p>
                      <p className="text-xs text-charcoal-600">
                        {activity.description}
                      </p>
                      <p className="text-xs text-charcoal-500 mt-1">
                        {activity.timestamp.toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Alerts and Notifications */}
        {metrics.alerts > 0 && (
          <Card className="ultra-luxury-card luxury-glow border-red-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-red-600">
                <AlertTriangle className="w-5 h-5" />
                <span>System Alerts ({metrics.alerts})</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                  <span className="text-sm text-red-800">
                    Payment failed for client_12345 - Action required
                  </span>
                  <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white">
                    Resolve
                  </Button>
                </div>
                <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                  <span className="text-sm text-yellow-800">
                    Campaign performance below threshold - Review needed
                  </span>
                  <Button size="sm" className="bg-yellow-600 hover:bg-yellow-700 text-white">
                    Review
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-sm text-charcoal-600">
            Valenza Media Admin Dashboard • Last updated: {new Date().toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}
