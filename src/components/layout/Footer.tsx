'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { personalInfo, type SocialLink } from '@/lib/personalInfo'
import { cn } from '@/lib/utils'

function FooterLinkIcon({ icon }: { icon: SocialLink['icon'] }) {
  const iconClasses = 'w-3.5 h-3.5 text-text-secondary group-hover:text-accent transition-colors duration-150'
  switch (icon) {
    case 'github':
      return <Github className={iconClasses} aria-hidden="true" />
    case 'linkedin':
      return <Linkedin className={iconClasses} aria-hidden="true" />
    case 'email':
      return <Mail className={iconClasses} aria-hidden="true" />
    default:
      return null
  }
}

export function Footer() {
  const currentYear = 2026
  const { contact } = personalInfo

  return (
    <footer className="border-t border-[#D9CFC5] bg-[#F8F4EA] text-text-secondary">
      <Container size="wide">
        <div className="py-12 sm:py-14 md:py-16">
          {/* Main Footer Row: Brand/Positioning on Left, Social Links on Right */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-8 pb-8 sm:pb-10 border-b border-[#D9CFC5]">
            {/* Left Column: Name & Clear Positioning */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-1.5">
              <Link
                href="/"
                className="text-base sm:text-lg font-bold tracking-tight text-[#1C1B19] hover:text-[#C06849] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C06849] rounded"
              >
                {personalInfo.name}
              </Link>
              <p className="font-mono text-xs font-medium uppercase tracking-wider text-[#8D8275]">
                AI Automation · AI Apps
              </p>
            </div>

            {/* Right Column: Social & Professional Links */}
            <div
              role="list"
              aria-label="Footer social and contact links"
              className="flex flex-wrap items-center justify-center sm:justify-end gap-6 sm:gap-7"
            >
              {contact.secondaryLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  role="listitem"
                  aria-label={`Open Vinayakk's ${link.name}`}
                  {...(link.isExternal
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className={cn(
                    'group inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#8D8275]',
                    'hover:text-[#C06849] transition-colors duration-150',
                    'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C06849] rounded py-1 px-1.5 -mx-1.5'
                  )}
                >
                  <FooterLinkIcon icon={link.icon} />
                  <span>{link.name}</span>
                  <ArrowUpRight
                    className="w-3.5 h-3.5 text-[#8D8275] group-hover:text-[#C06849] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 motion-reduce:transform-none"
                    aria-hidden="true"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Bottom Row: Copyright */}
          <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-xs text-[#8D8275] font-mono">
            <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
