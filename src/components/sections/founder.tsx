"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { siteContent } from "@/data/content";
import { calendlyConfig } from "@/data/calendly-config";
import { motion } from "framer-motion";
import { Play, Award, TrendingUp, Users, CheckCircle, Crown, Star, Phone, Target, Zap, Shield } from "lucide-react";

export function Founder() {
  return (
    <section id="founder" className="py-32 gradient-luxury-section relative overflow-hidden">
      {/* Ultra-Luxury Background Elements */}
      <div className="absolute top-20 right-20 w-[600px] h-[600px] bg-gold-200 rounded-full mix-blend-multiply filter blur-3xl opacity-5 luxury-float"></div>
      <div className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-champagne-200 rounded-full mix-blend-multiply filter blur-3xl opacity-5 luxury-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-charcoal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-3 luxury-pulse"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Ultra-Luxury Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative"
          >
            {/* Cinematic Video Placeholder */}
            <div className="relative group">
              <div className="aspect-[4/5] cinematic-card rounded-3xl shadow-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-8">
                    <div className="w-32 h-32 mx-auto gradient-gold rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-500 cursor-pointer luxury-glow">
                      <Play className="w-12 h-12 text-charcoal-900 ml-1" />
                    </div>
                    <div className="space-y-4 px-12">
                      <p className="text-xl font-light text-white tracking-wide">
                        {siteContent.founder.videoPlaceholder}
                      </p>
                      <p className="text-sm text-white tracking-wide">Click to play introduction</p>
                    </div>
                  </div>
                </div>
                
                {/* Elite Founder Image Placeholder */}
                <div className="absolute bottom-12 left-12 w-36 h-36 rounded-3xl gradient-gold border-4 border-ivory-100 shadow-2xl flex items-center justify-center">
                  <Crown className="w-16 h-16 text-charcoal-900" />
                </div>
              </div>
              
              {/* Floating Elite Credentials */}
              <div className="absolute -top-12 -right-12 glass-effect rounded-3xl p-6 shadow-2xl">
                <div className="flex items-center space-x-4">
                  <Award className="w-7 h-7 text-gold-500" />
                  <span className="text-lg font-medium text-charcoal-900 tracking-wide">Meta Certified</span>
                </div>
              </div>
              
              <div className="absolute -bottom-12 -left-12 glass-effect rounded-3xl p-6 shadow-2xl">
                <div className="flex items-center space-x-4">
                  <TrendingUp className="w-7 h-7 text-gold-500" />
                  <span className="text-lg font-medium text-charcoal-900 tracking-wide">$2M+ Generated</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Ultra-Luxury Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="space-y-12"
          >
            {/* Sophisticated Header */}
            <div className="space-y-8">
              <div className="inline-flex items-center px-8 py-4 rounded-full glass-effect border border-gold-200 luxury-glow">
                <Users className="w-6 h-6 text-gold-500 mr-4" />
                    <span className="text-xl font-medium text-charcoal-950 tracking-wide">Meet Your Strategic Partner</span>
              </div>
              
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-light text-charcoal-950 leading-tight tracking-tight break-words">
                {siteContent.founder.name}
              </h2>
              
              <div className="space-y-3">
                <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-light text-gold-600 tracking-wide break-words">
                  {siteContent.founder.title}
                </p>
                <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-graphite-700 font-light tracking-wide break-words">
                  {siteContent.founder.company}
                </p>
              </div>
            </div>

            {/* Sophisticated Bio */}
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-graphite-800 leading-relaxed font-light tracking-wide mb-6 break-words">
              {siteContent.founder.intro}
            </p>

            {/* Elite Achievement Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {siteContent.founder.badges.map((badge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                  className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 ultra-luxury-card rounded-2xl hover:scale-105 transition-all duration-500 luxury-glow"
                >
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-gold-500 flex-shrink-0" />
                      <span className="text-sm sm:text-base font-medium text-charcoal-950 tracking-wide">{badge}</span>
                </motion.div>
              ))}
            </div>

            {/* Professional Credentials */}
            <div className="mt-12 pt-8 border-t border-gold-200/30">
              <div className="text-center mb-8">
                <h3 className="font-heading text-xl font-light text-charcoal-950 mb-2 tracking-wide">
                  Professional Expertise
                </h3>
                <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto"></div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {siteContent.founder.credentials.map((credential, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                  className="flex items-center space-x-4 p-4 ultra-luxury-card rounded-2xl hover:scale-105 transition-all duration-500 luxury-glow"
                >
                  <CheckCircle className="w-6 h-6 text-gold-500 flex-shrink-0" />
                  <span className="text-base font-medium text-charcoal-950 tracking-wide">{credential}</span>
                </motion.div>
              ))}
              </div>
            </div>

            {/* Elite CTA */}
                <div className="pt-6">
                  <Button 
                    size="lg" 
                    onClick={() => {
                      // Open Calendly for private consultation
                      window.open(calendlyConfig.privateConsultation, '_blank');
                    }}
                    className="btn-gold luxury-button text-lg px-12 py-6 rounded-2xl shadow-2xl font-medium tracking-wide"
                  >
                    <Phone className="w-5 h-5 mr-3" />
                    Get Your Free Growth Strategy Call
                  </Button>
                  <p className="text-sm text-graphite-600 mt-3 font-light">
                    No obligation • 30-minute strategy session • Immediate insights
                  </p>
                </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}