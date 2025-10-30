"use client";

import { Button } from "@/components/ui/button";
import { siteContent } from "@/data/content";
import { calendlyConfig } from "@/data/calendly-config";
import { motion } from "framer-motion";
import { Shield, CheckCircle, Star, ArrowRight, Clock, Headphones, Target, Crown, Zap, Award } from "lucide-react";

export function Guarantee() {
  return (
    <section className="py-32 gradient-luxury-section relative overflow-hidden">
      {/* Ultra-Luxury Background Elements */}
      <div className="absolute top-20 left-20 w-[600px] h-[600px] bg-gold-200 rounded-full mix-blend-multiply filter blur-3xl opacity-5 luxury-float"></div>
      <div className="absolute bottom-20 right-20 w-[700px] h-[700px] bg-champagne-200 rounded-full mix-blend-multiply filter blur-3xl opacity-5 luxury-float" style={{animationDelay: '3s'}}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-charcoal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-3 luxury-pulse"></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Ultra-Luxury Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center px-8 py-4 rounded-full glass-effect border border-gold-200 luxury-glow mb-8">
            <Crown className="w-6 h-6 text-gold-500 mr-4" />
            <span className="text-xl font-medium text-charcoal-900 tracking-wide">Exclusive Service Tiers</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-light text-charcoal-900 mb-6 sm:mb-8 lg:mb-12 leading-tight tracking-tight break-words px-2">
            Bespoke Solutions
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-charcoal-700 max-w-5xl mx-auto font-light leading-relaxed tracking-wide break-words px-2">
            Tailored performance marketing strategies designed exclusively for elite aesthetic practices. Each engagement is crafted with precision and executed with excellence.
          </p>
        </motion.div>

        {/* Ultra-Luxury Service Tiers */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16 mb-32 md:mb-40 pt-16 md:pt-20">
          {/* Launch Plan */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative mx-1 md:mx-2"
          >
            <div className="ultra-luxury-card rounded-3xl p-8 shadow-xl luxury-glow relative overflow-visible">
              {/* Launch Badge */}
              <div className="absolute -top-2 -right-2 bg-gradient-to-r from-gold-500 to-gold-600 text-charcoal-900 px-6 py-2 rounded-full text-sm font-medium tracking-wide z-10">
                Perfect Start
              </div>
              
              <div className="space-y-8">
                <div className="space-y-6">
                  <p className="text-sm font-medium text-gold-600 tracking-wide uppercase">
                    Start Smart, Grow Fast.
                  </p>
                  <h3 className="font-heading text-3xl font-light text-charcoal-900 tracking-tight">
                    Launch Plan
                  </h3>
                  <p className="text-lg text-charcoal-700 font-light tracking-wide">
                    For emerging medspas ready to build their digital foundation.
                  </p>
                </div>

                {/* Launch Features */}
                <div className="space-y-5">
                  {[
                    "Social Media Management (2 Platforms)",
                    "Monthly Ad Campaign (Facebook or Instagram)",
                    "Content Creation & Copywriting",
                    "Basic Lead Tracking Dashboard",
                    "Monthly Reporting & Optimization",
                    "Perfect for clinics beginning digital marketing."
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="w-5 h-5 text-gold-500 flex-shrink-0" />
                      <span className="text-sm text-charcoal-800 font-light tracking-wide">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="pt-6 border-t border-gold-200">
                  <div className="text-center">
                    <div className="text-2xl font-light text-charcoal-900 mb-4 tracking-wide">Investment</div>
                    <div className="text-4xl font-light text-gold-600 mb-4 tracking-tight">$1,200</div>
                    <div className="text-sm text-charcoal-600 font-light tracking-wide">per month</div>
                    <div className="text-xs text-charcoal-500 mt-2">+ $250 setup fee</div>
                  </div>
                </div>

                <Button 
                  size="lg" 
                  className="btn-gold luxury-button text-base px-6 py-3 rounded-2xl shadow-2xl font-medium tracking-wide w-full"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Growth Plan */}
          <motion.div
            initial={{ opacity: 0, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.1 }}
            className="relative mx-1 md:mx-2 my-2 md:my-4"
          >
            <div className="ultra-luxury-card rounded-3xl p-8 shadow-2xl luxury-glow relative overflow-visible border-2 border-gold-400 scale-105">
              {/* Growth Badge */}
              <div className="absolute -top-2 -right-2 bg-gradient-to-r from-gold-500 to-gold-600 text-charcoal-900 px-6 py-2 rounded-full text-sm font-medium tracking-wide z-10">
                Most Popular
              </div>
              
                <div className="space-y-8">
                <div className="space-y-6">
                  <p className="text-sm font-medium text-gold-600 tracking-wide uppercase">
                    Scale with Precision & Predictable Leads.
                  </p>
                  <h3 className="font-heading text-3xl font-light text-charcoal-900 tracking-tight">
                    Growth Plan
                  </h3>
                  <p className="text-lg text-charcoal-700 font-light tracking-wide">
                    For scaling medspas that want consistent lead flow and data clarity.
                  </p>
                </div>

                {/* Growth Features */}
                <div className="space-y-5">
                  {[
                    "Multi-Platform Management (Up to 3)",
                    "Paid Ads + Retargeting (Facebook, Instagram, Google)",
                    "Content Calendar & Branding Alignment",
                    "Conversion Funnel Design",
                    "Dedicated Account Manager + Priority Support",
                    "Designed for medspas ready to scale revenue and efficiency."
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="w-5 h-5 text-gold-500 flex-shrink-0" />
                      <span className="text-sm text-charcoal-800 font-light tracking-wide">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="pt-4 border-t border-gold-200">
                  <div className="text-center">
                    <div className="text-2xl font-light text-charcoal-900 mb-3 tracking-wide">Investment</div>
                    <div className="text-4xl font-light text-gold-600 mb-4 tracking-tight">$2,000</div>
                    <div className="text-sm text-charcoal-600 font-light tracking-wide">per month</div>
                    <div className="text-xs text-charcoal-500 mt-1">+ $350 setup fee</div>
                  </div>
                </div>

                <Button 
                  size="lg" 
                  className="btn-gold luxury-button text-base px-6 py-3 rounded-2xl shadow-2xl font-medium tracking-wide w-full"
                >
                  Book Strategy Call
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </motion.div>

          {/* AI Dominance Plan */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="relative mx-1 md:mx-2 my-4 md:my-8"
          >
            <div className="ultra-luxury-card rounded-3xl p-10 shadow-2xl luxury-glow relative overflow-visible scale-110">
              {/* AI Dominance Badge */}
              <div className="absolute -top-2 -right-2 bg-gradient-to-r from-gold-500 to-gold-600 text-charcoal-900 px-6 py-2 rounded-full text-sm font-medium tracking-wide z-10">
                Maximum Results
              </div>
              
              <div className="space-y-10">
                <div className="space-y-6">
                  <p className="text-sm font-medium text-gold-600 tracking-wide uppercase">
                    Full Automation. Zero Limits.
                  </p>
                  <h3 className="font-heading text-3xl font-light text-charcoal-900 tracking-tight">
                    AI Dominance Plan
                  </h3>
                  <p className="text-lg text-charcoal-700 font-light tracking-wide">
                    For premium medspas ready to automate and dominate their city.
                  </p>
                </div>

                {/* AI Dominance Features */}
                <div className="space-y-5">
                  {[
                    "360° Marketing Management",
                    "AI Automations (Chatbots, CRM Triggers, Lead Nurturing)",
                    "Advanced Analytics Dashboard with Real-Time Reports",
                    "Conversion Funnel Optimization",
                    "Personal Strategy Call with Lead Strategist",
                    "For market leaders aiming for total automation and dominance."
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="w-5 h-5 text-gold-500 flex-shrink-0" />
                      <span className="text-sm text-charcoal-800 font-light tracking-wide">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="pt-4 border-t border-gold-200">
                  <div className="text-center">
                    <div className="text-2xl font-light text-charcoal-900 mb-3 tracking-wide">Investment</div>
                    <div className="text-4xl font-light text-gold-600 mb-4 tracking-tight">$3,500</div>
                    <div className="text-sm text-charcoal-600 font-light tracking-wide">per month</div>
                    <div className="text-xs text-charcoal-500 mt-1">+ $500 setup fee</div>
                  </div>
                </div>

                <Button 
                  size="lg" 
                  className="btn-gold luxury-button text-base px-6 py-3 rounded-2xl shadow-2xl font-medium tracking-wide w-full"
                >
                  Apply for Access
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Trust Footer Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 pt-12 border-t border-gold-200"
        >
          <div className="text-center">
            <p className="text-lg text-charcoal-700 font-light tracking-wide leading-relaxed max-w-4xl mx-auto">
              All plans include onboarding consultation, access to client portal, and ongoing performance reports.<br/>
              Payments processed securely via PayPal/Stripe. Full U.S. bank integration through Valenza LLC is in progress.
            </p>
          </div>
        </motion.div>

        {/* Ultra-Luxury Trust Elements */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="mt-32 pt-20 border-t border-gold-200"
        >
          <div className="text-center mb-16">
            <h3 className="font-heading text-5xl font-light text-charcoal-900 mb-6 tracking-tight">
              Our Commitment
            </h3>
            <p className="text-2xl text-charcoal-700 font-light tracking-wide">
              Every engagement is backed by our unwavering commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="ultra-luxury-card rounded-3xl p-10 hover:scale-105 transition-all duration-500 luxury-glow">
              <Shield className="w-16 h-16 text-gold-500 mx-auto mb-6" />
              <div className="font-heading text-4xl font-light text-gold-600 mb-4 tracking-tight">30-Day</div>
              <div className="text-charcoal-800 font-light text-xl tracking-wide">Satisfaction Guarantee</div>
            </div>
            <div className="ultra-luxury-card rounded-3xl p-10 hover:scale-105 transition-all duration-500 luxury-glow">
              <Headphones className="w-16 h-16 text-gold-500 mx-auto mb-6" />
              <div className="font-heading text-4xl font-light text-gold-600 mb-4 tracking-tight">24/7</div>
              <div className="text-charcoal-800 font-light text-xl tracking-wide">Performance Monitoring</div>
            </div>
            <div className="ultra-luxury-card rounded-3xl p-10 hover:scale-105 transition-all duration-500 luxury-glow">
              <Target className="w-16 h-16 text-gold-500 mx-auto mb-6" />
              <div className="font-heading text-4xl font-light text-gold-600 mb-4 tracking-tight">10+</div>
              <div className="text-charcoal-800 font-light text-xl tracking-wide">Qualified Leads Minimum</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}