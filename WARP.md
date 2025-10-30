# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Development Commands

### Core Development
- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production with Turbopack
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Local Development
- Development server runs on http://localhost:3000
- Hot reloading enabled via Turbopack

## Architecture Overview

### Tech Stack
- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4 with custom design system
- **Language**: TypeScript with strict mode
- **Animations**: Framer Motion
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **UI Components**: Custom component library with shadcn/ui patterns

### Project Structure
```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with SEO metadata
│   ├── page.tsx          # Homepage (landing page)
│   ├── about/            # About page
│   ├── contact/          # Contact page with form
│   └── onboarding/       # Onboarding flow
├── components/
│   ├── sections/         # Page sections (hero, footer, etc.)
│   └── ui/              # Reusable UI components
├── data/
│   └── content.ts       # Centralized content management
└── lib/
    └── utils.ts         # Utility functions (cn helper)
```

### Design System
- **Brand Colors**: Gold and Lavender gradient themes
- **Typography**: Playfair Display (headings) + DM Sans (body)
- **Components**: Variant-based system using class-variance-authority
- **Custom Animations**: fadeIn, fadeInUp, slideInRight, float

### Content Management
- All content is centralized in `src/data/content.ts`
- Includes hero content, testimonials, case studies, and site metadata
- Type-safe content structure with TypeScript

### Key Features
- **SEO Optimized**: Comprehensive metadata in layout.tsx
- **Responsive Design**: Mobile-first approach with Tailwind
- **Form Handling**: Contact form with validation and error handling
- **Performance**: Turbopack for fast development builds
- **Animations**: Smooth page transitions and scroll-triggered animations

## Development Guidelines

### Component Patterns
- Use functional components with TypeScript
- Implement Framer Motion for animations with `whileInView` for scroll triggers
- Follow shadcn/ui patterns for consistent component structure
- Use the `cn()` utility for conditional className merging

### Styling Conventions  
- Use Tailwind utility classes with custom design tokens
- Implement responsive design with mobile-first approach
- Leverage custom gradient utilities (`gradient-gold`, `gradient-lavender`)
- Use semantic color names from the extended Tailwind config

### Content Updates
- Modify `src/data/content.ts` for copy changes
- Use the centralized content system to maintain consistency
- All testimonials, case studies, and marketing copy are managed here

### Form Handling
- React Hook Form with Zod schema validation
- Consistent error handling and user feedback
- Form submissions currently log to console (integration needed)

### SEO & Metadata
- All metadata managed in root layout.tsx
- OpenGraph and Twitter Card support included
- Structured data and meta tags optimized for medspas/healthcare

## Business Context
This is a marketing website for GlowGrowth Media, a medspa marketing agency. The site targets medical spa owners looking to increase appointments through Meta Ads and digital marketing services. Key conversion points are strategy calls and contact form submissions.