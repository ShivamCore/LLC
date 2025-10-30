"use client";

import { Button } from "@/components/ui/button";
import { siteContent } from "@/data/content";
import { calendlyConfig } from "@/data/calendly-config";
import { motion } from "framer-motion";
import { Crown, Star, Shield, TrendingUp, ArrowRight } from "lucide-react";

// Extend Window interface for analytics
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Ultra-Luxury Background */}
      <div className="absolute inset-0 gradient-luxury-hero"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal-950/3 via-charcoal-900/5 to-charcoal-800/8"></div>
      
      {/* Sophisticated Background Elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-gold-300 rounded-full mix-blend-multiply filter blur-3xl opacity-8 luxury-float"></div>
      <div className="absolute top-40 right-10 w-[500px] h-[500px] bg-champagne-300 rounded-full mix-blend-multiply filter blur-3xl opacity-6 luxury-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-20 left-1/3 w-[400px] h-[400px] bg-ivory-200 rounded-full mix-blend-multiply filter blur-3xl opacity-4 luxury-float" style={{animationDelay: '4s'}}></div>
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-gold-400 rounded-full mix-blend-multiply filter blur-3xl opacity-3 luxury-pulse"></div>
      <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-champagne-400 rounded-full mix-blend-multiply filter blur-3xl opacity-3 luxury-pulse" style={{animationDelay: '1s'}}></div>

      {/* Luxury Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="space-y-16"
        >
          {/* Ultra-Luxury Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="inline-flex items-center px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 md:py-5 rounded-full glass-effect border border-gold-200 luxury-glow luxury-shimmer text-center"
          >
            <Crown className="w-7 h-7 text-gold-500 mr-4 luxury-pulse" />
                <span className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-charcoal-950 tracking-wide break-words">
                  {siteContent.hero.socialProofBadge}
                </span>
          </motion.div>

          {/* Cinematic Headline */}
          <div className="space-y-3 sm:space-y-4 lg:space-y-6">
            <h1 className="font-heading text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-[0.95] tracking-tight px-2">
              <span className="block text-charcoal-950 luxury-fade-in break-words">
                {siteContent.hero.headline.split(',')[0]}
              </span>
              <span className="block text-gold-600 mt-1 sm:mt-2 lg:mt-4 luxury-fade-in break-words" style={{animationDelay: '0.3s'}}>
                {siteContent.hero.headline.split(',')[1]}
              </span>
            </h1>
          </div>

          {/* Sophisticated Subheadline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-graphite-700 leading-relaxed font-light tracking-wide px-2 break-words">
              {siteContent.hero.subheadline}
            </p>
          </motion.div>

          {/* Emotional Hook */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gold-600 leading-relaxed font-medium tracking-wide px-2 break-words">
              {siteContent.hero.emotionalHook}
            </p>
          </motion.div>

          {/* Exclusive CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 lg:gap-6 pt-6 sm:pt-8 px-4"
          >
                <Button 
                  size="lg" 
                  onClick={() => {
                    // Track the CTA click for analytics
                    if (typeof window !== 'undefined') {
                      // Google Analytics tracking (if implemented)
                      if (window.gtag) {
                        window.gtag('event', 'cta_click', {
                          event_category: 'engagement',
                          event_label: 'work_with_us_hero',
                          value: 1
                        });
                      }
                      
                      // Open Calendly for growth strategy consultation
                      const calendlyUrl = calendlyConfig.growthStrategy;
                      
                      // Try to open in new tab, fallback to same tab if blocked
                      const newWindow = window.open(calendlyUrl, '_blank', 'noopener,noreferrer');
                      
                      // Fallback if popup is blocked
                      if (!newWindow || newWindow.closed || typeof newWindow.closed == 'undefined') {
                        window.location.href = calendlyUrl;
                      }
                    }
                  }}
                  className="btn-gold luxury-button text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 rounded-xl shadow-xl font-medium tracking-wide w-full sm:w-auto text-center"
                >
                  {siteContent.hero.cta}
                  <ArrowRight className="w-6 h-6 ml-3" />
                </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => {
                // Track the secondary CTA click for analytics
                if (typeof window !== 'undefined') {
                  // Google Analytics tracking (if implemented)
                  if (window.gtag) {
                    window.gtag('event', 'cta_click', {
                      event_category: 'engagement',
                      event_label: 'book_private_call_hero',
                      value: 1
                    });
                  }
                  
                  // Open Calendly for private consultation
                  const calendlyUrl = calendlyConfig.privateConsultation;
                  
                  // Try to open in new tab, fallback to same tab if blocked
                  const newWindow = window.open(calendlyUrl, '_blank', 'noopener,noreferrer');
                  
                  // Fallback if popup is blocked
                  if (!newWindow || newWindow.closed || typeof newWindow.closed == 'undefined') {
                    window.location.href = calendlyUrl;
                  }
                }
              }}
              className="btn-outline-charcoal luxury-button text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 rounded-xl font-medium tracking-wide w-full sm:w-auto text-center"
            >
              {siteContent.hero.ctaSecondary}
            </Button>
          </motion.div>

          {/* Elite Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="pt-20 space-y-16"
          >
            {/* Sophisticated Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <div className="flex items-center space-x-4 px-8 py-4 rounded-full glass-effect border border-gold-200">
                <TrendingUp className="w-6 h-6 text-gold-500" />
                    <span className="text-lg font-medium text-charcoal-950 tracking-wide">Live Performance Tracking</span>
              </div>
              <div className="flex items-center space-x-4 px-8 py-4 rounded-full glass-effect border border-gold-200">
                <Shield className="w-6 h-6 text-gold-500" />
                <span className="text-lg font-medium text-charcoal-950 tracking-wide">✓ {siteContent.hero.socialProofText}</span>
              </div>
            </div>
            
            {/* Ultra-Luxury Partner Showcase */}
            <div className="ultra-luxury-card rounded-3xl p-16 mx-auto max-w-6xl luxury-glow">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-light text-charcoal-950 mb-4 tracking-wide">
                  Trusted by Elite Practices
                </h3>
                <p className="text-lg text-charcoal-600 font-light mb-6">
                  U.S. Based Agency • Healthcare Marketing Specialists • HIPAA Compliant
                </p>
                <p className="text-sm text-charcoal-500 font-light max-w-3xl mx-auto">
                  We specialize exclusively in medspa and aesthetic practice marketing, delivering measurable results through proven strategies and dedicated client support.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
                <div className="text-center">
                  <div className="text-4xl font-light text-gold-600 mb-2">25+</div>
                  <div className="text-sm text-charcoal-600 font-medium">Elite Practices</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-light text-gold-600 mb-2">$2M+</div>
                  <div className="text-sm text-charcoal-600 font-medium">Client Revenue</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-light text-gold-600 mb-2">300%</div>
                  <div className="text-sm text-charcoal-600 font-medium">Average ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-light text-gold-600 mb-2">90%</div>
                  <div className="text-sm text-charcoal-600 font-medium">Client Retention</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
