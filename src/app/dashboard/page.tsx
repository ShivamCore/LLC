"use client";

import { motion } from "framer-motion";
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Target, 
  Calendar,
  ArrowUpRight,
  ArrowDownRight,
  Star,
  Award,
  Zap,
  Crown,
  Brain,
  Bot,
  BarChart3,
  Activity,
  Settings
} from "lucide-react";
import { EnhancedFeatures } from "@/components/dashboard/enhanced-features";
import { TierProvider, useTier } from "@/contexts/tier-context";
import { TierWelcomeBanner, TierDashboard } from "@/components/dashboard/tier-dashboard";
import { AIInsights } from "@/components/dashboard/ai-insights";
import { RealTimeMonitoring } from "@/components/dashboard/real-time-monitoring";
import { PerformanceForecasting } from "@/components/dashboard/performance-forecasting";
import { TierSwitcher } from "@/components/dashboard/tier-switcher";

const metrics = [
  {
    title: "Monthly Revenue",
    value: "$127,450",
    change: "+23.5%",
    changeType: "positive",
    icon: DollarSign,
    description: "vs last month"
  },
  {
    title: "New Clients",
    value: "47",
    change: "+18.2%",
    changeType: "positive",
    icon: Users,
    description: "this month"
  },
  {
    title: "ROI",
    value: "1,180%",
    change: "+12.3%",
    changeType: "positive",
    icon: TrendingUp,
    description: "return on ad spend"
  },
  {
    title: "Appointments",
    value: "156",
    change: "+31.7%",
    changeType: "positive",
    icon: Calendar,
    description: "scheduled this month"
  }
];

const recentActivities = [
  {
    type: "campaign",
    title: "Meta Ads Campaign Optimized",
    description: "Increased CTR by 34% and reduced CPA by 28%",
    time: "2 hours ago",
    status: "success"
  },
  {
    type: "lead",
    title: "New High-Value Lead",
    description: "Dr. Jennifer Martinez - Botox consultation scheduled",
    time: "4 hours ago",
    status: "new"
  },
  {
    type: "revenue",
    title: "Revenue Milestone",
    description: "Monthly target exceeded by $12,450",
    time: "1 day ago",
    status: "milestone"
  },
  {
    type: "optimization",
    title: "Landing Page A/B Test Complete",
    description: "Conversion rate improved by 22%",
    time: "2 days ago",
    status: "success"
  }
];

const DashboardContent: React.FC = () => {
  const { currentTier, tierConfig } = useTier();

  return (
    <div className="p-8 space-y-8">
      {/* Tier Switcher for Testing */}
      <TierSwitcher />
      
      {/* Tier Welcome Banner */}
      <TierWelcomeBanner />
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-charcoal-950 mb-3 leading-tight">
              Welcome back, Dr. Johnson
            </h1>
            <p className="text-lg sm:text-xl text-charcoal-700 font-medium leading-relaxed">
              Your practice is performing exceptionally well this month
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 gradient-gold rounded-full flex items-center justify-center shadow-lg">
              <Crown className="w-6 h-6 text-charcoal-900" />
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold text-charcoal-950">Elite Status</p>
              <p className="text-xs font-medium text-gold-600">Premium Client</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Key Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {metrics.map((metric, index) => {
          const IconComponent = metric.icon;
          return (
            <div
              key={index}
              className="ultra-luxury-card rounded-2xl p-6 luxury-glow hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 gradient-gold rounded-xl flex items-center justify-center shadow-lg">
                  <IconComponent className="w-6 h-6 text-charcoal-900" />
                </div>
                <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${
                  metric.changeType === 'positive' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {metric.changeType === 'positive' ? (
                    <ArrowUpRight className="w-3 h-3" />
                  ) : (
                    <ArrowDownRight className="w-3 h-3" />
                  )}
                  <span>{metric.change}</span>
                </div>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-charcoal-950 mb-2">
                {metric.value}
              </h3>
              <p className="text-sm font-semibold text-charcoal-800 mb-1">
                {metric.title}
              </p>
              <p className="text-xs font-medium text-charcoal-600">
                {metric.description}
              </p>
            </div>
          );
        })}
      </motion.div>

      {/* Performance Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        {/* Campaign Performance */}
        <div className="ultra-luxury-card rounded-2xl p-8 luxury-glow">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-heading text-xl sm:text-2xl font-semibold text-charcoal-950">
              Campaign Performance
            </h2>
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-gold-500 fill-current" />
              <span className="text-sm font-semibold text-gold-600">Excellent</span>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-charcoal-700">Meta Ads ROI</span>
              <span className="text-lg font-bold text-charcoal-950">1,180%</span>
            </div>
            <div className="w-full bg-champagne-200 rounded-full h-2">
              <div className="bg-gold-500 h-2 rounded-full" style={{ width: '95%' }}></div>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-charcoal-700">Cost Per Lead</span>
              <span className="text-lg font-bold text-charcoal-950">$8.43</span>
            </div>
            <div className="w-full bg-champagne-200 rounded-full h-2">
              <div className="bg-gold-500 h-2 rounded-full" style={{ width: '88%' }}></div>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-charcoal-700">Conversion Rate</span>
              <span className="text-lg font-bold text-charcoal-950">42%</span>
            </div>
            <div className="w-full bg-champagne-200 rounded-full h-2">
              <div className="bg-gold-500 h-2 rounded-full" style={{ width: '92%' }}></div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="ultra-luxury-card rounded-2xl p-8 luxury-glow">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-heading text-xl sm:text-2xl font-semibold text-charcoal-950">
              Recent Activity
            </h2>
            <Award className="w-6 h-6 text-gold-500" />
          </div>
          
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 rounded-xl bg-champagne-50">
                <div className={`w-3 h-3 rounded-full mt-2 ${
                  activity.status === 'success' ? 'bg-green-500' :
                  activity.status === 'new' ? 'bg-blue-500' :
                  'bg-gold-500'
                }`}></div>
                <div className="flex-1">
                  <h4 className="font-semibold text-charcoal-950 text-sm mb-1">
                    {activity.title}
                  </h4>
                  <p className="text-charcoal-700 text-xs font-medium mb-2">
                    {activity.description}
                  </p>
                  <p className="text-charcoal-600 text-xs font-medium">
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI-Powered Features */}
        <div className="ultra-luxury-card rounded-2xl p-8 luxury-glow">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-heading text-xl sm:text-2xl font-semibold text-charcoal-950">
              AI-Powered Analytics
            </h2>
            <Brain className="w-6 h-6 text-gold-500" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Live Performance Graph */}
            <div className="bg-gradient-to-br from-gold-50 to-champagne-50 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-charcoal-950 text-sm">Live Ad Performance</h3>
                <Activity className="w-5 h-5 text-gold-600" />
              </div>
              <div className="h-32 bg-white rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="w-8 h-8 text-gold-400 mx-auto mb-2" />
                  <p className="text-sm font-medium text-charcoal-600">Real-time AI optimization</p>
                </div>
              </div>
            </div>

            {/* AI Insights Panel */}
            <div className="bg-gradient-to-br from-lavender-50 to-gold-50 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-charcoal-950 text-sm">AI Insights</h3>
                <Bot className="w-5 h-5 text-gold-600" />
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <p className="text-sm font-medium text-charcoal-950">Optimal posting time: 2:30 PM</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <p className="text-sm font-medium text-charcoal-950">High-converting audience: 25-45 females</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                  <p className="text-sm font-medium text-charcoal-950">Budget optimization: +15% increase recommended</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Automation Controls */}
        <div className="ultra-luxury-card rounded-2xl p-8 luxury-glow">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-heading text-xl sm:text-2xl font-semibold text-charcoal-950">
              Automation Controls
            </h2>
            <Settings className="w-6 h-6 text-gold-500" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-charcoal-950 text-sm">Lead Automation</h3>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <p className="text-sm font-medium text-charcoal-600 mb-3">Auto-respond to new leads</p>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-4 bg-green-500 rounded-full relative">
                  <div className="w-3 h-3 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                </div>
                <span className="text-sm text-green-600 font-semibold">Active</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-charcoal-950 text-sm">Email Sequences</h3>
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              </div>
              <p className="text-sm font-medium text-charcoal-600 mb-3">Automated follow-up campaigns</p>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-4 bg-blue-500 rounded-full relative">
                  <div className="w-3 h-3 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                </div>
                <span className="text-sm text-blue-600 font-semibold">Active</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-charcoal-950 text-sm">AI Content</h3>
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              </div>
              <p className="text-sm font-medium text-charcoal-600 mb-3">Auto-generate social posts</p>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-4 bg-purple-500 rounded-full relative">
                  <div className="w-3 h-3 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                </div>
                <span className="text-sm text-purple-600 font-semibold">Active</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Elite Achievements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="ultra-luxury-card rounded-2xl p-8 luxury-glow"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-heading text-xl sm:text-2xl font-semibold text-charcoal-950">
            Elite Achievements
          </h2>
          <Zap className="w-6 h-6 text-gold-500" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-gold-50 rounded-xl">
            <div className="w-16 h-16 mx-auto gradient-gold rounded-full flex items-center justify-center shadow-lg mb-4">
              <Target className="w-8 h-8 text-charcoal-900" />
            </div>
            <h3 className="font-semibold text-charcoal-950 mb-2">Revenue Target</h3>
            <p className="text-2xl font-bold text-gold-600 mb-1">127%</p>
            <p className="text-xs font-medium text-charcoal-600">Exceeded this month</p>
          </div>
          
          <div className="text-center p-6 bg-champagne-50 rounded-xl">
            <div className="w-16 h-16 mx-auto gradient-gold rounded-full flex items-center justify-center shadow-lg mb-4">
              <Users className="w-8 h-8 text-charcoal-900" />
            </div>
            <h3 className="font-semibold text-charcoal-950 mb-2">Client Satisfaction</h3>
            <p className="text-2xl font-bold text-gold-600 mb-1">4.9/5</p>
            <p className="text-xs font-medium text-charcoal-600">Average rating</p>
          </div>
          
          <div className="text-center p-6 bg-ivory-50 rounded-xl">
            <div className="w-16 h-16 mx-auto gradient-gold rounded-full flex items-center justify-center shadow-lg mb-4">
              <TrendingUp className="w-8 h-8 text-charcoal-900" />
            </div>
            <h3 className="font-semibold text-charcoal-950 mb-2">Growth Rate</h3>
            <p className="text-2xl font-bold text-gold-600 mb-1">+31%</p>
            <p className="text-xs font-medium text-charcoal-600">Month over month</p>
          </div>
        </div>
      </motion.div>

      {/* Enhanced Features for Tier 2 and Tier 3 */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-12"
      >
        <EnhancedFeatures tier={3} />
      </motion.div>

      {/* AI Dominance Features */}
      {currentTier === 'ai-dominance' && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <AIInsights />
          <RealTimeMonitoring />
        </motion.div>
      )}

      {/* Performance Forecasting for AI Dominance */}
      {currentTier === 'ai-dominance' && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <PerformanceForecasting />
        </motion.div>
      )}

      {/* Tier-specific gated features */}
      <TierDashboard feature="Real-Time Ad Performance">
        <div className="ultra-luxury-card rounded-2xl p-8 luxury-glow">
          <h3 className="text-xl sm:text-2xl font-bold text-charcoal-900 mb-6">
            Real-Time Ad Performance
          </h3>
          <div className="h-64 bg-gradient-to-br from-gold-50 to-blue-50 rounded-xl flex items-center justify-center">
            <div className="text-center">
              <BarChart3 className="w-16 h-16 text-gold-500 mx-auto mb-4" />
              <p className="text-charcoal-700 font-medium">Live ad performance data</p>
            </div>
          </div>
        </div>
      </TierDashboard>

      <TierDashboard feature="Creative Library">
        <div className="ultra-luxury-card rounded-2xl p-8 luxury-glow">
          <h3 className="text-xl sm:text-2xl font-bold text-charcoal-900 mb-6">
            Creative Library
          </h3>
          <div className="h-64 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl flex items-center justify-center">
            <div className="text-center">
              <Target className="w-16 h-16 text-purple-500 mx-auto mb-4" />
              <p className="text-charcoal-700 font-medium">Creative assets and templates</p>
            </div>
          </div>
        </div>
      </TierDashboard>

      <TierDashboard feature="Dedicated Account Chat">
        <div className="ultra-luxury-card rounded-2xl p-8 luxury-glow">
          <h3 className="text-xl sm:text-2xl font-bold text-charcoal-900 mb-6">
            Dedicated Account Chat
          </h3>
          <div className="h-64 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl flex items-center justify-center">
            <div className="text-center">
              <Users className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <p className="text-charcoal-700 font-medium">Direct communication with your account manager</p>
            </div>
          </div>
        </div>
      </TierDashboard>

      {/* Footer */}
      <div className="mt-16 pt-8 border-t border-charcoal-200 text-center">
        <p className="text-sm text-charcoal-600 font-medium">
          Powered by Valenza AI • {tierConfig.displayName}
        </p>
      </div>
    </div>
  );
};

export default function DashboardPage() {
  return <DashboardContent />;
}