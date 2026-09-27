'use client'

import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Sparkles, CheckCircle2, Layers, Cpu, ExternalLink } from 'lucide-react'
import type { Technology } from '@/lib/techStack'
import { BrandLogo } from '@/components/tech/BrandLogos'

export interface ElementDetailModalProps {
  tech: Technology | null
  onClose: () => void
}

export function ElementDetailModal({ tech, onClose }: ElementDetailModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (tech) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [tech, onClose])

  if (!tech) return null

  const atomicNumberStr = String(tech.number).padStart(2, '0')

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 select-none">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 16 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-lg rounded-2xl bg-[#141311] border border-white/20 p-6 sm:p-8 shadow-[0_25px_70px_rgba(0,0,0,0.85)] text-[#F8F4EA] z-10 overflow-hidden"
          style={{
            boxShadow: `0 20px 60px rgba(0,0,0,0.8), 0 0 40px ${tech.brandBg}`,
          }}
        >
          {/* Subtle Ambient Radial Highlight */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-24 w-60 h-60 rounded-full blur-[80px] opacity-25"
            style={{ backgroundColor: tech.brandColor }}
          />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 border border-white/10 text-[#A89F91] hover:text-[#F8F4EA] hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C06849]"
            aria-label="Close element inspector"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Row: Atomic Metadata */}
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-md bg-[#C06849]/15 border border-[#C06849]/30 text-[#C06849] uppercase tracking-wider">
              {tech.layerCode}
            </span>
            <span className="font-mono text-xs text-[#A89F91] uppercase tracking-widest">
              Element #{atomicNumberStr} {'//'} Period {tech.layerNumber}
            </span>
          </div>

          {/* Central Hero Tile Presentation */}
          <div className="flex items-start gap-5 p-4 rounded-xl bg-black/40 border border-white/10 mb-6">
            <div
              className="flex items-center justify-center w-16 h-16 rounded-xl bg-[#181715] border border-white/15 shrink-0 shadow-lg"
              style={{
                boxShadow: `0 0 24px ${tech.brandBg}`,
              }}
            >
              <BrandLogo name={tech.iconKey} className="w-9 h-9" color={tech.brandColor} />
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-baseline gap-2">
                <h3 className="text-2xl font-bold text-[#F8F4EA] tracking-tight truncate">
                  {tech.name}
                </h3>
                <span className="font-mono text-base font-extrabold text-[#C06849]">
                  [{tech.symbol}]
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#A89F91] mt-1 font-mono">
                {tech.description}
              </p>
            </div>
          </div>

          {/* Architecture Role & Capabilities */}
          <div className="space-y-4 mb-6">
            <div>
              <span className="block font-mono text-[11px] font-semibold uppercase tracking-wider text-[#C06849] mb-1.5">
                Operational Role in Production
              </span>
              <p className="text-sm text-[#D9CFC5] leading-relaxed">
                Deployed in production architectures for mission-critical execution. Seamlessly orchestrated with adjacent layers to maintain zero-regression pipelines, structured outputs, and fault-tolerant automation.
              </p>
            </div>

            {/* Tags / Categories */}
            {tech.tags && (
              <div>
                <span className="block font-mono text-[11px] font-semibold uppercase tracking-wider text-[#A89F91] mb-2">
                  Atomic Properties & Protocols
                </span>
                <div className="flex flex-wrap gap-2">
                  {tech.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-[#F8F4EA]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#8D8275]">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6F8A65] animate-pulse" />
              <span>Production Verified Standard</span>
            </span>

            <button
              onClick={onClose}
              className="text-[#C06849] hover:underline hover:text-[#D97757] font-semibold"
            >
              Dismiss [ESC]
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
