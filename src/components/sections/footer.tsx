"use client";

import Link from "next/link";
import { calendlyConfig } from "@/data/calendly-config";
import { Linkedin, Instagram, Mail, Phone, Crown, Star, ArrowRight, Shield } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/case-studies", label: "Case Studies" },
  { href: calendlyConfig.growthStrategy, label: "Book Call", external: true },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export function Footer() {
  return (
    <footer className="gradient-cinematic text-ivory-50 relative overflow-hidden">
      {/* Ultra-Luxury Background Elements */}
      <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-gold-200 rounded-full mix-blend-multiply filter blur-3xl opacity-5 luxury-float"></div>
      <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-champagne-200 rounded-full mix-blend-multiply filter blur-3xl opacity-5 luxury-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-ivory-200 rounded-full mix-blend-multiply filter blur-3xl opacity-3 luxury-pulse"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          {/* Ultra-Luxury Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-5 mb-8">
              <div className="w-16 h-16 rounded-2xl gradient-charcoal flex items-center justify-center shadow-2xl luxury-glow">
                <Crown className="w-8 h-8 text-gold-400" />
              </div>
              <div>
                <span className="font-heading text-3xl font-light text-white tracking-wide">
                  Valenza Media
                </span>
                <p className="text-white font-medium text-sm uppercase tracking-widest">
                  Elite Performance Marketing
                </p>
                <p className="text-white font-light text-xs tracking-wide mt-2">
                  Founded by Shivam Mishra
                </p>
              </div>
            </div>
            <p className="text-white mb-8 max-w-2xl text-xl font-light leading-relaxed tracking-wide">
              Exclusive performance marketing for elite aesthetic practices. Where precision meets prestige, 
              and results speak for themselves.
            </p>
            <div className="flex space-x-8">
              <a href="#" className="text-white hover:text-gold-400 transition-all duration-500 hover:scale-110">
                <Linkedin size={28} />
              </a>
              <a href="#" className="text-white hover:text-gold-400 transition-all duration-500 hover:scale-110">
                <Instagram size={28} />
              </a>
            </div>
          </div>

          {/* Elite Quick Links */}
          <div>
            <h4 className="font-light text-2xl mb-8 text-white tracking-wide">Navigation</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-gold-400 transition-all duration-500 font-light flex items-center group tracking-wide"
                    >
                      <ArrowRight className="w-5 h-5 mr-3 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-white hover:text-gold-400 transition-all duration-500 font-light flex items-center group tracking-wide"
                    >
                      <ArrowRight className="w-5 h-5 mr-3 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Elite Contact Info */}
          <div>
            <h4 className="font-light text-2xl mb-8 text-white tracking-wide">Connect</h4>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 text-white hover:text-gold-400 transition-all duration-500">
                <Mail size={24} />
                <span className="font-light tracking-wide">hello@valenzamedia.com</span>
              </div>
              <div className="flex items-center space-x-4 text-white hover:text-gold-400 transition-all duration-500">
                <Phone size={24} />
                <span className="font-light tracking-wide">+1 (555) 123-GROW</span>
              </div>
            </div>
            
            {/* Elite CTA */}
            <div className="mt-10">
              <button
                onClick={() => {
                  // Open Calendly for private call booking
                  window.open(calendlyConfig.privateConsultation, '_blank');
                }}
                className="inline-flex items-center px-8 py-4 bg-gold-600 hover:bg-gold-500 text-white font-medium rounded-2xl transition-all duration-500 hover:scale-105 shadow-2xl tracking-wide"
              >
                <Star className="w-6 h-6 mr-3" />
                Schedule Private Call
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gold-200/20 mt-16 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col space-y-2 mb-4 md:mb-0">
              <div className="flex items-center space-x-3">
                <p className="text-white font-light tracking-wide">
                  &copy; 2025 Valenza Media. All rights reserved. Confidential & Proprietary.
                </p>
              </div>
              <p className="text-white font-light text-xs tracking-wide">
                Valenza Media is a U.S.-based digital agency. Our LLC registration and EIN are currently under process — full U.S. compliance and banking integration coming soon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}