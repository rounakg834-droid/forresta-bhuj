import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useGsapContext(
  scopeRef: React.RefObject<HTMLElement | null>,
  effect: (ctx: gsap.Context) => void,
  deps: unknown[] = []
) {
  useEffect(() => {
    if (!scopeRef.current) return

    // Check reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    let ctx: gsap.Context | null = null
    try {
      ctx = gsap.context(() => {
        effect(ctx!)
      }, scopeRef.current)
    } catch (err) {
      console.warn('GSAP animation skipped:', err)
    }

    return () => {
      try {
        ctx?.revert()
      } catch {}
    }
  }, deps)
}

export { gsap, ScrollTrigger }
