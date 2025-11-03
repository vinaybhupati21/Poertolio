# Vinay Bhupathi - Portfolio Website

## Project Overview
A visually stunning portfolio website for Vinay Bhupathi, a Senior MS SQL DBA and Data Analytics Expert with 5+ years of experience. The site is inspired by the More Nutrition website design, featuring smooth animations, playful typography, and engaging scroll effects.

## Architecture

### Frontend
- **Framework**: React with TypeScript
- **Routing**: Wouter for client-side routing
- **Animations**: Framer Motion for smooth scroll-based animations and transitions
- **Styling**: Tailwind CSS with custom design tokens
- **UI Components**: Shadcn UI component library
- **Typography**: Inter (primary), Outfit (display), Caveat (decorative handwritten)

### Backend
- **Framework**: Express.js (minimal backend, primarily serving the frontend)
- **Build Tool**: Vite

### Design System
- **Primary Color**: Blue (#4299E1) - Trust, professionalism, data
- **Secondary Color**: Green (#059669) - Growth, success, optimization
- **Accent Color**: Orange (#F59E0B) - Energy, innovation, alerts
- **Typography**: Bold, confident headlines with playful decorative elements
- **Animations**: Scroll-triggered reveals, hover effects, smooth transitions

## Key Features

### 1. Hero Section
- Large animated introduction with "Hi, I'm Vinay Bhupathi"
- Bold typography with decorative underline
- Smooth fade-in animations
- Animated arrow pointing to scroll area

### 2. Stats Section
- Animated counters showing 5+ years, 50+ servers, 99.9% uptime
- Large numbers with smooth count-up animations on scroll

### 3. About Section
- Two-column layout with biography and expertise cards
- Decorative SVG elements (smiley faces, arrows)
- Smooth fade-in animations

### 4. Technical Skills
- Four category cards: Database Admin, Business Intelligence, Monitoring, Other Technologies
- Custom SVG icons for each category
- Checkmark lists for specific skills
- Hover elevation effects

### 5. Work Experience Timeline
- Two experience cards with detailed achievements
- Alternating slide-in animations
- Badge indicators for dates
- Checkmark bullets for accomplishments

### 6. Key Projects Showcase
- Three project cards: Infrastructure Monitoring, Sales Dashboard, Database Migration
- Technology badges
- Icon indicators for each project type
- Hover effects

### 7. Testimonials Carousel
- Rotating testimonials with navigation arrows
- Star ratings
- Smooth transitions between testimonials
- Decorative smiley face elements

### 8. Contact Section
- Email display with mailto link
- Social media links (LinkedIn, GitHub)
- Call-to-action button
- Clean, centered layout

### 9. Navigation
- Sticky header with smooth scroll links
- Dark/light theme toggle
- Mobile-responsive

## Animations & Interactions

### Scroll Animations
- Fade-in-up on section entrance
- Stagger animations for lists and grids
- Parallax effects on hero section
- Smooth scroll behavior

### Hover Effects
- Card elevation on hover
- Button scale and brightness adjustments
- Link color transitions
- Icon transformations

### Decorative Elements
- Curved arrows connecting sections
- Wavy underlines beneath headlines
- Circle highlights around stats
- Smiley face icons
- Hand-drawn style SVG graphics

## Design Guidelines
The site follows professional portfolio design principles adapted from the More Nutrition website:
- Playful yet professional aesthetic
- Bold, confident typography
- Generous white space
- Smooth, delightful animations
- High contrast for accessibility
- Responsive design for all devices

## Color Scheme

### Light Mode
- Background: White (#FFFFFF)
- Foreground: Dark gray (#1A1A1A)
- Primary: Blue (#4299E1)
- Secondary: Green (#059669)
- Accent: Orange (#F59E0B)

### Dark Mode
- Background: Very dark blue (#0C0D14)
- Foreground: Off-white (#FAFAFA)
- Primary: Blue (#4299E1)
- Secondary: Green (#059669)
- Accent: Orange (#F59E0B)

## Technical Stack

### Dependencies
- React 18
- TypeScript
- Framer Motion (animations)
- Wouter (routing)
- Tailwind CSS
- Shadcn UI
- Lucide React (icons)
- TanStack Query (state management)

### Development
- Vite (build tool)
- Express.js (dev server)
- ESBuild (bundler)

## Project Structure
```
client/
  src/
    components/
      DecorativeElements.tsx  - SVG decorative components
      ThemeToggle.tsx        - Dark/light mode toggle
      ui/                    - Shadcn UI components
    pages/
      Home.tsx              - Main portfolio page
    App.tsx                 - App router
    index.css              - Global styles and design tokens
    main.tsx               - Entry point

server/
  routes.ts                - API routes (minimal)
  storage.ts               - Data storage interface
  vite.ts                  - Vite dev server

shared/
  schema.ts                - TypeScript schemas

tailwind.config.ts         - Tailwind configuration
design_guidelines.md       - Detailed design specifications
```

## Running the Project
The workflow "Start application" runs `npm run dev` which starts both the Express backend and Vite frontend on the same port (5000).

## Recent Changes
- Initial setup with vibrant color scheme for tech portfolio
- Created all decorative SVG components
- Built comprehensive Home page with all sections
- Implemented smooth scroll animations with Framer Motion
- Added dark/light theme support
- Configured design tokens in Tailwind

## User Preferences
- Design inspired by More Nutrition website
- Professional tech portfolio aesthetic
- Smooth animations and scroll effects
- Playful yet professional tone
- Full dark mode support