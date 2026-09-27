import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ProjectCard } from '@/components/projects/ProjectCard'
import { getAllProjects } from '@/lib/projects'

export const metadata: Metadata = {
  title: 'All Work & Systems | Vinayakk Suresh Patil',
  description:
    'Full catalog of AI automation pipelines, multi-agent frameworks, and intelligent applications built by Vinayakk Suresh Patil.',
}

export default function WorkPage() {
  const allProjects = getAllProjects()

  return (
    <div className="py-12 md:py-20 bg-[#F8F4EA] min-h-screen text-[#1C1B19]">
      <Container size="wide">
        {/* Back Link to Home */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-[#8D8275] hover:text-[#C06849] transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Header */}
        <SectionHeader
          eyebrow="PORTFOLIO INDEX"
          title="All Projects & Systems"
          description="Explore the complete collection of autonomous workflows, RAG engines, and AI applications."
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mt-10">
          {allProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </div>
  )
}
