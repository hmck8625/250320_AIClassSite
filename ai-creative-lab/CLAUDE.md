# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 website for "東京AI創造スタジオ" (Tokyo AI Creative Studio), an AI education platform for children. The site promotes AI-powered creative learning across multiple disciplines including art, music, game development, and programming.

## Development Commands

- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Build for production (bypasses linting with --no-lint flag)
- `npm run lint` - Run ESLint
- `npm run export` - Build and generate sitemap using next-sitemap
- `npm start` - Start production server

## Architecture & Key Technologies

### Core Stack
- **Next.js 15** with App Router (`src/app/` directory structure)
- **TypeScript** with strict mode enabled
- **Tailwind CSS** for styling with custom color scheme
- **Framer Motion** for animations and scroll-triggered effects
- **React 19** with modern hooks

### UI Architecture
- Component-based design with reusable UI components in `src/components/ui/`
- Animation system using custom hooks (`useScrollAnimation`) and Framer Motion
- Responsive design following mobile-first approach
- Custom color scheme: primary (blue), secondary (orange), accent (purple)

### Key Components Structure
- `AnimatedSection` - Scroll-triggered animations with configurable direction and timing
- `AnimatedCard` - Staggered card animations for grid layouts
- `HeroAnimation` - Complex hero section animations
- `ImageSlideshow` - Background image carousel component
- Layout components in `src/components/layout/` (Header, Footer)

### Content Strategy
The site is structured around:
1. Landing page with hero section and value propositions
2. Course pages (`/courses/*`) for different AI education tracks
3. Blog content (`/blog/*`) with AI education articles
4. Contact and trial registration flows

### Deployment & Configuration
- Deployed on Netlify with specific build optimizations
- Static export configuration for better performance
- Image optimization disabled (`unoptimized: true`)
- Custom redirects and headers configured in `netlify.toml`
- Google Tag Manager integration for analytics

### File Organization
- `src/app/` - App Router pages and layouts
- `src/components/` - Reusable components organized by type
- `src/lib/` - Utilities and custom hooks
- `public/` - Static assets including course images and icons

### Styling Conventions
- Tailwind classes with `cn()` utility for conditional styling
- Custom CSS variables for consistent spacing and colors
- Responsive breakpoints following Tailwind defaults
- Component variants using `class-variance-authority` for buttons

### Animation Patterns
- Scroll-triggered animations using Intersection Observer
- Staggered animations for card grids
- Hover effects and micro-interactions
- Page transitions with proper performance optimization

When making changes, maintain consistency with the established Japanese content structure and ensure animations remain performant across devices.