# 🎯 Calendly Setup Guide for GlowGrowth Media

## Step 1: Create Your Calendly Account

1. **Go to [calendly.com](https://calendly.com)**
2. **Sign up** with your business email
3. **Complete your profile** with:
   - Your name: "Shivam Mishra"
   - Company: "GlowGrowth Media"
   - Profile picture
   - Bio: "Premium medspa marketing specialist helping aesthetic practices get 10+ qualified appointments monthly"

## Step 2: Create Event Types

Create these specific event types in Calendly:

### 1. Growth Strategy Consultation
- **Duration**: 30 minutes
- **Description**: "Free strategy session to analyze your medspa's marketing and show you how to get 10+ qualified appointments monthly"
- **Buffer time**: 15 minutes before/after
- **Availability**: Business hours (9 AM - 6 PM EST, Monday-Friday)

### 2. Private Consultation
- **Duration**: 60 minutes
- **Description**: "Comprehensive consultation for established medspas ready to scale with premium marketing strategies"
- **Buffer time**: 15 minutes before/after
- **Availability**: Business hours + some evening slots

### 3. Discovery Call
- **Duration**: 15 minutes
- **Description**: "Quick discovery call to understand your medspa's current challenges and growth goals"
- **Buffer time**: 5 minutes before/after
- **Availability**: Business hours

## Step 3: Get Your Calendly URLs

After creating events, you'll get URLs like:
- `https://calendly.com/your-username/growth-strategy`
- `https://calendly.com/your-username/private-consultation`
- `https://calendly.com/your-username/discovery-call`

## Step 4: Update Your Website

1. **Open** `src/data/calendly-config.ts`
2. **Replace** `your-username` with your actual Calendly username
3. **Update** the event type names to match what you created
4. **Test** all links to ensure they work

## Step 5: Configure Calendly Settings

### Email Notifications
- ✅ Send confirmation emails
- ✅ Send reminder emails (24 hours, 1 hour before)
- ✅ Send follow-up emails

### Calendar Integration
- Connect your Google Calendar
- Set up automatic calendar blocking
- Configure time zone settings

### Customization
- Add your logo to booking pages
- Customize colors to match your brand
- Add custom questions for lead qualification

## Step 6: Test Your Integration

1. **Test each button** on your website
2. **Book a test appointment** with yourself
3. **Check email notifications** work properly
4. **Verify calendar integration** is working

## Step 7: Advanced Features (Optional)

### Calendly Widget
You can also embed a Calendly widget directly on your website:

```html
<!-- Calendly inline widget -->
<div class="calendly-inline-widget" data-url="https://calendly.com/your-username/growth-strategy" style="min-width:320px;height:630px;"></div>
<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
```

### Custom Domain
- Set up a custom domain like `book.glowgrowthmedia.com`
- Redirects to your Calendly page
- More professional appearance

## Step 8: Analytics & Tracking

### Google Analytics
- Track Calendly page views
- Monitor conversion rates
- Set up goal tracking for bookings

### UTM Parameters
Add tracking parameters to your Calendly links:
```
https://calendly.com/your-username/growth-strategy?utm_source=website&utm_medium=cta&utm_campaign=hero
```

## Troubleshooting

### Common Issues:
1. **Links not working**: Check your Calendly username is correct
2. **Popup blocked**: The website has fallback to same-tab navigation
3. **Time zone issues**: Configure time zones in Calendly settings
4. **Email not sending**: Check spam folder, verify email settings

### Support:
- Calendly Help Center: https://help.calendly.com
- Calendly Community: https://community.calendly.com

## Next Steps After Setup:

1. **Monitor bookings** for the first week
2. **Adjust availability** based on demand
3. **Add more event types** if needed
4. **Set up automated follow-ups**
5. **Track conversion rates** and optimize

---

**Remember**: Replace all placeholder URLs in the code with your actual Calendly links before going live!
