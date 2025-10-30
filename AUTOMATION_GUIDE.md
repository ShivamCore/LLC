# Valenza Media - Fully Automated Digital Agency System

## 🚀 System Overview

Valenza Media has been transformed into a fully automated digital agency system that handles everything from client onboarding to campaign management, reporting, and team notifications. This system eliminates manual work and provides a seamless experience for both clients and the Valenza team.

## ✨ Key Features

### 🤖 Complete Automation
- **Automated Onboarding**: Multi-step form → Dashboard → Team notifications
- **Payment Processing**: Stripe integration with automatic subscription management
- **Campaign Management**: Real-time data from Meta Ads and Google Ads APIs
- **AI-Powered Features**: Ad copy generation, performance analysis, competitor insights
- **Automated Reporting**: Monthly PDF reports with email delivery
- **Team Notifications**: Slack integration for real-time alerts and updates

### 📊 Three-Tier Client System
- **Launch Plan** ($1,200/month): Basic social media management and reporting
- **Growth Plan** ($2,000/month): Multi-platform management with dedicated support
- **AI Dominance Plan** ($3,500/month): Full automation with AI insights and real-time monitoring

### 🎯 Role-Based Access
- **Client Dashboards**: Tier-specific features and data access
- **Admin Dashboard**: Complete system overview and management
- **Team Notifications**: Automated alerts for all important events

## 🛠 Technical Architecture

### Core Services
- **Stripe Integration**: Payment processing and subscription management
- **Meta Ads API**: Real-time campaign data and optimization
- **Google Ads API**: Search and display campaign management
- **OpenAI Integration**: AI-powered copy generation and insights
- **Notion CRM**: Real-time data synchronization and client management
- **Slack Notifications**: Team communication and alerts
- **Email Service**: Automated client communications and reports

### Database & Storage
- **Notion CRM**: Primary database for clients, campaigns, and reports
- **Real-time Sync**: All data synchronized across platforms
- **PDF Generation**: Automated report creation with Puppeteer

## 📋 Setup Instructions

### 1. Environment Configuration
Copy `env.example` to `.env.local` and configure:

```bash
# Stripe Configuration
STRIPE_SECRET_KEY="sk_test_..."
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."

# API Keys
OPENAI_API_KEY="sk-..."
META_ACCESS_TOKEN="your_meta_token"
GOOGLE_ADS_DEVELOPER_TOKEN="your_google_token"

# Notion CRM
NOTION_API_KEY="secret_..."
NOTION_CLIENTS_DB_ID="your_database_id"

# Email & Slack
SMTP_HOST="smtp.gmail.com"
SLACK_BOT_TOKEN="xoxb-..."
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Database Setup
Create Notion databases with the following structure:

**Clients Database:**
- Client ID (Title)
- Business Name (Rich Text)
- Email (Email)
- Phone (Phone Number)
- Tier (Select: Launch, Growth, AI Dominance)
- Status (Select: Onboarding, Active, Paused, Cancelled)
- Monthly Revenue (Number)
- Created (Date)
- Updated (Date)

**Campaigns Database:**
- Campaign ID (Title)
- Client (Relation to Clients)
- Name (Rich Text)
- Platform (Select: Meta, Google, LinkedIn)
- Status (Select: Active, Paused, Completed)
- Budget (Number)
- Spend (Number)
- Revenue (Number)
- Impressions (Number)
- Clicks (Number)
- Conversions (Number)
- ROI (Number)

**Reports Database:**
- Report ID (Title)
- Client (Relation to Clients)
- Month (Select)
- Year (Number)
- Total Spend (Number)
- Total Revenue (Number)
- ROI (Number)
- Status (Select: Draft, Sent, Delivered)

### 4. Stripe Setup
1. Create Stripe account and get API keys
2. Create products and prices for each tier
3. Set up webhook endpoint: `/api/stripe/webhook`
4. Configure webhook events:
   - `checkout.session.completed`
   - `customer.subscription.created`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
   - `invoice.payment_succeeded`
   - `invoice.payment_failed`

### 5. API Integrations

#### Meta Ads API
1. Create Meta App in Developer Console
2. Get access token with required permissions
3. Configure webhook for real-time updates

#### Google Ads API
1. Set up Google Ads API access
2. Create OAuth2 credentials
3. Configure refresh token for API access

#### OpenAI API
1. Create OpenAI account
2. Generate API key
3. Configure for GPT-4 access

### 6. Slack Setup
1. Create Slack app
2. Install to workspace
3. Get bot token
4. Configure channel IDs for notifications

## 🚀 Deployment

### 1. Build Application
```bash
npm run build
```

### 2. Environment Variables
Set all environment variables in your deployment platform (Vercel, Netlify, etc.)

### 3. Webhook Configuration
Configure webhook URLs:
- Stripe: `https://yourdomain.com/api/stripe/webhook`
- Meta: `https://yourdomain.com/api/meta/webhook`

### 4. Database Migration
Ensure Notion databases are properly configured and accessible.

## 📊 System Workflows

### Client Onboarding Flow
1. Client fills out onboarding form (`/onboarding`)
2. Data validated and stored in Notion CRM
3. Welcome email sent to client
4. Team notified via Slack
5. Client dashboard provisioned
6. Payment processed via Stripe
7. Campaign setup initiated

### Monthly Reporting Flow
1. System generates reports for all active clients
2. AI analyzes performance data
3. PDF reports created with Puppeteer
4. Reports sent via email to clients
5. Team notified of report completion
6. Data synced to Notion CRM

### Campaign Management Flow
1. Real-time data pulled from ads APIs
2. AI analyzes performance and generates insights
3. Alerts sent for performance issues
4. Budget optimizations suggested
5. Data synced to Notion CRM
6. Client dashboard updated

## 🔧 Maintenance & Monitoring

### Admin Dashboard
Access `/admin/dashboard` for:
- System health monitoring
- Client management
- Revenue tracking
- Alert management
- Report generation

### Health Checks
- API connectivity monitoring
- Database sync status
- Email delivery tracking
- Slack notification status

### Automated Tasks
- Daily campaign data sync
- Weekly performance reports
- Monthly client reports
- System health checks

## 📈 Scaling Considerations

### Performance Optimization
- Implement caching for API responses
- Use database indexing for faster queries
- Optimize PDF generation process
- Implement rate limiting for APIs

### Security
- Implement proper authentication
- Use environment variables for secrets
- Regular security audits
- API key rotation

### Monitoring
- Set up error tracking (Sentry)
- Monitor API usage and costs
- Track system performance metrics
- Alert on critical failures

## 🎯 Business Impact

### For Valenza Media
- **100% Automated**: No manual work required
- **Scalable**: Handle unlimited clients
- **Professional**: Automated communications and reporting
- **Profitable**: Higher margins with automation

### For Clients
- **Instant Onboarding**: Immediate access to dashboard
- **Real-time Data**: Live campaign performance
- **AI Insights**: Automated optimization suggestions
- **Professional Reports**: Monthly PDF reports

## 🚨 Troubleshooting

### Common Issues
1. **API Rate Limits**: Implement proper rate limiting
2. **Webhook Failures**: Check endpoint configuration
3. **Email Delivery**: Verify SMTP settings
4. **Database Sync**: Check Notion API permissions

### Support
- Check system logs for errors
- Monitor Slack alerts
- Use admin dashboard for diagnostics
- Contact support for critical issues

## 📞 Support

For technical support or questions:
- Email: support@valenzamedia.com
- Slack: #support channel
- Admin Dashboard: System monitoring and management

---

**Valenza Media - Fully Automated Digital Agency System**  
*Transforming medspa marketing through automation and AI*
