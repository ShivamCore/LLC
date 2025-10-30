import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xs': '320px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Deep Charcoal (Primary Brand - Onyx Black)
        charcoal: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#111111', // Onyx Black
          950: '#0d0d0d', // Deep Charcoal
        },
        // Soft Champagne (Secondary)
        champagne: {
          50: '#fefdfb',
          100: '#fdf9f3',
          200: '#faf2e6',
          300: '#f5e6d3', // Soft Champagne
          400: '#edd5b8',
          500: '#e2c299',
          600: '#d4a574',
          700: '#c6935a',
          800: '#b8824a',
          900: '#a6713e',
          950: '#8b5a2b',
        },
        // Matte Gold (Accent)
        gold: {
          50: '#fefdf9',
          100: '#fdf7e8',
          200: '#f9ecc7',
          300: '#f4dda6',
          400: '#e8c885',
          500: '#d1bfa7', // Warm Platinum
          600: '#c9a75e', // Matte Gold
          700: '#b8944f',
          800: '#a67f40',
          900: '#946a31',
          950: '#825522',
        },
        // Ivory White (Supporting)
        ivory: {
          50: '#fafafa', // Ivory White
          100: '#f5f5f5',
          200: '#eeeeee',
          300: '#e0e0e0',
          400: '#bdbdbd',
          500: '#9e9e9e',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
          950: '#0d0d0d',
        },
        // Graphite (Text & Details)
        graphite: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#eeeeee',
          300: '#e0e0e0',
          400: '#bdbdbd',
          500: '#9e9e9e',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
          950: '#0d0d0d',
        },
        // Clean Grays (Supporting)
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563', 
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#030712',
        },
        // High-Contrast Text Colors
        text: {
          primary: '#000000',      // Pure black for primary text
          secondary: '#1a1a1a',    // Very dark gray for secondary text
          navy: '#0f172a',         // Deep navy for headers
          muted: '#2d2d2d',        // Dark gray for muted text
          light: '#ffffff',        // White for dark backgrounds
          'on-navy': '#ffffff',    // White text for navy backgrounds
          'on-royal': '#ffffff',   // White text for royal backgrounds
          'on-gold': '#000000',    // Black text for gold backgrounds
          'on-charcoal': '#ffffff', // White text for charcoal backgrounds
          'ultra-dark': '#000000', // Pure black for maximum contrast
          'very-dark': '#1a1a1a',  // Very dark for high contrast
        },
        // Ultra-Premium Neutrals (7-Figure Look)
        neutral: {
          50: '#fafafa', // Pure white backgrounds
          100: '#f4f4f5', // Light gray backgrounds
          200: '#e4e4e7', // Border colors
          300: '#d1d5db', // Subtle borders
          400: '#9ca3af', // Muted text
          500: '#6b7280', // Secondary text
          600: '#4b5563', // Primary text on light
          700: '#374151', // Dark text
          800: '#1f2937', // Very dark text
          900: '#111827', // Near black
          950: '#030712', // Ultra black
        },
        // Ultra-Premium Slate (Sophisticated UI)
        slate: {
          50: '#f8fafc',  // Lightest slate
          100: '#f1f5f9', // Light backgrounds
          200: '#e2e8f0', // Subtle borders
          300: '#cbd5e1', // Medium borders
          400: '#94a3b8', // Muted text
          500: '#64748b', // Secondary text
          600: '#475569', // Primary slate text
          700: '#334155', // Dark slate
          800: '#1e293b', // Very dark slate
          900: '#0f172a', // Near black slate
          950: '#020617', // Ultra dark slate
        },
      },
      fontFamily: {
        'heading': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-down': 'fadeInDown 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
        'slide-in-left': 'slideInLeft 0.8s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2s linear infinite',
        'bounce-subtle': 'bounceSubtle 2s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(234, 179, 8, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(234, 179, 8, 0.6), 0 0 40px rgba(234, 179, 8, 0.3)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'DEFAULT': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
      },
    },
  },
  plugins: [],
};
export default config;