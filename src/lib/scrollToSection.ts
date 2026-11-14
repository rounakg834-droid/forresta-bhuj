import { getLenis } from './lenis'

export function scrollToSection(id: string) {
  const element = document.getElementById(id)
  if (!element) return

  const lenis = getLenis()
  if (lenis) {
    lenis.scrollTo(element, {
      offset: -64,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })
  } else {
    element.scrollIntoView({ behavior: 'smooth' })
  }

  window.history.pushState(null, '', `#${id}`)
}
