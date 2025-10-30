// import Stripe from 'stripe';

// if (!process.env.STRIPE_SECRET_KEY) {
//   throw new Error('STRIPE_SECRET_KEY is not set');
// }

// export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
//   apiVersion: '2024-06-20',
//   typescript: true,
// });

export const STRIPE_CONFIG = {
  publishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
  webhookSecret: process.env.STRIPE_WEBHOOK_SECRET!,
  successUrl: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?success=true`,
  cancelUrl: `${process.env.NEXT_PUBLIC_APP_URL}/pricing?canceled=true`,
};

export const TIER_PRICING = {
  launch: {
    priceId: process.env.STRIPE_LAUNCH_PRICE_ID!,
    amount: 1200,
    setupFee: 250,
  },
  growth: {
    priceId: process.env.STRIPE_GROWTH_PRICE_ID!,
    amount: 2000,
    setupFee: 350,
  },
  'ai-dominance': {
    priceId: process.env.STRIPE_AI_DOMINANCE_PRICE_ID!,
    amount: 3500,
    setupFee: 500,
  },
} as const;

export type Tier = keyof typeof TIER_PRICING;

// export async function createCheckoutSession(
//   tier: Tier,
//   customerEmail: string,
//   clientId: string
// ) {
//   const pricing = TIER_PRICING[tier];
//   
//   const session = await stripe.checkout.sessions.create({
//     mode: 'subscription',
//     payment_method_types: ['card'],
//     line_items: [
//       {
//         price: pricing.priceId,
//         quantity: 1,
//       },
//       // Setup fee as a one-time payment
//       {
//         price_data: {
//           currency: 'usd',
//           product_data: {
//             name: `${tier.charAt(0).toUpperCase() + tier.slice(1)} Plan Setup Fee`,
//           },
//           unit_amount: pricing.setupFee * 100,
//         },
//         quantity: 1,
//       },
//     ],
//     customer_email: customerEmail,
//     metadata: {
//       tier,
//       clientId,
//     },
//     success_url: STRIPE_CONFIG.successUrl,
//     cancel_url: STRIPE_CONFIG.cancelUrl,
//     subscription_data: {
//       metadata: {
//         tier,
//         clientId,
//       },
//     },
//   });

//   return session;
// }

// export async function createCustomerPortalSession(customerId: string) {
//   const session = await stripe.billingPortal.sessions.create({
//     customer: customerId,
//     return_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/settings`,
//   });

//   return session;
// }

// export async function getSubscription(subscriptionId: string) {
//   return await stripe.subscriptions.retrieve(subscriptionId);
// }

// export async function cancelSubscription(subscriptionId: string) {
//   return await stripe.subscriptions.cancel(subscriptionId);
// }
