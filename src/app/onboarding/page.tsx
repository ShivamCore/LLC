"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  CheckCircle, 
  ArrowRight, 
  Building2, 
  User, 
  CreditCard, 
  Target,
  Calendar,
  FileText,
  Zap
} from 'lucide-react';

interface OnboardingData {
  // Business Information
  businessName: string;
  businessType: string;
  website: string;
  location: string;
  yearsInBusiness: string;
  
  // Contact Information
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: string;
  
  // Marketing Information
  currentMarketingSpend: string;
  targetAudience: string;
  mainServices: string[];
  competitors: string;
  goals: string[];
  
  // Technical Information
  hasGoogleAds: boolean;
  hasMetaAds: boolean;
  hasWebsiteAnalytics: boolean;
  currentTools: string[];
  
  // Preferences
  preferredContactTime: string;
  communicationPreference: string;
  tier: 'launch' | 'growth' | 'ai-dominance';
}

const steps = [
  { id: 1, title: 'Business Info', icon: Building2 },
  { id: 2, title: 'Contact Details', icon: User },
  { id: 3, title: 'Marketing Goals', icon: Target },
  { id: 4, title: 'Technical Setup', icon: Zap },
  { id: 5, title: 'Plan Selection', icon: CreditCard },
  { id: 6, title: 'Review & Submit', icon: CheckCircle },
];

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<OnboardingData>({
    businessName: '',
    businessType: '',
    website: '',
    location: '',
    yearsInBusiness: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    role: '',
    currentMarketingSpend: '',
    targetAudience: '',
    mainServices: [],
    competitors: '',
    goals: [],
    hasGoogleAds: false,
    hasMetaAds: false,
    hasWebsiteAnalytics: false,
    currentTools: [],
    preferredContactTime: '',
    communicationPreference: '',
    tier: 'launch',
  });

  const updateFormData = (field: keyof OnboardingData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    try {
      // Submit onboarding data
      const response = await fetch('/api/onboarding/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Redirect to payment
        window.location.href = `/payment?tier=${formData.tier}&clientId=${Date.now()}`;
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Onboarding submission failed:', error);
      alert('Submission failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
  return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-charcoal-950 mb-6">Tell us about your business</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-charcoal-700 mb-2">
                  Business Name *
                </label>
                <input
                  type="text"
                  value={formData.businessName}
                  onChange={(e) => updateFormData('businessName', e.target.value)}
                  className="w-full px-4 py-3 border border-charcoal-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500"
                  placeholder="Your MedSpa Name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-charcoal-700 mb-2">
                  Business Type *
                </label>
                <select
                  value={formData.businessType}
                  onChange={(e) => updateFormData('businessType', e.target.value)}
                  className="w-full px-4 py-3 border border-charcoal-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500"
                >
                  <option value="">Select Type</option>
                  <option value="medspa">MedSpa</option>
                  <option value="dermatology">Dermatology Practice</option>
                  <option value="aesthetic-clinic">Aesthetic Clinic</option>
                  <option value="plastic-surgery">Plastic Surgery</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-charcoal-700 mb-2">
                  Website URL
                </label>
                <input
                  type="url"
                  value={formData.website}
                  onChange={(e) => updateFormData('website', e.target.value)}
                  className="w-full px-4 py-3 border border-charcoal-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500"
                  placeholder="https://yourwebsite.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-charcoal-700 mb-2">
                  Location *
                </label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => updateFormData('location', e.target.value)}
                  className="w-full px-4 py-3 border border-charcoal-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500"
                  placeholder="City, State"
                />
          </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-charcoal-700 mb-2">
                  Years in Business *
                </label>
                <select
                  value={formData.yearsInBusiness}
                  onChange={(e) => updateFormData('yearsInBusiness', e.target.value)}
                  className="w-full px-4 py-3 border border-charcoal-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500"
                >
                  <option value="">Select Years</option>
                  <option value="0-1">0-1 years</option>
                  <option value="1-3">1-3 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5-10">5-10 years</option>
                  <option value="10+">10+ years</option>
                </select>
              </div>
                      </div>
                    </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-charcoal-950 mb-6">Contact Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-charcoal-700 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => updateFormData('firstName', e.target.value)}
                  className="w-full px-4 py-3 border border-charcoal-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500"
                  placeholder="John"
                />
                      </div>

              <div>
                <label className="block text-sm font-semibold text-charcoal-700 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => updateFormData('lastName', e.target.value)}
                  className="w-full px-4 py-3 border border-charcoal-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500"
                  placeholder="Doe"
                />
            </div>

              <div>
                <label className="block text-sm font-semibold text-charcoal-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateFormData('email', e.target.value)}
                  className="w-full px-4 py-3 border border-charcoal-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500"
                  placeholder="john@yourmedspa.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-charcoal-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => updateFormData('phone', e.target.value)}
                  className="w-full px-4 py-3 border border-charcoal-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500"
                  placeholder="(555) 123-4567"
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-charcoal-700 mb-2">
                  Your Role *
                </label>
                <select
                  value={formData.role}
                  onChange={(e) => updateFormData('role', e.target.value)}
                  className="w-full px-4 py-3 border border-charcoal-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500"
                >
                  <option value="">Select Role</option>
                  <option value="owner">Owner</option>
                  <option value="manager">Manager</option>
                  <option value="marketing-director">Marketing Director</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-charcoal-950 mb-6">Marketing Goals & Audience</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-charcoal-700 mb-2">
                  Current Monthly Marketing Spend *
                </label>
                <select
                  value={formData.currentMarketingSpend}
                  onChange={(e) => updateFormData('currentMarketingSpend', e.target.value)}
                  className="w-full px-4 py-3 border border-charcoal-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500"
                >
                  <option value="">Select Range</option>
                  <option value="0-1000">$0 - $1,000</option>
                  <option value="1000-5000">$1,000 - $5,000</option>
                  <option value="5000-10000">$5,000 - $10,000</option>
                  <option value="10000-25000">$10,000 - $25,000</option>
                  <option value="25000+">$25,000+</option>
                </select>
                      </div>
              
              <div>
                <label className="block text-sm font-semibold text-charcoal-700 mb-2">
                  Target Audience *
                </label>
                <textarea
                  value={formData.targetAudience}
                  onChange={(e) => updateFormData('targetAudience', e.target.value)}
                  className="w-full px-4 py-3 border border-charcoal-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500"
                  rows={3}
                  placeholder="Describe your ideal customers (age, demographics, interests, etc.)"
                />
                      </div>
              
              <div>
                <label className="block text-sm font-semibold text-charcoal-700 mb-2">
                  Main Services *
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {['Botox', 'Fillers', 'Laser Treatments', 'Chemical Peels', 'Microneedling', 'CoolSculpting', 'Facials', 'Body Treatments', 'Other'].map((service) => (
                    <label key={service} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={formData.mainServices.includes(service)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            updateFormData('mainServices', [...formData.mainServices, service]);
                          } else {
                            updateFormData('mainServices', formData.mainServices.filter(s => s !== service));
                          }
                        }}
                        className="w-4 h-4 text-gold-600 border-charcoal-300 rounded focus:ring-gold-500"
                      />
                      <span className="text-sm text-charcoal-700">{service}</span>
                    </label>
                  ))}
                      </div>
                    </div>
              
                <div>
                <label className="block text-sm font-semibold text-charcoal-700 mb-2">
                  Main Competitors
                </label>
                <textarea
                  value={formData.competitors}
                  onChange={(e) => updateFormData('competitors', e.target.value)}
                  className="w-full px-4 py-3 border border-charcoal-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500"
                  rows={2}
                  placeholder="List your main competitors in the area"
                />
                      </div>
              
                      <div>
                <label className="block text-sm font-semibold text-charcoal-700 mb-2">
                  Primary Goals *
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {['Increase Leads', 'Boost Brand Awareness', 'Improve Online Reviews', 'Increase Revenue', 'Expand Services', 'Beat Competitors'].map((goal) => (
                    <label key={goal} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={formData.goals.includes(goal)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            updateFormData('goals', [...formData.goals, goal]);
                          } else {
                            updateFormData('goals', formData.goals.filter(g => g !== goal));
                          }
                        }}
                        className="w-4 h-4 text-gold-600 border-charcoal-300 rounded focus:ring-gold-500"
                      />
                      <span className="text-sm text-charcoal-700">{goal}</span>
                    </label>
                  ))}
                </div>
              </div>
                      </div>
                    </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-charcoal-950 mb-6">Technical Setup</h2>
            
            <div className="space-y-6">
                      <div>
                <h3 className="text-lg font-semibold text-charcoal-800 mb-4">Current Marketing Tools</h3>
                <div className="space-y-4">
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={formData.hasGoogleAds}
                      onChange={(e) => updateFormData('hasGoogleAds', e.target.checked)}
                      className="w-5 h-5 text-gold-600 border-charcoal-300 rounded focus:ring-gold-500"
                    />
                    <span className="text-charcoal-700">Google Ads Account</span>
                  </label>
                  
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={formData.hasMetaAds}
                      onChange={(e) => updateFormData('hasMetaAds', e.target.checked)}
                      className="w-5 h-5 text-gold-600 border-charcoal-300 rounded focus:ring-gold-500"
                    />
                    <span className="text-charcoal-700">Meta (Facebook/Instagram) Ads Account</span>
                  </label>
                  
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={formData.hasWebsiteAnalytics}
                      onChange={(e) => updateFormData('hasWebsiteAnalytics', e.target.checked)}
                      className="w-5 h-5 text-gold-600 border-charcoal-300 rounded focus:ring-gold-500"
                    />
                    <span className="text-charcoal-700">Website Analytics (Google Analytics)</span>
                  </label>
                      </div>
                    </div>

                      <div>
                <label className="block text-sm font-semibold text-charcoal-700 mb-2">
                  Other Marketing Tools
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {['Mailchimp', 'Constant Contact', 'HubSpot', 'Salesforce', 'Zapier', 'Other'].map((tool) => (
                    <label key={tool} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={formData.currentTools.includes(tool)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            updateFormData('currentTools', [...formData.currentTools, tool]);
                          } else {
                            updateFormData('currentTools', formData.currentTools.filter(t => t !== tool));
                          }
                        }}
                        className="w-4 h-4 text-gold-600 border-charcoal-300 rounded focus:ring-gold-500"
                      />
                      <span className="text-sm text-charcoal-700">{tool}</span>
                    </label>
                  ))}
                      </div>
                    </div>
                  </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-charcoal-950 mb-6">Choose Your Plan</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  tier: 'launch',
                  name: 'Launch Plan',
                  price: '$1,200',
                  setup: '$250',
                  description: 'Perfect for clinics beginning digital marketing',
                  features: [
                    'Social Media Management (2 Platforms)',
                    'Monthly Ad Campaign (Facebook or Instagram)',
                    'Content Creation & Copywriting',
                    'Basic Lead Tracking Dashboard',
                    'Monthly Reporting & Optimization'
                  ]
                },
                {
                  tier: 'growth',
                  name: 'Growth Plan',
                  price: '$2,000',
                  setup: '$350',
                  description: 'Designed for medspas ready to scale revenue',
                  features: [
                    'Multi-Platform Management (Up to 3)',
                    'Paid Ads + Retargeting (Facebook, Instagram, Google)',
                    'Content Calendar & Branding Alignment',
                    'Conversion Funnel Design',
                    'Dedicated Account Manager + Priority Support'
                  ]
                },
                {
                  tier: 'ai-dominance',
                  name: 'AI Dominance Plan',
                  price: '$3,500',
                  setup: '$500',
                  description: 'For market leaders aiming for total automation',
                  features: [
                    '360° Marketing Management',
                    'AI Automations (Chatbots, CRM Triggers)',
                    'Advanced Analytics Dashboard with Real-Time Reports',
                    'Conversion Funnel Optimization',
                    'Personal Strategy Call with Lead Strategist'
                  ]
                }
              ].map((plan) => (
                <div
                  key={plan.tier}
                  className={`p-6 rounded-2xl border-2 cursor-pointer transition-all ${
                    formData.tier === plan.tier
                      ? 'border-gold-500 bg-gold-50'
                      : 'border-charcoal-200 hover:border-gold-300'
                  }`}
                  onClick={() => updateFormData('tier', plan.tier as any)}
                >
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-charcoal-950">{plan.name}</h3>
                    <div className="mt-2">
                      <span className="text-3xl font-bold text-gold-600">{plan.price}</span>
                      <span className="text-charcoal-600">/month</span>
                    </div>
                    <p className="text-sm text-charcoal-600 mt-1">+ {plan.setup} setup</p>
                    <p className="text-sm text-charcoal-700 mt-2">{plan.description}</p>
                </div>

                  <ul className="space-y-2">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2 text-sm text-charcoal-700">
                        <CheckCircle className="w-4 h-4 text-gold-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                    </ul>
                    </div>
              ))}
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-charcoal-950 mb-6">Review & Submit</h2>
            
            <div className="bg-charcoal-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-charcoal-950 mb-4">Business Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div><strong>Business:</strong> {formData.businessName}</div>
                <div><strong>Type:</strong> {formData.businessType}</div>
                <div><strong>Location:</strong> {formData.location}</div>
                <div><strong>Years:</strong> {formData.yearsInBusiness}</div>
              </div>
            </div>
            
            <div className="bg-charcoal-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-charcoal-950 mb-4">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div><strong>Name:</strong> {formData.firstName} {formData.lastName}</div>
                <div><strong>Email:</strong> {formData.email}</div>
                <div><strong>Phone:</strong> {formData.phone}</div>
                <div><strong>Role:</strong> {formData.role}</div>
              </div>
            </div>
            
            <div className="bg-charcoal-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-charcoal-950 mb-4">Selected Plan</h3>
              <div className="text-center">
                <h4 className="text-xl font-bold text-gold-600">{formData.tier.charAt(0).toUpperCase() + formData.tier.slice(1)} Plan</h4>
                <p className="text-charcoal-700">Ready to start your automated marketing journey</p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-charcoal-50 to-gold-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-charcoal-950 mb-4">
            Welcome to Valenza Media
          </h1>
          <p className="text-xl text-charcoal-700">
            Let's set up your automated marketing system
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-4">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    currentStep >= step.id
                      ? 'bg-gold-500 text-white'
                      : 'bg-charcoal-200 text-charcoal-600'
                  }`}
                >
                  {currentStep > step.id ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <step.icon className="w-5 h-5" />
                  )}
                </div>
                <span className={`ml-2 text-sm font-medium ${
                  currentStep >= step.id ? 'text-gold-600' : 'text-charcoal-600'
                }`}>
                  {step.title}
                </span>
                {index < steps.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-charcoal-400 mx-4" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <Card className="mb-8">
          <CardContent className="p-8">
            {renderStepContent()}
          </CardContent>
        </Card>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <Button
            onClick={prevStep}
            disabled={currentStep === 1}
            variant="outline"
            className="px-8 py-3"
          >
            Previous
          </Button>
          
          {currentStep < steps.length ? (
            <Button
              onClick={nextStep}
              className="btn-gold luxury-button px-8 py-3"
            >
              Next Step
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="btn-gold luxury-button px-8 py-3"
            >
              {isSubmitting ? 'Processing...' : 'Complete Onboarding'}
              <CheckCircle className="w-4 h-4 ml-2" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}