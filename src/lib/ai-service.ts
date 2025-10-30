// import OpenAI from 'openai';

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

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

export interface PerformanceAnalysis {
  insights: string[];
  recommendations: string[];
  predictedImpact: string;
  confidence: number;
}

export class AIService {
  async generateAdCopy(request: AdCopyRequest): Promise<AdCopyResponse> {
    const prompt = `
      Generate high-converting ad copy for a ${request.businessType} business targeting ${request.targetAudience}.
      
      Key Benefits: ${request.keyBenefits.join(', ')}
      Tone: ${request.tone}
      Platform: ${request.platform}
      Objective: ${request.campaignObjective}
      
      Generate:
      1. 5 compelling headlines (under 30 characters for Meta, under 30 characters for Google)
      2. 5 engaging descriptions (under 125 characters for Meta, under 90 characters for Google)
      3. 5 strong call-to-actions
      4. 3 optimization suggestions
      
      Focus on emotional triggers, urgency, and clear value propositions. Make it specific to the medspa/aesthetic industry.
    `;

    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [
          {
            role: "system",
            content: "You are an expert copywriter specializing in high-converting ads for medspa and aesthetic businesses. Focus on results, trust, and emotional appeal."
          },
          {
            role: "user",
            content: prompt
          }
        ],
        temperature: 0.7,
        max_tokens: 1000,
      });

      const content = completion.choices[0]?.message?.content || '';
      return this.parseAdCopyResponse(content);
    } catch (error) {
      console.error('AI ad copy generation failed:', error);
      throw new Error('Failed to generate ad copy');
    }
  }

  async analyzePerformance(campaignData: any): Promise<PerformanceAnalysis> {
    const prompt = `
      Analyze this campaign performance data and provide insights:
      
      Campaign Data: ${JSON.stringify(campaignData, null, 2)}
      
      Provide:
      1. 3 key insights about performance
      2. 3 specific recommendations for improvement
      3. Predicted impact of implementing recommendations
      4. Confidence level (0-100) in the analysis
      
      Focus on actionable insights for medspa marketing campaigns.
    `;

    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [
          {
            role: "system",
            content: "You are a digital marketing expert specializing in medspa and aesthetic practice growth. Provide data-driven insights and actionable recommendations."
          },
          {
            role: "user",
            content: prompt
          }
        ],
        temperature: 0.3,
        max_tokens: 800,
      });

      const content = completion.choices[0]?.message?.content || '';
      return this.parsePerformanceAnalysis(content);
    } catch (error) {
      console.error('AI performance analysis failed:', error);
      throw new Error('Failed to analyze performance');
    }
  }

  async generateCompetitorInsights(competitorData: any[]): Promise<string[]> {
    const prompt = `
      Analyze these competitor ad campaigns and provide strategic insights:
      
      Competitor Data: ${JSON.stringify(competitorData, null, 2)}
      
      Provide 5 key insights about:
      - Market positioning opportunities
      - Messaging gaps to exploit
      - Pricing strategies
      - Target audience insights
      - Creative approaches
      
      Focus on actionable opportunities for a medspa business.
    `;

    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [
          {
            role: "system",
            content: "You are a competitive intelligence expert specializing in the aesthetic and medspa industry. Identify opportunities and threats."
          },
          {
            role: "user",
            content: prompt
          }
        ],
        temperature: 0.4,
        max_tokens: 600,
      });

      const content = completion.choices[0]?.message?.content || '';
      return this.parseInsights(content);
    } catch (error) {
      console.error('AI competitor analysis failed:', error);
      throw new Error('Failed to analyze competitors');
    }
  }

  async generateMonthlyReport(clientData: any): Promise<string> {
    const prompt = `
      Generate a comprehensive monthly marketing report for this medspa client:
      
      Client Data: ${JSON.stringify(clientData, null, 2)}
      
      Include:
      - Executive summary
      - Key performance metrics
      - Campaign highlights
      - Areas for improvement
      - Next month recommendations
      - ROI analysis
      
      Make it professional, data-driven, and client-friendly.
    `;

    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [
          {
            role: "system",
            content: "You are a marketing consultant creating monthly reports for medspa clients. Be professional, insightful, and action-oriented."
          },
          {
            role: "user",
            content: prompt
          }
        ],
        temperature: 0.3,
        max_tokens: 1500,
      });

      return completion.choices[0]?.message?.content || '';
    } catch (error) {
      console.error('AI report generation failed:', error);
      throw new Error('Failed to generate report');
    }
  }

  private parseAdCopyResponse(content: string): AdCopyResponse {
    // Parse the AI response into structured format
    const lines = content.split('\n').filter(line => line.trim());
    
    const headlines: string[] = [];
    const descriptions: string[] = [];
    const callToActions: string[] = [];
    const suggestions: string[] = [];

    let currentSection = '';
    
    for (const line of lines) {
      if (line.includes('headline') || line.includes('Headline')) {
        currentSection = 'headlines';
        continue;
      } else if (line.includes('description') || line.includes('Description')) {
        currentSection = 'descriptions';
        continue;
      } else if (line.includes('call-to-action') || line.includes('CTA')) {
        currentSection = 'ctas';
        continue;
      } else if (line.includes('suggestion') || line.includes('Suggestion')) {
        currentSection = 'suggestions';
        continue;
      }

      const cleanLine = line.replace(/^\d+\.\s*/, '').replace(/^[-*]\s*/, '').trim();
      
      if (cleanLine && currentSection === 'headlines') {
        headlines.push(cleanLine);
      } else if (cleanLine && currentSection === 'descriptions') {
        descriptions.push(cleanLine);
      } else if (cleanLine && currentSection === 'ctas') {
        callToActions.push(cleanLine);
      } else if (cleanLine && currentSection === 'suggestions') {
        suggestions.push(cleanLine);
      }
    }

    return {
      headlines: headlines.slice(0, 5),
      descriptions: descriptions.slice(0, 5),
      callToActions: callToActions.slice(0, 5),
      suggestions: suggestions.slice(0, 3),
    };
  }

  private parsePerformanceAnalysis(content: string): PerformanceAnalysis {
    const lines = content.split('\n').filter(line => line.trim());
    
    const insights: string[] = [];
    const recommendations: string[] = [];
    let predictedImpact = '';
    let confidence = 85; // Default confidence

    let currentSection = '';
    
    for (const line of lines) {
      if (line.includes('insight') || line.includes('Insight')) {
        currentSection = 'insights';
        continue;
      } else if (line.includes('recommendation') || line.includes('Recommendation')) {
        currentSection = 'recommendations';
        continue;
      } else if (line.includes('impact') || line.includes('Impact')) {
        currentSection = 'impact';
        continue;
      } else if (line.includes('confidence') || line.includes('Confidence')) {
        const match = line.match(/(\d+)/);
        if (match) {
          confidence = parseInt(match[1]);
        }
        continue;
      }

      const cleanLine = line.replace(/^\d+\.\s*/, '').replace(/^[-*]\s*/, '').trim();
      
      if (cleanLine && currentSection === 'insights') {
        insights.push(cleanLine);
      } else if (cleanLine && currentSection === 'recommendations') {
        recommendations.push(cleanLine);
      } else if (cleanLine && currentSection === 'impact') {
        predictedImpact = cleanLine;
      }
    }

    return {
      insights: insights.slice(0, 3),
      recommendations: recommendations.slice(0, 3),
      predictedImpact: predictedImpact || 'Moderate improvement expected',
      confidence: Math.min(100, Math.max(0, confidence)),
    };
  }

  private parseInsights(content: string): string[] {
    const lines = content.split('\n').filter(line => line.trim());
    const insights: string[] = [];

    for (const line of lines) {
      const cleanLine = line.replace(/^\d+\.\s*/, '').replace(/^[-*]\s*/, '').trim();
      if (cleanLine && cleanLine.length > 10) {
        insights.push(cleanLine);
      }
    }

    return insights.slice(0, 5);
  }
}
