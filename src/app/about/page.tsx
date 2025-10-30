"use client";

import { Navigation } from "@/components/sections/navigation";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { siteContent } from "@/data/content";
import { motion } from "framer-motion";
import { Play, Calendar, Users, Target, Award } from "lucide-react";

export default function About() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-lavender-50 via-white to-gold-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <h1 className="font-heading text-4xl sm:text-5xl font-bold text-gray-900">
                  We Help Medspas Get More Clients
                </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {siteContent.about.story}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Tired of empty appointment slots? We get it. Most medspas struggle with marketing because generic agencies don't understand your business. 
                We only work with medspas, so we know exactly what works.
              </p>
              <p className="text-sm text-gold-600 font-medium bg-gold-50 px-4 py-2 rounded-lg border border-gold-200">
                {siteContent.about.llcNote}
              </p>
                <Button size="xl">Get Your Free Growth Plan</Button>
              </motion.div>

              {/* Video Placeholder */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="aspect-video bg-gradient-to-br from-lavender-100 to-gold-100 rounded-2xl shadow-2xl flex items-center justify-center">
                  <div className="text-center">
                    <Play className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                    <p className="text-gray-500">Founder Video Placeholder</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="font-heading text-4xl font-bold text-gray-900 mb-6">
                How We Got Here
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From helping one struggling medspa to becoming the go-to growth partner for premium practices nationwide.
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-gold-200 to-lavender-200"></div>

              <div className="space-y-12">
                {siteContent.about.timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`flex items-center ${
                      index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    }`}
                  >
                    <div className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                      <Card className="shadow-lg">
                        <CardContent className="p-6">
                          <p className="text-gray-700 font-medium">{item}</p>
                        </CardContent>
                      </Card>
                    </div>
                    
                    {/* Timeline dot */}
                    <div className="w-4 h-4 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full z-10 relative">
                      <div className="absolute -inset-2 bg-gold-100 rounded-full -z-10"></div>
                    </div>
                    
                    <div className="w-5/12"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="font-heading text-4xl font-bold mb-6">
                Impact by the Numbers
              </h2>
              <p className="text-xl text-gray-300">
                Real results for real medspa businesses.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: Users, number: "15+", label: "Medspas Served" },
                { icon: Target, number: "300%", label: "Average Growth" },
                { icon: Calendar, number: "2000+", label: "Appointments Booked" },
                { icon: Award, number: "$2M+", label: "Revenue Generated" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="w-12 h-12 mx-auto mb-4 text-gold-400" />
                  <div className="font-heading text-3xl font-bold text-gold-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-gold-50 to-lavender-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-heading text-4xl font-bold text-gray-900 mb-6">
                Ready to Fill Your Calendar?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Let's talk about your goals and create a simple plan to get you more clients.
              </p>
              <Button size="xl" className="shadow-lg hover:shadow-xl transition-shadow">
                Get Your Free Growth Plan
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Legal Disclaimer Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm text-gray-600 leading-relaxed">
              Valenza Media is a U.S.-based digital agency. Our LLC registration and EIN are currently under process — full U.S. compliance and banking integration coming soon.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}