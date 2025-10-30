"use client";

import { motion } from "framer-motion";
import { Navigation } from "@/components/sections/navigation";
import { Footer } from "@/components/sections/footer";

export default function RefundPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-luxury-hero">
        <div className="pt-20 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="ultra-luxury-card rounded-3xl p-12 luxury-glow"
            >
              <h1 className="font-heading text-5xl font-light text-charcoal-950 mb-8">
                Refund Policy
              </h1>
              
              <div className="prose prose-lg max-w-none text-graphite-700 space-y-8">
                <section>
                  <h2 className="font-heading text-3xl font-light text-charcoal-950 mb-4">
                    1. Our Guarantee
                  </h2>
                  <p>
                    At Valenza Media, we stand behind our services with a comprehensive guarantee. We are committed to delivering the results we promise, and if we don't, we'll make it right.
                  </p>
                  <div className="bg-gold-50 rounded-2xl p-6 mt-4 border border-gold-200">
                    <h3 className="font-heading text-xl font-medium text-charcoal-950 mb-2">
                      🛡️ 100% Money-Back Guarantee
                    </h3>
                    <p className="text-graphite-700">
                      If we fail to deliver 10+ qualified appointments in your first month, you'll receive a full refund of your monthly service fee.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="font-heading text-3xl font-light text-charcoal-950 mb-4">
                    2. Refund Eligibility
                  </h2>
                  <p>
                    You are eligible for a refund if:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>We fail to deliver the guaranteed 10+ qualified appointments in your first month</li>
                    <li>You meet all client responsibilities outlined in our service agreement</li>
                    <li>You maintain the minimum monthly ad spend requirement ($3,000+)</li>
                    <li>You complete the full onboarding and setup process</li>
                    <li>You provide timely approval of ad creative and campaigns</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-heading text-3xl font-light text-charcoal-950 mb-4">
                    3. Refund Process
                  </h2>
                  <p>
                    To request a refund:
                  </p>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>Contact our support team within 30 days of the service period</li>
                    <li>Provide documentation of the performance metrics</li>
                    <li>Allow 5-7 business days for review and processing</li>
                    <li>Receive your refund via the original payment method</li>
                  </ol>
                </section>

                <section>
                  <h2 className="font-heading text-3xl font-light text-charcoal-950 mb-4">
                    4. What's Not Covered
                  </h2>
                  <p>
                    Refunds are not available for:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Services that exceed the guaranteed minimum (partial refunds for underperformance)</li>
                    <li>Clients who don't meet the minimum ad spend requirements</li>
                    <li>Clients who don't complete the onboarding process</li>
                    <li>Clients who don't approve campaigns in a timely manner</li>
                    <li>External factors beyond our control (economic downturns, natural disasters, etc.)</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-heading text-3xl font-light text-charcoal-950 mb-4">
                    5. Performance Metrics
                  </h2>
                  <p>
                    We measure success based on:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Qualified Appointments:</strong> Scheduled consultations with potential clients</li>
                    <li><strong>Lead Quality:</strong> Prospects who meet your target demographic and budget requirements</li>
                    <li><strong>Conversion Rate:</strong> Percentage of leads that become paying clients</li>
                    <li><strong>ROI:</strong> Return on investment for your marketing spend</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-heading text-3xl font-light text-charcoal-950 mb-4">
                    6. Dispute Resolution
                  </h2>
                  <p>
                    If you disagree with our performance assessment:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Contact our support team to discuss the metrics</li>
                    <li>We'll provide detailed reports and explanations</li>
                    <li>If needed, we can arrange a call with our performance team</li>
                    <li>We're committed to finding a fair resolution</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-heading text-3xl font-light text-charcoal-950 mb-4">
                    7. Service Modifications
                  </h2>
                  <p>
                    If you're not satisfied with our services but don't qualify for a full refund, we offer:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Strategy adjustments at no additional cost</li>
                    <li>Additional support and optimization</li>
                    <li>Extended service periods to achieve results</li>
                    <li>Partial refunds based on performance levels</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-heading text-3xl font-light text-charcoal-950 mb-4">
                    8. Contact Information
                  </h2>
                  <p>
                    For refund requests or questions about this policy:
                  </p>
                  <div className="bg-champagne-50 rounded-2xl p-6 mt-4">
                    <p><strong>Email:</strong> support@valenzamedia.com</p>
                    <p><strong>Phone:</strong> +1 (555) 123-GROW</p>
                    <p><strong>Address:</strong> Valenza Media, California, United States</p>
                    <p><strong>Hours:</strong> Monday-Friday, 9AM-6PM EST</p>
                  </div>
                </section>

                <div className="border-t border-gold-200 pt-8 mt-12">
                  <p className="text-sm text-graphite-600">
                    Last updated: January 15, 2025
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

