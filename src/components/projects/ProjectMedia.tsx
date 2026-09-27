'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Network, Code2, Play, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface ProjectMediaProps {
  src?: string
  alt: string
  category?: 'automation' | 'app'
  slug?: string
  videoUrl?: string
  priority?: boolean
  aspectRatio?: string
  className?: string
}

export function ProjectMedia({
  src,
  alt,
  category = 'automation',
  slug,
  videoUrl,
  priority = false,
  aspectRatio = 'aspect-[16/10]',
  className,
}: ProjectMediaProps) {
  const [imageError, setImageError] = useState(false)

  // Category based decorative accent icons
  const CategoryIcon = category === 'automation' ? Network : Code2

  return (
    <div
      className={cn(
        'relative w-full overflow-hidden rounded-xl border border-[#D9CFC5] bg-[#F2EDE3] select-none group',
        aspectRatio,
        className
      )}
    >
      {/* Media Content */}
      {src && !imageError ? (
        <div className="relative h-full w-full">
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-center transition-transform duration-300 ease-out group-hover:scale-[1.02]"
            onError={() => setImageError(true)}
          />
        </div>
      ) : (
        /* Sophisticated Fallback / Future Preview Graphic */
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-b from-[#F2EDE3] to-[#F8F4EA] p-6">
          {/* Subtle warm grid pattern */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(to_right,#D9CFC5_1px,transparent_1px),linear-gradient(to_bottom,#D9CFC5_1px,transparent_1px)] bg-[size:28px_28px] opacity-35"
          />

          {/* Central Architectural Graphic Representation */}
          <div className="relative z-10 flex flex-col items-center text-center space-y-3">
            <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D9CFC5] bg-[#F8F4EA] text-[#C06849] shadow-warm-sm transition-transform duration-300 group-hover:scale-105">
              <CategoryIcon className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#C06849]" />
              </span>
            </div>

            <div className="font-mono text-xs text-[#8D8275] flex items-center gap-1.5 uppercase tracking-wider">
              <span>{category === 'automation' ? 'Autonomous Pipeline' : 'Intelligent App'}</span>
            </div>
          </div>
        </div>
      )}

      {/* Video Indicator if videoUrl exists */}
      {videoUrl && (
        <div className="absolute bottom-3 left-3 z-20 flex items-center gap-1.5 rounded-full border border-[#D9CFC5] bg-[#F8F4EA]/95 px-2.5 py-1 text-[11px] font-mono text-[#5F4B3B] backdrop-blur-md shadow-warm-sm">
          <Play className="h-3 w-3 fill-[#C06849] text-[#C06849]" />
          <span>Interactive Demo</span>
        </div>
      )}

      {/* Subtle Corner Tech Stamp */}
      <div className="absolute top-3 right-3 z-20">
        <span className="inline-flex items-center gap-1 rounded-md border border-[#D9CFC5] bg-[#F8F4EA]/90 px-2 py-0.5 text-[10px] font-mono uppercase text-[#8D8275] backdrop-blur-sm shadow-warm-sm">
          <Sparkles className="h-2.5 w-2.5 text-[#C06849]" />
          <span>Verified Architecture</span>
        </span>
      </div>
    </div>
  )
}
