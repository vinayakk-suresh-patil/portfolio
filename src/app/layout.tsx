import type { Metadata, Viewport } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import '@/styles/globals.css'

export const viewport: Viewport = {
  themeColor: '#F8F4EA',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://vinayakk.dev'),
  title: {
    default: 'Vinayakk Suresh Patil | AI Automation & Systems Engineer',
    template: '%s | Vinayakk Suresh Patil',
  },
  description:
    'I build AI-powered systems that automate work and solve real-world problems. Specialized in AI automation, autonomous agents, LLM integrations, and modern web applications.',
  keywords: [
    'AI Automation',
    'AI Agents',
    'Autonomous Systems',
    'LLM Integrations',
    'Workflow Automation',
    'Next.js',
    'TypeScript',
    'Vinayakk Suresh Patil',
  ],
  authors: [{ name: 'Vinayakk Suresh Patil' }],
  creator: 'Vinayakk Suresh Patil',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${GeistSans.variable} ${GeistMono.variable}`}
      style={{ backgroundColor: '#F8F4EA', color: '#1C1B19' }}
    >
      <body
        className="font-sans min-h-screen flex flex-col bg-[#F8F4EA] text-[#1C1B19] antialiased selection:bg-[#C06849]/20 selection:text-[#1C1B19]"
        style={{ backgroundColor: '#F8F4EA', color: '#1C1B19' }}
      >
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
