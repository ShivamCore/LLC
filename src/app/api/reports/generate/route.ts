import { NextRequest, NextResponse } from 'next/server';
import { ReportingService } from '@/lib/reporting-service';
import { z } from 'zod';

const reportRequestSchema = z.object({
  clientId: z.string(),
  month: z.string(),
  year: z.number(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { clientId, month, year } = reportRequestSchema.parse(body);
    const service = new ReportingService();
    const reportData = await service.generateMonthlyReport(clientId, month, year);
    const pdfBuffer = await service.generatePDFReport(reportData);
    await service.sendReportEmail(clientId, reportData, pdfBuffer);
    return NextResponse.json({ success: true, data: reportData });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid request', details: error.issues }, { status: 400 });
    }
    console.error('Report generation error:', error);
    return NextResponse.json(
      { error: 'Failed to generate report' },
      { status: 500 }
    );
  }
}
