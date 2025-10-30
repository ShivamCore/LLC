import { NextRequest, NextResponse } from 'next/server';
// import { createCheckoutSession } from '@/lib/stripe';
import { z } from 'zod';

const checkoutSchema = z.object({
  tier: z.enum(['launch', 'growth', 'ai-dominance']),
  email: z.string().email(),
  clientId: z.string(),
});

// export async function POST(request: NextRequest) {
//   try {
//     const body = await request.json();
//     const { tier, email, clientId } = checkoutSchema.parse(body);

//     const session = await createCheckoutSession(tier, email, clientId);

//     return NextResponse.json({ 
//       success: true, 
//       sessionId: session.id,
//       url: session.url 
//     });
//   } catch (error) {
//     console.error('Checkout session creation failed:', error);
//     return NextResponse.json(
//       { success: false, error: 'Failed to create checkout session' },
//       { status: 500 }
//     );
//   }
// }
