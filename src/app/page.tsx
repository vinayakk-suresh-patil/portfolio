import React from 'react'
import { Hero } from '@/components/sections/Hero'
import { AIAutomation } from '@/components/sections/AIAutomation'
import { AIApps } from '@/components/sections/AIApps'
import { TechStack } from '@/components/sections/TechStack'
import { About } from '@/components/sections/About'
import { Contact } from '@/components/sections/Contact'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F8F4EA] text-text-primary selection:bg-accent/20 selection:text-text-primary">
      {/* Hero Section */}
      <Hero />

      {/* Dedicated AI Automation Workflows Section */}
      <AIAutomation />

      {/* Dedicated AI-Powered Web Applications Section */}
      <AIApps />

      {/* Tech Stack Section */}
      <TechStack />

      {/* About & Availability Section */}
      <About />

      {/* Contact Section */}
      <Contact />
    </main>
  )
}
