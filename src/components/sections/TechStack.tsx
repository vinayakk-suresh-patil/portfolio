'use client'

import React from 'react'
import { Container } from '@/components/layout/Container'
import { cn } from '@/lib/utils'
import { techCategories, techStack, type TechCategory } from '@/lib/techStack'
import { BrandLogo } from '@/components/tech/BrandLogos'

export { techStack, techCategories }

// Custom clean titles & subtitles matching the periodic layer reference
const layerMetadata: Record<
  TechCategory['id'],
  { title: string; subtitle: string; number: string }
> = {
  ai: {
    number: '01',
    title: 'AI & Intelligence',
    subtitle: 'Model layer',
  },
  automation: {
    number: '02',
    title: 'Automation',
    subtitle: 'Workflow layer',
  },
  development: {
    number: '03',
    title: 'Development',
    subtitle: 'Application layer',
  },
  infrastructure: {
    number: '04',
    title: 'Infrastructure',
    subtitle: 'Cloud & State layer',
  },
}

export function TechStack() {
  return (
    <section
      id="tech-stack"
      className="relative py-20 lg:py-28 overflow-hidden select-none bg-[#0D0C0A] text-[#F8F4EA]"
    >
      {/* Ambient Warm Obsidian Glow (matching AI Automation) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[85vw] max-w-5xl h-[360px] rounded-full blur-[140px] opacity-15 bg-[#C06849]"
      />

      {/* Top Section Border Divider */}
      <div className="w-full h-px mb-12 sm:mb-16 bg-gradient-to-r from-transparent via-[#C06849]/30 to-transparent" />

      <Container size="wide" className="relative z-10">
        {/* =====================================================
            CLEAN SECTION HEADER (Title Only)
        ===================================================== */}
        <header className="mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C06849]" />
            <span className="font-mono text-xs font-semibold tracking-[0.2em] uppercase text-[#C06849]">
              TECH STACK
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] text-[#F8F4EA]">
            Periodic Layers
          </h2>
        </header>

        {/* =====================================================
            PERIODIC LAYERS (Left: Title | Right: Tools & Logos)
        ===================================================== */}
        <div className="border-b border-white/10">
          {techCategories.map((category) => {
            const meta = layerMetadata[category.id]
            const countStr = String(category.items.length).padStart(2, '0')

            return (
              <article
                key={category.id}
                className={cn(
                  'group relative border-t border-white/10',
                  'grid grid-cols-1 md:grid-cols-[70px_230px_1fr_60px] lg:grid-cols-[90px_280px_1fr_70px]',
                  'min-h-[150px] lg:min-h-[175px] items-center',
                  'py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8',
                  'transition-all duration-300 ease-out',
                  'hover:bg-white/[0.025] hover:px-6 sm:hover:px-8 lg:hover:px-10'
                )}
              >
                {/* 1. LAYER NUMBER (LEFT) */}
                <div className="font-mono text-xs sm:text-sm text-[#8D8275] group-hover:text-[#C06849] transition-colors mb-2 md:mb-0">
                  {meta.number}
                </div>

                {/* 2. LAYER TITLE & SUBTITLE (LEFT) */}
                <div className="py-2 md:py-0 pr-4 sm:pr-8">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-[#F8F4EA] group-hover:text-white transition-colors">
                    {meta.title}
                  </h3>
                  <span className="block mt-1.5 font-mono text-[11px] uppercase tracking-wider text-[#8D8275] group-hover:text-[#A89F91] transition-colors">
                    {meta.subtitle}
                  </span>
                </div>

                {/* 3. LAYER TOOLS: LOGO + TOOL NAME ONLY (RIGHT) */}
                <div className="flex flex-wrap items-center gap-3 sm:gap-3.5 py-4 md:py-0">
                  {category.items.map((tool) => (
                    <div
                      key={tool.name}
                      className={cn(
                        'group/tool inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl',
                        'border border-white/10 bg-[#161513]',
                        'transition-all duration-200 ease-out',
                        'hover:border-[#C06849] hover:bg-[#1E1C19] hover:-translate-y-0.5',
                        'cursor-default select-none shadow-sm'
                      )}
                    >
                      <BrandLogo
                        name={tool.iconKey}
                        className="w-4 h-4 shrink-0 object-contain text-[#C06849] group-hover/tool:text-[#E28362] transition-colors duration-200 group-hover/tool:scale-110"
                      />
                      <span className="font-mono text-xs sm:text-[13px] font-medium text-[#F8F4EA] group-hover/tool:text-white whitespace-nowrap">
                        {tool.name}
                      </span>
                    </div>
                  ))}
                </div>

                {/* 4. LAYER COUNT (RIGHTMOST) */}
                <div className="hidden md:block font-mono text-xs sm:text-sm text-[#8D8275] text-right">
                  {countStr}
                </div>
              </article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
