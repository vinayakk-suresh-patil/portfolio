'use client'

import React, { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Sparkles, ExternalLink, Layers, ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Technology } from '@/lib/techStack'
import { BrandLogo } from '@/components/tech/BrandLogos'

export interface PeriodicTileProps {
  tech: Technology
  index: number
  onSelect?: (tech: Technology) => void
}

export function PeriodicTile({ tech, index, onSelect }: PeriodicTileProps) {
  const shouldReduceMotion = useReducedMotion()
  const [isHovered, setIsHovered] = useState(false)

  const atomicNumberStr = String(tech.number).padStart(2, '0')

  return (
    <motion.div
      role="button"
      tabIndex={0}
      onClick={() => onSelect?.(tech)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onSelect?.(tech)
        }
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={shouldReduceMotion ? undefined : { y: -4, scale: 1.02 }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'group relative flex flex-col justify-between p-3.5 sm:p-4 rounded-xl cursor-pointer select-none',
        'bg-[#141311] border border-white/10',
        'transition-colors duration-250',
        'hover:border-[#C06849]/80 hover:bg-[#181715]',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C06849] focus-visible:border-[#C06849]',
        'shadow-[0_4px_20px_rgba(0,0,0,0.35)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.65),0_0_24px_rgba(192,104,73,0.18)]'
      )}
      style={{
        // Dynamic brand glow styling
        ['--brand-glow' as any]: tech.brandColor,
      }}
      aria-label={`Periodic element ${atomicNumberStr}: ${tech.name} (${tech.symbol}), ${tech.description}`}
    >
      {/* Subtle ambient brand tint on hover */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${tech.brandBg} 0%, transparent 75%)`,
        }}
      />

      {/* TOP ROW: Atomic Number & Layer Series Code */}
      <div className="relative z-10 flex items-center justify-between w-full font-mono text-[10px] sm:text-[11px] leading-none mb-2">
        <span className="font-bold text-[#A89F91] group-hover:text-[#C06849] transition-colors duration-200">
          {atomicNumberStr}
        </span>
        <span className="text-[9px] uppercase tracking-wider text-white/40 group-hover:text-[#F8F4EA] transition-colors duration-200">
          {tech.layerCode}
        </span>
      </div>

      {/* CENTER: Authentic Brand Logo + Chemical Symbol */}
      <div className="relative z-10 flex flex-col items-center justify-center py-2 sm:py-3 gap-1.5">
        <div
          className={cn(
            'flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-lg p-2',
            'bg-black/35 border border-white/10 group-hover:border-white/25',
            'transition-transform duration-300 group-hover:scale-110'
          )}
          style={{
            boxShadow: isHovered ? `0 0 16px ${tech.brandBg}` : 'none',
          }}
        >
          <BrandLogo name={tech.iconKey} className="w-6 h-6 object-contain" color={tech.brandColor} />
        </div>

        {/* Chemical Symbol Monogram */}
        <span className="font-mono text-base sm:text-lg font-black tracking-tight text-[#F8F4EA] group-hover:text-[#C06849] transition-colors duration-200">
          {tech.symbol}
        </span>
      </div>

      {/* BOTTOM: Full Technology Name & Operational Role */}
      <div className="relative z-10 pt-1.5 border-t border-white/[0.08] group-hover:border-[#C06849]/30 transition-colors duration-200">
        <span className="block text-xs sm:text-[13px] font-bold text-[#F8F4EA] truncate leading-tight group-hover:text-white transition-colors duration-150">
          {tech.name}
        </span>
        <span className="block text-[10px] font-mono text-[#8D8275] group-hover:text-[#A89F91] truncate leading-tight mt-1 transition-colors duration-150">
          {tech.description}
        </span>
      </div>

      {/* Bottom periodic layer colored indicator line */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:left-2 group-hover:right-2"
        style={{
          backgroundColor: tech.brandColor,
          boxShadow: isHovered ? `0 0 8px ${tech.brandColor}` : 'none',
        }}
      />
    </motion.div>
  )
}
