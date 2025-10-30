"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Brain, TrendingUp, Target, Zap, AlertCircle, CheckCircle } from 'lucide-react';
import { TierDashboard } from './tier-dashboard';

interface AIInsight {
  id: string;
  type: 'optimization' | 'prediction' | 'alert' | 'success';
  title: string;
  description: string;
  confidence: number;
  impact: 'high' | 'medium' | 'low';
  timestamp: Date;
}

export const AIInsights: React.FC = () => {
  const [insights, setInsights] = useState<AIInsight[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate AI insights generation
    const generateInsights = () => {
      const mockInsights: AIInsight[] = [
        {
          id: '1',
          type: 'optimization',
          title: 'Budget Reallocation Opportunity',
          description: 'AI recommends shifting 15% of Facebook budget to Instagram based on 23% higher engagement rates.',
          confidence: 94,
          impact: 'high',
          timestamp: new Date()
        },
        {
          id: '2',
          type: 'prediction',
          title: 'Lead Volume Forecast',
          description: 'Expected 34% increase in qualified leads next week based on seasonal trends and current performance.',
          confidence: 87,
          impact: 'medium',
          timestamp: new Date()
        },
        {
          id: '3',
          type: 'alert',
          title: 'Ad Fatigue Detected',
          description: 'Creative performance declining 8% over 3 days. Recommend refreshing ad creative within 48 hours.',
          confidence: 92,
          impact: 'high',
          timestamp: new Date()
        },
        {
          id: '4',
          type: 'success',
          title: 'Automation Triggered',
          description: 'SMS follow-up sequence activated for 12 leads who didn\'t respond to email within 2 hours.',
          confidence: 100,
          impact: 'medium',
          timestamp: new Date()
        }
      ];
      
      setInsights(mockInsights);
      setIsLoading(false);
    };

    generateInsights();
    
    // Refresh insights every 5 minutes for real-time feel
    const interval = setInterval(generateInsights, 300000);
    return () => clearInterval(interval);
  }, []);

  const getInsightIcon = (type: string) => {
    switch (type) {
      case 'optimization':
        return <TrendingUp className="w-5 h-5" />;
      case 'prediction':
        return <Target className="w-5 h-5" />;
      case 'alert':
        return <AlertCircle className="w-5 h-5" />;
      case 'success':
        return <CheckCircle className="w-5 h-5" />;
      default:
        return <Brain className="w-5 h-5" />;
    }
  };

  const getInsightColor = (type: string) => {
    switch (type) {
      case 'optimization':
        return 'text-blue-600 bg-blue-50 border-blue-200';
      case 'prediction':
        return 'text-purple-600 bg-purple-50 border-purple-200';
      case 'alert':
        return 'text-orange-600 bg-orange-50 border-orange-200';
      case 'success':
        return 'text-green-600 bg-green-50 border-green-200';
      default:
        return 'text-charcoal-600 bg-charcoal-50 border-charcoal-200';
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
    <TierDashboard feature="AI Insights">
      <div className="bg-white rounded-2xl p-8 shadow-xl border border-gold-200">
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
            <Brain className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-charcoal-900 tracking-wide">
              AI Insights
            </h3>
            <p className="text-sm text-charcoal-600 font-medium">
              Powered by Valenza AI • Real-time analysis
            </p>
          </div>
        </div>

        {isLoading ? (
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="h-20 bg-charcoal-100 rounded-xl"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {insights.map((insight, index) => (
              <motion.div
                key={insight.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`p-6 rounded-xl border-2 ${getInsightColor(insight.type)} hover:shadow-lg transition-all duration-300`}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {getInsightIcon(insight.type)}
                  </div>
                  
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-charcoal-900 text-sm sm:text-base">
                        {insight.title}
                      </h4>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getImpactColor(insight.impact)}`}>
                          {insight.impact} impact
                        </span>
                        <span className="text-xs font-medium text-charcoal-500">
                          {insight.confidence}% confidence
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-charcoal-700 font-medium leading-relaxed text-sm">
                      {insight.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs font-medium text-charcoal-500">
                      <span>
                        {insight.timestamp.toLocaleTimeString()}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Zap className="w-3 h-3" />
                        <span>AI Generated</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <div className="mt-8 pt-6 border-t border-charcoal-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-sm font-medium text-charcoal-600">
              <Brain className="w-4 h-4" />
              <span>Powered by Valenza AI</span>
            </div>
            <button className="text-gold-600 hover:text-gold-700 font-semibold text-sm">
              View All Insights
            </button>
          </div>
        </div>
      </div>
    </TierDashboard>
  );
};
