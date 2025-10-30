// import { WebClient } from '@slack/web-api';
// import nodemailer from 'nodemailer';

export interface SlackConfig {
  token: string;
  channels: {
    newClients: string;
    alerts: string;
    reports: string;
    general: string;
  };
}

export interface NotificationData {
  type: 'new_client' | 'payment_success' | 'payment_failed' | 'report_generated' | 'campaign_alert' | 'system_alert';
  title: string;
  message: string;
  data?: any;
  priority: 'low' | 'medium' | 'high' | 'urgent';
}

export class NotificationService {
  private slack: WebClient;
  private emailTransporter: nodemailer.Transporter;
  private slackConfig: SlackConfig;

  constructor() {
    this.slack = new WebClient(process.env.SLACK_BOT_TOKEN);
    this.slackConfig = {
      token: process.env.SLACK_BOT_TOKEN!,
      channels: {
        newClients: process.env.SLACK_NEW_CLIENTS_CHANNEL!,
        alerts: process.env.SLACK_ALERTS_CHANNEL!,
        reports: process.env.SLACK_REPORTS_CHANNEL!,
        general: process.env.SLACK_GENERAL_CHANNEL!,
      }
    };

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

  async sendNotification(notification: NotificationData) {
    try {
      // Send to Slack
      await this.sendSlackNotification(notification);
      
      // Send email for high priority notifications
      if (notification.priority === 'high' || notification.priority === 'urgent') {
        await this.sendEmailNotification(notification);
      }

      console.log(`Notification sent: ${notification.type}`);
    } catch (error) {
      console.error('Failed to send notification:', error);
      throw error;
    }
  }

  private async sendSlackNotification(notification: NotificationData) {
    const channel = this.getSlackChannel(notification.type);
    const blocks = this.createSlackBlocks(notification);

    await this.slack.chat.postMessage({
      channel,
      blocks,
      text: notification.title, // Fallback text
    });
  }

  private async sendEmailNotification(notification: NotificationData) {
    const teamEmails = process.env.TEAM_EMAILS?.split(',') || [];
    
    for (const email of teamEmails) {
      await this.emailTransporter.sendMail({
        from: `Valenza Media Alerts <alerts@valenzamedia.com>`,
        to: email,
        subject: `[${notification.priority.toUpperCase()}] ${notification.title}`,
        html: this.createEmailHTML(notification),
      });
    }
  }

  private getSlackChannel(type: string): string {
    switch (type) {
      case 'new_client':
        return this.slackConfig.channels.newClients;
      case 'payment_success':
      case 'payment_failed':
        return this.slackConfig.channels.alerts;
      case 'report_generated':
        return this.slackConfig.channels.reports;
      case 'campaign_alert':
      case 'system_alert':
        return this.slackConfig.channels.alerts;
      default:
        return this.slackConfig.channels.general;
    }
  }

  private createSlackBlocks(notification: NotificationData) {
    const priorityColor = this.getPriorityColor(notification.priority);
    const emoji = this.getNotificationEmoji(notification.type);

    return [
      {
        type: 'header',
        text: {
          type: 'plain_text',
          text: `${emoji} ${notification.title}`
        }
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: notification.message
        }
      },
      {
        type: 'context',
        elements: [
          {
            type: 'mrkdwn',
            text: `Priority: *${notification.priority.toUpperCase()}* | Time: ${new Date().toLocaleString()}`
          }
        ]
      }
    ];
  }

  private createEmailHTML(notification: NotificationData): string {
    const priorityColor = this.getPriorityColor(notification.priority);
    
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: ${priorityColor}; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
          .content { background: #f8f9fa; padding: 20px; border-radius: 0 0 8px 8px; }
          .priority { display: inline-block; background: ${priorityColor}; color: white; padding: 4px 8px; border-radius: 4px; font-size: 0.8em; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Valenza Media Alert</h1>
            <span class="priority">${notification.priority.toUpperCase()}</span>
          </div>
          <div class="content">
            <h2>${notification.title}</h2>
            <p>${notification.message}</p>
            <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
            <p><strong>Type:</strong> ${notification.type.replace('_', ' ').toUpperCase()}</p>
          </div>
        </div>
      </body>
      </html>
    `;
  }

  private getPriorityColor(priority: string): string {
    switch (priority) {
      case 'urgent': return '#dc3545';
      case 'high': return '#fd7e14';
      case 'medium': return '#ffc107';
      case 'low': return '#28a745';
      default: return '#6c757d';
    }
  }

  private getNotificationEmoji(type: string): string {
    switch (type) {
      case 'new_client': return '🎉';
      case 'payment_success': return '💰';
      case 'payment_failed': return '⚠️';
      case 'report_generated': return '📊';
      case 'campaign_alert': return '📈';
      case 'system_alert': return '🔧';
      default: return '📢';
    }
  }

  // Specific notification methods
  async notifyNewClient(clientData: any) {
    const notification: NotificationData = {
      type: 'new_client',
      title: 'New Client Onboarded',
      message: `🎉 *${clientData.businessName}* has completed onboarding!\n\n*Tier:* ${clientData.tier}\n*Email:* ${clientData.email}\n*Location:* ${clientData.location}\n*Services:* ${clientData.mainServices?.join(', ')}\n\nReady to start their automated marketing journey!`,
      data: clientData,
      priority: 'medium'
    };

    await this.sendNotification(notification);
  }

  async notifyPaymentSuccess(paymentData: any) {
    const notification: NotificationData = {
      type: 'payment_success',
      title: 'Payment Processed Successfully',
      message: `💰 Payment of $${(paymentData.amount / 100).toFixed(2)} received from *${paymentData.clientName}*\n\n*Client ID:* ${paymentData.clientId}\n*Tier:* ${paymentData.tier}\n*Payment Method:* ${paymentData.paymentMethod}\n\nRevenue updated in CRM.`,
      data: paymentData,
      priority: 'medium'
    };

    await this.sendNotification(notification);
  }

  async notifyPaymentFailed(paymentData: any) {
    const notification: NotificationData = {
      type: 'payment_failed',
      title: 'Payment Failed - Action Required',
      message: `⚠️ Payment failed for *${paymentData.clientName}*\n\n*Client ID:* ${paymentData.clientId}\n*Amount:* $${(paymentData.amount / 100).toFixed(2)}\n*Reason:* ${paymentData.failureReason}\n\nPlease contact client immediately to update payment method.`,
      data: paymentData,
      priority: 'high'
    };

    await this.sendNotification(notification);
  }

  async notifyReportGenerated(reportData: any) {
    const notification: NotificationData = {
      type: 'report_generated',
      title: 'Monthly Report Generated',
      message: `📊 Monthly report generated for *${reportData.clientName}*\n\n*Month:* ${reportData.month} ${reportData.year}\n*ROI:* ${reportData.roi.toFixed(1)}%\n*Revenue:* $${reportData.totalRevenue.toLocaleString()}\n*Leads:* ${reportData.leads}\n\nReport sent to client via email.`,
      data: reportData,
      priority: 'low'
    };

    await this.sendNotification(notification);
  }

  async notifyCampaignAlert(alertData: any) {
    const notification: NotificationData = {
      type: 'campaign_alert',
      title: 'Campaign Performance Alert',
      message: `📈 Campaign alert for *${alertData.clientName}*\n\n*Campaign:* ${alertData.campaignName}\n*Platform:* ${alertData.platform}\n*Issue:* ${alertData.issue}\n*Impact:* ${alertData.impact}\n\n${alertData.recommendation}`,
      data: alertData,
      priority: alertData.severity === 'critical' ? 'urgent' : 'medium'
    };

    await this.sendNotification(notification);
  }

  async notifySystemAlert(alertData: any) {
    const notification: NotificationData = {
      type: 'system_alert',
      title: 'System Alert',
      message: `🔧 System alert: *${alertData.title}*\n\n*Description:* ${alertData.description}\n*Component:* ${alertData.component}\n*Status:* ${alertData.status}\n\n${alertData.actionRequired ? 'Action required - please investigate immediately.' : 'Monitoring in progress.'}`,
      data: alertData,
      priority: alertData.severity === 'critical' ? 'urgent' : 'medium'
    };

    await this.sendNotification(notification);
  }

  // Client notification methods
  async sendClientWelcomeEmail(clientData: any) {
    const emailContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #D4AF37, #B8860B); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; }
          .cta-button { background: #D4AF37; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; display: inline-block; margin: 20px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Welcome to Valenza Media!</h1>
            <p>Your automated marketing journey begins now</p>
          </div>
          <div class="content">
            <h2>Hello ${clientData.firstName}!</h2>
            <p>Welcome to Valenza Media! We're thrilled to have ${clientData.businessName} join our family of successful medspas.</p>
            
            <h3>What happens next:</h3>
            <ul>
              <li>Your dedicated account manager will contact you within 24 hours</li>
              <li>We'll set up your marketing campaigns and tracking</li>
              <li>You'll receive access to your personalized dashboard</li>
              <li>Your first campaign will launch within 48 hours</li>
            </ul>

            <h3>Your Plan: ${clientData.tier.charAt(0).toUpperCase() + clientData.tier.slice(1)}</h3>
            <p>You've chosen our ${clientData.tier} plan, which includes all the features you need to grow your practice.</p>
            
            <a href="https://dashboard.valenzamedia.com" class="cta-button">Access Your Dashboard</a>
            
            <p>If you have any questions, don't hesitate to reach out to our support team at support@valenzamedia.com</p>
            
            <p>Best regards,<br>The Valenza Media Team</p>
          </div>
        </div>
      </body>
      </html>
    `;

    await this.emailTransporter.sendMail({
      from: `Valenza Media <welcome@valenzamedia.com>`,
      to: clientData.email,
      subject: `Welcome to Valenza Media, ${clientData.firstName}!`,
      html: emailContent,
    });
  }

  async sendClientPaymentConfirmation(paymentData: any) {
    const emailContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #28a745; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
          .content { background: #f8f9fa; padding: 20px; border-radius: 0 0 8px 8px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Payment Confirmed</h1>
          </div>
          <div class="content">
            <h2>Payment Successful</h2>
            <p>Your payment of $${(paymentData.amount / 100).toFixed(2)} has been processed successfully.</p>
            
            <p><strong>Payment Details:</strong></p>
            <ul>
              <li>Amount: $${(paymentData.amount / 100).toFixed(2)}</li>
              <li>Date: ${new Date().toLocaleDateString()}</li>
              <li>Plan: ${paymentData.tier}</li>
              <li>Transaction ID: ${paymentData.transactionId}</li>
            </ul>
            
            <p>Thank you for your continued trust in Valenza Media!</p>
          </div>
        </div>
      </body>
      </html>
    `;

    await this.emailTransporter.sendMail({
      from: `Valenza Media <billing@valenzamedia.com>`,
      to: paymentData.clientEmail,
      subject: `Payment Confirmation - $${(paymentData.amount / 100).toFixed(2)}`,
      html: emailContent,
    });
  }
}
