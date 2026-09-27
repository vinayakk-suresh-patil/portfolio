'use client'

import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Button } from '@/components/ui/Button'
import { personalInfo, type SocialLink } from '@/lib/personalInfo'
import { cn } from '@/lib/utils'

function SecondaryLinkIcon({ icon }: { icon: SocialLink['icon'] }) {
  const iconClasses = 'w-4 h-4 text-[#D9CFC5]/70 group-hover:text-accent transition-colors duration-200'
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

export function Contact() {
  const shouldReduceMotion = useReducedMotion()
  const { contact } = personalInfo

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: shouldReduceMotion ? 0 : 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 16,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const mailtoHref = `mailto:${contact.email}?subject=${encodeURIComponent('Project Inquiry / AI Automation')}`

  return (
    <Section
      id="contact"
      className="relative overflow-hidden py-24 sm:py-32 lg:py-36 bg-[#1C1B19] border-t border-[#D9CFC5]/20 scroll-mt-12"
    >
      {/* Background Visual Treatments: Subtle texture and warm terracotta glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(217,207,197,0.06)_1px,transparent_1px)] [background-size:24px_24px] opacity-30 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_60%,transparent_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[360px] bg-[radial-gradient(circle,rgba(192,104,73,0.12)_0%,transparent_70%)] blur-3xl rounded-full"
      />

      <Container size="narrow" className="relative z-10">
        <motion.div
          variants={containerVariants}
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="flex flex-col items-center text-center mx-auto"
        >
          {/* Eyebrow */}
          <motion.div variants={itemVariants} className="mb-4 sm:mb-5">
            <span className="inline-block font-mono text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              {contact.eyebrow}
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-[#F8F4EA] leading-[1.12] mb-6 max-w-2xl"
          >
            <span>{contact.headingLine1}</span>{' '}
            <span className="block text-[#D9CFC5] font-light">
              {contact.headingLine2}
            </span>
          </motion.h2>

          {/* Supporting Text */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-[#D9CFC5] leading-relaxed max-w-xl font-normal mb-10 sm:mb-12"
          >
            {contact.supportingText}
          </motion.p>

          {/* Primary CTA */}
          <motion.div variants={itemVariants} className="mb-10 sm:mb-12">
            <Button
              href={mailtoHref}
              variant="primary"
              size="lg"
              rightIcon={
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transform-none" />
              }
              className="px-8 py-3.5 text-sm sm:text-base font-semibold shadow-warm-md hover:shadow-warm-lg min-w-[180px]"
            >
              Get In Touch
            </Button>
          </motion.div>

          {/* Secondary Links */}
          <motion.div
            variants={itemVariants}
            role="list"
            aria-label="Secondary contact and social links"
            className="flex flex-wrap items-center justify-center gap-6 sm:gap-8"
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
                  'group inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#D9CFC5]',
                  'hover:text-accent transition-colors duration-150',
                  'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded-md py-1 px-2 -mx-2'
                )}
              >
                <SecondaryLinkIcon icon={link.icon} />
                <span>{link.name}</span>
                <ArrowUpRight
                  className="w-3.5 h-3.5 text-[#D9CFC5]/70 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 motion-reduce:transform-none"
                  aria-hidden="true"
                />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  )
}
