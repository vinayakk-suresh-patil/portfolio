'use client'

import React from 'react'
import { StickyProjectStack } from '@/components/projects/StickyProjectStack'
import { getProjectsByCategory } from '@/lib/projects'

export function AIApps() {
  const appProjects = getProjectsByCategory('app')

  return (
    <StickyProjectStack
      sectionId="apps"
      theme="warm-sand"
      sectionLabel="02 // PRODUCTION APPLICATIONS & INTERFACES"
      sectionTitle="AI Applications"
      sectionCount="03 Applications"
      sectionDescription="Production-ready web applications that combine sophisticated LLM reasoning, real-time voice, and developer tooling into intuitive digital experiences."
      projects={appProjects}
      footerText="Selected applications & products — 2025 / 2026"
      footerLink={{
        label: 'Explore Technical Stack',
        href: '#tech-stack',
      }}
      stackCards={true}
    />
  )
}
