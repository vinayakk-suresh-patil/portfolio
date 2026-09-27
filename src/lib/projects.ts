import { Project, ProjectCategory } from '@/types/project'

export const projects: Project[] = [
  {
    slug: 'autonomous-triage-agent',
    title: 'Autonomous Multi-Agent Ops & Support Orchestrator',
    description:
      'Autonomous multi-agent system executing customer ticket classification, database verification, dynamic API workflows, and human-in-the-loop escalation.',
    category: 'automation',
    featured: true,
    coverImage: '/projects/n8n-automation.svg',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    githubUrl: 'https://github.com/vinayakk-patil/autonomous-triage-agent',
    liveUrl: 'https://agent-demo.vinayakk.dev',
    technologies: ['n8n', 'LangGraph', 'Next.js', 'TypeScript', 'FastAPI', 'PostgreSQL', 'OpenAI Tool Calling', 'Redis'],
    timeline: '3 months',
    role: 'Lead AI Engineer',
    challenge:
      'Support teams spent over 40% of their day manually parsing incoming unstructured requests, running duplicate API queries across internal tools, and writing repetitive responses.',
    solution:
      'Engineered an event-driven multi-agent cluster orchestrated with n8n and LangGraph that analyzes sentiment, extracts entities, executes verification tools against internal ERP/CRM databases, and resolves 68% of standard issues autonomously.',
    architecture: [
      'Webhook ingestion pipeline validating HMAC signatures from support channels',
      'n8n Orchestrator routing intents to specialized worker agents (Billing, Tech, Account)',
      'Deterministic tool layer running sandboxed SQL and REST API mutations with rollback capabilities',
      'Real-time streaming dashboard with Human-in-the-Loop approval for high-risk actions',
    ],
    metrics: [
      { label: 'Auto-Resolution', value: '68%', description: 'Tickets solved without human intervention' },
      { label: 'Median Latency', value: '< 2.4s', description: 'End-to-end response & action time' },
      { label: 'Cost Reduction', value: '74%', description: 'Decrease in tier-1 support overhead' },
    ],
  },
  {
    slug: 'ai-customer-support-automation',
    title: 'AI Customer Support & Ticket Automation',
    description:
      'Automates customer email and ticket classification, intelligent routing, account database verification, and human-in-the-loop response drafting.',
    category: 'automation',
    featured: false,
    coverImage: '/projects/n8n-automation.svg',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    liveUrl: 'https://support-demo.vinayakk.dev',
    githubUrl: 'https://github.com/vinayakk-patil/ai-customer-support-automation',
    technologies: ['n8n', 'OpenAI', 'Gmail API', 'PostgreSQL', 'APIs', 'Slack Webhooks'],
    timeline: '1.5 months',
    role: 'AI Automation Engineer',
    challenge:
      'Customer support teams were overwhelmed with repetitive inbound tickets, manual database lookups across disparate tools, and inconsistent response turnaround times.',
    solution:
      'Engineered an automated n8n pipeline combining OpenAI GPT-4o function calling with PostgreSQL lookups, validating account status, auto-drafting replies, and escalating high-priority tickets to Slack.',
    architecture: [
      'Gmail and Zendesk webhook triggers parsing incoming ticket metadata',
      'n8n LLM reasoning node extracting customer intent, sentiment, and account identifiers',
      'PostgreSQL verification node checking customer subscription status and order records',
      'Automated response dispatcher with Slack alerts for escalation review',
    ],
    metrics: [
      { label: 'Triage Latency', value: '< 15s', description: 'From receipt to auto-classified action' },
      { label: 'Manual Effort Saved', value: '65%', description: 'Repetitive tier-1 inquiries handled' },
      { label: 'Accuracy', value: '98.5%', description: 'Deterministic routing compliance' },
    ],
  },
  {
    slug: 'enterprise-rag-intelligence',
    title: 'Enterprise Multimodal Knowledge Synthesis Pipeline',
    description:
      'High-throughput RAG engine combining semantic vector search, hybrid re-ranking, and automated document ingestion across heterogeneous corporate silos.',
    category: 'automation',
    featured: true,
    coverImage: '/projects/n8n-automation.svg',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
    githubUrl: 'https://github.com/vinayakk-patil/enterprise-rag-intelligence',
    liveUrl: 'https://rag-demo.vinayakk.dev',
    technologies: ['n8n', 'Python', 'Pinecone', 'Next.js', 'LlamaIndex', 'Cohere Rerank', 'Docker', 'AWS S3'],
    timeline: '2 months',
    role: 'System Architect',
    challenge:
      'Internal knowledge bases spanning 50,000+ PDFs, Notion docs, and spreadsheet records suffered from hallucinations, stale data, and poor retrieval accuracy with naive embeddings.',
    solution:
      'Built a production RAG pipeline utilizing n8n automated sync pipelines, hierarchical document chunking, late interaction re-ranking, and scheduled OCR extraction.',
    architecture: [
      'n8n webhook triggers and document parsing worker queue for heterogeneous sources',
      'Parent-child chunking strategy maintaining document context alongside granular vector embeddings',
      'Hybrid dense-sparse retrieval combining BM25 and OpenAI text-embedding-3-large',
      'Fact-checking evaluator guardrails verifying context alignment before response delivery',
    ],
    metrics: [
      { label: 'Retrieval Accuracy', value: '94.2%', description: 'Top-3 hit rate on domain benchmark' },
      { label: 'Ingestion Speed', value: '1.2k docs/min', description: 'Distributed batch processing' },
      { label: 'Hallucination Rate', value: '< 1.1%', description: 'Measured across 10,000 QA pairs' },
    ],
  },
  {
    slug: 'prompt-to-workflow-engine',
    title: 'Prompt-to-Workflow Autonomous API Synthesizer',
    description:
      'Developer tool that translates natural language system requirements into executable, self-healing integration pipelines across Stripe, Slack, HubSpot, and custom REST APIs.',
    category: 'automation',
    featured: false,
    coverImage: '/projects/n8n-automation.svg',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    githubUrl: 'https://github.com/vinayakk-patil/prompt-to-workflow',
    liveUrl: 'https://flow.vinayakk.dev',
    technologies: ['n8n', 'Next.js', 'TypeScript', 'Node.js', 'Zod', 'Tailwind CSS', 'OpenAPI Schema Parser'],
    timeline: '1.5 months',
    role: 'Creator & Developer',
    challenge:
      'Writing glue code between multiple third-party APIs with pagination, rate limiting, and webhook validation takes days of boilerplate development for every new integration.',
    solution:
      'Created a visual workflow compiler that consumes OpenAPI specs, generates validated TypeScript integration pipelines, and embeds self-healing n8n error recovery routines.',
    architecture: [
      'OpenAPI 3.0 specification parser constructing strongly typed client graph',
      'LLM planning module translating multi-system goals into sequential n8n tasks',
      'Code generator producing type-safe TypeScript functions validated against Zod schemas',
      'Interactive canvas UI built with React Flow and Tailwind CSS',
    ],
    metrics: [
      { label: 'Boilerplate Reduction', value: '85%', description: 'Less manual integration code written' },
      { label: 'Schema Accuracy', value: '99.4%', description: 'Type-checked against OpenAPI definitions' },
    ],
  },
  {
    slug: 'ai-resume-analyzer',
    title: 'AI Resume & ATS Benchmark Analyzer',
    description:
      'Analyze resumes and compare them against target job descriptions using AI to extract skill gaps, score keyword alignment, and generate tailored bullet rewrites.',
    category: 'app',
    featured: false,
    coverImage: '/projects/ai-app-cover.png',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    liveUrl: 'https://resume-ai.vinayakk.dev',
    githubUrl: 'https://github.com/vinayakk-patil/ai-resume-analyzer',
    technologies: ['Next.js', 'TypeScript', 'OpenAI', 'Supabase', 'Tailwind CSS', 'PostgreSQL'],
    timeline: '1 month',
    role: 'Full Stack Engineer & Creator',
    challenge:
      'Job candidates struggle to pass modern Applicant Tracking Systems (ATS) due to keyword mismatches, poor quantification, and opaque screening criteria.',
    solution:
      'Engineered an interactive Next.js application that parses PDF resumes, semantically matches candidate profiles against target job descriptions via OpenAI embeddings, and provides instant line-by-line optimization feedback.',
    architecture: [
      'PDF text and structural parser extracting sections, dates, and bullet points',
      'Semantic embedding comparator scoring alignment against job requirement criteria',
      'LLM reasoning pipeline highlighting missing technical skills and proposing quantified revisions',
      'Supabase storage and authentication layer maintaining user analysis history securely',
    ],
    metrics: [
      { label: 'ATS Match Lift', value: '+35%', description: 'Average score improvement after AI rewrite' },
      { label: 'Analysis Speed', value: '< 4.5s', description: 'Complete PDF parse and scoring turnaround' },
    ],
  },
  {
    slug: 'agentic-code-reviewer',
    title: 'Agentic PR Reviewer & Automated Patch Synthesizer',
    description:
      'GitHub bot powered by LLMs and AST analysis that automatically reviews code changes, tests for security vulnerabilities, and generates ready-to-merge patches.',
    category: 'app',
    featured: true,
    coverImage: '/projects/ai-app-cover.png',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    githubUrl: 'https://github.com/vinayakk-patil/agentic-code-reviewer',
    liveUrl: 'https://codereviewer.vinayakk.dev',
    technologies: ['Next.js 14', 'TypeScript', 'Tree-sitter', 'Anthropic Claude API', 'Tailwind CSS', 'Vercel KV'],
    timeline: '6 weeks',
    role: 'Full Stack AI Engineer',
    challenge:
      'Engineering teams struggled with code review turnaround times, missing subtle edge cases, anti-patterns, and API version deprecations in massive multi-file PRs.',
    solution:
      'Constructed a specialized review agent utilizing Tree-sitter for AST syntax tree navigation paired with Claude 3.5 Sonnet to provide contextual code suggestions and automated fix branches.',
    architecture: [
      'GitHub Webhook listener capturing push and PR opened events with diff parsing',
      'Static syntax tree extraction isolating altered functions and their call chains',
      'LLM reasoning chain with specialized prompts for security, performance, and readability',
      'Automated GitHub comment thread poster with inline commit suggestions and patch branches',
    ],
    metrics: [
      { label: 'Review Turnaround', value: '45s', description: 'Average review time per PR' },
      { label: 'Acceptance Rate', value: '82%', description: 'Generated suggestions merged by engineers' },
      { label: 'Bug Detection', value: '3x', description: 'Edge-case defect catch rate' },
    ],
  },
  {
    slug: 'voice-ai-dispatcher',
    title: 'Real-Time Voice AI Logistics & Dispatch Assistant',
    description:
      'Ultra-low-latency voice agent conducting conversational logistics check-ins, automated route status updates, and emergency routing workflows.',
    category: 'app',
    featured: false,
    coverImage: '/projects/ai-app-cover.png',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    githubUrl: 'https://github.com/vinayakk-patil/voice-ai-dispatcher',
    liveUrl: 'https://voice-demo.vinayakk.dev',
    technologies: ['WebSockets', 'LiveKit', 'Next.js', 'FastAPI', 'Deepgram Nova-2', 'Cartesia Sonic'],
    timeline: '2 months',
    role: 'AI Systems Engineer',
    challenge:
      'Truck drivers and logistics operators needed hands-free status reporting while driving, but existing IVR systems were clunky and text bots required manual phone interaction.',
    solution:
      'Engineered an ultra-low latency (<500ms TTFB) full-duplex voice interface capable of natural interruption, phonetic accuracy for serial numbers, and live CRM status sync.',
    architecture: [
      'WebRTC audio streaming session managed through LiveKit Cloud',
      'Streaming ASR via Deepgram Nova-2 with custom logistics keyword boosting',
      'Low-latency LLM agent maintaining conversational state and executing database mutations',
      'High-speed streaming TTS with Cartesia Sonic generating expressive natural audio',
    ],
    metrics: [
      { label: 'Turnaround Latency', value: '420ms', description: 'Average voice-to-voice response delay' },
      { label: 'Driver Adoption', value: '91%', description: 'Active weekly driver compliance' },
    ],
  },
]

export function getAllProjects(): Project[] {
  return projects
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured)
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return projects.filter((project) => project.category === category)
}
