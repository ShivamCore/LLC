export interface Client {
  id: string;
  name: string;
  medspacName: string;
  email: string;
  phone: string;
  subscription: {
    plan: string;
    status: 'active' | 'pending' | 'cancelled';
    nextPayment: string;
    amount: number;
  };
  campaigns: Campaign[];
  invoices: Invoice[];
  notifications: Notification[];
}

export interface Campaign {
  id: string;
  name: string;
  status: 'active' | 'paused' | 'completed';
  platform: 'Meta' | 'Google' | 'TikTok';
  startDate: string;
  endDate?: string;
  budget: number;
  spent: number;
  metrics: {
    impressions: number;
    clicks: number;
    leads: number;
    appointments: number;
    ctr: number;
    cpc: number;
    cpl: number;
    roas: number;
    roi: number;
  };
  dailyData: Array<{
    date: string;
    impressions: number;
    clicks: number;
    leads: number;
    spent: number;
  }>;
  creatives: Array<{
    id: string;
    type: 'image' | 'video';
    url: string;
    title: string;
    performance: 'high' | 'medium' | 'low';
  }>;
}

export interface Invoice {
  id: string;
  number: string;
  amount: number;
  dueDate: string;
  paidDate?: string;
  status: 'paid' | 'pending' | 'overdue';
  description: string;
  items: Array<{
    description: string;
    amount: number;
  }>;
  downloadUrl: string;
}

export interface Notification {
  id: string;
  type: 'payment' | 'campaign' | 'report' | 'milestone';
  title: string;
  message: string;
  date: string;
  read: boolean;
  actionUrl?: string;
}

// Mock client data
export const mockClient: Client = {
  id: "client-001",
  name: "Dr. Sarah Johnson",
  medspacName: "Luxe Aesthetics",
  email: "sarah@luxeaesthetics.com",
  phone: "+1 (555) 123-4567",
  subscription: {
    plan: "Premium Growth",
    status: "active",
    nextPayment: "2025-11-15",
    amount: 4997
  },
  campaigns: [
    {
      id: "campaign-001",
      name: "Holiday Botox Promotion",
      status: "active",
      platform: "Meta",
      startDate: "2025-10-01",
      budget: 5000,
      spent: 3200,
      metrics: {
        impressions: 45000,
        clicks: 1850,
        leads: 89,
        appointments: 67,
        ctr: 4.1,
        cpc: 1.73,
        cpl: 35.96,
        roas: 5.2,
        roi: 420
      },
      dailyData: [
        { date: "2025-10-15", impressions: 2100, clicks: 85, leads: 4, spent: 147 },
        { date: "2025-10-14", impressions: 1950, clicks: 78, leads: 3, spent: 135 },
        { date: "2025-10-13", impressions: 2300, clicks: 96, leads: 5, spent: 166 },
        { date: "2025-10-12", impressions: 1800, clicks: 72, leads: 3, spent: 125 },
        { date: "2025-10-11", impressions: 2200, clicks: 89, leads: 4, spent: 154 }
      ],
      creatives: [
        {
          id: "creative-001",
          type: "image",
          url: "/dashboard/creatives/botox-promo.jpg",
          title: "Botox Before & After",
          performance: "high"
        },
        {
          id: "creative-002",
          type: "video",
          url: "/dashboard/creatives/treatment-video.mp4",
          title: "Treatment Process",
          performance: "medium"
        }
      ]
    },
    {
      id: "campaign-002", 
      name: "Filler Consultation Drive",
      status: "active",
      platform: "Google",
      startDate: "2025-09-15",
      budget: 3000,
      spent: 2800,
      metrics: {
        impressions: 28000,
        clicks: 980,
        leads: 45,
        appointments: 34,
        ctr: 3.5,
        cpc: 2.86,
        cpl: 62.22,
        roas: 4.8,
        roi: 380
      },
      dailyData: [
        { date: "2025-10-15", impressions: 1200, clicks: 42, leads: 2, spent: 120 },
        { date: "2025-10-14", impressions: 1100, clicks: 38, leads: 1, spent: 109 },
        { date: "2025-10-13", impressions: 1350, clicks: 47, leads: 2, spent: 135 },
        { date: "2025-10-12", impressions: 980, clicks: 34, leads: 1, spent: 97 },
        { date: "2025-10-11", impressions: 1250, clicks: 44, leads: 2, spent: 126 }
      ],
      creatives: [
        {
          id: "creative-003",
          type: "image", 
          url: "/dashboard/creatives/filler-results.jpg",
          title: "Natural Filler Results",
          performance: "high"
        }
      ]
    }
  ],
  invoices: [
    {
      id: "inv-001",
      number: "GGM-2025-001",
      amount: 4997,
      dueDate: "2025-11-01",
      status: "paid",
      paidDate: "2025-10-28",
      description: "Premium Growth Package - November 2025",
      items: [
        { description: "Premium Growth Package", amount: 4997 }
      ],
      downloadUrl: "/dashboard/invoices/GGM-2025-001.pdf"
    },
    {
      id: "inv-002",
      number: "GGM-2025-002", 
      amount: 4997,
      dueDate: "2025-12-01",
      status: "pending",
      description: "Premium Growth Package - December 2025",
      items: [
        { description: "Premium Growth Package", amount: 4997 }
      ],
      downloadUrl: "/dashboard/invoices/GGM-2025-002.pdf"
    }
  ],
  notifications: [
    {
      id: "notif-001",
      type: "payment",
      title: "Payment Processed Successfully",
      message: "Your November payment of $3,500 has been processed successfully.",
      date: "2025-10-28",
      read: false
    },
    {
      id: "notif-002",
      type: "milestone",
      title: "Campaign Milestone Reached",
      message: "Holiday Botox Promotion has generated 50+ leads this month!",
      date: "2025-10-25",
      read: true,
      actionUrl: "/dashboard/campaigns/campaign-001"
    },
    {
      id: "notif-003",
      type: "report",
      title: "Monthly Report Available",
      message: "Your October performance report is ready for download.",
      date: "2025-10-31",
      read: false,
      actionUrl: "/dashboard/reports"
    }
  ]
};

export const dashboardConfig = {
  company: {
    name: "Valenza Media",
    logo: "/logos/valenza-logo.png",
    supportEmail: "support@valenzamedia.com",
    supportPhone: "+1 (555) 123-GROW"
  },
  features: {
    paymentsEnabled: true,
    reportsEnabled: true,
    notificationsEnabled: true,
    campaignDetailsEnabled: true
  }
};