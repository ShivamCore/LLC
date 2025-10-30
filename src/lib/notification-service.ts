import { WebClient } from '@slack/web-api';
import nodemailer from 'nodemailer';

export interface SlackConfig {
  token?: string;
  channels?: {
    newClients?: string;
    alerts?: string;
    reports?: string;
    general?: string;
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
  private slack: WebClient | null;
  private emailTransporter: nodemailer.Transporter | null;
  private slackConfig: SlackConfig;

  constructor() {
    const slackToken = process.env.SLACK_BOT_TOKEN;
    this.slack = slackToken ? new WebClient(slackToken) : null;
    this.slackConfig = {
      token: slackToken,
      channels: {
        newClients: process.env.SLACK_NEW_CLIENTS_CHANNEL,
        alerts: process.env.SLACK_ALERTS_CHANNEL,
        reports: process.env.SLACK_REPORTS_CHANNEL,
        general: process.env.SLACK_GENERAL_CHANNEL,
      }
    };

    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      this.emailTransporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: process.env.SMTP_SECURE === 'true',
        auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      });
    } else {
      this.emailTransporter = null;
    }
  }

  async sendNotification(notification: NotificationData) {
    await Promise.all([
      this.sendSlackNotification(notification).catch(() => {}),
      this.sendEmailNotificationIfNeeded(notification).catch(() => {}),
    ]);
  }

  private async sendSlackNotification(notification: NotificationData) {
    if (!this.slack || !this.slackConfig.channels) return;
    const channel = this.getSlackChannel(notification.type);
    if (!channel) return;
    await this.slack.chat.postMessage({ channel, text: `${notification.title} — ${notification.message}` });
  }

  private async sendEmailNotificationIfNeeded(notification: NotificationData) {
    if (!this.emailTransporter) return;
    if (notification.priority !== 'high' && notification.priority !== 'urgent') return;
    const teamEmails = process.env.TEAM_EMAILS?.split(',').map(e => e.trim()).filter(Boolean) || [];
    if (!teamEmails.length) return;
    await Promise.all(teamEmails.map(email => this.emailTransporter!.sendMail({
      from: `Valenza Media Alerts <alerts@valenzamedia.com>`,
      to: email,
      subject: `[${notification.priority.toUpperCase()}] ${notification.title}`,
      html: `<p>${notification.message}</p>`
    })));
  }

  private getSlackChannel(type: string): string | undefined {
    const c = this.slackConfig.channels || {};
    switch (type) {
      case 'new_client': return c.newClients;
      case 'payment_success':
      case 'payment_failed':
      case 'campaign_alert':
      case 'system_alert': return c.alerts;
      case 'report_generated': return c.reports;
      default: return c.general;
    }
  }
}


