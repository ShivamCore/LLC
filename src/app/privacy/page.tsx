"use client";

import { motion } from "framer-motion";
import { Navigation } from "@/components/sections/navigation";
import { Footer } from "@/components/sections/footer";

export default function PrivacyPage() {
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
                Privacy Policy
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
                    1. Information We Collect
                  </h2>
                  <p>
                    Valenza Media collects information to provide better services to our clients. We collect information in the following ways:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Information you give us:</strong> Business details, contact information, marketing preferences</li>
                    <li><strong>Information we get from your use of our services:</strong> Campaign performance data, website analytics</li>
                    <li><strong>Information from third parties:</strong> Social media insights, advertising platform data</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-heading text-3xl font-light text-charcoal-950 mb-4">
                    2. How We Use Information
                  </h2>
                  <p>
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide, maintain, and improve our services</li>
                    <li>Develop new services and features</li>
                    <li>Measure performance and optimize campaigns</li>
                    <li>Communicate with you about our services</li>
                    <li>Protect against fraud and abuse</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-heading text-3xl font-light text-charcoal-950 mb-4">
                    3. Information Sharing
                  </h2>
                  <p>
                    We do not share personal information with companies, organizations, or individuals outside of Valenza Media except in the following cases:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>With your consent:</strong> We will share personal information with companies, organizations, or individuals outside of Valenza Media when we have your consent to do so.</li>
                    <li><strong>For external processing:</strong> We provide personal information to our affiliates or other trusted businesses or persons to process it for us, based on our instructions and in compliance with our Privacy Policy.</li>
                    <li><strong>For legal reasons:</strong> We will share personal information with companies, organizations, or individuals outside of Valenza Media if we have a good-faith belief that access, use, preservation, or disclosure of the information is reasonably necessary.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-heading text-3xl font-light text-charcoal-950 mb-4">
                    4. Data Security
                  </h2>
                  <p>
                    We work hard to protect Valenza Media and our users from unauthorized access to or unauthorized alteration, disclosure, or destruction of information we hold. In particular:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>We encrypt many of our services using SSL</li>
                    <li>We review our information collection, storage, and processing practices, including physical security measures, to guard against unauthorized access to systems</li>
                    <li>We restrict access to personal information to Valenza Media employees, contractors, and agents who need to know that information in order to process it for us, and who are subject to strict contractual confidentiality obligations</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-heading text-3xl font-light text-charcoal-950 mb-4">
                    5. Your Rights
                  </h2>
                  <p>
                    You have the right to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Access and update your personal information</li>
                    <li>Request deletion of your personal information</li>
                    <li>Opt out of certain communications</li>
                    <li>Request data portability</li>
                    <li>Object to processing of your personal information</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-heading text-3xl font-light text-charcoal-950 mb-4">
                    6. Cookies and Tracking
                  </h2>
                  <p>
                    We use cookies and similar technologies to provide, protect, and improve our services. You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-3xl font-light text-charcoal-950 mb-4">
                    7. Third-Party Services
                  </h2>
                  <p>
                    Our services may contain links to other websites. We are not responsible for the privacy practices of other websites. We encourage you to read the privacy statements of each website that collects personal information.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-3xl font-light text-charcoal-950 mb-4">
                    8. Children's Privacy
                  </h2>
                  <p>
                    Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13. If we learn that we have collected personal information from a child under 13, we will take steps to delete such information.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-3xl font-light text-charcoal-950 mb-4">
                    9. Changes to This Policy
                  </h2>
                  <p>
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-3xl font-light text-charcoal-950 mb-4">
                    10. Contact Us
                  </h2>
                  <p>
                    If you have any questions about this Privacy Policy, please contact us:
                  </p>
                  <div className="bg-champagne-50 rounded-2xl p-6 mt-4">
                    <p><strong>Email:</strong> privacy@valenzamedia.com</p>
                    <p><strong>Phone:</strong> +1 (555) 123-GROW</p>
                    <p><strong>Address:</strong> Valenza Media, California, United States</p>
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
