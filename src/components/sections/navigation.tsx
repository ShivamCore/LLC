"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Crown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { calendlyConfig } from "@/data/calendly-config";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#case-studies", label: "Success Stories" },
  { href: "/#how-it-works", label: "Process" },
  { href: "/#founder", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
        <nav className="fixed top-0 w-full glass-effect border-b border-gold-300 shadow-2xl z-50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Ultra-Luxury Logo */}
          <Link href="/" className="flex items-center space-x-3 sm:space-x-5 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 gradient-charcoal rounded-2xl flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-500 luxury-glow">
              <Crown className="text-gold-400 w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
            </div>
            <div className="flex flex-col">
                <span className="font-heading text-lg sm:text-xl lg:text-2xl xl:text-3xl font-light text-charcoal-950 group-hover:text-gold-600 transition-colors duration-500 tracking-wide">
                  Valenza
                </span>
                <span className="text-xs font-medium text-gold-600 uppercase tracking-widest">
                  Media
                </span>
            </div>
          </Link>

          {/* Ultra-Luxury Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  // Handle smooth scrolling for anchor links
                  if (link.href.startsWith('#')) {
                    e.preventDefault();
                    const element = document.querySelector(link.href);
                    if (element) {
                      element.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                      });
                    }
                  }
                }}
                className="text-charcoal-900 hover:text-gold-600 font-medium text-base transition-all duration-300 relative group tracking-wide px-3 py-2 rounded-lg hover:bg-champagne-50"
              >
                {link.label}
                <span className="absolute -bottom-1 left-3 right-3 h-0.5 bg-gold-500 transition-all duration-300 group-hover:scale-x-100 scale-x-0"></span>
              </Link>
            ))}
            <div className="flex items-center space-x-4 ml-8">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => window.location.href = '/login'}
                className="text-charcoal-900 hover:text-gold-600 font-medium text-sm px-6 py-3 rounded-xl transition-all duration-300 hover:bg-champagne-100 tracking-wide"
              >
                Client Portal
              </Button>
              <Button 
                onClick={() => {
                  // Open Calendly or redirect to booking page
                  window.open(calendlyConfig.growthStrategy, '_blank');
                }}
                className="btn-gold luxury-button text-sm px-8 py-3 rounded-xl shadow-xl font-medium tracking-wide"
              >
                Book Call
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-charcoal-900 hover:text-gold-600 p-3 rounded-xl transition-all duration-300 hover:bg-champagne-100"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Ultra-Luxury Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden transition-all duration-300 ease-in-out glass-effect border-t border-gold-300",
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          )}
        >
          <div className="py-6 space-y-3 px-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  // Handle smooth scrolling for anchor links
                  if (link.href.startsWith('#')) {
                    e.preventDefault();
                    const element = document.querySelector(link.href);
                    if (element) {
                      element.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                      });
                    }
                  }
                  setIsOpen(false);
                }}
                className="block px-4 py-3 text-charcoal-900 hover:text-gold-600 font-medium text-base transition-all duration-300 rounded-xl hover:bg-champagne-100 tracking-wide"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-6 space-y-3 border-t border-gold-300">
              <Button 
                variant="ghost" 
                size="sm" 
                className="w-full text-charcoal-900 hover:text-gold-600 font-medium text-base py-3 rounded-xl hover:bg-champagne-100 tracking-wide" 
                onClick={() => window.location.href = '/login'}
              >
                Client Portal
              </Button>
              <Button 
                size="sm" 
                onClick={() => {
                  // Open Calendly or redirect to booking page
                  window.open(calendlyConfig.growthStrategy, '_blank');
                }}
                className="w-full btn-gold luxury-button text-base py-3 rounded-xl font-medium tracking-wide"
              >
                Book Call
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}