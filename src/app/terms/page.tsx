"use client";

import { motion } from "framer-motion";
import { Navigation } from "@/components/sections/navigation";
import { Footer } from "@/components/sections/footer";

export default function TermsPage() {
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
                Terms of Service
              </h1>
              
              <div className="bg-gold-50 border border-gold-200 rounded-2xl p-6 mb-8">
                <p className="text-gold-800 font-medium text-sm">
                  <strong>Note:</strong> Valenza Media is currently undergoing formal registration as Valenza LLC (U.S.). 
                  All services are rendered transparently under this transition phase.
                </p>
              </div>
              
              <div className="prose prose-lg max-w-none text-graphite-700 space-y-8">
                <section>
                  <h2 className="font-heading text-3xl font-light text-charcoal-950 mb-4">
                    1. Acceptance of Terms
                  </h2>
                  <p>
                    By accessing and using Valenza Media's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-3xl font-light text-charcoal-950 mb-4">
                    2. Services Description
                  </h2>
                  <p>
                    Valenza Media provides premium digital marketing services specifically designed for medical spas, aesthetic clinics, and luxury service providers. Our services include but are not limited to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Meta Ads management and optimization</li>
                    <li>Google Ads campaign development</li>
                    <li>Lead generation and conversion optimization</li>
                    <li>Client retention strategies</li>
                    <li>Performance analytics and reporting</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-heading text-3xl font-light text-charcoal-950 mb-4">
                    3. Client Responsibilities
                  </h2>
                  <p>
                    Clients are responsible for:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Providing accurate business information and marketing materials</li>
                    <li>Maintaining compliance with all applicable laws and regulations</li>
                    <li>Timely payment of service fees as agreed</li>
                    <li>Collaboration in campaign development and approval processes</li>
                    <li>Adherence to advertising platform policies and guidelines</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-heading text-3xl font-light text-charcoal-950 mb-4">
                    4. Performance Guarantees
                  </h2>
                  <p>
                    Valenza Media guarantees a minimum of 10 qualified appointments per month for clients who meet the following criteria:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Minimum monthly ad spend of $3,000</li>
                    <li>Complete onboarding and setup process</li>
                    <li>Timely approval of ad creative and campaigns</li>
                    <li>Maintenance of professional online presence</li>
                  </ul>
                  <p>
                    If we fail to deliver the guaranteed results, clients are entitled to a full refund of monthly service fees.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-3xl font-light text-charcoal-950 mb-4">
                    5. Payment Terms
                  </h2>
                  <p>
                    Service fees are due monthly in advance. Payment methods include credit card, bank transfer, or other agreed-upon methods. Late payments may result in service suspension.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-3xl font-light text-charcoal-950 mb-4">
                    6. Confidentiality
                  </h2>
                  <p>
                    Both parties agree to maintain strict confidentiality regarding all business information, strategies, and client data shared during the course of our professional relationship.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-3xl font-light text-charcoal-950 mb-4">
                    7. Limitation of Liability
                  </h2>
                  <p>
                    Valenza Media's liability is limited to the amount paid for services. We are not liable for indirect, incidental, or consequential damages arising from the use of our services.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-3xl font-light text-charcoal-950 mb-4">
                    8. Termination
                  </h2>
                  <p>
                    Either party may terminate this agreement with 30 days written notice. Upon termination, all outstanding fees become immediately due.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-3xl font-light text-charcoal-950 mb-4">
                    9. Governing Law
                  </h2>
                  <p>
                    This agreement is governed by the laws of the State of California, United States. Any disputes will be resolved through binding arbitration.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-3xl font-light text-charcoal-950 mb-4">
                    10. Contact Information
                  </h2>
                  <p>
                    For questions regarding these terms, please contact us at:
                  </p>
                  <div className="bg-champagne-50 rounded-2xl p-6 mt-4">
                    <p><strong>Email:</strong> legal@valenzamedia.com</p>
                    <p><strong>Phone:</strong> +1 (555) 123-GROW</p>
                    <p><strong>Address:</strong> U.S. Office (LLC Registration Address – Under Process)</p>
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
