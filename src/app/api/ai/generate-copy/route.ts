import { NextRequest, NextResponse } from 'next/server';
import { AIService } from '@/lib/ai-service';
import { z } from 'zod';

const adCopyRequestSchema = z.object({
  businessType: z.string(),
  targetAudience: z.string(),
  keyBenefits: z.array(z.string()),
  tone: z.enum(['professional', 'casual', 'luxury', 'urgent']),
  platform: z.enum(['meta', 'google', 'linkedin']),
  campaignObjective: z.enum(['awareness', 'conversion', 'engagement', 'lead_generation']),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validated = adCopyRequestSchema.parse(body);
    const ai = new AIService();
    const data = await ai.generateAdCopy(validated);
    return NextResponse.json({ success: true, data });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid request', details: error.issues }, { status: 400 });
    }
    console.error('AI copy generation error:', error);
    return NextResponse.json({ error: 'Failed to generate ad copy' }, { status: 500 });
  }
}
