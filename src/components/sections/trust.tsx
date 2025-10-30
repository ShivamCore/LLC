"use client";

import { siteContent } from "@/data/content";
import { motion } from "framer-motion";
import { Badge, Star, Award, Crown, TrendingUp, DollarSign, Users, Shield, CheckCircle, Target } from "lucide-react";

export function Trust() {
  return (
    <section className="py-32 gradient-luxury-section relative overflow-hidden">
      {/* Ultra-Luxury Background Elements */}
      <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-gold-200 rounded-full mix-blend-multiply filter blur-3xl opacity-5 luxury-float"></div>
      <div className="absolute bottom-20 left-20 w-[600px] h-[600px] bg-champagne-200 rounded-full mix-blend-multiply filter blur-3xl opacity-5 luxury-float" style={{animationDelay: '3s'}}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-charcoal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-3 luxury-pulse"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
        >
          {/* Ultra-Luxury Visual */}
          <div className="relative">
            <div className="w-full max-w-2xl mx-auto relative">
              {/* Elite visual container */}
              <div className="aspect-square cinematic-card rounded-3xl shadow-2xl flex items-center justify-center relative overflow-hidden">
                <div className="w-48 h-48 gradient-charcoal rounded-full flex items-center justify-center shadow-2xl">
                  <Crown className="w-20 h-20 text-gold-400" />
                </div>
                
                {/* Ultra-luxury decorative elements */}
                <div className="absolute -top-8 -left-8 w-32 h-32 gradient-gold rounded-full opacity-20 blur-2xl luxury-pulse"></div>
                <div className="absolute -bottom-8 -right-8 w-40 h-40 gradient-champagne rounded-full opacity-20 blur-2xl luxury-pulse" style={{animationDelay: '1s'}}></div>
                <div className="absolute top-1/2 -left-12 w-20 h-20 bg-gold-300 rounded-full opacity-15 blur-xl luxury-float"></div>
              </div>
            </div>
          </div>

          {/* Ultra-Luxury Content */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3 }}
            >
              <p className="text-2xl text-charcoal-800 leading-relaxed mb-10 font-light tracking-wide">
                {siteContent.founder.intro}
              </p>

              <div className="mb-12">
                <h3 className="font-heading text-5xl font-light text-charcoal-900 mb-4 tracking-tight">
                  {siteContent.founder.name}
                </h3>
                <p className="text-gold-600 font-light text-2xl tracking-wide">
                  {siteContent.founder.title}
                </p>
              </div>
            </motion.div>

            {/* Elite Certification Badges */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="space-y-8"
            >
              <h4 className="font-light text-charcoal-900 mb-8 text-3xl tracking-wide">Certifications & Awards</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {siteContent.founder.badges.map((badge, index) => (
                  <motion.div
                    key={badge}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="flex items-center space-x-4 ultra-luxury-card rounded-3xl p-6 hover:scale-105 transition-all duration-500 luxury-glow"
                  >
                    <div className="flex-shrink-0">
                      {index === 0 && <Star className="w-7 h-7 text-gold-500" />}
                      {index === 1 && <Badge className="w-7 h-7 text-gold-500" />}
                      {index === 2 && <Award className="w-7 h-7 text-gold-500" />}
                      {index === 3 && <Crown className="w-7 h-7 text-gold-500" />}
                    </div>
                    <span className="text-lg font-medium text-charcoal-900 tracking-wide">
                      {badge}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Legal Compliance & Trust Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
              className="space-y-8"
            >
              <h4 className="font-light text-charcoal-900 mb-8 text-3xl tracking-wide">Legal Compliance & Trust</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="flex items-center space-x-4 ultra-luxury-card rounded-3xl p-6 hover:scale-105 transition-all duration-500 luxury-glow"
                >
                  <div className="flex-shrink-0">
                    <Shield className="w-7 h-7 text-green-500" />
                  </div>
                  <div>
                    <span className="text-lg font-medium text-charcoal-900 tracking-wide">U.S. Based Agency</span>
                    <p className="text-sm text-charcoal-600 mt-1">Fully compliant with U.S. regulations</p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex items-center space-x-4 ultra-luxury-card rounded-3xl p-6 hover:scale-105 transition-all duration-500 luxury-glow"
                >
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-7 h-7 text-green-500" />
                  </div>
                  <div>
                    <span className="text-lg font-medium text-charcoal-900 tracking-wide">Verified Results</span>
                    <p className="text-sm text-charcoal-600 mt-1">All metrics tracked and auditable</p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex items-center space-x-4 ultra-luxury-card rounded-3xl p-6 hover:scale-105 transition-all duration-500 luxury-glow"
                >
                  <div className="flex-shrink-0">
                    <Target className="w-7 h-7 text-green-500" />
                  </div>
                  <div>
                    <span className="text-lg font-medium text-charcoal-900 tracking-wide">HIPAA Compliant</span>
                    <p className="text-sm text-charcoal-600 mt-1">Healthcare data protection standards</p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex items-center space-x-4 ultra-luxury-card rounded-3xl p-6 hover:scale-105 transition-all duration-500 luxury-glow"
                >
                  <div className="flex-shrink-0">
                    <Award className="w-7 h-7 text-green-500" />
                  </div>
                  <div>
                    <span className="text-lg font-medium text-charcoal-900 tracking-wide">Performance Guarantee</span>
                    <p className="text-sm text-charcoal-600 mt-1">Results-driven contracts only</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Elite Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.7 }}
              className="grid grid-cols-3 gap-12 pt-12 border-t border-gold-200"
            >
              <div className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <Users className="w-10 h-10 text-gold-500" />
                </div>
                <div className="font-heading text-5xl font-light text-gold-600 mb-3 tracking-tight">25+</div>
                <div className="text-lg text-charcoal-800 font-light tracking-wide">Elite Practices</div>
                <div className="text-sm text-charcoal-600 font-light mt-2">MedSpas & Aesthetic Clinics</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <TrendingUp className="w-10 h-10 text-gold-500" />
                </div>
                <div className="font-heading text-5xl font-light text-gold-600 mb-3 tracking-tight">300%</div>
                <div className="text-lg text-charcoal-800 font-light tracking-wide">Average ROI</div>
                <div className="text-sm text-charcoal-600 font-light mt-2">Within First 90 Days</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <DollarSign className="w-10 h-10 text-gold-500" />
                </div>
                <div className="font-heading text-5xl font-light text-gold-600 mb-3 tracking-tight">$2M+</div>
                <div className="text-lg text-charcoal-800 font-light tracking-wide">Client Revenue</div>
                <div className="text-sm text-charcoal-600 font-light mt-2">Generated & Tracked</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}