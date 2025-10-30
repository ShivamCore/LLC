"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { ClientTier, getTierConfig, getTierFromString } from '@/data/tier-config';

interface TierContextType {
  currentTier: ClientTier;
  setTier: (tier: ClientTier) => void;
  tierConfig: ReturnType<typeof getTierConfig>;
  isFeatureAvailable: (feature: string) => boolean;
  getUpgradeMessage: () => string;
}

const TierContext = createContext<TierContextType | undefined>(undefined);

export const useTier = () => {
  const context = useContext(TierContext);
  if (context === undefined) {
    throw new Error('useTier must be used within a TierProvider');
  }
  return context;
};

interface TierProviderProps {
  children: React.ReactNode;
  initialTier?: ClientTier;
}

export const TierProvider: React.FC<TierProviderProps> = ({ 
  children, 
  initialTier = 'launch' 
}) => {
  const [currentTier, setCurrentTier] = useState<ClientTier>(initialTier);
  const tierConfig = getTierConfig(currentTier);

  // Load tier from localStorage on mount
  useEffect(() => {
    const savedTier = localStorage.getItem('valenza-client-tier');
    if (savedTier) {
      const tier = getTierFromString(savedTier);
      setCurrentTier(tier);
    }
  }, []);

  // Save tier to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('valenza-client-tier', currentTier);
  }, [currentTier]);

  const setTier = (tier: ClientTier) => {
    setCurrentTier(tier);
  };

  const isFeatureAvailable = (feature: string): boolean => {
    return tierConfig.features.includes(feature);
  };

  const getUpgradeMessage = (): string => {
    if (currentTier === 'ai-dominance') {
      return 'You have access to all features!';
    }
    
    const nextTier = currentTier === 'launch' ? 'Growth Plan' : 'AI Dominance Plan';
    return `Upgrade to ${nextTier} to unlock this feature`;
  };

  const value: TierContextType = {
    currentTier,
    setTier,
    tierConfig,
    isFeatureAvailable,
    getUpgradeMessage
  };

  return (
    <TierContext.Provider value={value}>
      {children}
    </TierContext.Provider>
  );
};
