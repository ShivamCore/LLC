"use client";

import { motion } from "framer-motion";
import { 
  TrendingUp, 
  Users, 
  Target, 
  Activity,
  BarChart3,
  Brain,
  Bot,
  Zap,
  Settings,
  ToggleLeft,
  ToggleRight,
  Eye,
  AlertCircle,
  CheckCircle,
  Clock
} from "lucide-react";

interface EnhancedFeaturesProps {
  tier: 2 | 3;
}

export function EnhancedFeatures({ tier }: EnhancedFeaturesProps) {
  if (tier === 2) {
    return (
      <div className="space-y-8">
        {/* Lead Tracker Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
        >
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
              <Target className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900">Lead Tracker</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">127</div>
              <div className="text-sm text-gray-600">Total Leads</div>
              <div className="text-xs text-green-600 mt-1">+23 this week</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">42%</div>
              <div className="text-sm text-gray-600">Conversion Rate</div>
              <div className="text-xs text-green-600 mt-1">+5% vs last month</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">$2,400</div>
              <div className="text-sm text-gray-600">Avg. Lead Value</div>
              <div className="text-xs text-green-600 mt-1">+$180 vs last month</div>
            </div>
          </div>
        </motion.div>

        {/* Campaign Analytics Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
        >
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-green-600" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900">Campaign Analytics</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">Ad Performance</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">Meta Ads</span>
                  <span className="font-medium text-green-600">+23% CTR</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">Google Ads</span>
                  <span className="font-medium text-green-600">+18% Conversions</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">Retargeting</span>
                  <span className="font-medium text-green-600">+31% ROI</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">Conversion Metrics</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">Lead Quality Score</span>
                  <span className="font-medium text-blue-600">8.7/10</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">Cost Per Lead</span>
                  <span className="font-medium text-blue-600">$47</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">Conversion Rate</span>
                  <span className="font-medium text-blue-600">42%</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  if (tier === 3) {
    return (
      <div className="space-y-8">
        {/* Live Ad Performance Graph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
        >
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
              <Activity className="w-5 h-5 text-purple-600" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900">Live Ad Performance</h3>
            <div className="ml-auto flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-600">Live</span>
            </div>
          </div>
          
          <div className="h-64 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl flex items-center justify-center">
            <div className="text-center">
              <Activity className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">Real-time ad performance monitoring</p>
              <p className="text-sm text-gray-500">Live metrics, A/B test results, and optimization suggestions</p>
            </div>
          </div>
        </motion.div>

        {/* Automation Toggle Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
        >
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
              <Bot className="w-5 h-5 text-orange-600" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900">Automation Controls</h3>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div className="flex items-center space-x-3">
                <Zap className="w-5 h-5 text-orange-600" />
                <div>
                  <p className="font-medium text-gray-900">Lead Response Automation</p>
                  <p className="text-sm text-gray-600">Auto-respond to new leads within 2 minutes</p>
                </div>
              </div>
              <button className="flex items-center space-x-2">
                <ToggleRight className="w-8 h-8 text-green-600" />
              </button>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div className="flex items-center space-x-3">
                <Brain className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="font-medium text-gray-900">AI Ad Optimization</p>
                  <p className="text-sm text-gray-600">Automatically optimize ad spend and targeting</p>
                </div>
              </div>
              <button className="flex items-center space-x-2">
                <ToggleRight className="w-8 h-8 text-green-600" />
              </button>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5 text-purple-600" />
                <div>
                  <p className="font-medium text-gray-900">Retention Campaigns</p>
                  <p className="text-sm text-gray-600">Automated follow-up sequences for existing clients</p>
                </div>
              </div>
              <button className="flex items-center space-x-2">
                <ToggleRight className="w-8 h-8 text-green-600" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* AI Insights Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
        >
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
              <Brain className="w-5 h-5 text-indigo-600" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900">AI Predictive Insights</h3>
          </div>
          
          <div className="space-y-4">
            <div className="p-4 bg-green-50 border border-green-200 rounded-xl">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <p className="font-medium text-green-900">AI Optimization Recommendation</p>
                  <p className="text-sm text-green-700 mt-1">
                    AI predicts 23% better performance by reallocating 15% budget to Instagram. Confidence: 94%
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl">
              <div className="flex items-start space-x-3">
                <Eye className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="font-medium text-blue-900">Trend Prediction</p>
                  <p className="text-sm text-blue-700 mt-1">
                    AI forecasts 34% increase in "Botox" searches next week. Prepare targeted content now.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-purple-50 border border-purple-200 rounded-xl">
              <div className="flex items-start space-x-3">
                <Brain className="w-5 h-5 text-purple-600 mt-0.5" />
                <div>
                  <p className="font-medium text-purple-900">Automation Suggestion</p>
                  <p className="text-sm text-purple-700 mt-1">
                    AI recommends enabling SMS follow-up for leads who don't respond to email within 2 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return null;
}
