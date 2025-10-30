// import { Client } from '@notionhq/client';

// const notion = new Client({
//   auth: process.env.NOTION_API_KEY,
// });

export interface ClientData {
  id: string;
  businessName: string;
  businessType: string;
  email: string;
  phone: string;
  location: string;
  tier: 'launch' | 'growth' | 'ai-dominance';
  status: 'onboarding' | 'active' | 'paused' | 'cancelled';
  monthlyRevenue?: number;
  lastLogin?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface CampaignData {
  id: string;
  clientId: string;
  name: string;
  platform: 'meta' | 'google' | 'linkedin';
  status: 'active' | 'paused' | 'completed';
  budget: number;
  spend: number;
  impressions: number;
  clicks: number;
  conversions: number;
  roi: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ReportData {
  id: string;
  clientId: string;
  month: string;
  year: number;
  totalSpend: number;
  totalRevenue: number;
  roi: number;
  leads: number;
  conversions: number;
  status: 'draft' | 'sent' | 'delivered';
  createdAt: Date;
}

export class NotionCRM {
  private clientsDbId: string;
  private campaignsDbId: string;
  private reportsDbId: string;

  constructor() {
    this.clientsDbId = process.env.NOTION_CLIENTS_DB_ID!;
    this.campaignsDbId = process.env.NOTION_CAMPAIGNS_DB_ID!;
    this.reportsDbId = process.env.NOTION_REPORTS_DB_ID!;
  }

  // Client Management
  async createClient(data: ClientData) {
    try {
      const response = await notion.pages.create({
        parent: { database_id: this.clientsDbId },
        properties: {
          'Client ID': {
            title: [{ text: { content: data.id } }]
          },
          'Business Name': {
            rich_text: [{ text: { content: data.businessName } }]
          },
          'Business Type': {
            select: { name: data.businessType }
          },
          'Email': {
            email: data.email
          },
          'Phone': {
            phone_number: data.phone
          },
          'Location': {
            rich_text: [{ text: { content: data.location } }]
          },
          'Tier': {
            select: { name: data.tier }
          },
          'Status': {
            select: { name: data.status }
          },
          'Monthly Revenue': {
            number: data.monthlyRevenue || 0
          },
          'Last Login': {
            date: data.lastLogin ? { start: data.lastLogin.toISOString() } : null
          },
          'Created': {
            date: { start: data.createdAt.toISOString() }
          },
          'Updated': {
            date: { start: data.updatedAt.toISOString() }
          }
        }
      });

      return response;
    } catch (error) {
      console.error('Failed to create client in Notion:', error);
      throw error;
    }
  }

  async updateClient(clientId: string, data: Partial<ClientData>) {
    try {
      // First, find the client page
      const client = await this.findClientByID(clientId);
      if (!client) {
        throw new Error('Client not found');
      }

      const properties: any = {};

      if (data.businessName) {
        properties['Business Name'] = {
          rich_text: [{ text: { content: data.businessName } }]
        };
      }

      if (data.tier) {
        properties['Tier'] = {
          select: { name: data.tier }
        };
      }

      if (data.status) {
        properties['Status'] = {
          select: { name: data.status }
        };
      }

      if (data.monthlyRevenue !== undefined) {
        properties['Monthly Revenue'] = {
          number: data.monthlyRevenue
        };
      }

      if (data.lastLogin) {
        properties['Last Login'] = {
          date: { start: data.lastLogin.toISOString() }
        };
      }

      properties['Updated'] = {
        date: { start: new Date().toISOString() }
      };

      const response = await notion.pages.update({
        page_id: client.id,
        properties
      });

      return response;
    } catch (error) {
      console.error('Failed to update client in Notion:', error);
      throw error;
    }
  }

  async findClientByID(clientId: string) {
    try {
      const response = await notion.databases.query({
        database_id: this.clientsDbId,
        filter: {
          property: 'Client ID',
          title: {
            equals: clientId
          }
        }
      });

      return response.results[0] || null;
    } catch (error) {
      console.error('Failed to find client in Notion:', error);
      throw error;
    }
  }

  async getAllClients() {
    try {
      const response = await notion.databases.query({
        database_id: this.clientsDbId,
        sorts: [
          {
            property: 'Created',
            direction: 'descending'
          }
        ]
      });

      return response.results;
    } catch (error) {
      console.error('Failed to get clients from Notion:', error);
      throw error;
    }
  }

  // Campaign Management
  async createCampaign(data: CampaignData) {
    try {
      const response = await notion.pages.create({
        parent: { database_id: this.campaignsDbId },
        properties: {
          'Campaign ID': {
            title: [{ text: { content: data.id } }]
          },
          'Client': {
            relation: [{ id: (await this.findClientByID(data.clientId))?.id }]
          },
          'Name': {
            rich_text: [{ text: { content: data.name } }]
          },
          'Platform': {
            select: { name: data.platform }
          },
          'Status': {
            select: { name: data.status }
          },
          'Budget': {
            number: data.budget
          },
          'Spend': {
            number: data.spend
          },
          'Impressions': {
            number: data.impressions
          },
          'Clicks': {
            number: data.clicks
          },
          'Conversions': {
            number: data.conversions
          },
          'ROI': {
            number: data.roi
          },
          'Created': {
            date: { start: data.createdAt.toISOString() }
          },
          'Updated': {
            date: { start: data.updatedAt.toISOString() }
          }
        }
      });

      return response;
    } catch (error) {
      console.error('Failed to create campaign in Notion:', error);
      throw error;
    }
  }

  async updateCampaign(campaignId: string, data: Partial<CampaignData>) {
    try {
      const campaign = await this.findCampaignByID(campaignId);
      if (!campaign) {
        throw new Error('Campaign not found');
      }

      const properties: any = {};

      if (data.name) {
        properties['Name'] = {
          rich_text: [{ text: { content: data.name } }]
        };
      }

      if (data.status) {
        properties['Status'] = {
          select: { name: data.status }
        };
      }

      if (data.budget !== undefined) {
        properties['Budget'] = {
          number: data.budget
        };
      }

      if (data.spend !== undefined) {
        properties['Spend'] = {
          number: data.spend
        };
      }

      if (data.impressions !== undefined) {
        properties['Impressions'] = {
          number: data.impressions
        };
      }

      if (data.clicks !== undefined) {
        properties['Clicks'] = {
          number: data.clicks
        };
      }

      if (data.conversions !== undefined) {
        properties['Conversions'] = {
          number: data.conversions
        };
      }

      if (data.roi !== undefined) {
        properties['ROI'] = {
          number: data.roi
        };
      }

      properties['Updated'] = {
        date: { start: new Date().toISOString() }
      };

      const response = await notion.pages.update({
        page_id: campaign.id,
        properties
      });

      return response;
    } catch (error) {
      console.error('Failed to update campaign in Notion:', error);
      throw error;
    }
  }

  async findCampaignByID(campaignId: string) {
    try {
      const response = await notion.databases.query({
        database_id: this.campaignsDbId,
        filter: {
          property: 'Campaign ID',
          title: {
            equals: campaignId
          }
        }
      });

      return response.results[0] || null;
    } catch (error) {
      console.error('Failed to find campaign in Notion:', error);
      throw error;
    }
  }

  async getClientCampaigns(clientId: string) {
    try {
      const client = await this.findClientByID(clientId);
      if (!client) {
        throw new Error('Client not found');
      }

      const response = await notion.databases.query({
        database_id: this.campaignsDbId,
        filter: {
          property: 'Client',
          relation: {
            contains: client.id
          }
        },
        sorts: [
          {
            property: 'Created',
            direction: 'descending'
          }
        ]
      });

      return response.results;
    } catch (error) {
      console.error('Failed to get client campaigns from Notion:', error);
      throw error;
    }
  }

  // Report Management
  async createReport(data: ReportData) {
    try {
      const response = await notion.pages.create({
        parent: { database_id: this.reportsDbId },
        properties: {
          'Report ID': {
            title: [{ text: { content: data.id } }]
          },
          'Client': {
            relation: [{ id: (await this.findClientByID(data.clientId))?.id }]
          },
          'Month': {
            select: { name: data.month }
          },
          'Year': {
            number: data.year
          },
          'Total Spend': {
            number: data.totalSpend
          },
          'Total Revenue': {
            number: data.totalRevenue
          },
          'ROI': {
            number: data.roi
          },
          'Leads': {
            number: data.leads
          },
          'Conversions': {
            number: data.conversions
          },
          'Status': {
            select: { name: data.status }
          },
          'Created': {
            date: { start: data.createdAt.toISOString() }
          }
        }
      });

      return response;
    } catch (error) {
      console.error('Failed to create report in Notion:', error);
      throw error;
    }
  }

  async updateReport(reportId: string, data: Partial<ReportData>) {
    try {
      const report = await this.findReportByID(reportId);
      if (!report) {
        throw new Error('Report not found');
      }

      const properties: any = {};

      if (data.status) {
        properties['Status'] = {
          select: { name: data.status }
        };
      }

      if (data.totalSpend !== undefined) {
        properties['Total Spend'] = {
          number: data.totalSpend
        };
      }

      if (data.totalRevenue !== undefined) {
        properties['Total Revenue'] = {
          number: data.totalRevenue
        };
      }

      if (data.roi !== undefined) {
        properties['ROI'] = {
          number: data.roi
        };
      }

      if (data.leads !== undefined) {
        properties['Leads'] = {
          number: data.leads
        };
      }

      if (data.conversions !== undefined) {
        properties['Conversions'] = {
          number: data.conversions
        };
      }

      const response = await notion.pages.update({
        page_id: report.id,
        properties
      });

      return response;
    } catch (error) {
      console.error('Failed to update report in Notion:', error);
      throw error;
    }
  }

  async findReportByID(reportId: string) {
    try {
      const response = await notion.databases.query({
        database_id: this.reportsDbId,
        filter: {
          property: 'Report ID',
          title: {
            equals: reportId
          }
        }
      });

      return response.results[0] || null;
    } catch (error) {
      console.error('Failed to find report in Notion:', error);
      throw error;
    }
  }

  // Analytics and Insights
  async getClientAnalytics(clientId: string) {
    try {
      const campaigns = await this.getClientCampaigns(clientId);
      
      const totalSpend = campaigns.reduce((sum, campaign: any) => {
        return sum + (campaign.properties.Spend?.number || 0);
      }, 0);

      const totalImpressions = campaigns.reduce((sum, campaign: any) => {
        return sum + (campaign.properties.Impressions?.number || 0);
      }, 0);

      const totalClicks = campaigns.reduce((sum, campaign: any) => {
        return sum + (campaign.properties.Clicks?.number || 0);
      }, 0);

      const totalConversions = campaigns.reduce((sum, campaign: any) => {
        return sum + (campaign.properties.Conversions?.number || 0);
      }, 0);

      const averageROI = campaigns.length > 0 
        ? campaigns.reduce((sum, campaign: any) => {
            return sum + (campaign.properties.ROI?.number || 0);
          }, 0) / campaigns.length
        : 0;

      return {
        totalSpend,
        totalImpressions,
        totalClicks,
        totalConversions,
        averageROI,
        campaignCount: campaigns.length,
        activeCampaigns: campaigns.filter((c: any) => c.properties.Status?.select?.name === 'active').length
      };
    } catch (error) {
      console.error('Failed to get client analytics from Notion:', error);
      throw error;
    }
  }

  async getTeamDashboard() {
    try {
      const clients = await this.getAllClients();
      const totalClients = clients.length;
      
      const activeClients = clients.filter((client: any) => 
        client.properties.Status?.select?.name === 'active'
      ).length;

      const tierBreakdown = clients.reduce((acc: any, client: any) => {
        const tier = client.properties.Tier?.select?.name || 'unknown';
        acc[tier] = (acc[tier] || 0) + 1;
        return acc;
      }, {});

      const totalRevenue = clients.reduce((sum, client: any) => {
        return sum + (client.properties['Monthly Revenue']?.number || 0);
      }, 0);

      return {
        totalClients,
        activeClients,
        tierBreakdown,
        totalMonthlyRevenue: totalRevenue,
        recentClients: clients.slice(0, 5)
      };
    } catch (error) {
      console.error('Failed to get team dashboard from Notion:', error);
      throw error;
    }
  }
}
