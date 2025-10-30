import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const onboardingSchema = z.object({
  // Business Information
  businessName: z.string().min(1, 'Business name is required'),
  businessType: z.string().min(1, 'Business type is required'),
  website: z.string().url().optional().or(z.literal('')),
  location: z.string().min(1, 'Location is required'),
  yearsInBusiness: z.string().min(1, 'Years in business is required'),
  
  // Contact Information
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(1, 'Phone number is required'),
  role: z.string().min(1, 'Role is required'),
  
  // Marketing Information
  currentMarketingSpend: z.string().min(1, 'Marketing spend is required'),
  targetAudience: z.string().min(1, 'Target audience is required'),
  mainServices: z.array(z.string()).min(1, 'At least one service is required'),
  competitors: z.string().optional(),
  goals: z.array(z.string()).min(1, 'At least one goal is required'),
  
  // Technical Information
  hasGoogleAds: z.boolean(),
  hasMetaAds: z.boolean(),
  hasWebsiteAnalytics: z.boolean(),
  currentTools: z.array(z.string()),
  
  // Preferences
  preferredContactTime: z.string().optional(),
  communicationPreference: z.string().optional(),
  tier: z.enum(['launch', 'growth', 'ai-dominance']),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = onboardingSchema.parse(body);

    // Generate unique client ID
    const clientId = `client_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    // Store client data in database (implement your database logic here)
    await storeClientData(clientId, validatedData);

    // Send welcome email
    await sendWelcomeEmail(validatedData.email, validatedData.businessName, validatedData.tier);

    // Notify team via Slack
    await notifyTeamNewOnboarding(validatedData);

    // Create initial dashboard setup
    await setupClientDashboard(clientId, validatedData.tier);

    // Sync to Notion CRM
    await syncToNotionCRM(clientId, validatedData);

    return NextResponse.json({ 
      success: true, 
      clientId,
      message: 'Onboarding submitted successfully' 
    });
  } catch (error) {
    console.error('Onboarding submission failed:', error);
    
    if (error instanceof z.ZodError) {
        return NextResponse.json(
          { 
            success: false, 
            error: 'Validation failed',
            details: error.issues 
          },
          { status: 400 }
        );
    }

    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Helper functions (implement based on your infrastructure)
async function storeClientData(clientId: string, data: any) {
  // Store in your database
  console.log(`Storing client data for ${clientId}:`, data);
  
  // Example: Store in database
  // await db.clients.create({
  //   id: clientId,
  //   ...data,
  //   createdAt: new Date(),
  //   status: 'onboarding_completed'
  // });
}

async function sendWelcomeEmail(email: string, businessName: string, tier: string) {
  // Send welcome email using your email service
  console.log(`Sending welcome email to ${email} for ${businessName} (${tier})`);
  
  // Example: Send email using Resend, SendGrid, etc.
  // await emailService.send({
  //   to: email,
  //   subject: `Welcome to Valenza Media, ${businessName}!`,
  //   template: 'welcome',
  //   data: { businessName, tier }
  // });
}

async function notifyTeamNewOnboarding(data: any) {
  // Send Slack notification
  console.log(`Notifying team about new onboarding:`, data.businessName);
  
  // Example: Send Slack message
  // await slackService.sendMessage({
  //   channel: '#new-clients',
  //   text: `New client onboarding: ${data.businessName} (${data.tier})`,
  //   blocks: [/* Slack blocks */]
  // });
}

async function setupClientDashboard(clientId: string, tier: string) {
  // Set up initial dashboard configuration
  console.log(`Setting up dashboard for client ${clientId} with tier ${tier}`);
  
  // Example: Create dashboard configuration
  // await db.dashboards.create({
  //   clientId,
  //   tier,
  //   features: getTierFeatures(tier),
  //   status: 'active'
  // });
}

async function syncToNotionCRM(clientId: string, data: any) {
  // Sync to Notion CRM
  console.log(`Syncing client ${clientId} to Notion CRM`);
  
  // Example: Create Notion page
  // await notion.pages.create({
  //   parent: { database_id: process.env.NOTION_CLIENTS_DB_ID },
  //   properties: {
  //     'Client ID': { title: [{ text: { content: clientId } }] },
  //     'Business Name': { rich_text: [{ text: { content: data.businessName } }] },
  //     'Tier': { select: { name: data.tier } },
  //     'Status': { select: { name: 'Onboarding Completed' } },
  //     'Email': { email: data.email },
  //     'Phone': { phone_number: data.phone },
  //     'Location': { rich_text: [{ text: { content: data.location } }] },
  //     'Created': { date: { start: new Date().toISOString() } }
  //   }
  // });
}
