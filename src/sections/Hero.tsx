import { useRef } from 'react'
import { motion } from 'motion/react'
import { ArrowDown, MapPin, Sparkles, Utensils } from 'lucide-react'
import { heroImage } from '../data/forrestaImages'
import { forrestaInfo } from '../data/forrestaInfo'
import { useGsapContext, gsap } from '../hooks/useGsapScrollTrigger'
import { easePremium } from '../lib/motion'

export function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const bgImageRef = useRef<HTMLImageElement>(null)

  // GSAP ScrollTrigger Parallax on Hero background image
  useGsapContext(heroRef, () => {
    if (!bgImageRef.current || !heroRef.current) return

    gsap.to(bgImageRef.current, {
      yPercent: 18,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    })
  })

  return (
    <section
      ref={heroRef}
      id="home"
      aria-label="Welcome to FORRESTA BHUJ"
      className="relative isolate flex min-h-[100svh] w-full items-end overflow-hidden text-cream"
    >
      {/* Real Café Photograph Background - Garden Terrace at Night (Blended with 3D Canvas) */}
      <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none">
        <motion.img
          ref={bgImageRef}
          initial={{ scale: 1.15, opacity: 0.2 }}
          animate={{ scale: 1.02, opacity: 0.35 }}
          transition={{ duration: 1.6, ease: easePremium }}
          src={heroImage.src}
          alt="Forresta Bhuj open-air garden terrace with glowing lanterns and frangipani trees at night"
          className="size-full object-cover object-center will-change-transform opacity-35"
          loading="eager"
          decoding="async"
        />
        {/* Cinematic Multi-Layer Gradient Overlays in Deep Forest Green */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-forest-deep/95 via-forest-deep/55 to-transparent"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-forest-deep/90 via-forest-deep/45 to-transparent lg:w-3/4"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(185,155,101,0.18)_0%,transparent_60%)]"
        />
      </div>

      {/* Hero Content Container */}
      <div className="container-x w-full pt-28 pb-16 sm:pb-20 md:pb-28">
        <div className="max-w-3xl">
          {/* Eyebrow Pill */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: easePremium }}
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-forest-card/80 px-3.5 py-1.5 backdrop-blur-md shadow-gold"
          >
            <Sparkles className="size-3.5 text-gold animate-pulse-subtle" />
            <span className="eyebrow text-gold font-bold">
              Botanical Garden Café • Bhuj, Gujarat
            </span>
          </motion.div>

          {/* Staggered Heading Lines */}
          <h1 className="mt-5 font-serif text-[clamp(2.35rem,7.5vw,5.5rem)] font-light leading-[1.08] tracking-[-0.02em] text-cream">
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.35, ease: easePremium }}
                className="block"
              >
                Where Garden
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.48, ease: easePremium }}
                className="block"
              >
                <em className="italic font-normal text-gold-light">Serenity</em> Meets
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.61, ease: easePremium }}
                className="block"
              >
                Fresh Flavors.
              </motion.span>
            </span>
          </h1>

          {/* Narrative Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.75, ease: easePremium }}
            className="mt-5 max-w-xl text-[0.95rem] sm:text-base md:text-lg leading-relaxed text-cream/85 font-sans"
          >
            Step into Bhuj’s premier open-air botanical café. An oasis of blooming frangipani trees,
            sculptural contemporary architecture, and freshly handcrafted delicacies at HIMS Business Park.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.88, ease: easePremium }}
            className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center"
          >
            <a
              href="#menu"
              className="group inline-flex h-12 sm:h-14 items-center justify-center gap-2 rounded-full bg-gold px-8 text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-forest-deep shadow-gold transition-all duration-300 hover:bg-gold-light hover:scale-[1.02] active:scale-95"
            >
              <Utensils className="size-4 transition-transform duration-300 group-hover:rotate-12" />
              <span>Explore Menu</span>
            </a>

            <a
              href="#visit"
              className="inline-flex h-12 sm:h-14 items-center justify-center gap-2 rounded-full border border-cream/30 bg-forest-card/60 px-8 text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-cream backdrop-blur-sm transition-all duration-300 hover:border-gold hover:text-gold active:scale-95"
            >
              <MapPin className="size-4 text-gold" />
              <span>Visit The Café</span>
            </a>
          </motion.div>

          {/* Location & Status Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.05 }}
            className="mt-10 flex flex-wrap items-center gap-4 text-xs text-cream/70 sm:gap-6 border-t border-cream/15 pt-5"
          >
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-medium text-cream/90">Open Today • {forrestaInfo.timings.hours}</span>
            </div>
            <span className="hidden sm:inline text-gold/40">•</span>
            <div className="flex items-center gap-1.5 text-gold-light">
              <MapPin className="size-3.5" />
              <span>{forrestaInfo.location.venue}, Airport Rd</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Scroll Cue */}
      <motion.a
        href="#story"
        aria-label="Scroll to Our Story"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 py-1 text-gold/80 transition-colors hover:text-gold focus-visible:outline-none"
      >
        <span className="eyebrow !text-[0.6rem] !tracking-[0.28em]">Scroll</span>
        <span aria-hidden="true" className="relative block h-8 w-px bg-gold/25 overflow-hidden">
          <span className="absolute inset-0 animate-scroll-cue bg-gold" />
        </span>
        <ArrowDown className="size-3 text-gold/60 animate-bounce" />
      </motion.a>
    </section>
  )
}
