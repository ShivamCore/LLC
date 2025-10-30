import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import { TrackingScripts } from "@/components/automation/tracking-scripts";
import { ChatbotWidget } from "@/components/automation/chatbot-widget";
import "./globals.css";

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: '--font-dm-sans'
});
const playfairDisplay = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair-display'
});

export const metadata: Metadata = {
  title: "Valenza Media — U.S.-Based Premium SMMA for MedSpas | AI-Powered Growth & Automation",
  description: "Valenza Media — U.S.-Based Premium SMMA for MedSpas | AI-Powered Growth & Automation. Transform your medspa with AI-powered marketing systems delivering consistent leads through automation. $2M+ client revenue generated.",
  keywords: [
    "medspa marketing agency", 
    "AI-powered medspa marketing", 
    "aesthetic clinic automation", 
    "Meta Ads for medspas", 
    "medspa growth agency",
    "luxury medspa marketing",
    "botox clinic advertising",
    "aesthetic practice growth",
    "medical spa lead generation",
    "cosmetic surgery marketing",
    "dermatology practice marketing",
    "premium spa advertising",
    "medspa facebook ads",
    "aesthetic marketing specialist",
    "medical aesthetics advertising",
    "AI automation for medspas",
    "U.S. based SMMA",
    "Valenza Media"
  ],
  authors: [{ name: "Shivam Mishra", url: "https://valenzamedia.com" }],
  creator: "Valenza Media",
  publisher: "Valenza Media",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://valenzamedia.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Valenza Media — U.S.-Based Premium SMMA for MedSpas | AI-Powered Growth & Automation",
    description: "Valenza Media — U.S.-Based Premium SMMA for MedSpas | AI-Powered Growth & Automation. Transform your medspa with AI-powered marketing systems delivering consistent leads through automation. $2M+ in client revenue generated.",
    url: 'https://valenzamedia.com',
    siteName: 'Valenza Media',
    images: [
      {
        url: '/og-image-premium.jpg',
        width: 1200,
        height: 630,
        alt: 'Valenza Media — U.S.-Based Premium SMMA for MedSpas | AI-Powered Growth & Automation',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Valenza Media — U.S.-Based Premium SMMA for MedSpas | AI-Powered Growth & Automation',
    description: '🚀 Transform your medspa with AI-powered systems. U.S.-based premium SMMA delivering consistent leads through automation. $2M+ client revenue.',
    images: ['/og-image-premium.jpg'],
    creator: '@valenzamedia',
    site: '@valenzamedia',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
    yahoo: 'yahoo-site-verification-code',
  },
  category: 'business',
  classification: 'Business Services - Marketing Agency',
  other: {
    'business:contact_data:street_address': 'U.S. Office (LLC Registration Address – Under Process)',
    'business:contact_data:locality': 'United States',
    'business:contact_data:phone_number': '+1-555-123-GROW',
    'business:contact_data:website': 'https://valenzamedia.com',
    'og:business:hours:day': 'monday,tuesday,wednesday,thursday,friday',
    'og:business:hours:start': '09:00',
    'og:business:hours:end': '18:00',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#eab308" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Valenza Media",
              "description": "U.S.-based premium SMMA delivering consistent leads through AI-powered marketing systems and automation for medspas.",
              "url": "https://valenzamedia.com",
              "logo": "https://valenzamedia.com/logo.png",
              "image": "https://valenzamedia.com/og-image-premium.jpg",
              "telephone": "+1-555-123-GROW",
              "email": "shivam@valenzamedia.com",
              "foundingDate": "2023",
              "founder": {
                "@type": "Person",
                "name": "Shivam Mishra",
                "jobTitle": "Founder & Lead Strategist"
              },
              "serviceType": "Digital Marketing Agency",
              "areaServed": "United States",
              "priceRange": "$1200-$3500",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Medspa Marketing Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "AI-Powered Meta Ads Management for Medspas",
                      "description": "Consistent lead generation through AI-optimized Meta Ads targeting and automation"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "AI-Powered Medspa Growth Strategy",
                      "description": "Complete AI-driven growth system with automation, lead tracking, and retention strategies"
                    }
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "25",
                "bestRating": "5"
              },
              "sameAs": [
                "https://linkedin.com/company/valenza-media",
                "https://instagram.com/valenzamedia",
                "https://facebook.com/valenzamedia"
              ]
            })
          }}
        />
      </head>
      <body className={`${dmSans.variable} ${playfairDisplay.variable} font-body antialiased`}>
        {children}
        <ChatbotWidget />
        <TrackingScripts />
      </body>
    </html>
  );
}
