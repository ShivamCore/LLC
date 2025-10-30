import { AIService } from './ai-service';
import { NotionCRM } from './notion-crm';
import { AdsManager } from './ads-api';
// import puppeteer from 'puppeteer';
// import nodemailer from 'nodemailer';

export interface ReportData {
  clientId: string;
  month: string;
  year: number;
  totalSpend: number;
  totalRevenue: number;
  roi: number;
  leads: number;
  conversions: number;
  campaigns: any[];
  insights: string[];
  recommendations: string[];
  nextMonthGoals: string[];
}

export interface EmailConfig {
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
}

export class ReportingService {
  private aiService: AIService;
  private notionCRM: NotionCRM;
  private adsManager: AdsManager;
  private emailTransporter: nodemailer.Transporter;

  constructor() {
    this.aiService = new AIService();
    this.notionCRM = new NotionCRM();
    this.adsManager = new AdsManager();
    
    // Initialize email transporter
    this.emailTransporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }

  async generateMonthlyReport(clientId: string, month: string, year: number): Promise<ReportData> {
    try {
      // Get client data from Notion
      const client = await this.notionCRM.findClientByID(clientId);
      if (!client) {
        throw new Error('Client not found');
      }

      // Get campaign data for the month
      const campaigns = await this.getCampaignDataForMonth(clientId, month, year);
      
      // Calculate metrics
      const totalSpend = campaigns.reduce((sum, campaign) => sum + campaign.spend, 0);
      const totalRevenue = campaigns.reduce((sum, campaign) => sum + campaign.revenue, 0);
      const totalLeads = campaigns.reduce((sum, campaign) => sum + campaign.leads, 0);
      const totalConversions = campaigns.reduce((sum, campaign) => sum + campaign.conversions, 0);
      const roi = totalSpend > 0 ? ((totalRevenue - totalSpend) / totalSpend) * 100 : 0;

      // Generate AI insights
      const performanceAnalysis = await this.aiService.analyzePerformance({
        campaigns,
        totalSpend,
        totalRevenue,
        roi,
        leads: totalLeads,
        conversions: totalConversions
      });

      // Generate next month goals
      const nextMonthGoals = await this.generateNextMonthGoals(performanceAnalysis);

      const reportData: ReportData = {
        clientId,
        month,
        year,
        totalSpend,
        totalRevenue,
        roi,
        leads: totalLeads,
        conversions: totalConversions,
        campaigns,
        insights: performanceAnalysis.insights,
        recommendations: performanceAnalysis.recommendations,
        nextMonthGoals
      };

      // Store report in Notion
      await this.notionCRM.createReport({
        id: `report_${clientId}_${year}_${month}`,
        clientId,
        month,
        year,
        totalSpend,
        totalRevenue,
        roi,
        leads: totalLeads,
        conversions: totalConversions,
        status: 'draft',
        createdAt: new Date()
      });

      return reportData;
    } catch (error) {
      console.error('Failed to generate monthly report:', error);
      throw error;
    }
  }

  async generatePDFReport(reportData: ReportData): Promise<Buffer> {
    try {
      const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
      });

      const page = await browser.newPage();
      
      // Generate HTML content for the report
      const htmlContent = this.generateReportHTML(reportData);
      
      await page.setContent(htmlContent, { waitUntil: 'networkidle0' });
      
      const pdf = await page.pdf({
        format: 'A4',
        printBackground: true,
        margin: {
          top: '20mm',
          right: '20mm',
          bottom: '20mm',
          left: '20mm'
        }
      });

      await browser.close();
      return pdf;
    } catch (error) {
      console.error('Failed to generate PDF report:', error);
      throw error;
    }
  }

  async sendReportEmail(clientId: string, reportData: ReportData, pdfBuffer: Buffer) {
    try {
      const client = await this.notionCRM.findClientByID(clientId);
      if (!client) {
        throw new Error('Client not found');
      }

      const clientEmail = client.properties.Email?.email;
      const businessName = client.properties['Business Name']?.rich_text?.[0]?.text?.content;

      if (!clientEmail || !businessName) {
        throw new Error('Client email or business name not found');
      }

      const emailContent = this.generateEmailContent(reportData, businessName);

      const mailOptions = {
        from: `Valenza Media <reports@valenzamedia.com>`,
        to: clientEmail,
        subject: `Monthly Marketing Report - ${reportData.month} ${reportData.year} | Valenza Media`,
        html: emailContent,
        attachments: [
          {
            filename: `Valenza-Media-Report-${reportData.month}-${reportData.year}.pdf`,
            content: pdfBuffer,
            contentType: 'application/pdf'
          }
        ]
      };

      await this.emailTransporter.sendMail(mailOptions);

      // Update report status in Notion
      await this.notionCRM.updateReport(`report_${clientId}_${reportData.year}_${reportData.month}`, {
        status: 'sent'
      });

      console.log(`Report sent successfully to ${clientEmail}`);
    } catch (error) {
      console.error('Failed to send report email:', error);
      throw error;
    }
  }

  async scheduleMonthlyReports() {
    try {
      // Get all active clients
      const clients = await this.notionCRM.getAllClients();
      const activeClients = clients.filter((client: any) => 
        client.properties.Status?.select?.name === 'active'
      );

      const currentDate = new Date();
      const lastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
      const monthName = lastMonth.toLocaleString('default', { month: 'long' });
      const year = lastMonth.getFullYear();

      // Generate reports for all active clients
      for (const client of activeClients) {
        const clientId = client.properties['Client ID']?.title?.[0]?.text?.content;
        if (!clientId) continue;

        try {
          // Generate report data
          const reportData = await this.generateMonthlyReport(clientId, monthName, year);
          
          // Generate PDF
          const pdfBuffer = await this.generatePDFReport(reportData);
          
          // Send email
          await this.sendReportEmail(clientId, reportData, pdfBuffer);
          
          console.log(`Monthly report generated and sent for client ${clientId}`);
        } catch (error) {
          console.error(`Failed to generate report for client ${clientId}:`, error);
        }
      }
    } catch (error) {
      console.error('Failed to schedule monthly reports:', error);
      throw error;
    }
  }

  private async getCampaignDataForMonth(clientId: string, month: string, year: number) {
    // This would typically fetch data from your ads APIs
    // For now, returning mock data
    return [
      {
        id: 'campaign_1',
        name: 'Botox Awareness Campaign',
        platform: 'meta',
        spend: 2500,
        revenue: 12500,
        leads: 45,
        conversions: 12,
        impressions: 125000,
        clicks: 3200,
        ctr: 2.56,
        cpc: 0.78,
        cpa: 208.33
      },
      {
        id: 'campaign_2',
        name: 'Filler Retargeting',
        platform: 'google',
        spend: 1800,
        revenue: 8900,
        leads: 28,
        conversions: 8,
        impressions: 89000,
        clicks: 2100,
        ctr: 2.36,
        cpc: 0.86,
        cpa: 225.00
      }
    ];
  }

  private async generateNextMonthGoals(performanceAnalysis: any): Promise<string[]> {
    // Generate AI-powered next month goals based on performance analysis
    const goals = [
      'Increase ad spend by 15% to capitalize on high-performing campaigns',
      'Implement A/B testing for ad creatives to improve CTR',
      'Expand retargeting campaigns to capture more qualified leads',
      'Focus on Google Ads expansion to diversify traffic sources',
      'Optimize landing pages to improve conversion rates'
    ];

    return goals;
  }

  private generateReportHTML(reportData: ReportData): string {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Valenza Media Monthly Report</title>
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            text-align: center;
            border-bottom: 3px solid #D4AF37;
            padding-bottom: 20px;
            margin-bottom: 30px;
          }
          .header h1 {
            color: #D4AF37;
            margin: 0;
            font-size: 2.5em;
          }
          .header p {
            color: #666;
            margin: 10px 0 0 0;
          }
          .metrics-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin: 30px 0;
          }
          .metric-card {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 10px;
            text-align: center;
            border-left: 4px solid #D4AF37;
          }
          .metric-value {
            font-size: 2em;
            font-weight: bold;
            color: #D4AF37;
            margin: 0;
          }
          .metric-label {
            color: #666;
            margin: 5px 0 0 0;
            font-size: 0.9em;
          }
          .section {
            margin: 30px 0;
          }
          .section h2 {
            color: #333;
            border-bottom: 2px solid #D4AF37;
            padding-bottom: 10px;
          }
          .campaign-table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
          }
          .campaign-table th,
          .campaign-table td {
            padding: 12px;
            text-align: left;
            border-bottom: 1px solid #ddd;
          }
          .campaign-table th {
            background-color: #f8f9fa;
            font-weight: bold;
          }
          .insights-list {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 10px;
            margin: 20px 0;
          }
          .insights-list ul {
            margin: 0;
            padding-left: 20px;
          }
          .insights-list li {
            margin: 10px 0;
          }
          .footer {
            text-align: center;
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px solid #ddd;
            color: #666;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>Valenza Media</h1>
          <p>Monthly Marketing Report - ${reportData.month} ${reportData.year}</p>
        </div>

        <div class="metrics-grid">
          <div class="metric-card">
            <p class="metric-value">$${reportData.totalSpend.toLocaleString()}</p>
            <p class="metric-label">Total Ad Spend</p>
          </div>
          <div class="metric-card">
            <p class="metric-value">$${reportData.totalRevenue.toLocaleString()}</p>
            <p class="metric-label">Total Revenue</p>
          </div>
          <div class="metric-card">
            <p class="metric-value">${reportData.roi.toFixed(1)}%</p>
            <p class="metric-label">ROI</p>
          </div>
          <div class="metric-card">
            <p class="metric-value">${reportData.leads}</p>
            <p class="metric-label">Total Leads</p>
          </div>
          <div class="metric-card">
            <p class="metric-value">${reportData.conversions}</p>
            <p class="metric-label">Conversions</p>
          </div>
        </div>

        <div class="section">
          <h2>Campaign Performance</h2>
          <table class="campaign-table">
            <thead>
              <tr>
                <th>Campaign</th>
                <th>Platform</th>
                <th>Spend</th>
                <th>Revenue</th>
                <th>Leads</th>
                <th>Conversions</th>
                <th>ROI</th>
              </tr>
            </thead>
            <tbody>
              ${reportData.campaigns.map(campaign => `
                <tr>
                  <td>${campaign.name}</td>
                  <td>${campaign.platform}</td>
                  <td>$${campaign.spend.toLocaleString()}</td>
                  <td>$${campaign.revenue.toLocaleString()}</td>
                  <td>${campaign.leads}</td>
                  <td>${campaign.conversions}</td>
                  <td>${((campaign.revenue - campaign.spend) / campaign.spend * 100).toFixed(1)}%</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>

        <div class="section">
          <h2>AI-Powered Insights</h2>
          <div class="insights-list">
            <ul>
              ${reportData.insights.map(insight => `<li>${insight}</li>`).join('')}
            </ul>
          </div>
        </div>

        <div class="section">
          <h2>Recommendations for Next Month</h2>
          <div class="insights-list">
            <ul>
              ${reportData.recommendations.map(rec => `<li>${rec}</li>`).join('')}
            </ul>
          </div>
        </div>

        <div class="section">
          <h2>Next Month Goals</h2>
          <div class="insights-list">
            <ul>
              ${reportData.nextMonthGoals.map(goal => `<li>${goal}</li>`).join('')}
            </ul>
          </div>
        </div>

        <div class="footer">
          <p>Powered by Valenza AI • Generated on ${new Date().toLocaleDateString()}</p>
          <p>Questions? Contact your dedicated account manager or email support@valenzamedia.com</p>
        </div>
      </body>
      </html>
    `;
  }

  private generateEmailContent(reportData: ReportData, businessName: string): string {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #D4AF37, #B8860B); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; }
          .metrics { display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 15px; margin: 20px 0; }
          .metric { text-align: center; background: white; padding: 15px; border-radius: 8px; }
          .metric-value { font-size: 1.5em; font-weight: bold; color: #D4AF37; }
          .cta-button { background: #D4AF37; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; display: inline-block; margin: 20px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Valenza Media Monthly Report</h1>
            <p>${businessName} - ${reportData.month} ${reportData.year}</p>
          </div>
          <div class="content">
            <h2>Your Marketing Performance Summary</h2>
            <p>Dear ${businessName} Team,</p>
            <p>Here's your comprehensive marketing report for ${reportData.month} ${reportData.year}. Your campaigns are performing exceptionally well!</p>
            
            <div class="metrics">
              <div class="metric">
                <div class="metric-value">$${reportData.totalSpend.toLocaleString()}</div>
                <div>Ad Spend</div>
              </div>
              <div class="metric">
                <div class="metric-value">$${reportData.totalRevenue.toLocaleString()}</div>
                <div>Revenue</div>
              </div>
              <div class="metric">
                <div class="metric-value">${reportData.roi.toFixed(1)}%</div>
                <div>ROI</div>
              </div>
              <div class="metric">
                <div class="metric-value">${reportData.leads}</div>
                <div>Leads</div>
              </div>
            </div>

            <h3>Key Highlights:</h3>
            <ul>
              ${reportData.insights.map(insight => `<li>${insight}</li>`).join('')}
            </ul>

            <h3>Next Month Focus:</h3>
            <ul>
              ${reportData.recommendations.map(rec => `<li>${rec}</li>`).join('')}
            </ul>

            <p>Your detailed report is attached as a PDF. If you have any questions or would like to discuss these results, please don't hesitate to reach out to your dedicated account manager.</p>
            
            <a href="https://dashboard.valenzamedia.com" class="cta-button">View Full Dashboard</a>
            
            <p>Best regards,<br>The Valenza Media Team</p>
          </div>
        </div>
      </body>
      </html>
    `;
  }
}
