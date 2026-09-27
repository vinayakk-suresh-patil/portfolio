'use client'

import React, { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Play, ExternalLink, ArrowUpRight, Github } from 'lucide-react'
import { Project } from '@/types/project'
import Link from 'next/link'

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
  project: Project | null
}

function parseVideoEmbed(url?: string): { type: 'iframe' | 'video'; embedUrl?: string; videoSrc?: string } {
  if (!url) {
    return {
      type: 'video',
      videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    }
  }

  // YouTube match
  const ytMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/)
  if (ytMatch && ytMatch[1]) {
    return {
      type: 'iframe',
      embedUrl: `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1&rel=0&modestbranding=1`,
    }
  }

  // Vimeo match
  const vimeoMatch = url.match(/(?:vimeo\.com\/)(\d+)/)
  if (vimeoMatch && vimeoMatch[1]) {
    return {
      type: 'iframe',
      embedUrl: `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=1`,
    }
  }

  // Loom match
  const loomMatch = url.match(/(?:loom\.com\/share\/)([\w-]+)/)
  if (loomMatch && loomMatch[1]) {
    return {
      type: 'iframe',
      embedUrl: `https://www.loom.com/embed/${loomMatch[1]}?autoplay=1`,
    }
  }

  // Direct MP4 / WebM / fallback URL
  return {
    type: 'video',
    videoSrc: url,
  }
}

export function VideoModal({ isOpen, onClose, project }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  // Escape key listener to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown)
      // Prevent background body scroll
      document.body.style.overflow = 'hidden'
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!project) return null

  const videoData = parseVideoEmbed(project.videoUrl)

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Video explanation for ${project.title}`}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-10"
        >
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-5xl rounded-2xl bg-[#141312] border border-white/20 shadow-[0_30px_100px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col max-h-[92vh]"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 sm:px-7 py-4 border-b border-white/10 bg-[#1A1918]">
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#C06849]/20 text-[#C06849] border border-[#C06849]/30">
                  <Play className="h-3.5 w-3.5 fill-current" />
                </span>
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-[#F8F4EA] truncate max-w-[280px] sm:max-w-md lg:max-w-xl">
                    {project.title}
                  </h3>
                  <p className="font-mono text-[10px] text-[#A89F91] uppercase tracking-widest">
                    Video Explanation &amp; Walkthrough
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={onClose}
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-[#F8F4EA] hover:bg-[#C06849] hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C06849]"
                aria-label="Close video player"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Video Player Area */}
            <div className="relative w-full aspect-video bg-black flex items-center justify-center overflow-hidden">
              {videoData.type === 'iframe' && videoData.embedUrl ? (
                <iframe
                  src={videoData.embedUrl}
                  title={`${project.title} Video Walkthrough`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              ) : (
                <video
                  ref={videoRef}
                  src={videoData.videoSrc}
                  poster={project.coverImage}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-contain bg-black"
                >
                  Your browser does not support HTML5 video.
                </video>
              )}
            </div>

            {/* Modal Footer Quick Actions */}
            <div className="flex flex-wrap items-center justify-end gap-3 px-5 sm:px-7 py-3.5 bg-[#1A1918] border-t border-white/10 text-xs font-mono">
              <div className="flex items-center gap-4 ml-auto">
                <Link
                  href={`/work/${project.slug}`}
                  onClick={onClose}
                  className="inline-flex items-center gap-1.5 text-[#F8F4EA] hover:text-[#C06849] transition-colors"
                >
                  <span>Explore Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#A89F91] hover:text-[#C06849] transition-colors"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#A89F91] hover:text-[#C06849] transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Source</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
