'use client'

import React from 'react'
import { StickyProjectStack } from '@/components/projects/StickyProjectStack'
import { getProjectsByCategory } from '@/lib/projects'

export function AIAutomation() {
  const automationProjects = getProjectsByCategory('automation')

  return (
    <StickyProjectStack
      sectionId="automation"
      theme="dark-obsidian"
      sectionLabel="01 // WORKFLOW ORCHESTRATION & AGENTS"
      sectionTitle="AI Automation"
      sectionCount="04 Systems"
      sectionDescription="Intelligent, self-healing multi-agent architectures and workflow pipelines that turn complex business operations into deterministic autonomous systems."
      projects={automationProjects}
      footerText="Selected automations & systems — 2025 / 2026"
      footerLink={{
        label: 'Explore AI Applications',
        href: '#apps',
      }}
      stackCards={true}
    />
  )
}
