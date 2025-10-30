// Meta Ads API Integration
export class MetaAdsAPI {
  private accessToken: string;
  private baseUrl = 'https://graph.facebook.com/v18.0';

  constructor(accessToken: string) {
    this.accessToken = accessToken;
  }

  async getCampaigns(accountId: string) {
    const response = await fetch(
      `${this.baseUrl}/${accountId}/campaigns?fields=id,name,status,objective,created_time,updated_time&access_token=${this.accessToken}`
    );
    
    if (!response.ok) {
      throw new Error(`Meta Ads API error: ${response.statusText}`);
    }
    
    return response.json();
  }

  async getCampaignInsights(accountId: string, campaignId: string, dateRange: { since: string; until: string }) {
    const response = await fetch(
      `${this.baseUrl}/${campaignId}/insights?fields=impressions,clicks,spend,conversions,conversion_values,cost_per_conversion,cpc,cpm,ctr,reach,frequency&time_range=${JSON.stringify(dateRange)}&access_token=${this.accessToken}`
    );
    
    if (!response.ok) {
      throw new Error(`Meta Ads API error: ${response.statusText}`);
    }
    
    return response.json();
  }

  async getAdSets(accountId: string) {
    const response = await fetch(
      `${this.baseUrl}/${accountId}/adsets?fields=id,name,status,campaign_id,created_time,updated_time&access_token=${this.accessToken}`
    );
    
    if (!response.ok) {
      throw new Error(`Meta Ads API error: ${response.statusText}`);
    }
    
    return response.json();
  }

  async getAds(accountId: string) {
    const response = await fetch(
      `${this.baseUrl}/${accountId}/ads?fields=id,name,status,adset_id,created_time,updated_time&access_token=${this.accessToken}`
    );
    
    if (!response.ok) {
      throw new Error(`Meta Ads API error: ${response.statusText}`);
    }
    
    return response.json();
  }

  async updateCampaignBudget(campaignId: string, budget: number) {
    const response = await fetch(
      `${this.baseUrl}/${campaignId}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          daily_budget: budget * 100, // Convert to cents
          access_token: this.accessToken,
        }),
      }
    );
    
    if (!response.ok) {
      throw new Error(`Meta Ads API error: ${response.statusText}`);
    }
    
    return response.json();
  }
}

// Google Ads API Integration
export class GoogleAdsAPI {
  private accessToken: string;
  private customerId: string;
  private baseUrl = 'https://googleads.googleapis.com/v14';

  constructor(accessToken: string, customerId: string) {
    this.accessToken = accessToken;
    this.customerId = customerId;
  }

  async getCampaigns() {
    const query = `
      SELECT 
        campaign.id,
        campaign.name,
        campaign.status,
        campaign.advertising_channel_type,
        campaign.start_date,
        campaign.end_date
      FROM campaign
      WHERE campaign.status != 'REMOVED'
    `;

    const response = await fetch(
      `${this.baseUrl}/customers/${this.customerId}/googleAds:search`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query,
        }),
      }
    );
    
    if (!response.ok) {
      throw new Error(`Google Ads API error: ${response.statusText}`);
    }
    
    return response.json();
  }

  async getCampaignMetrics(campaignId: string, dateRange: { startDate: string; endDate: string }) {
    const query = `
      SELECT 
        campaign.id,
        campaign.name,
        metrics.impressions,
        metrics.clicks,
        metrics.cost_micros,
        metrics.conversions,
        metrics.conversions_value,
        metrics.cost_per_conversion,
        metrics.average_cpc,
        metrics.ctr,
        metrics.cost_micros
      FROM campaign
      WHERE campaign.id = ${campaignId}
      AND segments.date BETWEEN '${dateRange.startDate}' AND '${dateRange.endDate}'
    `;

    const response = await fetch(
      `${this.baseUrl}/customers/${this.customerId}/googleAds:search`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query,
        }),
      }
    );
    
    if (!response.ok) {
      throw new Error(`Google Ads API error: ${response.statusText}`);
    }
    
    return response.json();
  }

  async getAdGroups(campaignId: string) {
    const query = `
      SELECT 
        ad_group.id,
        ad_group.name,
        ad_group.status,
        ad_group.campaign
      FROM ad_group
      WHERE ad_group.campaign = ${campaignId}
    `;

    const response = await fetch(
      `${this.baseUrl}/customers/${this.customerId}/googleAds:search`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query,
        }),
      }
    );
    
    if (!response.ok) {
      throw new Error(`Google Ads API error: ${response.statusText}`);
    }
    
    return response.json();
  }

  async updateCampaignBudget(campaignId: string, budget: number) {
    const response = await fetch(
      `${this.baseUrl}/customers/${this.customerId}/campaignBudgets:mutate`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          operations: [{
            update: {
              resource_name: `customers/${this.customerId}/campaignBudgets/${campaignId}`,
              daily_budget_micros: budget * 1000000, // Convert to micros
            },
            update_mask: {
              paths: ['daily_budget_micros'],
            },
          }],
        }),
      }
    );
    
    if (!response.ok) {
      throw new Error(`Google Ads API error: ${response.statusText}`);
    }
    
    return response.json();
  }
}

// Unified Ads Manager
export class AdsManager {
  private metaAPI: MetaAdsAPI | null = null;
  private googleAPI: GoogleAdsAPI | null = null;

  constructor(metaAccessToken?: string, googleAccessToken?: string, googleCustomerId?: string) {
    if (metaAccessToken) {
      this.metaAPI = new MetaAdsAPI(metaAccessToken);
    }
    if (googleAccessToken && googleCustomerId) {
      this.googleAPI = new GoogleAdsAPI(googleAccessToken, googleCustomerId);
    }
  }

  async getAllCampaigns() {
    const campaigns = [];

    if (this.metaAPI) {
      try {
        const metaCampaigns = await this.metaAPI.getCampaigns('act_123456789'); // Replace with actual account ID
        campaigns.push(...metaCampaigns.data.map((campaign: any) => ({
          ...campaign,
          platform: 'meta',
        })));
      } catch (error) {
        console.error('Meta Ads API error:', error);
      }
    }

    if (this.googleAPI) {
      try {
        const googleCampaigns = await this.googleAPI.getCampaigns();
        campaigns.push(...googleCampaigns.results.map((campaign: any) => ({
          ...campaign,
          platform: 'google',
        })));
      } catch (error) {
        console.error('Google Ads API error:', error);
      }
    }

    return campaigns;
  }

  async getCampaignPerformance(campaignId: string, platform: 'meta' | 'google', dateRange: any) {
    if (platform === 'meta' && this.metaAPI) {
      return await this.metaAPI.getCampaignInsights('act_123456789', campaignId, dateRange);
    } else if (platform === 'google' && this.googleAPI) {
      return await this.googleAPI.getCampaignMetrics(campaignId, dateRange);
    }
    
    throw new Error(`Unsupported platform: ${platform}`);
  }

  async updateBudget(campaignId: string, platform: 'meta' | 'google', budget: number) {
    if (platform === 'meta' && this.metaAPI) {
      return await this.metaAPI.updateCampaignBudget(campaignId, budget);
    } else if (platform === 'google' && this.googleAPI) {
      return await this.googleAPI.updateCampaignBudget(campaignId, budget);
    }
    
    throw new Error(`Unsupported platform: ${platform}`);
  }
}
