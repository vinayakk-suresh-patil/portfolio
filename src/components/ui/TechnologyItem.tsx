'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import type { Technology } from '@/lib/techStack'
import { BrandLogo } from '@/components/tech/BrandLogos'

export interface TechnologyItemProps {
  technology: Technology
  className?: string
}

export function TechnologyItem({ technology, className }: TechnologyItemProps) {
  return (
    <div
      role="listitem"
      tabIndex={0}
      aria-label={`${technology.name}${technology.description ? `: ${technology.description}` : ''}`}
      className={cn(
        'group relative flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-xl',
        'border border-[#D9CFC5] bg-[#F8F4EA] hover:bg-[#EEE7DC] hover:border-[#C06849]',
        'transition-all duration-200 ease-out shadow-warm-xs',
        'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C06849] focus-visible:border-[#C06849]',
        'cursor-default select-none',
        className
      )}
    >
      <div className="flex items-center gap-3 min-w-0 flex-1">
        {/* Brand Icon Container */}
        <span
          className={cn(
            'flex items-center justify-center w-7 h-7 rounded-lg shrink-0',
            'bg-[#F2EDE3] border border-[#D9CFC5]',
            'group-hover:border-[#C06849]/50 group-hover:bg-[#F8F4EA]',
            'transition-all duration-200'
          )}
        >
          <BrandLogo name={technology.iconKey} className="w-4 h-4 object-contain text-[#1C1B19] group-hover:text-[#C06849] transition-colors" />
        </span>

        {/* Technology Name & Context */}
        <div className="min-w-0 flex-1">
          <span className="block text-[13px] sm:text-sm font-medium text-[#1C1B19] group-hover:text-[#080808] transition-colors duration-150 truncate">
            {technology.name}
          </span>
          {technology.description && (
            <span className="block text-[11px] text-[#8D8275] group-hover:text-[#5F4B3B] transition-colors duration-150 truncate">
              {technology.description}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
