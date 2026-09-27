# Vinayakk Suresh Patil — AI Automation & Systems Portfolio

> "I build AI-powered systems that automate work and solve real-world problems."

A modern, minimal, dark-first engineering portfolio built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, and Lucide React. Designed for high performance, accessibility, and seamless Vercel deployment.

---

## ⚡ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, React 18/19)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with a custom dark-first design token system
- **Animations**: [Motion / Framer Motion](https://www.framer.com/motion/) with `prefers-reduced-motion` compliance
- **Icons**: [Lucide React](https://lucide.dev/)
- **Content**: Strongly-typed project content architecture with MDX support
- **Hosting**: Vercel-optimized static and dynamic builds

---

## 🎨 Design System & Color Tokens

- **Background**: `#09090B`
- **Surface**: `#111113`
- **Secondary Surface**: `#18181B`
- **Border**: `#27272A`
- **Primary Text**: `#FAFAFA`
- **Secondary Text**: `#A1A1AA`
- **Muted Text**: `#71717A`
- **Accent**: Electric Cyan / Sky (`#38BDF8` / `#0EA5E9`)
- **Typography**: Geist Sans & Geist Mono (`next/font/google`)

---

## 📁 Project Structure

```text
Vinayakk Suresh Patil portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout with Geist font & SEO metadata
│   │   ├── page.tsx           # Home landing page (Hero, Focus, Featured, Stack, CTA)
│   │   ├── work/
│   │   │   ├── page.tsx       # /work catalog index
│   │   │   └── [slug]/
│   │   │       └── page.tsx   # /work/[slug] dynamic case study page
│   │   └── about/
│   │       └── page.tsx       # /about philosophy & background
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Container.tsx  # Responsive width container
│   │   │   ├── Section.tsx    # Semantic section with standardized spacing
│   │   │   ├── Navbar.tsx     # Responsive navigation with status badge
│   │   │   └── Footer.tsx     # Site footer & social links
│   │   ├── ui/
│   │   │   ├── Button.tsx     # Multi-variant button/link primitive
│   │   │   ├── Badge.tsx      # Technical tag & status badge
│   │   │   ├── Card.tsx       # Dark surface card with hover interactions
│   │   │   └── SectionHeader.tsx # Standardized section title & eyebrow
│   │   ├── projects/
│   │   │   ├── ProjectCard.tsx # Showcase card with metrics & tech stack
│   │   │   ├── ProjectFilter.tsx # Category tabs with counts
│   │   │   └── WorkCatalog.tsx # Client-side search and filtering
│   │   ├── sections/
│   │   │   ├── Hero.tsx       # Headline, positioning & primary CTAs
│   │   │   ├── CoreFocus.tsx  # 6 engineering capability pillars
│   │   │   ├── FeaturedWork.tsx # Curated project showcase
│   │   │   ├── TechStack.tsx  # Technology tooling & architecture
│   │   │   └── ContactCta.tsx # Collaboration call-to-action
│   │   └── mdx/
│   │       └── MdxComponents.tsx # Custom styled MDX elements
│   ├── content/
│   │   └── projects/          # MDX project case studies
│   ├── lib/
│   │   ├── utils.ts           # Class merging helper (clsx + tailwind-merge)
│   │   ├── animation.ts       # Centralized Framer Motion variants
│   │   └── projects.ts        # Strongly-typed project data layer
│   ├── styles/
│   │   └── globals.css        # Global CSS, dark scrollbars, theme variables
│   └── types/
│       └── project.ts         # Project & metric TypeScript definitions
├── public/                    # Static assets, images, icons
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
└── next.config.mjs
```

---

## 🚀 Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build for Production**:
   ```bash
   npm run build
   ```
