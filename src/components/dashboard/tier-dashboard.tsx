"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useTier } from '@/contexts/tier-context';
import { Lock, Crown, Star, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TierDashboardProps {
  children: React.ReactNode;
  feature: string;
  className?: string;
}

export const TierDashboard: React.FC<TierDashboardProps> = ({ 
  children, 
  feature, 
  className = '' 
}) => {
  const { isFeatureAvailable, getUpgradeMessage, tierConfig, currentTier } = useTier();
  const isAvailable = isFeatureAvailable(feature);

  const getTierIcon = () => {
    switch (currentTier) {
      case 'launch':
        return <Star className="w-5 h-5" />;
      case 'growth':
        return <Crown className="w-5 h-5" />;
      case 'ai-dominance':
        return <Zap className="w-5 h-5" />;
      default:
        return <Star className="w-5 h-5" />;
    }
  };

  const getTierGradient = () => {
    switch (currentTier) {
      case 'launch':
        return 'from-white to-gold-50';
      case 'growth':
        return 'from-gold-50 to-blue-50';
      case 'ai-dominance':
        return 'from-charcoal-900 to-gold-900';
      default:
        return 'from-white to-gold-50';
    }
  };

  if (isAvailable) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`${className} relative`}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`${className} relative group`}
    >
      {/* Blurred Content */}
      <div className="blur-sm pointer-events-none select-none">
        {children}
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-charcoal-900/80 backdrop-blur-sm rounded-2xl flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-center space-y-6 p-8"
        >
          {/* Lock Icon */}
          <div className="w-16 h-16 mx-auto bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center shadow-2xl">
            <Lock className="w-8 h-8 text-white" />
          </div>
          
          {/* Feature Name */}
          <div className="space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold text-charcoal-900 tracking-wide">
            {feature}
          </h3>
          <p className="text-base sm:text-lg text-charcoal-700 font-medium">
            {getUpgradeMessage()}
          </p>
          </div>
          
          {/* Tier Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-gold-500 to-gold-600 text-white rounded-full text-sm font-semibold">
            {getTierIcon()}
            <span>Current: {tierConfig.displayName}</span>
          </div>
          
          {/* Upgrade Button */}
          <Button
            onClick={() => {
              // Redirect to pricing page
              window.open('/#pricing', '_blank');
            }}
            className="btn-gold luxury-button text-base sm:text-lg px-8 py-4 rounded-2xl shadow-2xl font-semibold tracking-wide"
          >
            Upgrade Plan
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Tier-specific welcome banner
export const TierWelcomeBanner: React.FC = () => {
  const { tierConfig, currentTier } = useTier();

  const getTierGradient = () => {
    switch (currentTier) {
      case 'launch':
        return 'from-white via-gold-50 to-white';
      case 'growth':
        return 'from-gold-50 via-blue-50 to-gold-50';
      case 'ai-dominance':
        return 'from-charcoal-900 via-gold-900 to-charcoal-900';
      default:
        return 'from-white via-gold-50 to-white';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`bg-gradient-to-r ${getTierGradient()} rounded-2xl p-6 shadow-xl border border-gold-200 mb-8`}
    >
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-bold text-charcoal-900 tracking-wide">
            {tierConfig.welcomeMessage}
          </h2>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-charcoal-700 font-semibold">
              Current Plan:
            </span>
            <span className="inline-flex items-center space-x-1 px-3 py-1 bg-gold-500 text-charcoal-900 rounded-full text-sm font-semibold">
              <span>{tierConfig.displayName}</span>
              <span>✦</span>
            </span>
            {currentTier !== 'ai-dominance' && (
              <span className="text-sm text-charcoal-600 font-medium">
                Upgrade Anytime
              </span>
            )}
          </div>
        </div>
        
        {tierConfig.upgradeRequired && (
          <Button
            onClick={() => window.open('/#pricing', '_blank')}
            className="btn-gold luxury-button px-6 py-3 rounded-xl shadow-lg font-semibold"
          >
            Upgrade Plan
          </Button>
        )}
      </div>
    </motion.div>
  );
};
