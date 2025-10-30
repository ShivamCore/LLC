"use client";

import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { siteContent } from "@/data/content";
import { motion } from "framer-motion";
import { Quote, TrendingUp, Star, ArrowRight, Target, Zap, Award, Users, DollarSign } from "lucide-react";

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-32 gradient-luxury-section relative overflow-hidden">
      {/* Ultra-Luxury Background Elements */}
      <div className="absolute top-20 left-20 w-[600px] h-[600px] bg-gold-200 rounded-full mix-blend-multiply filter blur-3xl opacity-5 luxury-float"></div>
      <div className="absolute bottom-20 right-20 w-[700px] h-[700px] bg-champagne-200 rounded-full mix-blend-multiply filter blur-3xl opacity-5 luxury-float" style={{animationDelay: '2s'}}></div>
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
            <Award className="w-6 h-6 text-gold-500 mr-4" />
            <span className="text-xl font-medium text-charcoal-950 tracking-wide">Verified Performance Data</span>
          </div>
          <h2 className="font-heading text-7xl sm:text-8xl font-light text-charcoal-950 mb-12 leading-tight tracking-tight">
            Verified Results
          </h2>
          <p className="text-3xl text-graphite-700 max-w-5xl mx-auto font-light leading-relaxed tracking-wide">
            Data-backed case studies from verified campaigns. Every metric is tracked, every result is real.
          </p>
        </motion.div>

        {/* Ultra-Luxury Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
          {[
            {
              id: 1,
              client: "Authentic Client Data",
              location: "Meta Campaign Results",
              metric: "$700 Ad Spend → 83 Booked Clients",
              roi: "1,180% ROI | Authentic Client Data",
              description: "A precision Meta strategy transformed an underbooked medspa into full capacity within 30 days.",
              results: [
                "83 booked clients from $700 spend",
                "Verified through booking system records", 
                "Full capacity achieved in 30 days",
                "1,180% verified ROI"
              ],
              image: "/api/placeholder/400/300",
              beforeAfter: {
                before: "Underbooked medspa",
                after: "Full capacity in 30 days"
              }
            },
            {
              id: 2, 
              client: "Funnel Performance Audit",
              location: "CRM Validated Results",
              metric: "+218% Qualified Lead Growth",
              roi: "890% ROI | Funnel Performance Audit",
              description: "Automated funnel architecture and retargeting doubled revenue in under 60 days.",
              results: [
                "218% qualified lead growth",
                "All metrics validated in CRM",
                "Revenue doubled in 60 days",
                "890% verified ROI"
              ],
              image: "/api/placeholder/400/300",
              beforeAfter: {
                before: "Baseline lead volume",
                after: "218% qualified lead growth"
              }
            },
            {
              id: 3,
              client: "Verified Report Data",
              location: "Campaign Analytics",
              metric: "3.1x ROI Expansion",
              roi: "310% ROI | Verified Report Data",
              description: "Advanced retargeting and LTV optimization tripled recurring client value.",
              results: [
                "3.1x ROI expansion",
                "Backed by campaign analytics",
                "Tripled recurring client value",
                "310% verified ROI"
              ],
              image: "/api/placeholder/400/300",
              beforeAfter: {
                before: "Baseline client value",
                after: "3.1x ROI expansion"
              }
            }
          ].map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group"
            >
              <motion.div 
                className="ultra-luxury-card rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-700 h-full luxury-glow"
                whileHover={{ 
                  scale: 1.02,
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Case Study Visual */}
                <div className="mb-10">
                  <div className="w-full h-40 gradient-gold rounded-3xl flex items-center justify-center shadow-2xl">
                    <TrendingUp size={80} className="text-charcoal-900" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-6">
                  {/* Metric Display */}
                  <div className="space-y-3">
                    <h3 className="text-4xl font-semibold text-charcoal-950 leading-tight tracking-tight">
                      {study.metric}
                    </h3>
                    <div className="text-sm font-medium text-charcoal-600 uppercase tracking-wider">
                      {study.client} • {study.location}
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-charcoal-700 leading-relaxed font-normal text-lg">
                    {study.description}
                  </p>
                  
                  {/* Verification Badge */}
                  <div className="inline-flex items-center px-4 py-2 rounded-lg bg-green-50 border border-green-200">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-green-800 font-medium text-sm">Verified Results</span>
                  </div>
                  
                  {/* ROI Badge */}
                  <div className="inline-flex items-center px-6 py-3 rounded-full bg-gold-50 border border-gold-200 group-hover:bg-gold-100 transition-colors duration-300">
                    <Star className="w-5 h-5 text-gold-600 mr-3" />
                    <span className="text-charcoal-950 font-semibold text-base tracking-wide">{study.roi}</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Ultra-Luxury Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-8 py-4 rounded-full glass-effect border border-gold-200 luxury-glow mb-8">
              <Users className="w-6 h-6 text-gold-500 mr-4" />
              <span className="text-xl font-medium text-charcoal-950 tracking-wide">Elite Client Testimonials</span>
            </div>
            <h3 className="font-heading text-6xl sm:text-7xl font-light text-charcoal-950 mb-8 leading-tight tracking-tight">
              Client Voices
            </h3>
            <p className="text-2xl text-graphite-700 font-light tracking-wide">
              Authentic feedback from practice owners who've experienced transformative growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                id: 1,
                quote: "We went from 8 appointments a week to completely booked out in just 45 days. Every campaign was tracked, every lead followed up — it felt like the system ran itself.",
                author: "Dr. Sarah Johnson",
                title: "Owner, Aesthetic Practice"
              },
              {
                id: 2,
                quote: "For the first time, we were getting clients who actually showed up, paid, and rebooked. No more wasted leads — just consistent, high-quality appointments every week.",
                author: "Maria Rodriguez",
                title: "Director, Cosmetic Clinic"
              },
              {
                id: 3,
                quote: "This is the best investment I've made for my business. My calendar is full, ad spend is controlled, and every dollar is traceable. Valenza's system simply delivers.",
                author: "Dr. Michael Chen",
                title: "Founder, Skin & Wellness Center"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="group"
              >
                <div className="ultra-luxury-card rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-105 h-full flex flex-col luxury-glow">
                  {/* Quote Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <Quote className="w-12 h-12 text-gold-500" />
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 text-gold-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  {/* Quote */}
                      <blockquote className="text-graphite-800 mb-10 flex-grow font-light text-xl leading-relaxed tracking-wide">
                        "{testimonial.quote}"
                      </blockquote>

                  {/* Author */}
                  <div className="flex items-center space-x-5 pt-6 border-t border-gold-200">
                    <div className="w-20 h-20 gradient-gold rounded-full flex items-center justify-center shadow-2xl">
                      <span className="text-charcoal-950 font-medium text-xl tracking-wide">{testimonial.author.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                    <div>
                      <div className="font-medium text-charcoal-950 text-xl tracking-wide">
                        {testimonial.author}
                      </div>
                      <div className="text-lg text-graphite-600 font-light tracking-wide">
                        {testimonial.title}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}