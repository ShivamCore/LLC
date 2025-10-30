export type ClientTier = 'launch' | 'growth' | 'ai-dominance';

export interface TierConfig {
  name: string;
  displayName: string;
  colorScheme: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
  };
  features: string[];
  dataRefresh: 'weekly' | 'daily' | 'realtime';
  welcomeMessage: string;
  upgradeRequired: boolean;
}

export const tierConfigs: Record<ClientTier, TierConfig> = {
  'launch': {
    name: 'launch',
    displayName: 'Launch Plan',
    colorScheme: {
      primary: 'white',
      secondary: 'gold-500',
      accent: 'gold-600',
      background: 'white',
      text: 'charcoal-900'
    },
    features: [
      'Campaign Overview',
      'Weekly Reports',
      'Strategy Docs'
    ],
    dataRefresh: 'weekly',
    welcomeMessage: 'Welcome to Valenza Portal — your campaigns are being monitored and updated weekly.',
    upgradeRequired: true
  },
  'growth': {
    name: 'growth',
    displayName: 'Growth Plan',
    colorScheme: {
      primary: 'gradient-gold-blue',
      secondary: 'blue-500',
      accent: 'gold-600',
      background: 'gradient-to-br from-gold-50 to-blue-50',
      text: 'charcoal-900'
    },
    features: [
      'Campaign Overview',
      'Weekly Reports',
      'Strategy Docs',
      'Real-Time Ad Performance',
      'Creative Library',
      'Dedicated Account Chat'
    ],
    dataRefresh: 'daily',
    welcomeMessage: 'Welcome to Valenza Portal — your ad data refreshes daily for faster optimization.',
    upgradeRequired: true
  },
  'ai-dominance': {
    name: 'ai-dominance',
    displayName: 'AI Dominance Plan',
    colorScheme: {
      primary: 'charcoal-900',
      secondary: 'gold-500',
      accent: 'gold-400',
      background: 'gradient-to-br from-charcoal-900 to-gold-900',
      text: 'white'
    },
    features: [
      'Campaign Overview',
      'Weekly Reports',
      'Strategy Docs',
      'Real-Time Ad Performance',
      'Creative Library',
      'Dedicated Account Chat',
      'AI Insights',
      'Real-Time Monitoring',
      'Performance Forecasting'
    ],
    dataRefresh: 'realtime',
    welcomeMessage: 'Welcome to Valenza Portal — your campaigns are monitored by Valenza AI in real-time.',
    upgradeRequired: false
  }
};

export const getTierConfig = (tier: ClientTier): TierConfig => {
  return tierConfigs[tier];
};

export const getTierFromString = (tierString: string): ClientTier => {
  switch (tierString.toLowerCase()) {
    case 'launch':
    case 'launch plan':
      return 'launch';
    case 'growth':
    case 'growth plan':
      return 'growth';
    case 'ai dominance':
    case 'ai-dominance':
    case 'ai dominance plan':
      return 'ai-dominance';
    default:
      return 'launch'; // Default to launch tier
  }
};
