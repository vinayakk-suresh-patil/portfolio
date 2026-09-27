'use client'

import React from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ProjectCard } from '@/components/projects/ProjectCard'
import { getFeaturedProjects } from '@/lib/projects'

export function SelectedWork() {
  const featuredProjects = getFeaturedProjects()
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="work" borderBottom className="bg-[#F8F4EA]">
      <Container size="wide">
        {/* Section Header */}
        <SectionHeader
          eyebrow="SELECTED WORK"
          title="AI systems built to solve real problems."
          description="A selection of automation workflows and AI-powered applications I've designed and built."
        />

        {/* Responsive Project Grid */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8"
        >
          {featuredProjects.map((project, index) => {
            // Make the first flagship project span full-width on desktop
            const isFlagship = index === 0

            return (
              <ProjectCard
                key={project.slug}
                project={project}
                featured={isFlagship}
              />
            )
          })}
        </motion.div>

        {/* View All Work Link */}
        <div className="mt-12 md:mt-16 flex items-center justify-center">
          <Link
            href="/work"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl border border-[#5F4B3B] bg-[#F2EDE3] px-5 py-2.5 font-mono text-xs sm:text-sm font-medium text-[#1C1B19] shadow-warm-sm transition-all duration-300 hover:border-[#1C1B19] active:scale-[0.98]"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -inset-y-3 -left-8 -right-8 -translate-x-[115%] -skew-x-[20deg] bg-[#1C1B19] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0"
            />
            <span className="relative z-10 transition-colors duration-300 group-hover:text-[#F8F4EA]">View all work</span>
            <ArrowRight className="relative z-10 h-4 w-4 text-[#C06849] transition-all duration-200 ease-out group-hover:translate-x-1 group-hover:text-[#F8F4EA]" />
          </Link>
        </div>
      </Container>
    </Section>
  )
}
