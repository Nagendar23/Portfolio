# Portfolio Website

A modern, performant portfolio website built with Next.js 14, featuring interactive demos, achievements system, and beautiful animations.

## ✨ Features

- **Modern Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Interactive Demos**: Live code examples with Sandpack integration
- **Achievements System**: Gamified user experience with localStorage persistence
- **Contact Form**: Web3Forms integration (no backend required)
- **Theme Support**: Light/dark mode with system preference detection
- **Performance**: Optimized for Lighthouse scores 95+
- **Accessibility**: Full keyboard navigation, ARIA labels, screen reader support
- **SEO**: Complete meta tags, OpenGraph, sitemap generation
- **Animations**: Smooth micro-interactions with Framer Motion

## 🚀 Quick Start

\`\`\`bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build
\`\`\`

## 🔧 Environment Setup

Create a `.env.local` file:

\`\`\`env
NEXT_PUBLIC_SITE_URL=https://yourportfolio.com
NEXT_PUBLIC_WEB3FORMS_KEY=your-web3forms-access-key
PLAUSIBLE_DOMAIN=yourportfolio.com
\`\`\`

## 📁 Project Structure

\`\`\`
├── app/                    # Next.js App Router pages
├── components/             # Reusable UI components
├── lib/                    # Utilities and configurations
├── content/                # MDX content and data
├── public/                 # Static assets
└── styles/                 # Global styles
\`\`\`

## 📝 Content Management

### Adding Projects

1. Add project data to `lib/projects.ts`
2. Create project images in `public/images/projects/`
3. Optionally create detailed case study pages

### Updating Resume

1. Edit `public/resume.pdf` for the downloadable version
2. Update resume data in `app/resume/page.tsx`
3. Or create `content/data/resume.json` for structured data

### Blog Posts

Create MDX files in `content/blog/` with frontmatter:

\`\`\`mdx
---
title: "Post Title"
date: "2024-01-15"
summary: "Brief description"
tags: ["tag1", "tag2"]
---

Your content here...
\`\`\`

## 🎮 Achievements System

The site includes a gamification layer with achievements:

- **First Visit**: Welcome new visitors
- **Explorer**: View projects section
- **Night Owl**: Switch to dark mode
- **Communicator**: Send contact form
- **Konami**: Easter egg (↑↑↓↓←→←→BA)

Achievements are stored in localStorage and persist across sessions.

## 🎨 Customization

### Colors & Themes

Edit `tailwind.config.ts` and `app/globals.css` for color schemes.

### Typography

The site uses:
- **Sans**: Inter (system fallback)
- **Mono**: JetBrains Mono
- **Display**: Fraunces (Google Fonts)

### Animations

Customize animations in `tailwind.config.ts` and component-level Framer Motion configs.

## 📊 Analytics

The site supports multiple analytics providers:

- **Vercel Analytics** (default)
- **Plausible** (privacy-focused)
- **PostHog** (product analytics)

Configure via environment variables.

## 🧪 Testing

\`\`\`bash
# Unit tests
pnpm test

# E2E tests
pnpm test:e2e

# E2E with UI
pnpm test:e2e:ui
\`\`\`

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository
2. Set environment variables
3. Deploy automatically on push

### Other Platforms

The site is a standard Next.js application and can be deployed to:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📈 Performance

The site is optimized for:
- **Core Web Vitals**: LCP, FID, CLS
- **Lighthouse Score**: 95+ on desktop
- **Bundle Size**: Optimized with code splitting
- **Images**: Next.js Image optimization
- **Fonts**: Variable fonts with display swap

## 🔒 Security

- CSP headers configured
- XSS protection enabled
- CSRF protection on forms
- Secure headers via Next.js

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

MIT License - feel free to use this as a template for your own portfolio!

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS.
