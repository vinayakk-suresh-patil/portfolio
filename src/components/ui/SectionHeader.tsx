import React from 'react'
import { cn } from '@/lib/utils'

export interface SectionHeaderProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  action?: React.ReactNode
  className?: string
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  action,
  className,
}: SectionHeaderProps) {
  const isCenter = align === 'center'

  return (
    <div
      className={cn(
        'mb-12 md:mb-16',
        isCenter ? 'text-center mx-auto max-w-2xl' : 'max-w-3xl',
        action && 'flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6',
        className
      )}
    >
      <div className={cn('space-y-3.5', isCenter && 'flex flex-col items-center')}>
        {eyebrow && (
          <span className="inline-block font-mono text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#C06849]">
            {eyebrow}
          </span>
        )}

        <h2 className="text-3xl sm:text-4xl md:text-[2.65rem] font-bold tracking-tight text-[#1C1B19] leading-[1.12]">
          {title}
        </h2>

        {description && (
          <p className="text-base sm:text-lg text-[#8D8275] leading-relaxed font-normal pt-1">
            {description}
          </p>
        )}
      </div>

      {action && <div className="shrink-0">{action}</div>}
    </div>
  )
}
