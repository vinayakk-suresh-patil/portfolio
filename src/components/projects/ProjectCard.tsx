'use client'

import React from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { Project } from '@/types/project'
import { ProjectMedia } from '@/components/projects/ProjectMedia'
import { cn } from '@/lib/utils'

export interface ProjectCardProps {
  project: Project
  featured?: boolean
  actionLabel?: string
  layoutVariant?: 'default' | 'product'
  className?: string
}

export function ProjectCard({
  project,
  featured = false,
  actionLabel,
  layoutVariant = 'default',
  className,
}: ProjectCardProps) {
  const shouldReduceMotion = useReducedMotion()
  const isAutomation = project.category === 'automation'
  const isProduct = layoutVariant === 'product' || !isAutomation

  return (
    <motion.article
      whileHover={shouldReduceMotion ? undefined : { y: -3 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-2xl',
        'bg-[#F8F4EA] border border-[#D9CFC5] hover:bg-[#EEE7DC] hover:border-[#C06849]',
        'p-4 sm:p-5 transition-all duration-250 ease-out shadow-warm-sm hover:shadow-warm-md',
        featured && 'lg:col-span-2 lg:grid lg:grid-cols-12 lg:gap-8 lg:p-7 lg:items-center',
        className
      )}
    >
      {/* Project Media Visual */}
      <div className={cn(featured ? 'lg:col-span-7' : 'w-full')}>
        <Link
          href={`/work/${project.slug}`}
          tabIndex={-1}
          aria-hidden="true"
          className="block overflow-hidden rounded-xl"
        >
          <ProjectMedia
            src={project.coverImage}
            alt={`Preview of ${project.title}`}
            category={project.category}
            slug={project.slug}
            videoUrl={project.liveUrl}
            aspectRatio="aspect-[16/10]"
          />
        </Link>
      </div>

      {/* Project Content / Details */}
      <div
        className={cn(
          'flex flex-1 flex-col justify-between pt-4 sm:pt-5',
          featured && 'lg:col-span-5 lg:pt-0'
        )}
      >
        <div className="space-y-3">
          {/* Header row: Category & Status */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md font-mono text-[11px] font-semibold tracking-wider uppercase text-[#C06849] bg-[#C06849]/10 border border-[#C06849]/20">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C06849]" aria-hidden="true" />
                <span>{isAutomation ? 'AI Automation' : 'AI App'}</span>
              </span>

              {project.liveUrl && (
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-[#5F4B3B] font-medium">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#6F8A65] animate-pulse" />
                  <span>Live Demo</span>
                </span>
              )}
            </div>

            {project.timeline && (
              <span className="font-mono text-[11px] text-[#8D8275]">
                {project.timeline}
              </span>
            )}
          </div>

          {/* Project Title */}
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1C1B19] transition-colors duration-200 group-hover:text-[#080808]">
            <Link
              href={`/work/${project.slug}`}
              className="focus-visible:outline-none focus-visible:underline decoration-[#C06849] underline-offset-4"
            >
              {project.title}
            </Link>
          </h3>

          {/* Short Description */}
          <p className="text-sm text-[#8D8275] leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Technology Stack Tags */}
          <div className="pt-2 flex flex-wrap gap-1.5">
            {project.technologies.slice(0, featured ? 6 : 4).map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-md border border-transparent bg-[#D9CFC5] px-2.5 py-0.5 font-mono text-[11px] text-[#5F4B3B] transition-all duration-200 hover:bg-[#C06849] hover:text-[#F8F4EA]"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > (featured ? 6 : 4) && (
              <span className="font-mono text-[10px] text-[#8D8275] self-center pl-1">
                +{project.technologies.length - (featured ? 6 : 4)} more
              </span>
            )}
          </div>
        </div>

        {/* Footer Action Link */}
        <div className="mt-6 pt-4 border-t border-[#D9CFC5] flex items-center justify-between">
          <Link
            href={`/work/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#1C1B19] transition-colors duration-200 group-hover:text-[#C06849] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C06849] rounded-sm"
          >
            <span>{actionLabel || (isProduct ? 'View application' : 'Explore project')}</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-250 group-hover:translate-x-1 text-[#C06849]" />
          </Link>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8D8275] hover:text-[#C06849] transition-colors p-1"
              aria-label={`Open live system for ${project.title}`}
            >
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}
