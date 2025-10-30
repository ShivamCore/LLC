"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Activity, Eye, MousePointer, DollarSign, Users, TrendingUp } from 'lucide-react';
import { TierDashboard } from './tier-dashboard';

interface RealTimeMetric {
  id: string;
  name: string;
  value: number;
  change: number;
  trend: 'up' | 'down' | 'stable';
  icon: React.ReactNode;
  color: string;
}

export const RealTimeMonitoring: React.FC = () => {
  const [metrics, setMetrics] = useState<RealTimeMetric[]>([]);
  const [isLive, setIsLive] = useState(true);

  useEffect(() => {
    const generateMetrics = () => {
      const mockMetrics: RealTimeMetric[] = [
        {
          id: '1',
          name: 'Active Campaigns',
          value: 12,
          change: 2,
          trend: 'up',
          icon: <Activity className="w-5 h-5" />,
          color: 'text-green-600 bg-green-50'
        },
        {
          id: '2',
          name: 'Impressions (24h)',
          value: 45678,
          change: 12.5,
          trend: 'up',
          icon: <Eye className="w-5 h-5" />,
          color: 'text-blue-600 bg-blue-50'
        },
        {
          id: '3',
          name: 'Clicks (24h)',
          value: 1234,
          change: -3.2,
          trend: 'down',
          icon: <MousePointer className="w-5 h-5" />,
          color: 'text-purple-600 bg-purple-50'
        },
        {
          id: '4',
          name: 'Spend (24h)',
          value: 2340,
          change: 8.7,
          trend: 'up',
          icon: <DollarSign className="w-5 h-5" />,
          color: 'text-gold-600 bg-gold-50'
        },
        {
          id: '5',
          name: 'Conversions (24h)',
          value: 89,
          change: 15.3,
          trend: 'up',
          icon: <Users className="w-5 h-5" />,
          color: 'text-emerald-600 bg-emerald-50'
        },
        {
          id: '6',
          name: 'ROAS',
          value: 4.2,
          change: 0.8,
          trend: 'up',
          icon: <TrendingUp className="w-5 h-5" />,
          color: 'text-orange-600 bg-orange-50'
        }
      ];
      
      setMetrics(mockMetrics);
    };

    generateMetrics();
    
    // Update metrics every 30 seconds for real-time feel
    const interval = setInterval(generateMetrics, 30000);
    return () => clearInterval(interval);
  }, []);

  const formatValue = (value: number, name: string) => {
    if (name.includes('Spend') || name.includes('ROAS')) {
      return name.includes('ROAS') ? value.toFixed(1) : `$${value.toLocaleString()}`;
    }
    return value.toLocaleString();
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="w-4 h-4 text-green-600" />;
      case 'down':
        return <TrendingUp className="w-4 h-4 text-red-600 rotate-180" />;
      default:
        return <div className="w-4 h-4 bg-charcoal-400 rounded-full" />;
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'up':
        return 'text-green-600';
      case 'down':
        return 'text-red-600';
      default:
        return 'text-charcoal-600';
    }
  };

  return (
    <TierDashboard feature="Real-Time Monitoring">
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-charcoal-200 luxury-glow">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-gold-500 to-gold-600 rounded-xl flex items-center justify-center">
              <Activity className="w-6 h-6 text-charcoal-900" />
            </div>
            <div>
            <h3 className="text-xl sm:text-2xl font-bold text-charcoal-950 tracking-wide">
              Real-Time Monitoring
            </h3>
            <p className="text-sm text-charcoal-600 font-medium">
              Live campaign performance data
            </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className={`w-3 h-3 rounded-full ${isLive ? 'bg-green-500 animate-pulse' : 'bg-charcoal-500'}`}></div>
            <span className="text-sm font-semibold text-charcoal-800">
              {isLive ? 'LIVE' : 'PAUSED'}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-charcoal-200 hover:bg-white transition-all duration-300 shadow-lg"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-10 h-10 rounded-lg ${metric.color} flex items-center justify-center`}>
                  {metric.icon}
                </div>
                <div className="flex items-center space-x-1">
                  {getTrendIcon(metric.trend)}
                  <span className={`text-sm font-medium ${getTrendColor(metric.trend)}`}>
                    {metric.change > 0 ? '+' : ''}{metric.change}%
                  </span>
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-lg font-bold text-charcoal-950">
                  {formatValue(metric.value, metric.name)}
                </h4>
                <p className="text-sm text-charcoal-700 font-semibold">
                  {metric.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-charcoal-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-sm font-medium text-charcoal-600">
              <Activity className="w-4 h-4" />
              <span>Data updates every 30 seconds</span>
            </div>
            <button 
              onClick={() => setIsLive(!isLive)}
              className="px-4 py-2 bg-gold-600 hover:bg-gold-500 text-charcoal-900 rounded-lg font-medium text-sm transition-colors duration-200"
            >
              {isLive ? 'Pause' : 'Resume'} Updates
            </button>
          </div>
        </div>
      </div>
    </TierDashboard>
  );
};
