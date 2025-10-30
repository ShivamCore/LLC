"use client";

import React from 'react';
import { useTier } from '@/contexts/tier-context';
import { ClientTier } from '@/data/tier-config';
import { Star, Crown, Zap } from 'lucide-react';

export const TierSwitcher: React.FC = () => {
  const { currentTier, setTier } = useTier();
  
  console.log('Current tier:', currentTier);

  const tiers: { tier: ClientTier; icon: React.ReactNode; label: string }[] = [
    { tier: 'launch', icon: <Star className="w-4 h-4" />, label: 'Launch' },
    { tier: 'growth', icon: <Crown className="w-4 h-4" />, label: 'Growth' },
    { tier: 'ai-dominance', icon: <Zap className="w-4 h-4" />, label: 'AI Dominance' }
  ];

  return (
    <div className="fixed top-4 right-4 z-50 bg-white rounded-xl shadow-2xl border border-gold-300 p-4">
      <div className="flex items-center space-x-2 mb-3">
        <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
        <span className="text-sm font-bold text-charcoal-900">Tier Switcher</span>
        <span className="text-xs text-charcoal-600 font-medium">({currentTier})</span>
      </div>
      <div className="flex space-x-2">
        {tiers.map(({ tier, icon, label }) => {
          const isSelected = currentTier === tier;
          console.log(`Tier ${tier} is selected:`, isSelected);
          
          return (
            <button
              key={tier}
              onClick={() => {
                console.log('Setting tier to:', tier);
                setTier(tier);
              }}
              className={`flex items-center space-x-1 px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200 ${
                isSelected
                  ? 'bg-yellow-500 text-black shadow-lg border-2 border-yellow-600 scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border-2 border-gray-300 hover:border-yellow-400'
              }`}
            >
              {icon}
              <span>{label}</span>
              {isSelected && <span className="ml-1">✓</span>}
            </button>
          );
        })}
      </div>
    </div>
  );
};
