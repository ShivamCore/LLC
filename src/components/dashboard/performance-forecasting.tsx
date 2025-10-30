"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Calendar, Target, AlertTriangle, CheckCircle } from 'lucide-react';
import { TierDashboard } from './tier-dashboard';

interface ForecastData {
  period: string;
  leads: number;
  revenue: number;
  roas: number;
  confidence: number;
}

interface ForecastInsight {
  id: string;
  type: 'opportunity' | 'warning' | 'success';
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
}

export const PerformanceForecasting: React.FC = () => {
  const [forecastData, setForecastData] = useState<ForecastData[]>([]);
  const [insights, setInsights] = useState<ForecastInsight[]>([]);
  const [selectedPeriod, setSelectedPeriod] = useState<'7d' | '30d' | '90d'>('30d');

  useEffect(() => {
    const generateForecast = () => {
      const periods = selectedPeriod === '7d' ? 7 : selectedPeriod === '30d' ? 30 : 90;
      const data: ForecastData[] = [];
      
      for (let i = 0; i < periods; i++) {
        const baseLeads = 15 + Math.random() * 10;
        const baseRevenue = 2500 + Math.random() * 1500;
        const baseROAS = 3.5 + Math.random() * 1.5;
        
        data.push({
          period: `Day ${i + 1}`,
          leads: Math.round(baseLeads + (i * 0.5)),
          revenue: Math.round(baseRevenue + (i * 50)),
          roas: Math.round((baseROAS + (i * 0.02)) * 10) / 10,
          confidence: Math.max(60, 95 - (i * 0.5))
        });
      }
      
      setForecastData(data);
    };

    const generateInsights = () => {
      const mockInsights: ForecastInsight[] = [
        {
          id: '1',
          type: 'opportunity',
          title: 'Peak Performance Window',
          description: 'AI predicts 40% higher conversion rates during 2-4 PM on weekdays. Consider increasing budget allocation.',
          impact: 'high'
        },
        {
          id: '2',
          type: 'warning',
          title: 'Budget Depletion Risk',
          description: 'Current spend rate suggests budget will be exhausted 3 days early. Recommend daily spend adjustment.',
          impact: 'medium'
        },
        {
          id: '3',
          type: 'success',
          title: 'Trending Upward',
          description: 'All key metrics showing positive trajectory. Forecast accuracy at 94% for next 7 days.',
          impact: 'high'
        }
      ];
      
      setInsights(mockInsights);
    };

    generateForecast();
    generateInsights();
  }, [selectedPeriod]);

  const getInsightIcon = (type: string) => {
    switch (type) {
      case 'opportunity':
        return <Target className="w-5 h-5 text-blue-600" />;
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-orange-600" />;
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      default:
        return <TrendingUp className="w-5 h-5 text-charcoal-600" />;
    }
  };

  const getInsightColor = (type: string) => {
    switch (type) {
      case 'opportunity':
        return 'border-blue-200 bg-blue-50';
      case 'warning':
        return 'border-orange-200 bg-orange-50';
      case 'success':
        return 'border-green-200 bg-green-50';
      default:
        return 'border-charcoal-200 bg-charcoal-50';
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high':
        return 'text-red-600 bg-red-50';
      case 'medium':
        return 'text-yellow-600 bg-yellow-50';
      case 'low':
        return 'text-green-600 bg-green-50';
      default:
        return 'text-charcoal-600 bg-charcoal-50';
    }
  };

  return (
    <TierDashboard feature="Performance Forecasting">
      <div className="bg-white rounded-2xl p-8 shadow-xl border border-gold-200">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-charcoal-900 tracking-wide">
                Performance Forecasting
              </h3>
              <p className="text-sm text-charcoal-600 font-medium">
                AI-powered predictions and trend analysis
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Calendar className="w-5 h-5 text-charcoal-600" />
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value as '7d' | '30d' | '90d')}
              className="px-3 py-2 border border-charcoal-200 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-gold-500"
            >
              <option value="7d">7 Days</option>
              <option value="30d">30 Days</option>
              <option value="90d">90 Days</option>
            </select>
          </div>
        </div>

        {/* Forecast Chart Placeholder */}
        <div className="bg-gradient-to-br from-charcoal-50 to-gold-50 rounded-xl p-6 mb-8">
          <div className="h-64 flex items-center justify-center">
            <div className="text-center space-y-4">
              <TrendingUp className="w-16 h-16 text-gold-500 mx-auto" />
              <h4 className="text-xl font-semibold text-charcoal-900">
                Forecast Visualization
              </h4>
              <p className="text-charcoal-600 font-light">
                Interactive chart showing predicted performance over {selectedPeriod}
              </p>
              <div className="flex items-center justify-center space-x-4 text-sm text-charcoal-500">
                <div className="flex items-center space-x-1">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span>Leads</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>Revenue</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-3 h-3 bg-gold-500 rounded-full"></div>
                  <span>ROAS</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Metrics Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold text-charcoal-900">Projected Leads</h4>
              <TrendingUp className="w-5 h-5 text-blue-600" />
            </div>
            <p className="text-3xl font-bold text-blue-600">
              {forecastData.length > 0 ? forecastData[forecastData.length - 1].leads : 0}
            </p>
            <p className="text-sm text-charcoal-600">
              Next {selectedPeriod}
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold text-charcoal-900">Projected Revenue</h4>
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <p className="text-3xl font-bold text-green-600">
              ${forecastData.length > 0 ? forecastData[forecastData.length - 1].revenue.toLocaleString() : 0}
            </p>
            <p className="text-sm text-charcoal-600">
              Next {selectedPeriod}
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-gold-50 to-gold-100 rounded-xl p-6">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold text-charcoal-900">Projected ROAS</h4>
              <TrendingUp className="w-5 h-5 text-gold-600" />
            </div>
            <p className="text-3xl font-bold text-gold-600">
              {forecastData.length > 0 ? forecastData[forecastData.length - 1].roas : 0}x
            </p>
            <p className="text-sm text-charcoal-600">
              Next {selectedPeriod}
            </p>
          </div>
        </div>

        {/* AI Insights */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-charcoal-900 mb-4">
            AI Forecast Insights
          </h4>
          {insights.map((insight, index) => (
            <motion.div
              key={insight.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`p-4 rounded-xl border-2 ${getInsightColor(insight.type)}`}
            >
              <div className="flex items-start space-x-3">
                {getInsightIcon(insight.type)}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-semibold text-charcoal-900">
                      {insight.title}
                    </h5>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(insight.impact)}`}>
                      {insight.impact} impact
                    </span>
                  </div>
                  <p className="text-charcoal-700 font-light text-sm">
                    {insight.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-charcoal-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-sm text-charcoal-600">
              <TrendingUp className="w-4 h-4" />
              <span>Powered by Valenza AI • 94% accuracy rate</span>
            </div>
            <button className="text-gold-600 hover:text-gold-700 font-medium text-sm">
              Download Forecast Report
            </button>
          </div>
        </div>
      </div>
    </TierDashboard>
  );
};
