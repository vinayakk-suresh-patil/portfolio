import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Layers,
  CheckCircle2,
  Calendar,
  Sparkles,
} from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { ProjectMedia } from '@/components/projects/ProjectMedia'
import { getAllProjects, getProjectBySlug } from '@/lib/projects'

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const projects = getAllProjects()
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = getProjectBySlug(params.slug)
  if (!project) return { title: 'Project Not Found' }

  return {
    title: `${project.title} | Case Study`,
    description: project.description,
  }
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug)
  if (!project) notFound()

  const isAutomation = project.category === 'automation'

  return (
    <article className="py-12 md:py-20 bg-[#F8F4EA] min-h-screen text-text-primary">
      <Container size="default">
        {/* Navigation */}
        <div className="mb-8 flex items-center justify-between">
          <Link
            href="/#automation"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-[#8D8275] hover:text-[#C06849] transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to Portfolio</span>
          </Link>

          <Link
            href="/work"
            className="font-mono text-xs text-[#8D8275] hover:text-[#1C1B19] transition-colors"
          >
            View All Projects →
          </Link>
        </div>

        {/* Header Header */}
        <header className="space-y-4 max-w-4xl">
          <div className="flex flex-wrap items-center gap-2.5">
            <Badge variant={isAutomation ? 'accent' : 'default'} size="md" dot>
              {isAutomation ? 'AI Automation' : 'AI Application'}
            </Badge>

            {project.timeline && (
              <div className="flex items-center gap-1.5 text-xs font-mono text-[#8D8275] ml-2">
                <Calendar className="h-3.5 w-3.5" />
                <span>{project.timeline}</span>
              </div>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1C1B19] leading-tight">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-[#8D8275] leading-relaxed max-w-3xl">
            {project.description}
          </p>

          {/* Action Links */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            {project.liveUrl && (
              <Button
                href={project.liveUrl}
                external
                variant="primary"
                size="md"
                rightIcon={<ExternalLink className="h-4 w-4" />}
              >
                Launch Live System
              </Button>
            )}

            {project.githubUrl && (
              <Button
                href={project.githubUrl}
                external
                variant="secondary"
                size="md"
                leftIcon={<Github className="h-4 w-4" />}
              >
                Inspect Repository
              </Button>
            )}
          </div>
        </header>

        {/* Media Preview Showcase */}
        <div className="mt-10">
          <ProjectMedia
            src={project.coverImage}
            alt={project.title}
            category={project.category}
            slug={project.slug}
            aspectRatio="aspect-[16/9]"
            priority
          />
        </div>

        {/* Impact Metrics Banner */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 rounded-2xl bg-[#F2EDE3] border border-[#D9CFC5] shadow-warm-xs">
            {project.metrics.map((metric, i) => (
              <div
                key={i}
                className="flex flex-col sm:border-r last:border-r-0 border-[#D9CFC5] sm:pr-4"
              >
                <span className="text-3xl font-extrabold font-mono text-[#C06849]">
                  {metric.value}
                </span>
                <span className="text-sm font-semibold text-[#1C1B19] mt-1">
                  {metric.label}
                </span>
                {metric.description && (
                  <span className="text-xs text-[#8D8275] mt-0.5">
                    {metric.description}
                  </span>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Technologies Grid */}
        <div className="mt-8 py-5 border-y border-[#D9CFC5] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#8D8275] uppercase tracking-wider">
            <Layers className="h-4 w-4 text-[#C06849]" />
            <span>Tech Stack</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="tech" size="sm">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Narrative & Architecture Breakdown */}
        <div className="mt-12 space-y-10 max-w-3xl">
          {project.challenge && (
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#1C1B19] tracking-tight flex items-center gap-2">
                <span className="text-[#C06849] font-mono text-sm">01.</span>
                The Challenge
              </h2>
              <p className="text-base text-[#8D8275] leading-relaxed">
                {project.challenge}
              </p>
            </section>
          )}

          {project.solution && (
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#1C1B19] tracking-tight flex items-center gap-2">
                <span className="text-[#C06849] font-mono text-sm">02.</span>
                Architectural Solution
              </h2>
              <p className="text-base text-[#8D8275] leading-relaxed">
                {project.solution}
              </p>
            </section>
          )}

          {project.architecture && project.architecture.length > 0 && (
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-[#1C1B19] tracking-tight flex items-center gap-2">
                <span className="text-[#C06849] font-mono text-sm">03.</span>
                System Execution Architecture
              </h2>
              <div className="space-y-3">
                {project.architecture.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-xl bg-[#F2EDE3] border border-[#D9CFC5] hover:border-[#C06849] hover:bg-[#EEE7DC] transition-colors shadow-warm-xs"
                  >
                    <CheckCircle2 className="h-5 w-5 text-[#C06849] shrink-0 mt-0.5" />
                    <span className="text-sm text-[#1C1B19] leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </Container>
    </article>
  )
}
