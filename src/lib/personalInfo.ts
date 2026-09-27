export interface SocialLink {
  name: string
  label: string
  url: string
  icon: 'github' | 'linkedin' | 'resume' | 'email'
  isExternal?: boolean
}

export interface ContactConfig {
  eyebrow: string
  headingLine1: string
  headingLine2: string
  supportingText: string
  email: string
  ctaText: string
  secondaryLinks: SocialLink[]
}

export interface PersonalInfo {
  name: string
  role: string
  location: string
  eyebrow: string
  heading: string
  bio: string[]
  availability: {
    status: string
    eyebrow: string
    heading: string
    supportingText: string
  }
  socials: SocialLink[]
  contact: ContactConfig
}

export const personalInfo: PersonalInfo = {
  name: 'Vinayakk Suresh Patil',
  role: 'AI Automation & Systems Engineer',
  location: 'Global Remote / On-Site',
  eyebrow: 'ABOUT',
  heading: 'Building practical AI systems with a focus on automation and product development.',
  bio: [
    "I'm Vinayakk Suresh Patil, a developer focused on building AI-powered automation systems and web applications.",
    'I enjoy turning repetitive workflows and complex problems into practical software using AI, automation, APIs, and modern web technologies.',
  ],
  availability: {
    status: 'Available for Opportunities',
    eyebrow: 'AVAILABLE FOR OPPORTUNITIES',
    heading: 'Open to freelance projects and full-time opportunities.',
    supportingText:
      "I'm interested in working on AI automation, AI applications, intelligent workflows, and AI-powered products.",
  },
  socials: [
    {
      name: 'GitHub',
      label: 'GitHub ↗',
      url: 'https://github.com/vinayakk-patil',
      icon: 'github',
      isExternal: true,
    },
    {
      name: 'LinkedIn',
      label: 'LinkedIn ↗',
      url: 'https://linkedin.com/in/vinayakk-patil',
      icon: 'linkedin',
      isExternal: true,
    },
    {
      name: 'Resume',
      label: 'Resume ↗',
      url: '/resume.pdf',
      icon: 'resume',
      isExternal: true,
    },
  ],
  contact: {
    eyebrow: "LET'S BUILD SOMETHING",
    headingLine1: 'Have an idea worth automating?',
    headingLine2: "Let's build it.",
    supportingText:
      "Whether you have an automation workflow in mind or want to build an AI-powered application, I'd love to hear about it.",
    email: 'contact@vinayakk.dev',
    ctaText: 'Get In Touch →',
    secondaryLinks: [
      {
        name: 'GitHub',
        label: 'GitHub ↗',
        url: 'https://github.com/vinayakk-patil',
        icon: 'github',
        isExternal: true,
      },
      {
        name: 'LinkedIn',
        label: 'LinkedIn ↗',
        url: 'https://linkedin.com/in/vinayakk-patil',
        icon: 'linkedin',
        isExternal: true,
      },
      {
        name: 'Email',
        label: 'Email ↗',
        url: 'mailto:contact@vinayakk.dev',
        icon: 'email',
        isExternal: false,
      },
    ],
  },
}
