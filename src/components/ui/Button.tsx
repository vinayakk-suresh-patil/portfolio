import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  external?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  children: React.ReactNode
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  external,
  leftIcon,
  rightIcon,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    'group relative overflow-hidden inline-flex items-center justify-center font-medium transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C06849] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F8F4EA] disabled:pointer-events-none disabled:opacity-50 select-none'

  const variants = {
    primary:
      'bg-[#C06849] text-[#F8F4EA] font-semibold shadow-[0_4px_14px_rgba(192,104,73,0.25)] hover:shadow-[0_6px_20px_rgba(192,104,73,0.35)] active:scale-[0.98]',
    secondary:
      'bg-transparent border border-[#5F4B3B] active:scale-[0.98]',
    outline:
      'bg-transparent border border-[#D9CFC5] hover:border-[#1C1B19] active:scale-[0.98]',
    ghost:
      'bg-transparent active:scale-[0.98]',
  }

  const fillColors = {
    primary: 'bg-[#1C1B19]',
    secondary: 'bg-[#1C1B19]',
    outline: 'bg-[#1C1B19]',
    ghost: 'bg-[#D9CFC5]/50',
  }

  const textColorTransitions = {
    primary: 'text-[#F8F4EA]',
    secondary: 'text-[#1C1B19] group-hover:text-[#F8F4EA]',
    outline: 'text-[#5F4B3B] group-hover:text-[#F8F4EA]',
    ghost: 'text-[#8D8275] group-hover:text-[#1C1B19]',
  }

  const sizes = {
    sm: 'text-xs h-9 px-3.5 gap-1.5 rounded-lg',
    md: 'text-sm h-11 px-5 gap-2 rounded-xl',
    lg: 'text-base h-12 px-6 gap-2.5 rounded-xl',
  }

  const combinedClasses = cn(baseStyles, variants[variant], sizes[size], className)

  const content = (
    <>
      {/* Skewed diagonal sliding fill */}
      <span
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute -inset-y-3 -left-10 -right-10 -translate-x-[115%] -skew-x-[20deg] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0',
          fillColors[variant]
        )}
      />
      <span
        className={cn(
          'relative z-10 inline-flex items-center gap-2 transition-colors duration-300',
          textColorTransitions[variant]
        )}
      >
        {leftIcon && <span className="shrink-0">{leftIcon}</span>}
        <span>{children}</span>
        {rightIcon && <span className="shrink-0">{rightIcon}</span>}
      </span>
    </>
  )

  if (href) {
    if (href.startsWith('mailto:') || href.startsWith('tel:')) {
      return (
        <a href={href} className={combinedClasses}>
          {content}
        </a>
      )
    }

    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {content}
        </a>
      )
    }

    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    )
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  )
}
