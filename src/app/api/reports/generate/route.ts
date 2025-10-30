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

    const reportingService = new ReportingService();
    
    // Generate report data
    const reportData = await reportingService.generateMonthlyReport(clientId, month, year);
    
    // Generate PDF
    const pdfBuffer = await reportingService.generatePDFReport(reportData);
    
    // Send email
    await reportingService.sendReportEmail(clientId, reportData, pdfBuffer);

    return NextResponse.json({
      success: true,
      message: 'Report generated and sent successfully',
      data: {
        reportId: `report_${clientId}_${year}_${month}`,
        month,
        year,
        totalSpend: reportData.totalSpend,
        totalRevenue: reportData.totalRevenue,
        roi: reportData.roi
      }
    });
  } catch (error) {
    console.error('Report generation error:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid request data', details: error.issues },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to generate report' },
      { status: 500 }
    );
  }
}
