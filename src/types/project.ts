export type ProjectCategory = 'automation' | 'app'

export type ProjectMetric = {
  label: string
  value: string
  description?: string
}

export type Project = {
  slug: string
  title: string
  description: string
  category: ProjectCategory
  featured?: boolean
  coverImage?: string
  videoUrl?: string
  liveUrl?: string
  githubUrl?: string
  technologies: string[]
  // Extended metadata for deep case studies & MDX rendering
  challenge?: string
  solution?: string
  architecture?: string[]
  metrics?: ProjectMetric[]
  timeline?: string
  role?: string
}
