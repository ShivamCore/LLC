"use client";

import { Button } from "@/components/ui/button";
import { siteContent } from "@/data/content";
import { calendlyConfig } from "@/data/calendly-config";
import { motion } from "framer-motion";
import { Phone, FileText, Rocket, ArrowRight, CheckCircle, Star, Target, Zap, Shield } from "lucide-react";

const stepIcons = [Target, Zap, Shield];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 gradient-cinematic relative overflow-hidden">
      {/* Ultra-Luxury Background Elements */}
      <div className="absolute top-20 left-20 w-[600px] h-[600px] bg-gold-200 rounded-full mix-blend-multiply filter blur-3xl opacity-5 luxury-float"></div>
      <div className="absolute bottom-20 right-20 w-[700px] h-[700px] bg-champagne-200 rounded-full mix-blend-multiply filter blur-3xl opacity-5 luxury-float" style={{animationDelay: '3s'}}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-ivory-200 rounded-full mix-blend-multiply filter blur-3xl opacity-3 luxury-pulse"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Ultra-Luxury Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center px-8 py-4 rounded-full glass-effect border border-gold-200 luxury-glow mb-8">
            <Star className="w-6 h-6 text-gold-500 mr-4" />
            <span className="text-xl font-medium text-charcoal-950 tracking-wide">White-Glove Process</span>
          </div>
          <h2 className="font-heading text-7xl sm:text-8xl font-light text-white mb-12 leading-tight tracking-tight">
            {siteContent.howItWorks.title}
          </h2>
          <p className="text-3xl text-white max-w-5xl mx-auto font-light leading-relaxed tracking-wide">
            A refined approach that has elevated elite aesthetic practices to unprecedented heights. Precision, strategy, and results.
          </p>
        </motion.div>

        {/* Ultra-Luxury Steps */}
        <div className="relative">
          {/* Elite Connection Line */}
          <div className="hidden md:block absolute top-40 left-1/2 transform -translate-x-1/2 w-2/3 h-1 gradient-gold rounded-full shadow-2xl luxury-glow"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            {siteContent.howItWorks.steps.map((step, index) => {
              const IconComponent = stepIcons[index];
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="text-center relative group"
                >
                  {/* Ultra-Luxury Step Number Circle */}
                  <div className="relative mx-auto mb-10">
                    <div className="w-24 h-24 mx-auto gradient-charcoal rounded-full flex items-center justify-center text-white font-light text-4xl shadow-2xl group-hover:scale-110 transition-all duration-500 luxury-glow">
                      {step.step}
                    </div>
                    
                    {/* Elite Icon background */}
                    <div className="absolute -top-4 -left-4 w-32 h-32 gradient-gold rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-500 luxury-glow">
                      <IconComponent className="w-12 h-12 text-charcoal-900" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="ultra-luxury-card rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-105 luxury-glow">
                    <h3 className="font-heading text-4xl font-light text-charcoal-950 mb-8 tracking-wide">
                      {step.title}
                    </h3>
                    <p className="text-graphite-700 leading-relaxed font-light text-xl tracking-wide">
                      {step.description}
                    </p>
                  </div>

                  {/* Elite Arrow for desktop */}
                  {index < siteContent.howItWorks.steps.length - 1 && (
                    <div className="hidden md:block absolute top-20 -right-10 text-white">
                      <ArrowRight size={40} />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Methodology Summary */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="text-center mt-20"
        >
          <div className="max-w-4xl mx-auto">
            <p className="text-2xl text-white font-light tracking-wide leading-relaxed">
              {siteContent.howItWorks.summary}
            </p>
          </div>
        </motion.div>

        {/* Ultra-Luxury CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="text-center mt-24"
        >
          <div className="cinematic-card rounded-3xl p-16 md:p-20 shadow-2xl max-w-5xl mx-auto luxury-glow luxury-shimmer">
            <div className="flex items-center justify-center mb-8">
              <Star className="w-10 h-10 text-white mr-4" />
              <h3 className="font-heading text-5xl sm:text-6xl font-light text-white mb-0 tracking-tight">
                Ready to Elevate Your Practice?
              </h3>
              <Star className="w-10 h-10 text-white ml-4" />
            </div>
            <p className="text-2xl text-white mb-12 max-w-4xl mx-auto font-light tracking-wide leading-relaxed">
              Let's schedule a private consultation to discuss your specific objectives and create a bespoke growth strategy for your aesthetic practice.
            </p>
            <Button 
              size="lg" 
              onClick={() => {
                // Open Calendly for private consultation
                window.open(calendlyConfig.privateConsultation, '_blank');
              }}
              className="btn-gold luxury-button text-2xl px-20 py-8 rounded-3xl shadow-2xl font-medium tracking-wide text-white"
            >
              Schedule Private Consultation
              <ArrowRight className="w-7 h-7 ml-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}