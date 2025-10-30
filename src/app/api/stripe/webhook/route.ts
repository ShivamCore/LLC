import { NextRequest, NextResponse } from 'next/server';
// import { stripe, STRIPE_CONFIG } from '@/lib/stripe';
// import Stripe from 'stripe';
import { headers } from 'next/headers';

// export async function POST(request: NextRequest) {
//   const body = await request.text();
//   const signature = headers().get('stripe-signature');

//   if (!signature) {
//     return NextResponse.json({ error: 'No signature' }, { status: 400 });
//   }

//   let event: Stripe.Event;

//   try {
//     event = stripe.webhooks.constructEvent(
//       body,
//       signature,
//       STRIPE_CONFIG.webhookSecret
//     );
//   } catch (err) {
//     console.error('Webhook signature verification failed:', err);
//     return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
//   }

//   try {
//     switch (event.type) {
//       case 'checkout.session.completed':
//         await handleCheckoutCompleted(event.data.object as Stripe.Checkout.Session);
//         break;
      
//       case 'customer.subscription.created':
//         await handleSubscriptionCreated(event.data.object as Stripe.Subscription);
//         break;
      
//       case 'customer.subscription.updated':
//         await handleSubscriptionUpdated(event.data.object as Stripe.Subscription);
//         break;
      
//       case 'customer.subscription.deleted':
//         await handleSubscriptionDeleted(event.data.object as Stripe.Subscription);
//         break;
      
//       case 'invoice.payment_succeeded':
//         await handlePaymentSucceeded(event.data.object as Stripe.Invoice);
//         break;
      
//       case 'invoice.payment_failed':
//         await handlePaymentFailed(event.data.object as Stripe.Invoice);
//         break;
      
//       default:
//         console.log(`Unhandled event type: ${event.type}`);
//     }

//     return NextResponse.json({ received: true });
//   } catch (error) {
//     console.error('Webhook handler failed:', error);
//     return NextResponse.json({ error: 'Webhook handler failed' }, { status: 500 });
//   }
// }

// async function handleCheckoutCompleted(session: Stripe.Checkout.Session) {
//   const { tier, clientId } = session.metadata || {};
  
//   if (!tier || !clientId) {
//     console.error('Missing metadata in checkout session');
//     return;
//   }

//   // Update client tier in database
//   await updateClientTier(clientId, tier as any);
  
//   // Send onboarding email
//   await sendOnboardingEmail(session.customer_email!, tier);
  
//   // Create client dashboard
//   await provisionClientDashboard(clientId, tier);
  
//   // Notify team via Slack
//   await notifyTeamNewClient(session.customer_email!, tier);
// }

// async function handleSubscriptionCreated(subscription: Stripe.Subscription) {
//   const { tier, clientId } = subscription.metadata;
  
//   if (!tier || !clientId) {
//     console.error('Missing metadata in subscription');
//     return;
//   }

//   // Update subscription status
//   await updateSubscriptionStatus(clientId, subscription.id, 'active');
// }

// async function handleSubscriptionUpdated(subscription: Stripe.Subscription) {
//   const { clientId } = subscription.metadata;
  
//   if (!clientId) {
//     console.error('Missing clientId in subscription metadata');
//     return;
//   }

//   // Update subscription status based on status
//   await updateSubscriptionStatus(clientId, subscription.id, subscription.status);
// }

// async function handleSubscriptionDeleted(subscription: Stripe.Subscription) {
//   const { clientId } = subscription.metadata;
  
//   if (!clientId) {
//     console.error('Missing clientId in subscription metadata');
//     return;
//   }

//   // Deactivate client access
//   await updateSubscriptionStatus(clientId, subscription.id, 'canceled');
// }

// async function handlePaymentSucceeded(invoice: Stripe.Invoice) {
//   const subscription = await stripe.subscriptions.retrieve(invoice.subscription as string);
//   const { clientId } = subscription.metadata;
  
//   if (!clientId) {
//     console.error('Missing clientId in subscription metadata');
//     return;
//   }

//   // Send payment confirmation
//   await sendPaymentConfirmation(clientId, invoice.amount_paid);
// }

// async function handlePaymentFailed(invoice: Stripe.Invoice) {
//   const subscription = await stripe.subscriptions.retrieve(invoice.subscription as string);
//   const { clientId } = subscription.metadata;
  
//   if (!clientId) {
//     console.error('Missing clientId in subscription metadata');
//     return;
//   }

//   // Send payment failure notification
//   await sendPaymentFailureNotification(clientId);
// }

// Helper functions (to be implemented)
async function updateClientTier(clientId: string, tier: string) {
  // Update client tier in database
  console.log(`Updating client ${clientId} to tier ${tier}`);
}

async function sendOnboardingEmail(email: string, tier: string) {
  // Send onboarding email
  console.log(`Sending onboarding email to ${email} for tier ${tier}`);
}

async function provisionClientDashboard(clientId: string, tier: string) {
  // Create client dashboard
  console.log(`Provisioning dashboard for client ${clientId} with tier ${tier}`);
}

async function notifyTeamNewClient(email: string, tier: string) {
  // Notify team via Slack
  console.log(`Notifying team about new client ${email} with tier ${tier}`);
}

async function updateSubscriptionStatus(clientId: string, subscriptionId: string, status: string) {
  // Update subscription status in database
  console.log(`Updating subscription status for client ${clientId}: ${status}`);
}

async function sendPaymentConfirmation(clientId: string, amount: number) {
  // Send payment confirmation
  console.log(`Sending payment confirmation to client ${clientId} for $${amount/100}`);
}

async function sendPaymentFailureNotification(clientId: string) {
  // Send payment failure notification
  console.log(`Sending payment failure notification to client ${clientId}`);
}
