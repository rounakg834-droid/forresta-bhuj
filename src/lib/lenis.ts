import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

let lenisInstance: Lenis | null = null

export function getLenis(): Lenis | null {
  return lenisInstance
}

export function initLenis(): () => void {
  if (typeof window === 'undefined') return () => {}

  // Respect user's reduced motion preference
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return () => {}
  }

  // Ultra-smooth, natural inertia on desktop wheel while keeping mobile touch 100% native
  const lenis = new Lenis({
    duration: 1.15,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    syncTouch: false, // Zero touch latency: preserve native-feeling touch scrolling on mobile
    touchMultiplier: 1.0,
  })

  lenisInstance = lenis

  // Synchronize Lenis scroll position with GSAP ScrollTrigger
  lenis.on('scroll', ScrollTrigger.update)

  // Tie Lenis RAF to GSAP ticker so both run in a unified, stutter-free render loop
  const tickerHandler = (time: number) => {
    lenis.raf(time * 1000)
  }
  gsap.ticker.add(tickerHandler)
  gsap.ticker.lagSmoothing(0)

  // Intercept anchor clicks for ultra-smooth section transitions
  const handleAnchorClick = (e: MouseEvent) => {
    const link = (e.target as Element)?.closest<HTMLAnchorElement>('a[href^="#"]')
    if (!link) return
    const href = link.getAttribute('href')
    if (!href || href === '#' || href === '#main') return

    const id = href.slice(1)
    const target = document.getElementById(id)
    if (target) {
      e.preventDefault()
      lenis.scrollTo(target, {
        offset: -64,
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      })
      window.history.pushState(null, '', href)
    }
  }

  document.addEventListener('click', handleAnchorClick, { capture: false })

  return () => {
    document.removeEventListener('click', handleAnchorClick)
    gsap.ticker.remove(tickerHandler)
    lenis.destroy()
    lenisInstance = null
  }
}
