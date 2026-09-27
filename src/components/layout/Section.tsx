import React from 'react'
import { cn } from '@/lib/utils'

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string
  children: React.ReactNode
  className?: string
  borderTop?: boolean
  borderBottom?: boolean
}

export function Section({
  id,
  children,
  className,
  borderTop = false,
  borderBottom = false,
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'py-16 md:py-24 lg:py-28 relative',
        borderTop && 'border-t border-[#D9CFC5]',
        borderBottom && 'border-b border-[#D9CFC5]',
        className
      )}
      {...props}
    >
      {children}
    </section>
  )
}
