'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { Github, Linkedin } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { personalInfo } from '@/lib/personalInfo'
import { getAssetPath } from '@/lib/basePath'

export interface HeroProps {
  imageSrc?: string
}

export function Hero({ imageSrc }: HeroProps) {
  const resolvedImageSrc = imageSrc || getAssetPath('/images/profile/vinayakk.png')
  const shouldReduceMotion = useReducedMotion()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Variants for smooth entry
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
        delayChildren: shouldReduceMotion ? 0 : 0.04,
      },
    },
  }

  const itemFadeUp = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 16,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.45,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      scale: shouldReduceMotion ? 1 : 0.985,
      y: shouldReduceMotion ? 0 : 18,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.25 : 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  // Authentic official partner brand SVGs with consistent monochrome styling
  const partnerLogos = [
    {
      name: 'OpenAI',
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 sm:w-7 sm:h-7 shrink-0 transition-transform duration-200 group-hover:scale-105" aria-hidden="true">
          <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zm-1.22-9.673a4.475 4.475 0 0 1 2.341-1.975v5.67a.79.79 0 0 0 .392.684l5.843 3.368-2.02 1.168a.075.075 0 0 1-.067 0L4.027 14.75a4.499 4.499 0 0 1-1.647-6.12zM18.73 8.368l-5.843-3.369 2.02-1.168a.074.074 0 0 1 .067 0l4.842 2.793a4.496 4.496 0 0 1-1.086 1.744zm-7.61-3.642a4.476 4.476 0 0 1 2.876 1.04l-.141.08-4.779 2.758a.795.795 0 0 0-.392.682v6.737L6.664 14.89a.071.071 0 0 1-.038-.052V9.255a4.504 4.504 0 0 1 4.494-4.529zm-1.8 7.027l2.846-1.642 2.846 1.642v3.284l-2.846 1.642-2.846-1.642z" />
        </svg>
      ),
    },
    {
      name: 'Anthropic',
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 sm:w-7 sm:h-7 shrink-0 transition-transform duration-200 group-hover:scale-105" aria-hidden="true">
          <path d="M17.3041 3.541h-3.6718l6.696 16.918H24Zm-10.6082 0L0 20.459h3.7442l1.3693-3.5527h7.0052l1.3693 3.5528h3.7442L10.5363 3.5409Zm-.3712 10.2232 2.2914-5.9456 2.2914 5.9456Z" />
        </svg>
      ),
    },
    {
      name: 'Gemini',
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 sm:w-7 sm:h-7 shrink-0 transition-transform duration-200 group-hover:scale-105" aria-hidden="true">
          <path d="M11.04 19.32Q12 21.51 12 24q0-2.49.93-4.68.96-2.19 2.58-3.81t3.81-2.55Q21.51 12 24 12q-2.49 0-4.68-.93a12.3 12.3 0 0 1-3.81-2.58 12.3 12.3 0 0 1-2.58-3.81Q12 2.49 12 0q0 2.49-.96 4.68-.93 2.19-2.55 3.81a12.3 12.3 0 0 1-3.81 2.58Q2.49 12 0 12q2.49 0 4.68.96 2.19.93 3.81 2.55t2.55 3.81" />
        </svg>
      ),
    },
    {
      name: 'n8n',
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 sm:w-7 sm:h-7 shrink-0 transition-transform duration-200 group-hover:scale-105" aria-hidden="true">
          <path d="M21.4737 5.6842c-1.1772 0-2.1663.8051-2.4468 1.8947h-2.8955c-1.235 0-2.289.893-2.492 2.111l-.1038.623a1.263 1.263 0 0 1-1.246 1.0555H11.289c-.2805-1.0896-1.2696-1.8947-2.4468-1.8947s-2.1663.8051-2.4467 1.8947H4.973c-.2805-1.0896-1.2696-1.8947-2.4468-1.8947C1.1311 9.4737 0 10.6047 0 12s1.131 2.5263 2.5263 2.5263c1.1772 0 2.1663-.8051 2.4468-1.8947h1.4223c.2804 1.0896 1.2696 1.8947 2.4467 1.8947 1.1772 0 2.1663-.8051 2.4468-1.8947h1.0008a1.263 1.263 0 0 1 1.2459 1.0555l.1038.623c.203 1.218 1.257 2.111 2.492 2.111h.3692c.2804 1.0895 1.2696 1.8947 2.4468 1.8947 1.3952 0 2.5263-1.131 2.5263-2.5263s-1.131-2.5263-2.5263-2.5263c-1.1772 0-2.1664.805-2.4468 1.8947h-.3692a1.263 1.263 0 0 1-1.246-1.0555l-.1037-.623A2.52 2.52 0 0 0 13.9607 12a2.52 2.52 0 0 0 .821-1.4794l.1038-.623a1.263 1.263 0 0 1 1.2459-1.0555h2.8955c.2805 1.0896 1.2696 1.8947 2.4468 1.8947 1.3952 0 2.5263-1.131 2.5263-2.5263s-1.131-2.5263-2.5263-2.5263m0 1.2632a1.263 1.263 0 0 1 1.2631 1.2631 1.263 1.263 0 0 1-1.2631 1.2632 1.263 1.263 0 0 1-1.2632-1.2632 1.263 1.263 0 0 1 1.2632-1.2631M2.5263 10.7368A1.263 1.263 0 0 1 3.7895 12a1.263 1.263 0 0 1-1.2632 1.2632A1.263 1.263 0 0 1 1.2632 12a1.263 1.263 0 0 1 1.2631-1.2632m6.3158 0A1.263 1.263 0 0 1 10.1053 12a1.263 1.263 0 0 1-1.2632 1.2632A1.263 1.263 0 0 1 7.579 12a1.263 1.263 0 0 1 1.2632-1.2632m10.1053 3.7895a1.263 1.263 0 0 1 1.2631 1.2632 1.263 1.263 0 0 1-1.2631 1.2631 1.263 1.263 0 0 1-1.2632-1.2631 1.263 1.263 0 0 1 1.2632-1.2632" />
        </svg>
      ),
    },
    {
      name: 'Make',
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 sm:w-7 sm:h-7 shrink-0 transition-transform duration-200 group-hover:scale-105" aria-hidden="true">
          <path d="M13.38 3.498c-.27 0-.511.19-.566.465L9.85 18.986a.578.578 0 0 0 .453.678l4.095.826a.58 5.8 0 0 0 .682-.455l2.963-15.021a.578.578 0 0 0-.453-.678l-4.096-.826a.589.589 0 0 0-.113-.012zm-5.876.098a.576.576 0 0 0-.516.318L.062 17.697a.575.575 0 0 0 .256.774l3.733 1.877a.578.578 0 0 0 .775-.258l6.926-13.781a.577.577 0 0 0-.256-.776L7.762 3.658a.571.571 0 0 0-.258-.062zm11.74.115a.576.576 0 0 0-.576.576v15.426c0 .318.258.578.576.578h4.178a.58.58 0 0 0 .578-.578V4.287a.578.578 0 0 0-.578-.576Z" />
        </svg>
      ),
    },
    {
      name: 'Next.js',
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 sm:w-7 sm:h-7 shrink-0 transition-transform duration-200 group-hover:scale-105" aria-hidden="true">
          <path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z" />
        </svg>
      ),
    },
    {
      name: 'Supabase',
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 sm:w-7 sm:h-7 shrink-0 transition-transform duration-200 group-hover:scale-105" aria-hidden="true">
          <path d="M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C-.33 13.427.65 15.455 2.409 15.455h9.579l.113 7.51c.014.985 1.259 1.408 1.873.636l9.262-11.653c1.093-1.375.113-3.403-1.645-3.403h-9.642z" />
        </svg>
      ),
    },
  ]

  return (
    <section
      aria-label="Hero Introduction"
      className="relative pt-12 sm:pt-16 lg:pt-20 pb-14 sm:pb-20 bg-[#F8F4EA] text-[#1C1B19]"
    >
      <Container size="wide">
        {/* 
          1 & 2. HERO CONTAINER
          - Horizontal rounded rectangle (~28-32px radius)
          - Centrally placed with generous outer margins
          - Very soft light warm-gray background (#EDE9E2)
          - overflow-visible so the portrait head can break out above the card
          - min-h-[500px] as requested
        */}
        <motion.div
          variants={cardVariants}
          initial={mounted ? 'hidden' : false}
          animate="visible"
          className="relative rounded-[28px] sm:rounded-[32px] border border-[#D9CFC5]/80 bg-[#EDE9E2] shadow-[0_12px_36px_rgba(95,75,59,0.05)] min-h-[500px] flex flex-col justify-center px-6 sm:px-10 lg:px-14 py-10 sm:py-12 lg:py-14"
        >
          {/* Subtle Ambient Background Texture (clipped to card's rounded corners) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-[28px] sm:rounded-[32px] bg-gradient-to-br from-white/40 via-transparent to-black/[0.02]"
          />

          <motion.div
            variants={containerVariants}
            className="relative z-10 grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-0 h-full"
          >
            {/* 
              LEFT CONTENT AREA (Approximately 52-55% of hero width)
              - Headline, supporting text, and action buttons with plenty of breathing room
            */}
            <div className="flex flex-col items-start text-left lg:col-span-7 xl:col-span-7 z-10 lg:pr-6">
              {/* Main Heading with Bolder Editorial Typography */}
              <motion.h1
                variants={itemFadeUp}
                className="font-sans text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4.25rem] font-black tracking-tight text-[#1C1B19] leading-[1.06]"
              >
                I Build AI Systems
                <span className="block font-bold text-[#8D8275] tracking-tight mt-1 sm:mt-2">
                  Faster &amp; Smarter
                </span>
              </motion.h1>

              {/* Supporting Text */}
              <motion.p
                variants={itemFadeUp}
                className="mt-5 sm:mt-6 text-base sm:text-lg text-[#8D8275] leading-relaxed max-w-lg font-normal"
              >
                I build intelligent automation workflows and AI-powered web applications that
                solve real-world problems for founders and engineering teams.
              </motion.p>

              {/* Two Rounded Action Buttons with Skewed Diagonal Sliding Fill */}
              <motion.div
                variants={itemFadeUp}
                className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3.5 sm:gap-4 w-full sm:w-auto"
              >
                <Link
                  href="#automation"
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-[#1C1B19] px-7 py-3.5 text-sm font-semibold text-[#F8F4EA] shadow-[0_4px_16px_rgba(28,27,25,0.20)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1C1B19] active:scale-[0.98]"
                >
                  {/* Skewed diagonal sliding fill */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -inset-y-3 -left-10 -right-10 -translate-x-[115%] -skew-x-[20deg] bg-[#C06849] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0"
                  />
                  <span className="relative z-10 transition-colors duration-300">
                    View projects
                  </span>
                </Link>

                <div className="flex items-center gap-2.5 sm:gap-3">
                  <a
                    href={personalInfo.socials.find((s) => s.icon === 'github')?.url || 'https://github.com/vinayakk-patil'}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="group relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-white/90 border border-[#D9CFC5] text-[#1C1B19] shadow-[0_2px_8px_rgba(95,75,59,0.04)] transition-all duration-300 hover:border-[#1C1B19] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1C1B19] active:scale-[0.98]"
                  >
                    {/* Skewed diagonal sliding fill */}
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -inset-y-3 -left-6 -right-6 -translate-x-[115%] -skew-x-[20deg] bg-[#1C1B19] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0"
                    />
                    <Github className="relative z-10 h-5 w-5 transition-colors duration-300 group-hover:text-[#F8F4EA]" />
                  </a>

                  <a
                    href={personalInfo.socials.find((s) => s.icon === 'linkedin')?.url || 'https://linkedin.com/in/vinayakk-patil'}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="group relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-white/90 border border-[#D9CFC5] text-[#1C1B19] shadow-[0_2px_8px_rgba(95,75,59,0.04)] transition-all duration-300 hover:border-[#1C1B19] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1C1B19] active:scale-[0.98]"
                  >
                    {/* Skewed diagonal sliding fill */}
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -inset-y-3 -left-6 -right-6 -translate-x-[115%] -skew-x-[20deg] bg-[#1C1B19] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0"
                    />
                    <Linkedin className="relative z-10 h-5 w-5 transition-colors duration-300 group-hover:text-[#F8F4EA]" />
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Spacer for Desktop Grid */}
            <div className="hidden lg:block lg:col-span-5" aria-hidden="true" />
          </motion.div>

          {/* 
            1 & 3. HERO PORTRAIT (RIGHT SIDE, FULL HEIGHT + HEAD BREAKOUT)
            - Takes entire height of hero card
            - Head extends outside above the card's top edge (height: calc(100% + 100px))
            - Anchored flush to the bottom of the card (bottom-0)
            - Clean black-and-white / monochrome treatment
          */}
          <div
            className="lg:absolute lg:right-0 lg:bottom-0 lg:h-[calc(100%+80px)] xl:h-[calc(100%+100px)] z-20 pointer-events-none flex items-end justify-center lg:justify-end mt-8 lg:mt-0"
            aria-hidden="true"
          >
            <div className="relative w-full max-w-[380px] sm:max-w-[440px] lg:max-w-none h-[420px] sm:h-[480px] lg:h-full aspect-square flex items-end justify-center overflow-hidden rounded-br-[28px] sm:rounded-br-[32px]">
              <Image
                src={resolvedImageSrc}
                alt="Portrait of Vinayakk Suresh Patil"
                fill
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 700px"
                priority
                style={{ filter: 'grayscale(0.8) contrast(1.08) brightness(1.01)' }}
                className="object-contain object-bottom filter grayscale-[80%] contrast-[1.08] brightness-[1.01] drop-shadow-[0_16px_36px_rgba(95,75,59,0.14)] select-none"
              />
            </div>
          </div>
        </motion.div>

        {/* Partner / Technology Logo Ribbon below Grand Card */}
        <motion.div
          variants={itemFadeUp}
          initial={mounted ? 'hidden' : false}
          animate="visible"
          className="mt-12 sm:mt-16"
        >
          <div className="flex flex-wrap items-center justify-center sm:justify-between gap-6 sm:gap-8 lg:gap-10 px-4 opacity-80 hover:opacity-100 transition-opacity duration-300">
            {partnerLogos.map((partner) => (
              <div
                key={partner.name}
                className="group flex items-center gap-3 text-[1.5rem] font-bold tracking-tight text-[#8D8275] hover:text-[#1C1B19] transition-colors duration-200 cursor-default select-none leading-none"
              >
                {partner.svg}
                <span>{partner.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
