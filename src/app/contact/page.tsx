"use client";

import { Navigation } from "@/components/sections/navigation";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteContent } from "@/data/content";
import { motion } from "framer-motion";
import { Mail, Phone, Clock, MapPin, Calendar, MessageCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  medspacName: z.string().min(2, "Medspa name is required"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Form submitted:", data);
    // Here you would integrate with your form handler
    alert("Thank you! We'll send your custom audit video within 24 hours.");
    reset();
  };

  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-lavender-50 via-white to-gold-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-heading text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Let's Fill Your Calendar
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ready for 20+ new clients every month? Book your free call or send us a message. 
                We'll show you exactly how to make it happen.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="font-heading text-3xl font-bold text-gray-900 mb-6">
                    Let's Talk
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Ready to grow your medspa? Pick the best way to connect with us.
                  </p>
                </div>

                {/* Contact Methods */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-gold-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Email Us</div>
                      <div className="text-gray-600">{siteContent.contact.email}</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-gold-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Call Us</div>
                      <div className="text-gray-600">{siteContent.contact.phone}</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-gold-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Response Time</div>
                      <div className="text-gray-600">Within 24 hours</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-gold-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Serving</div>
                      <div className="text-gray-600">Medspas Nationwide</div>
                    </div>
                  </div>
                </div>

                {/* Calendly Widget Placeholder */}
                <Card className="mt-8 border-2 border-gold-200">
                  <CardHeader className="text-center">
                    <CardTitle className="flex items-center justify-center space-x-2">
                      <Calendar className="w-6 h-6 text-gold-600" />
                      <span>Book Your Free Growth Call</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="bg-gradient-to-br from-lavender-50 to-gold-50 rounded-lg p-8 mb-4">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gold-200 rounded-full flex items-center justify-center">
                        <Calendar className="w-8 h-8 text-gold-600" />
                      </div>
                      <p className="text-gray-600 mb-4">
                        30 minutes to discuss your goals and create your custom growth plan.
                      </p>
                    </div>
                    <Button size="lg" className="w-full">
                      Book Free Call Now
                    </Button>
                    <p className="text-sm text-gray-500 mt-2">
                      Calendly booking system embedded here
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Card className="shadow-xl border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <MessageCircle className="w-6 h-6 text-gold-600" />
                      <span>Send Us a Message</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Your Name *
                          </label>
                          <input
                            {...register("name")}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                            placeholder="John Doe"
                          />
                          {errors.name && (
                            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                          )}
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email *
                          </label>
                          <input
                            {...register("email")}
                            type="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                            placeholder="john@example.com"
                          />
                          {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Medspa Name *
                          </label>
                          <input
                            {...register("medspacName")}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                            placeholder="Luxury Aesthetics"
                          />
                          {errors.medspacName && (
                            <p className="text-red-500 text-sm mt-1">{errors.medspacName.message}</p>
                          )}
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Phone *
                          </label>
                          <input
                            {...register("phone")}
                            type="tel"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                            placeholder="(555) 123-4567"
                          />
                          {errors.phone && (
                            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Message *
                        </label>
                        <textarea
                          {...register("message")}
                          rows={4}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                          placeholder="Tell us about your medspa and your growth goals..."
                        />
                        {errors.message && (
                          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                        )}
                      </div>

                      <Button type="submit" size="lg" className="w-full">
                        Send Message
                      </Button>

                      <p className="text-sm text-gray-500 text-center">
                        We'll send your custom audit video within 24 hours.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}