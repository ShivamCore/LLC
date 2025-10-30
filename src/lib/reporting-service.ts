import nodemailer from 'nodemailer';

export interface ReportData {
  clientName: string;
  month: string;
  year: number;
  totalSpend: number;
  totalRevenue: number;
  roi: number;
  leads?: number;
}

export class ReportingService {
  private emailTransporter: nodemailer.Transporter | null;

  constructor() {
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

  async generateMonthlyReport(clientId: string, month: string, year: number): Promise<ReportData> {
    // In a real scenario, aggregate from ads/CRM. Here, minimal stub for automation enablement.
    return {
      clientName: clientId,
      month,
      year,
      totalSpend: 5000,
      totalRevenue: 24000,
      roi: ((24000 - 5000) / 5000) * 100,
      leads: 120,
    };
  }

  async generatePDFReport(report: ReportData): Promise<Buffer> {
    // Minimal placeholder PDF (actually a text buffer to avoid binary deps)
    const content = `Report for ${report.clientName} - ${report.month} ${report.year}\n`+
      `Spend: $${report.totalSpend}\nRevenue: $${report.totalRevenue}\nROI: ${report.roi.toFixed(1)}%\n`;
    return Buffer.from(content, 'utf-8');
  }

  async sendReportEmail(clientId: string, report: ReportData, pdfBuffer: Buffer) {
    if (!this.emailTransporter) return;
    const recipient = process.env.REPORTS_EMAIL || process.env.TEAM_EMAILS?.split(',')[0];
    if (!recipient) return;
    await this.emailTransporter.sendMail({
      from: `Valenza Reports <reports@valenzamedia.com>`,
      to: recipient,
      subject: `Monthly Report - ${report.month} ${report.year}`,
      text: `Spend $${report.totalSpend}, Revenue $${report.totalRevenue}, ROI ${report.roi.toFixed(1)}%`,
      attachments: [{ filename: `report-${report.month}-${report.year}.txt`, content: pdfBuffer }]
    });
  }
}


