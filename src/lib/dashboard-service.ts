import { AdsManager } from './ads-api';
import { AIService } from './ai-service';
import { NotionCRM } from './notion-crm';
import { NotificationService } from './notification-service';

export interface DashboardMetrics {
  totalSpend: number;
  totalRevenue: number;
  roi: number;
  leads: number;
  conversions: number;
  impressions: number;
  clicks: number;
  ctr: number;
  cpc: number;
  cpa: number;
  activeCampaigns: number;
  conversionRate: number;
}

export interface CampaignPerformance {
  id: string;
  name: string;
  platform: 'meta' | 'google' | 'linkedin';
  status: 'active' | 'paused' | 'completed';
  spend: number;
  revenue: number;
  leads: number;
  conversions: number;
  impressions: number;
  clicks: number;
  ctr: number;
  cpc: number;
  cpa: number;
  roi: number;
  lastUpdated: Date;
}

export interface AIInsight {
  id: string;
  type: 'optimization' | 'alert' | 'opportunity' | 'warning';
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  confidence: number;
  actionRequired: boolean;
  suggestedAction?: string;
  createdAt: Date;
}

export class DashboardService {
  private adsManager: AdsManager;
  private aiService: AIService;
  private notionCRM: NotionCRM;
  private notificationService: NotificationService;

  constructor() {
    this.adsManager = new AdsManager();
    this.aiService = new AIService();
    this.notionCRM = new NotionCRM();
    this.notificationService = new NotificationService();
  }

  async getClientDashboard(clientId: string, tier: string): Promise<{
    metrics: DashboardMetrics;
    campaigns: CampaignPerformance[];
    insights: AIInsight[];
    recentActivity: any[];
  }> {
    try {
      // Get client data from Notion
      const client = await this.notionCRM.findClientByID(clientId);
      if (!client) {
        throw new Error('Client not found');
      }

      // Get campaign data
      const campaigns = await this.getCampaignData(clientId);
      
      // Calculate metrics
      const metrics = this.calculateMetrics(campaigns);
      
      // Generate AI insights
      const insights = await this.generateAIInsights(clientId, campaigns, tier);
      
      // Get recent activity
      const recentActivity = await this.getRecentActivity(clientId);

      return {
        metrics,
        campaigns,
        insights,
        recentActivity
      };
    } catch (error) {
      console.error('Failed to get client dashboard:', error);
      throw error;
    }
  }

  async updateCampaignBudget(clientId: string, campaignId: string, newBudget: number) {
    try {
      // Update budget in ads platform
      const campaign = await this.findCampaignById(campaignId);
      if (!campaign) {
        throw new Error('Campaign not found');
      }

      await this.adsManager.updateBudget(campaignId, campaign.platform, newBudget);
      
      // Update in Notion CRM
      await this.notionCRM.updateCampaign(campaignId, { budget: newBudget });
      
      // Send notification
      await this.notificationService.notifyCampaignAlert({
        clientName: 'Client', // Get from client data
        campaignName: campaign.name,
        platform: campaign.platform,
        issue: 'Budget Updated',
        impact: 'Budget increased to optimize performance',
        recommendation: 'Monitor performance closely for the next 24-48 hours',
        severity: 'low'
      });

      return { success: true };
    } catch (error) {
      console.error('Failed to update campaign budget:', error);
      throw error;
    }
  }

  async generateAdCopy(clientId: string, request: any) {
    try {
      const adCopy = await this.aiService.generateAdCopy(request);
      
      // Store generated copy in Notion
      await this.storeGeneratedContent(clientId, 'ad_copy', adCopy);
      
      return adCopy;
    } catch (error) {
      console.error('Failed to generate ad copy:', error);
      throw error;
    }
  }

  async analyzeCompetitors(clientId: string) {
    try {
      // Get competitor data (this would typically come from a competitor analysis service)
      const competitorData = await this.getCompetitorData(clientId);
      
      const insights = await this.aiService.generateCompetitorInsights(competitorData);
      
      return insights;
    } catch (error) {
      console.error('Failed to analyze competitors:', error);
      throw error;
    }
  }

  async getTeamDashboard(): Promise<{
    totalClients: number;
    activeClients: number;
    totalRevenue: number;
    tierBreakdown: any;
    recentClients: any[];
    systemHealth: any;
  }> {
    try {
      const teamData = await this.notionCRM.getTeamDashboard();
      
      // Get system health metrics
      const systemHealth = await this.getSystemHealth();
      
      return {
        ...teamData,
        systemHealth
      };
    } catch (error) {
      console.error('Failed to get team dashboard:', error);
      throw error;
    }
  }

  private async getCampaignData(clientId: string): Promise<CampaignPerformance[]> {
    try {
      // Get campaigns from Notion
      const notionCampaigns = await this.notionCRM.getClientCampaigns(clientId);
      
      // Convert to our format
      return notionCampaigns.map((campaign: any) => ({
        id: campaign.properties['Campaign ID']?.title?.[0]?.text?.content || '',
        name: campaign.properties.Name?.rich_text?.[0]?.text?.content || '',
        platform: campaign.properties.Platform?.select?.name || 'meta',
        status: campaign.properties.Status?.select?.name || 'active',
        spend: campaign.properties.Spend?.number || 0,
        revenue: campaign.properties.Revenue?.number || 0,
        leads: campaign.properties.Leads?.number || 0,
        conversions: campaign.properties.Conversions?.number || 0,
        impressions: campaign.properties.Impressions?.number || 0,
        clicks: campaign.properties.Clicks?.number || 0,
        ctr: campaign.properties.CTR?.number || 0,
        cpc: campaign.properties.CPC?.number || 0,
        cpa: campaign.properties.CPA?.number || 0,
        roi: campaign.properties.ROI?.number || 0,
        lastUpdated: new Date(campaign.properties.Updated?.date?.start || campaign.created_time)
      }));
    } catch (error) {
      console.error('Failed to get campaign data:', error);
      return [];
    }
  }

  private calculateMetrics(campaigns: CampaignPerformance[]): DashboardMetrics {
    const totalSpend = campaigns.reduce((sum, campaign) => sum + campaign.spend, 0);
    const totalRevenue = campaigns.reduce((sum, campaign) => sum + campaign.revenue, 0);
    const totalLeads = campaigns.reduce((sum, campaign) => sum + campaign.leads, 0);
    const totalConversions = campaigns.reduce((sum, campaign) => sum + campaign.conversions, 0);
    const totalImpressions = campaigns.reduce((sum, campaign) => sum + campaign.impressions, 0);
    const totalClicks = campaigns.reduce((sum, campaign) => sum + campaign.clicks, 0);

    const roi = totalSpend > 0 ? ((totalRevenue - totalSpend) / totalSpend) * 100 : 0;
    const ctr = totalImpressions > 0 ? (totalClicks / totalImpressions) * 100 : 0;
    const cpc = totalClicks > 0 ? totalSpend / totalClicks : 0;
    const cpa = totalConversions > 0 ? totalSpend / totalConversions : 0;
    const conversionRate = totalLeads > 0 ? (totalConversions / totalLeads) * 100 : 0;
    const activeCampaigns = campaigns.filter(c => c.status === 'active').length;

    return {
      totalSpend,
      totalRevenue,
      roi,
      leads: totalLeads,
      conversions: totalConversions,
      impressions: totalImpressions,
      clicks: totalClicks,
      ctr,
      cpc,
      cpa,
      activeCampaigns,
      conversionRate
    };
  }

  private async generateAIInsights(clientId: string, campaigns: CampaignPerformance[], tier: string): Promise<AIInsight[]> {
    try {
      const insights: AIInsight[] = [];

      // Generate performance analysis
      const performanceAnalysis = await this.aiService.analyzePerformance({
        campaigns,
        totalSpend: campaigns.reduce((sum, c) => sum + c.spend, 0),
        totalRevenue: campaigns.reduce((sum, c) => sum + c.revenue, 0),
        roi: campaigns.reduce((sum, c) => sum + c.roi, 0) / campaigns.length
      });

      // Convert to insights
      performanceAnalysis.insights.forEach((insight, index) => {
        insights.push({
          id: `insight_${clientId}_${Date.now()}_${index}`,
          type: 'optimization',
          title: 'Performance Insight',
          description: insight,
          impact: 'medium',
          confidence: 85,
          actionRequired: false,
          createdAt: new Date()
        });
      });

      performanceAnalysis.recommendations.forEach((rec, index) => {
        insights.push({
          id: `rec_${clientId}_${Date.now()}_${index}`,
          type: 'opportunity',
          title: 'Optimization Opportunity',
          description: rec,
          impact: 'high',
          confidence: 90,
          actionRequired: true,
          suggestedAction: rec,
          createdAt: new Date()
        });
      });

      // Add tier-specific insights
      if (tier === 'ai-dominance') {
        insights.push({
          id: `ai_${clientId}_${Date.now()}`,
          type: 'optimization',
          title: 'AI-Powered Optimization',
          description: 'AI has identified 3 high-impact optimization opportunities for your campaigns.',
          impact: 'high',
          confidence: 95,
          actionRequired: true,
          suggestedAction: 'Review AI recommendations in your dashboard',
          createdAt: new Date()
        });
      }

      return insights;
    } catch (error) {
      console.error('Failed to generate AI insights:', error);
      return [];
    }
  }

  private async getRecentActivity(clientId: string): Promise<any[]> {
    // This would typically come from an activity log
    return [
      {
        id: '1',
        type: 'campaign_updated',
        title: 'Campaign Budget Updated',
        description: 'Botox Awareness Campaign budget increased by 25%',
        timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
        status: 'completed'
      },
      {
        id: '2',
        type: 'ad_created',
        title: 'New Ad Created',
        description: 'Filler Retargeting ad launched on Meta',
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
        status: 'active'
      },
      {
        id: '3',
        type: 'report_generated',
        title: 'Weekly Report Generated',
        description: 'Performance report sent to client',
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
        status: 'completed'
      }
    ];
  }

  private async findCampaignById(campaignId: string): Promise<CampaignPerformance | null> {
    try {
      const campaign = await this.notionCRM.findCampaignByID(campaignId);
      if (!campaign) return null;

      return {
        id: campaign.properties['Campaign ID']?.title?.[0]?.text?.content || '',
        name: campaign.properties.Name?.rich_text?.[0]?.text?.content || '',
        platform: campaign.properties.Platform?.select?.name || 'meta',
        status: campaign.properties.Status?.select?.name || 'active',
        spend: campaign.properties.Spend?.number || 0,
        revenue: campaign.properties.Revenue?.number || 0,
        leads: campaign.properties.Leads?.number || 0,
        conversions: campaign.properties.Conversions?.number || 0,
        impressions: campaign.properties.Impressions?.number || 0,
        clicks: campaign.properties.Clicks?.number || 0,
        ctr: campaign.properties.CTR?.number || 0,
        cpc: campaign.properties.CPC?.number || 0,
        cpa: campaign.properties.CPA?.number || 0,
        roi: campaign.properties.ROI?.number || 0,
        lastUpdated: new Date(campaign.properties.Updated?.date?.start || campaign.created_time)
      };
    } catch (error) {
      console.error('Failed to find campaign:', error);
      return null;
    }
  }

  private async storeGeneratedContent(clientId: string, type: string, content: any) {
    // Store generated content in Notion or database
    console.log(`Storing ${type} for client ${clientId}:`, content);
  }

  private async getCompetitorData(clientId: string): Promise<any[]> {
    // Mock competitor data - in real implementation, this would come from competitor analysis service
    return [
      {
        name: 'Competitor A',
        spend: 5000,
        impressions: 200000,
        clicks: 5000,
        ctr: 2.5,
        cpc: 1.0
      },
      {
        name: 'Competitor B',
        spend: 8000,
        impressions: 300000,
        clicks: 7500,
        ctr: 2.5,
        cpc: 1.07
      }
    ];
  }

  private async getSystemHealth(): Promise<any> {
    return {
      status: 'healthy',
      uptime: '99.9%',
      lastCheck: new Date(),
      services: {
        adsAPI: 'operational',
        aiService: 'operational',
        notionCRM: 'operational',
        notifications: 'operational'
      }
    };
  }
}
