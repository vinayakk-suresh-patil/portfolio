import React from 'react'
import { cn } from '@/lib/utils'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'accent' | 'default' | 'tech' | 'outline' | 'muted'
  size?: 'sm' | 'md'
  dot?: boolean
  children: React.ReactNode
  className?: string
}

export function Badge({
  variant = 'default',
  size = 'sm',
  dot = false,
  children,
  className,
  ...props
}: BadgeProps) {
  const baseStyles =
    'inline-flex items-center font-mono font-medium rounded-md select-none transition-all duration-200 ease-out'

  const variants = {
    // Warm neutral technology tags
    tech:
      'bg-[#D9CFC5] text-[#5F4B3B] border border-transparent hover:bg-[#C06849] hover:text-[#F8F4EA]',
    // Accent tag (Terracotta)
    accent:
      'bg-[rgba(192,104,73,0.12)] text-[#C06849] border border-[rgba(192,104,73,0.25)] hover:bg-[#C06849] hover:text-[#F8F4EA]',
    // Default tag
    default:
      'bg-[#D9CFC5] text-[#5F4B3B] border border-transparent hover:bg-[#C06849] hover:text-[#F8F4EA]',
    outline:
      'bg-transparent text-[#5F4B3B] border border-[#D9CFC5] hover:border-[#C06849] hover:text-[#C06849]',
    muted:
      'bg-[#F2EDE3] text-[#8D8275] border border-[#D9CFC5]',
  }

  const sizes = {
    sm: 'text-[11px] px-2.5 py-0.5 gap-1.5',
    md: 'text-xs px-3 py-1 gap-2',
  }

  const dotColors = {
    tech: 'bg-[#C06849]',
    accent: 'bg-[#C06849]',
    default: 'bg-[#5F4B3B]',
    outline: 'bg-[#8D8275]',
    muted: 'bg-[#8D8275]',
  }

  return (
    <span
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {dot && (
        <span
          className={cn('h-1.5 w-1.5 rounded-full shrink-0', dotColors[variant])}
          aria-hidden="true"
        />
      )}
      <span>{children}</span>
    </span>
  )
}
