'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ArrowDownToLine } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { cn } from '@/lib/utils'
import { getAssetPath } from '@/lib/basePath'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'AI Automation', href: getAssetPath('/#automation') },
    { name: 'AI Apps', href: getAssetPath('/#apps') },
    { name: 'Tech Stack', href: getAssetPath('/#tech-stack') },
    { name: 'About', href: getAssetPath('/#about') },
    { name: 'Contact', href: getAssetPath('/#contact') },
    {
      name: 'Resume',
      href: getAssetPath('/resume.pdf'),
      download: 'Vinayakk_Suresh_Patil_Resume.pdf',
    },
  ]

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        scrolled
          ? 'bg-[#F8F4EA]/90 backdrop-blur-md py-3 sm:py-4 border-b border-[#D9CFC5]/60 shadow-[0_2px_12px_rgba(95,75,59,0.04)]'
          : 'bg-[#F8F4EA] py-5 sm:py-7'
      )}
    >
      <Container size="wide">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Name (Left) */}
          <Link
            href="/"
            className="group flex items-center gap-3 text-base sm:text-lg font-bold tracking-tight text-[#1C1B19] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C06849] rounded-lg"
          >
            {/* Elegant Geometric Monogram Icon */}
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#1C1B19] text-[#F8F4EA] shadow-sm transition-transform duration-200 group-hover:scale-105">
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4l8 16 8-16" />
                <path d="M12 12l4-8" opacity="0.6" />
              </svg>
            </span>
            <span className="font-sans font-bold tracking-tight text-[#1C1B19]">
              Vinayakk<span className="hidden md:inline text-[#8D8275] font-medium ml-1">Suresh Patil</span>
            </span>
          </Link>

          {/* Centered Navigation Links (Desktop) */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-6 lg:gap-8 xl:gap-9 text-sm font-medium text-[#8D8275]"
          >
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                {...(item.download ? { download: item.download } : {})}
                className="group inline-flex items-center gap-1.5 transition-colors duration-200 hover:text-[#1C1B19] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C06849] rounded-md py-1"
              >
                <span>{item.name}</span>
                {item.download && (
                  <ArrowDownToLine className="h-3.5 w-3.5 text-[#8D8275] group-hover:text-[#C06849] group-hover:translate-y-0.5 transition-all duration-200" />
                )}
              </a>
            ))}
          </nav>

          {/* Right Action: Rounded CTA Button with Skewed Diagonal Sliding Fill */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={getAssetPath('/#contact')}
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-[#1C1B19] px-5 sm:px-6 py-2.5 text-xs sm:text-sm font-medium text-[#F8F4EA] shadow-[0_2px_8px_rgba(28,27,25,0.15)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1C1B19] active:scale-[0.98]"
            >
              {/* Skewed diagonal sliding fill */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -inset-y-3 -left-8 -right-8 -translate-x-[115%] -skew-x-[20deg] bg-[#C06849] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0"
              />
              <span className="relative z-10 transition-colors duration-300">
                Start a project
              </span>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-xl border border-[#D9CFC5] bg-[#F2EDE3] text-[#1C1B19] transition-colors hover:bg-[#EEE7DC]"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 pb-3 border-t border-[#D9CFC5]/80 space-y-3 bg-[#F8F4EA]">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                {...(item.download ? { download: item.download } : {})}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2 text-sm font-medium text-[#1C1B19] rounded-lg hover:bg-[#F2EDE3] transition-colors"
              >
                <span>{item.name}</span>
                {item.download && (
                  <ArrowDownToLine className="h-4 w-4 text-[#8D8275]" />
                )}
              </a>
            ))}
            <div className="pt-2">
              <a
                href={getAssetPath('/#contact')}
                onClick={() => setMobileMenuOpen(false)}
                className="group relative w-full inline-flex items-center justify-center overflow-hidden rounded-xl bg-[#1C1B19] px-5 py-3 text-sm font-medium text-[#F8F4EA] shadow-sm active:scale-[0.98]"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-y-3 -left-8 -right-8 -translate-x-[115%] -skew-x-[20deg] bg-[#C06849] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0"
                />
                <span className="relative z-10 transition-colors duration-300">
                  Start a project
                </span>
              </a>
            </div>
          </div>
        )}
      </Container>
    </header>
  )
}
