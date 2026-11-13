import { useEffect, useState } from 'react'
import { cn } from '../lib/cn'

interface LoadingScreenProps {
  onComplete?: () => void
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [visible, setVisible] = useState(true)
  const [mounted, setMounted] = useState(true)

  useEffect(() => {
    // If reduced motion is requested, immediately remove
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(false)
      setMounted(false)
      onComplete?.()
      return
    }

    // Fast, crisp display (800ms)
    const fadeTimer = setTimeout(() => {
      setVisible(false)
      onComplete?.()
    }, 800)

    // Unconditionally unmount from DOM after fade finishes (1200ms)
    const unmountTimer = setTimeout(() => {
      setMounted(false)
    }, 1200)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(unmountTimer)
    }
  }, [onComplete])

  if (!mounted) return null

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading Forresta Bhuj experience"
      className={cn(
        'fixed inset-0 z-50 flex flex-col items-center justify-center bg-forest-deep px-6 text-cream select-none pointer-events-none transition-all duration-400 ease-out',
        visible ? 'opacity-100 visible' : 'opacity-0 invisible'
      )}
    >
      {/* Ambient Gold Radial Glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(185,155,101,0.18)_0%,transparent_65%)]"
      />

      {/* Animated Botanical Emblem */}
      <div className="relative mb-5 transform transition-transform duration-700 scale-100">
        <div className="size-16 sm:size-20 rounded-full border border-gold/40 grid place-items-center shadow-gold bg-forest-card/60 backdrop-blur-md">
          <svg
            className="size-8 sm:size-10 text-gold animate-pulse-subtle"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
            <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
          </svg>
        </div>
      </div>

      {/* Brand Name */}
      <div className="text-center overflow-hidden">
        <h1 className="font-serif text-2xl sm:text-4xl font-light tracking-[0.26em] text-cream uppercase animate-pulse-subtle">
          FORRESTA
        </h1>
        <p className="mt-1 font-sans text-[0.62rem] sm:text-[0.7rem] font-bold tracking-[0.38em] text-gold uppercase">
          BHUJ • GUJARAT
        </p>
      </div>

      {/* Minimalist Gold Indicator Line */}
      <div className="mt-6 w-36 overflow-hidden rounded-full h-0.5 bg-forest-border">
        <div className="h-full w-full bg-gradient-to-r from-transparent via-gold to-transparent animate-pulse" />
      </div>
    </div>
  )
}
