'use client'

import React, { useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import { Github, Play, Sparkles, ExternalLink, ArrowUpRight } from 'lucide-react'
import { Project } from '@/types/project'
import { cn } from '@/lib/utils'
import { VideoModal } from '@/components/ui/VideoModal'

export type SectionTheme = 'dark-obsidian' | 'warm-sand'

export interface StickyProjectStackProps {
  sectionId: string
  theme: SectionTheme
  sectionLabel: string
  sectionTitle: string
  sectionCount: string
  sectionDescription?: string
  projects: Project[]
  footerText: string
  footerLink: {
    label: string
    href: string
  }
  stackCards?: boolean
}

interface ProjectCardVisualProps {
  project: Project
  index: number
  theme: SectionTheme
  onPlayVideo: (project: Project) => void
  imageScale?: MotionValue<number>
}

function ProjectCardVisual({ project, index, theme, onPlayVideo, imageScale }: ProjectCardVisualProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [imgError, setImgError] = useState(false)

  const isDark = theme === 'dark-obsidian'
  const projectNumberStr = String(index + 1).padStart(2, '0')

  return (
    <div className="relative flex items-start justify-center w-full">
      <div
        ref={cardRef}
        role="button"
        tabIndex={0}
        onClick={() => onPlayVideo(project)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            onPlayVideo(project)
          }
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={cn(
          'relative w-full',
          'h-[50vw] sm:h-[360px] lg:h-[440px] xl:h-[480px]',
          'overflow-hidden rounded-2xl transition-all duration-300 ease-out group cursor-pointer select-none',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C06849]',
          isDark
            ? 'bg-[#181715] border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.55)] hover:border-[#C06849]/60'
            : 'bg-[#F8F4EA] border border-[#D5C8B8] shadow-[0_20px_50px_rgba(95,75,59,0.12)] hover:border-[#C06849]/60'
        )}
        aria-label={`Play video walkthrough for ${project.title}`}
      >
        {/* Inner Animated Image Container with Scroll Parallax */}
        <motion.div
          className="w-full h-full"
          style={{ scale: imageScale || 1 }}
        >
          {!imgError && project.coverImage ? (
            <img
              src={project.coverImage}
              alt={`${project.title} video cover`}
              onError={() => setImgError(true)}
              style={{
                transform: isHovered ? 'scale(1.02)' : 'none',
                transition: 'transform 0.4s cubic-bezier(0.2, 0.65, 0.2, 1)',
              }}
              className="w-full h-full object-cover object-center select-none pointer-events-none"
            />
          ) : (
            /* Fallback decorative technical blueprint */
            <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-[#1F1E1B] to-[#121110] text-[#D9CFC5]">
              <Sparkles className="w-12 h-12 text-[#C06849] mb-4" />
              <p className="font-mono text-xs uppercase tracking-widest text-center">
                {project.title}
              </p>
            </div>
          )}
        </motion.div>

        {/* Dark Vignette Overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-65"
        />

        {/* Floating Image Label (Bottom-Left) */}
        <div className="absolute left-4 sm:left-6 bottom-4 sm:bottom-6 z-10 flex items-center gap-2.5 pointer-events-none">
          <span
            className={cn(
              'inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-[0.16em] backdrop-blur-md shadow-lg transition-transform duration-300 group-hover:scale-105',
              isDark
                ? 'bg-black/70 text-[#F8F4EA] border border-white/20'
                : 'bg-[#1C1B19]/85 text-[#F8F4EA] border border-white/20'
            )}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C06849] animate-pulse" aria-hidden="true" />
            <span className="truncate max-w-[180px] sm:max-w-[240px] md:max-w-[280px]">{project.title}</span>
            <span className="opacity-50">/</span>
            <span className="opacity-90">{projectNumberStr}</span>
          </span>
        </div>

        {/* Playing Icon (Right Bottom Corner) */}
        <div className="absolute right-4 sm:right-6 bottom-4 sm:bottom-6 z-20 flex items-center justify-center">
          <div className="relative flex items-center justify-center">
            {/* Subtle pulse ring on card hover */}
            <span
              aria-hidden="true"
              className="absolute -inset-2 rounded-full bg-[#C06849]/35 opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300 pointer-events-none"
            />

            {/* Play Button Circle in Bottom-Right Corner */}
            <div
              className={cn(
                'flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full backdrop-blur-md transition-all duration-300 shadow-xl',
                isDark
                  ? 'bg-black/75 border border-white/30 text-white group-hover:bg-[#C06849] group-hover:border-[#C06849] group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(192,104,73,0.55)]'
                  : 'bg-[#1C1B19]/85 border border-white/30 text-white group-hover:bg-[#C06849] group-hover:border-[#C06849] group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(192,104,73,0.45)]'
              )}
              aria-hidden="true"
            >
              <Play className="h-4 w-4 sm:h-5 sm:w-5 fill-current translate-x-0.5 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

interface ProjectRowProps {
  project: Project
  i: number
  total: number
  theme: SectionTheme
  progress: MotionValue<number>
  range: [number, number]
  targetScale: number
  onPlayVideo: (project: Project) => void
}

function ProjectRow({
  project,
  i,
  total,
  theme,
  progress,
  range,
  targetScale,
  onPlayVideo,
}: ProjectRowProps) {
  const itemContainer = useRef<HTMLDivElement>(null)
  const isDark = theme === 'dark-obsidian'
  const projectNumberStr = String(i + 1).padStart(2, '0')

  const { scrollYProgress: cardProgress } = useScroll({
    target: itemContainer,
    offset: ['start end', 'start start'],
  })

  const imageScale = useTransform(cardProgress, [0, 1], [1.15, 1])
  const scale = useTransform(progress, range, [1, targetScale])

  return (
    <div
      ref={itemContainer}
      className="min-h-screen flex items-center justify-center sticky top-0 pt-16 sm:pt-20 pb-4"
    >
      <motion.article
        style={{
          scale,
          zIndex: 10 + i,
        }}
        className={cn(
          'relative w-full max-w-7xl mx-auto origin-top transition-colors',
          'grid grid-cols-1 lg:grid-cols-[minmax(300px,0.8fr)_minmax(460px,1.2fr)] gap-8 lg:gap-12 items-center',
          'py-8 sm:pt-10 lg:py-12 px-2 sm:px-4',
          i !== 0 && (isDark ? 'border-t border-white/10' : 'border-t border-[#5F4B3B]/15'),
          isDark ? 'bg-[#121110]' : 'bg-[#EAE0D0]'
        )}
      >
        {/* PROJECT INFO (LEFT COLUMN) */}
        <div className="relative self-start h-max pt-2 lg:pt-4 z-10 flex flex-col items-start">
          {/* Monumental Editorial Project Number */}
          <span
            className={cn(
              'block font-sans text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-extralight tracking-[-0.08em] leading-none mb-6 sm:mb-8 lg:mb-10 select-none',
              isDark ? 'text-white/[0.08]' : 'text-[#5F4B3B]/[0.14]'
            )}
          >
            {projectNumberStr}
          </span>

          {/* Project Title */}
          <h3
            className={cn(
              'text-2xl sm:text-3xl lg:text-4xl xl:text-[40px] font-semibold tracking-[-0.04em] leading-[1.15] mb-8 sm:mb-10 lg:mb-12 max-w-lg',
              isDark ? 'text-[#F8F4EA]' : 'text-[#1C1B19]'
            )}
          >
            <Link
              href={`/work/${project.slug}`}
              className="hover:text-[#C06849] transition-colors duration-200 focus-visible:outline-none focus-visible:underline"
            >
              {project.title}
            </Link>
          </h3>

          {/* Interactive Action Links */}
          <div className="flex flex-wrap items-center gap-x-6 sm:gap-x-8 gap-y-3.5 pt-2">
            <Link
              href={`/work/${project.slug}`}
              className={cn(
                'group inline-flex items-center gap-2 pb-1.5 text-[11px] font-mono font-semibold uppercase tracking-[0.16em] transition-all duration-300 border-b',
                isDark
                  ? 'text-[#F8F4EA] border-white/40 hover:border-[#C06849] hover:text-[#C06849] hover:gap-3.5'
                  : 'text-[#1C1B19] border-[#1C1B19]/40 hover:border-[#C06849] hover:text-[#C06849] hover:gap-3.5'
              )}
            >
              <span>Explore Case Study</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'group inline-flex items-center gap-2 pb-1.5 text-[11px] font-mono font-medium uppercase tracking-[0.16em] transition-all duration-300 border-b',
                  isDark
                    ? 'text-[#A89F91] border-transparent hover:border-[#C06849] hover:text-[#C06849]'
                    : 'text-[#7D7063] border-transparent hover:border-[#C06849] hover:text-[#C06849]'
                )}
              >
                <ExternalLink className="w-3.5 h-3.5 text-[#C06849]" />
                <span>Live Demo</span>
                <span className="text-xs">↗</span>
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'group inline-flex items-center gap-2 pb-1.5 text-[11px] font-mono font-medium uppercase tracking-[0.16em] transition-all duration-300 border-b',
                  isDark
                    ? 'text-[#A89F91] border-transparent hover:border-[#C06849] hover:text-[#C06849]'
                    : 'text-[#7D7063] border-transparent hover:border-[#C06849] hover:text-[#C06849]'
                )}
                aria-label={`Source code for ${project.title}`}
              >
                <Github className="w-3.5 h-3.5" />
                <span>Source</span>
                <span className="text-xs">↗</span>
              </a>
            )}
          </div>
        </div>

        {/* PROJECT VISUAL (RIGHT COLUMN) */}
        <ProjectCardVisual
          project={project}
          index={i}
          theme={theme}
          onPlayVideo={onPlayVideo}
          imageScale={imageScale}
        />
      </motion.article>
    </div>
  )
}

export function StickyProjectStack({
  sectionId,
  theme,
  sectionLabel,
  sectionTitle,
  sectionCount,
  sectionDescription,
  projects,
  footerText,
  footerLink,
}: StickyProjectStackProps) {
  const isDark = theme === 'dark-obsidian'
  const [activeVideoProject, setActiveVideoProject] = useState<Project | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  return (
    <>
      <section
        id={sectionId}
        className={cn(
          'relative py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-12 xl:px-16 scroll-mt-12 transition-colors duration-500',
          isDark ? 'bg-[#121110] text-[#F8F4EA]' : 'bg-[#EAE0D0] text-[#1C1B19]'
        )}
      >
        {/* Background Decorative Atmosphere */}
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className={cn(
              'pointer-events-none absolute inset-0 opacity-40',
              isDark
                ? 'bg-[radial-gradient(circle_at_50%_0%,rgba(192,104,73,0.12),transparent_70%)]'
                : 'bg-[radial-gradient(circle_at_50%_0%,rgba(192,104,73,0.08),transparent_70%)]'
            )}
          />
          <div
            className={cn(
              'pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-25',
              isDark
                ? 'bg-[radial-gradient(rgba(217,207,197,0.15)_1px,transparent_1px)] [background-size:28px_28px]'
                : 'bg-[radial-gradient(rgba(95,75,59,0.2)_1px,transparent_1px)] [background-size:28px_28px]'
            )}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* SECTION HEADER */}
          <header
            className={cn(
              'relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 mb-8 sm:mb-12',
              isDark ? 'border-b border-white/15' : 'border-b border-[#5F4B3B]/20'
            )}
          >
            <div>
              <span
                className={cn(
                  'block font-mono text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] mb-3',
                  isDark ? 'text-[#C06849]' : 'text-[#5F4B3B]'
                )}
              >
                {sectionLabel}
              </span>
              <h2
                className={cn(
                  'text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[96px] font-semibold tracking-[-0.05em] leading-[0.9]',
                  isDark ? 'text-[#F8F4EA]' : 'text-[#1C1B19]'
                )}
              >
                {sectionTitle}
              </h2>
              {sectionDescription && (
                <p
                  className={cn(
                    'mt-4 text-sm sm:text-base max-w-xl font-normal leading-relaxed',
                    isDark ? 'text-[#C9BFB5]' : 'text-[#5F4B3B]'
                  )}
                >
                  {sectionDescription}
                </p>
              )}
            </div>

            <div className="flex md:flex-col items-baseline md:items-end justify-between gap-2 shrink-0">
              <span
                className={cn(
                  'font-mono text-xs sm:text-sm font-semibold tracking-[0.16em] uppercase',
                  isDark ? 'text-[#A89F91]' : 'text-[#7D7063]'
                )}
              >
                {sectionCount}
              </span>
            </div>
          </header>

          {/* PROJECT STACK (Framer Motion Stacking Pattern with Scroll Parallax) */}
          <div ref={containerRef} className="relative">
            {projects.map((project, i) => {
              const targetScale = 1 - (projects.length - 1 - i) * 0.04
              return (
                <ProjectRow
                  key={project.slug}
                  project={project}
                  i={i}
                  total={projects.length}
                  theme={theme}
                  progress={scrollYProgress}
                  range={[i * (1 / projects.length), 1]}
                  targetScale={targetScale}
                  onPlayVideo={(p) => setActiveVideoProject(p)}
                />
              )
            })}
          </div>

          {/* SECTION FOOTER */}
          <footer
            className={cn(
              'flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-12 sm:pt-16 border-t',
              isDark ? 'border-white/15' : 'border-[#5F4B3B]/20'
            )}
          >
            <p
              className={cn(
                'font-mono text-xs uppercase tracking-[0.14em]',
                isDark ? 'text-[#A89F91]' : 'text-[#7D7063]'
              )}
            >
              {footerText}
            </p>

            <a
              href={footerLink.href}
              className={cn(
                'group inline-flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-300 hover:gap-5',
                isDark ? 'text-[#F8F4EA] hover:text-[#C06849]' : 'text-[#1C1B19] hover:text-[#C06849]'
              )}
            >
              <span>{footerLink.label}</span>
              <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </a>
          </footer>
        </div>
      </section>

      {/* POPUP VIDEO MODAL */}
      <VideoModal
        isOpen={!!activeVideoProject}
        onClose={() => setActiveVideoProject(null)}
        project={activeVideoProject}
      />
    </>
  )
}
