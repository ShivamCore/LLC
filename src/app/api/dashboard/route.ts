import { NextRequest, NextResponse } from 'next/server';
import { DashboardService } from '@/lib/dashboard-service';
import { z } from 'zod';

const dashboardRequestSchema = z.object({
  clientId: z.string(),
  tier: z.enum(['launch', 'growth', 'ai-dominance']),
});

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const clientId = searchParams.get('clientId');
    const tier = searchParams.get('tier') as 'launch' | 'growth' | 'ai-dominance';

    if (!clientId || !tier) {
      return NextResponse.json(
        { error: 'Client ID and tier are required' },
        { status: 400 }
      );
    }

    const dashboardService = new DashboardService();
    const dashboardData = await dashboardService.getClientDashboard(clientId, tier);

    return NextResponse.json({
      success: true,
      data: dashboardData
    });
  } catch (error) {
    console.error('Dashboard API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch dashboard data' },
      { status: 500 }
    );
  }
}
