import OpenAI from 'openai';

export interface AdCopyRequest {
  businessType: string;
  targetAudience: string;
  keyBenefits: string[];
  tone: 'professional' | 'casual' | 'luxury' | 'urgent';
  platform: 'meta' | 'google' | 'linkedin';
  campaignObjective: 'awareness' | 'conversion' | 'engagement' | 'lead_generation';
}

export interface AdCopyResponse {
  headlines: string[];
  descriptions: string[];
  callToActions: string[];
  suggestions: string[];
}

export class AIService {
  private client: OpenAI | null;

  constructor() {
    const apiKey = process.env.OPENAI_API_KEY;
    this.client = apiKey ? new OpenAI({ apiKey }) : null;
  }

  async generateAdCopy(request: AdCopyRequest): Promise<AdCopyResponse> {
    const fallback: AdCopyResponse = {
      headlines: [
        'Premium Results, Every Visit',
        'Glow With Confidence',
        'Effortless Beauty, Daily',
        'Your Best Skin Starts Here',
        'Look Refreshed, Feel Amazing'
      ],
      descriptions: [
        'Book a consultation and see why clients trust our medspa.',
        'Natural-looking results tailored to your goals.',
        'Personalized treatments. Proven outcomes.',
        'Advanced care. Luxury experience. Real results.',
        'Limited openings this week. Reserve your spot.'
      ],
      callToActions: ['Book Now', 'Claim Offer', 'Schedule Consultation', 'Get Started', 'See Pricing'],
      suggestions: ['Test two headline angles', 'Tighten audience by interest', 'Add social proof snippets']
    };

    if (!this.client) return fallback;

    const prompt = `Generate high-converting ${request.platform} ad copy for a ${request.businessType} targeting ${request.targetAudience}.
Key Benefits: ${request.keyBenefits.join(', ')}
Tone: ${request.tone}
Objective: ${request.campaignObjective}
Deliver 5 headlines, 5 descriptions, 5 CTAs, and 3 optimization suggestions, each as bullet lines.`;

    try {
      const completion = await this.client.chat.completions.create({
        model: 'gpt-4o-mini',
        temperature: 0.7,
        messages: [
          { role: 'system', content: 'You are an expert medspa ad copywriter.' },
          { role: 'user', content: prompt }
        ],
      });
      const content = completion.choices[0]?.message?.content || '';
      return this.parse(content) || fallback;
    } catch {
      return fallback;
    }
  }

  private parse(content: string): AdCopyResponse | null {
    const lines = content.split('\n').map(l => l.trim()).filter(Boolean);
    const headlines: string[] = [];
    const descriptions: string[] = [];
    const callToActions: string[] = [];
    const suggestions: string[] = [];

    let section: 'h'|'d'|'c'|'s'|null = null;
    for (const line of lines) {
      const lower = line.toLowerCase();
      if (lower.includes('headline')) { section = 'h'; continue; }
      if (lower.includes('description')) { section = 'd'; continue; }
      if (lower.includes('call-to-action') || lower.includes('cta')) { section = 'c'; continue; }
      if (lower.includes('suggestion')) { section = 's'; continue; }
      const clean = line.replace(/^[-*\d+.\s]+/, '').trim();
      if (!clean) continue;
      if (section === 'h') headlines.push(clean);
      else if (section === 'd') descriptions.push(clean);
      else if (section === 'c') callToActions.push(clean);
      else if (section === 's') suggestions.push(clean);
    }

    if (!headlines.length && !descriptions.length) return null;
    return {
      headlines: headlines.slice(0,5),
      descriptions: descriptions.slice(0,5),
      callToActions: callToActions.slice(0,5),
      suggestions: suggestions.slice(0,3)
    };
    }
}


