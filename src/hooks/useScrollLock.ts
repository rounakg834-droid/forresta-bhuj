import { useEffect } from 'react'
import { getLenis } from '../lib/lenis'

export function useScrollLock(locked: boolean) {
  useEffect(() => {
    if (!locked) {
      return
    }

    const lenis = getLenis()
    lenis?.stop()

    const root = document.documentElement
    const { body } = document
    const scrollbarWidth = window.innerWidth - root.clientWidth
    const previousOverflow = root.style.overflow
    const previousPadding = body.style.paddingRight

    root.style.overflow = 'hidden'
    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${scrollbarWidth}px`
    }

    return () => {
      root.style.overflow = previousOverflow
      body.style.paddingRight = previousPadding
      lenis?.start()
    }
  }, [locked])
}
