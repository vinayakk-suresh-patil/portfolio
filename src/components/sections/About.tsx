'use client'

import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { personalInfo } from '@/lib/personalInfo'
import { cn } from '@/lib/utils'
import { getAssetPath } from '@/lib/basePath'

export function About() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="about" borderBottom className="py-24 sm:py-32 lg:py-36 bg-[#F8F4EA] text-[#1C1B19] overflow-hidden">
      <Container size="default" className="max-w-[1240px] px-6 sm:px-8 lg:px-12">
        {/* =====================================================
            3-COLUMN ASYMMETRIC EDITORIAL COMPOSITION
            Left: Main Portrait (Upper-Middle)
            Center: Eyebrow, Heading, Paragraphs, CTA (Main Focus)
            Right: Small Secondary Workspace Visual (Lower-Middle Offset)
        ===================================================== */}
        <div className="relative grid grid-cols-1 lg:grid-cols-[260px_minmax(400px,1fr)_165px] xl:grid-cols-[290px_minmax(440px,1fr)_175px] items-start justify-between gap-10 sm:gap-12 lg:gap-12 xl:gap-16">
          
          {/* =====================================================
              1. LEFT SIDE — MAIN PORTRAIT
              Positioned slightly below top of section (Upper-Middle)
          ===================================================== */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-start lg:pt-4"
          >
            {/* Enlarged Main Portrait with clean rounded corners */}
            <div className="relative w-[220px] sm:w-[250px] lg:w-[260px] xl:w-[290px] h-[295px] sm:h-[335px] lg:h-[350px] xl:h-[385px] rounded-2xl overflow-hidden bg-[#ECE4D8] shadow-[0_16px_40px_rgba(95,75,59,0.14)] border border-[#5F4B3B]/10">
              <img
                src={getAssetPath('/images/profile/vinayakk.png')}
                alt="Vinayakk Suresh Patil"
                className="w-full h-full object-cover object-top select-none"
              />
            </div>
          </motion.div>

          {/* =====================================================
              2. CENTER — MAIN CONTENT AREA
              Primary information area receiving visual focus
          ===================================================== */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: shouldReduceMotion ? 0 : 0.08 }}
            className="flex flex-col items-start max-w-xl"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-4">
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#C06849]">
                « About me »
              </span>
            </div>

            {/* Main Heading: 2-line strong typography, tight line-height */}
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-[-0.035em] text-[#1C1B19] leading-[1.12] mb-6">
              Building systems that make<br className="hidden sm:inline" /> work feel effortless.
            </h2>

            {/* Supporting Description: 2 compact, focused paragraphs */}
            <div className="space-y-4 text-base sm:text-[17px] text-[#5F4B3B] leading-relaxed">
              <p>
                I design intelligent systems that connect AI, automation, and everyday business workflows, helping teams eliminate repetitive overhead and operate with greater velocity.
              </p>
              <p>
                I focus on turning messy, fragmented processes into simple, reliable architectures that run quietly in the background — combining thoughtful engineering, autonomous agents, and practical AI.
              </p>
            </div>

            {/* Pill CTA Button & Secondary Socials */}
            <div className="mt-8 flex flex-wrap items-center gap-6 pt-1">
              {/* Refined Pill Button with Arrow in Circular Area */}
              <a
                href="#contact"
                className={cn(
                  'group inline-flex items-center justify-between gap-4 pl-6 pr-2.5 py-2.5 rounded-full',
                  'bg-[#1C1B19] text-[#F8F4EA] font-mono text-xs font-medium uppercase tracking-[0.14em]',
                  'transition-all duration-300 ease-out',
                  'hover:bg-[#C06849] hover:shadow-[0_8px_24px_rgba(192,104,73,0.3)]',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C06849]'
                )}
              >
                <span>More about me</span>
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white/15 group-hover:bg-white/25 transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowRight className="w-3.5 h-3.5 text-[#F8F4EA]" />
                </span>
              </a>

              {/* Minimalist Professional Profile Links */}
              <div className="flex items-center gap-4 text-xs font-mono text-[#8D8275]">
                {personalInfo.socials.slice(0, 3).map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-[#C06849] transition-colors"
                  >
                    <span>{social.name}</span>
                    <ArrowUpRight className="w-3 h-3 text-[#C06849]/70" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* =====================================================
              3. RIGHT SIDE — SECONDARY VISUAL
              Intentionally positioned lower than main portrait (Lower-Middle)
          ===================================================== */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: shouldReduceMotion ? 0 : 0.16 }}
            className="self-end lg:pt-28 xl:pt-32 ml-auto lg:ml-0"
          >
            {/* Secondary square photo slightly enlarged for better balance */}
            <div className="w-[130px] h-[130px] sm:w-[150px] sm:h-[150px] lg:w-[165px] lg:h-[165px] rounded-2xl overflow-hidden bg-[#ECE4D8] shadow-[0_12px_32px_rgba(95,75,59,0.12)] border border-[#5F4B3B]/10 select-none">
              <img
                src={getAssetPath('/images/profile/workspace.jpg')}
                alt="Engineering workspace"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </motion.div>

        </div>
      </Container>
    </Section>
  )
}
