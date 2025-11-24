# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 website for "AIアソビあとりえ" (AI Asobi Atelier), an AI education platform for children. The site promotes AI-powered creative learning across multiple disciplines including art, music, game development, and programming.

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

## Business Guidelines & Content Restrictions

### Services We DO NOT Offer
- **教育投資コンサルティング (Educational Investment Consulting)**: We do not provide financial consulting or investment advisory services. Remove any content that suggests we offer educational investment consulting, portfolio analysis, ROI analysis, or strategic consulting services with pricing tiers.
- **Financial Advisory**: No content about investment strategies, portfolio management, or financial planning should be included.

### Services We DO Offer
- **AI創造教育プログラム (AI Creative Education Programs)**: Programming, art, music, game development, and robotics courses for children
- **体験教室・相談会 (Trial Classes & Information Sessions)**: Free trial classes and educational consultations about our programs
- **教育プログラム提供 (Educational Program Provision)**: Actual hands-on learning experiences, not consulting

### Content Authority Guidelines
When creating educational blog content:
- Always include proper citations and references from official sources (文部科学省, 総務省, etc.)
- Use real statistical data from government agencies
- Include comprehensive reference sections with:
  - Statistical data sources (統計データ・調査報告)
  - Educational research (教育・創造性研究) 
  - Institutional information (教育機関・地域情報)
- Target audience: 港区 (Minato Ward) high-income families (年収1000万円+)

### Blog Structure Requirements
- Educational content must be research-backed with proper citations
- Include metadata for SEO optimization
- Use structured sections with clear headings
- Add related articles section
- Include CTA sections linking to trial classes, not consulting services

## Content Writing Guidelines

When creating or editing blog content, **always refer to the comprehensive writing guidelines** located at:
`/content-planning/writing-guidelines.md`

This file contains:
- Target audience specifications and personas
- Writing style and tone guidelines
- E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) requirements
- SEO optimization best practices
- Mobile-first writing considerations
- AI content generation guidelines
- Privacy and accessibility standards
- Quality checklists and KPIs

The writing guidelines are regularly updated and should be consulted for every article to ensure consistency and quality across all content.
