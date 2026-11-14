import { useRef, useEffect } from 'react'
import { Sparkles, Moon, Palette, Users, ArrowDown, ChevronRight } from 'lucide-react'
import { forrestaImages } from '../data/forrestaImages'
import { scrollToSection } from '../lib/scrollToSection'
import { gsap } from '../hooks/useGsapScrollTrigger'

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null)
  const heroRevealRef = useRef<HTMLDivElement>(null)
  const heroImageRef = useRef<HTMLImageElement>(null)
  const heroHeadingRef = useRef<HTMLDivElement>(null)
  const splitStageRef = useRef<HTMLDivElement>(null)
  const secondaryImageRef = useRef<HTMLImageElement>(null)
  const secondaryFrameRef = useRef<HTMLDivElement>(null)
  const supportingContentRef = useRef<HTMLDivElement>(null)

  // Real photographs from verified dataset
  const terraceNightImg = forrestaImages.find((img) => img.id === 'terrace-night') || forrestaImages[0]
  const interiorImg = forrestaImages.find((img) => img.id === 'interior-alcove') || forrestaImages[3]
  const boothImg = forrestaImages.find((img) => img.id === 'booth-dining') || forrestaImages[6]
  const barImg = forrestaImages.find((img) => img.id === 'bar-sculpture') || forrestaImages[5]

  useEffect(() => {
    if (!sectionRef.current) return

    // Reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const ctx = gsap.context(() => {
      // 1. Full-Screen Reveal of the Garden Terrace Photo
      if (heroRevealRef.current && heroImageRef.current) {
        gsap.fromTo(
          heroRevealRef.current,
          {
            clipPath: 'inset(6% 4% 6% 4% round 20px)',
          },
          {
            clipPath: 'inset(0% 0% 0% 0% round 0px)',
            ease: 'none',
            scrollTrigger: {
              trigger: heroRevealRef.current,
              start: 'top 85%',
              end: 'top 25%',
              scrub: 1,
            },
          }
        )

        // Subtle camera zoom inside the mask
        gsap.fromTo(
          heroImageRef.current,
          {
            scale: 1.1,
            yPercent: -2,
          },
          {
            scale: 1.0,
            yPercent: 2,
            ease: 'none',
            scrollTrigger: {
              trigger: heroRevealRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.2,
            },
          }
        )
      }

      // 2. Editorial Heading Stagger Entrance
      if (heroHeadingRef.current) {
        const textElements = heroHeadingRef.current.querySelectorAll('.stagger-text')
        gsap.fromTo(
          textElements,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: heroHeadingRef.current,
              start: 'top 80%',
              once: true,
            },
          }
        )
      }

      // 3. Smooth Transition of the Secondary Interior Photo
      if (secondaryFrameRef.current && secondaryImageRef.current) {
        gsap.fromTo(
          secondaryFrameRef.current,
          {
            clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
            opacity: 0.7,
          },
          {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            opacity: 1,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: secondaryFrameRef.current,
              start: 'top 80%',
              once: true,
            },
          }
        )

        gsap.fromTo(
          secondaryImageRef.current,
          { scale: 1.08 },
          {
            scale: 1.0,
            ease: 'none',
            scrollTrigger: {
              trigger: secondaryFrameRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            },
          }
        )
      }

      // 4. Supporting Pillar Cards Stagger
      if (supportingContentRef.current) {
        const pillarCards = supportingContentRef.current.querySelectorAll('.pillar-card')
        gsap.fromTo(
          pillarCards,
          { opacity: 0, y: 22 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: supportingContentRef.current,
              start: 'top 85%',
              once: true,
            },
          }
        )
      }
    }, sectionRef)

    return () => {
      ctx.revert()
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="experience"
      aria-labelledby="experience-heading"
      className="relative w-full bg-forest-deep text-cream overflow-hidden border-t border-forest-border/40"
    >
      {/* ========================================================================= */}
      {/* 1. CINEMATIC HERO REVEAL: Full-Width Open-Air Garden Terrace */}
      {/* ========================================================================= */}
      <div className="relative w-full">
        <div
          ref={heroRevealRef}
          className="relative w-full h-[52vh] sm:h-[65vh] lg:h-[78vh] overflow-hidden bg-forest-deep"
        >
          <img
            ref={heroImageRef}
            src={terraceNightImg.src}
            alt={terraceNightImg.caption}
            className="size-full object-cover select-none will-change-transform"
            loading="lazy"
          />

          {/* Vignette Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/40 to-transparent opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/80 via-transparent to-forest-deep/80 pointer-events-none" />

          {/* Heading Overlay */}
          <div
            ref={heroHeadingRef}
            className="absolute inset-x-0 bottom-0 pb-8 sm:pb-12 lg:pb-16"
          >
            <div className="container-x">
              <div className="max-w-2xl">
                <div className="stagger-text inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-gold/40 bg-forest-deep/85 px-3 py-1 text-gold shadow-md backdrop-blur-md mb-2.5">
                  <Sparkles className="size-3 text-gold" />
                  <span className="eyebrow !text-[0.62rem] sm:!text-xs !tracking-[0.2em]">
                    Café Ambience
                  </span>
                </div>

                <h2
                  id="experience-heading"
                  className="stagger-text font-serif text-[clamp(2rem,5vw,4rem)] font-light leading-[1.1] text-cream"
                >
                  Moments in <br className="hidden sm:inline" />
                  <em className="italic font-normal text-gold">Nature.</em>
                </h2>

                <p className="stagger-text mt-2 sm:mt-3 text-sm sm:text-base text-cream/85 font-sans leading-relaxed max-w-xl drop-shadow-sm">
                  A serene garden escape where leafy trees meet warm ambient lighting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. SPLIT-SCREEN TRANSITION: Atmosphere Narrative & Secondary Photo */}
      {/* ========================================================================= */}
      <div ref={splitStageRef} className="container-x section-pad !pt-12 sm:!pt-18 !pb-14 sm:!pb-18">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-12 items-center">
          
          {/* LEFT: Secondary Café Photograph */}
          <div className="lg:col-span-6">
            <div
              ref={secondaryFrameRef}
              className="relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl sm:rounded-3xl overflow-hidden border border-gold/30 bg-forest-card shadow-2xl"
            >
              <img
                ref={secondaryImageRef}
                src={interiorImg.src}
                alt={interiorImg.caption}
                className="size-full object-cover select-none will-change-transform"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/85 via-transparent to-transparent pointer-events-none" />

              {/* Bottom Photo Tag */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between pointer-events-none">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-forest-deep/85 px-2.5 py-0.5 text-[0.62rem] sm:text-xs font-bold tracking-wider text-gold backdrop-blur-md border border-gold/20">
                  <Palette className="size-3 text-gold" />
                  Architectural Interiors
                </span>
                <span className="text-[0.62rem] sm:text-xs font-mono text-cream/70 bg-forest-deep/80 px-2 py-0.5 rounded-full backdrop-blur-sm border border-forest-border/40">
                  Warm Ambient Decor
                </span>
              </div>
            </div>

            {/* Complementary Photo Preview Card (Desktop) */}
            <div className="hidden sm:flex items-center gap-4 mt-5 p-3.5 rounded-2xl border border-forest-border bg-forest-card/60 backdrop-blur-md">
              <div className="size-14 rounded-xl overflow-hidden shrink-0 border border-gold/30">
                <img
                  src={boothImg.src}
                  alt={boothImg.caption}
                  className="size-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex-1">
                <span className="text-[0.68rem] font-bold uppercase tracking-wider text-gold">
                  Lounge Seating
                </span>
                <p className="text-xs text-cream/75 leading-relaxed font-sans">
                  Curved booths designed for unhurried conversations.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Atmosphere Editorial Story */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-2">
              <span className="size-1.5 sm:size-2 rounded-full bg-gold" />
              <span className="eyebrow text-gold !text-[0.65rem] sm:!text-[0.7rem] !tracking-[0.2em]">
                Architectural Design
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-light text-cream leading-tight">
              Thoughtful Spaces &amp; <br />
              <span className="text-gold italic font-normal">Warm Light.</span>
            </h3>

            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-cream/80 font-sans leading-relaxed">
              Natural textures, comfortable seating, and soft lighting create an easy space to relax, dine, and connect.
            </p>

            {/* Inset Photo for Mobile */}
            <div className="sm:hidden mt-4 rounded-xl overflow-hidden border border-gold/25 aspect-[16/9]">
              <img
                src={barImg.src}
                alt={barImg.caption}
                className="size-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Direct Links with 48px touch targets */}
            <div className="mt-5 sm:mt-7 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => scrollToSection('gallery')}
                className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-gold text-forest-deep text-xs sm:text-sm font-semibold tracking-wide shadow-gold transition-all duration-300 hover:bg-gold-light active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                <span>View Gallery</span>
                <ChevronRight className="size-4" />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('menu')}
                className="inline-flex items-center gap-2 h-12 px-6 rounded-full border border-forest-border bg-forest-card/60 text-cream/90 text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 hover:text-cream hover:border-gold/50 hover:bg-forest-card active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                <span>Explore Menu</span>
              </button>
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. THREE CORE ATMOSPHERE PILLARS */}
        {/* ========================================================================= */}
        <div ref={supportingContentRef} className="mt-10 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          
          <div className="pillar-card rounded-2xl sm:rounded-3xl border border-forest-border/80 bg-forest-card/50 p-4 sm:p-6 backdrop-blur-sm transition-all hover:border-gold/50 hover:bg-forest-card">
            <div className="flex items-center justify-center size-10 sm:size-11 rounded-xl bg-gold/15 text-gold border border-gold/25 mb-3.5">
              <Moon className="size-5" />
            </div>
            <span className="eyebrow text-gold !text-[0.62rem] !tracking-[0.18em]">Pillar 01</span>
            <h4 className="mt-1.5 font-serif text-lg sm:text-xl font-light text-cream">
              Garden Courtyard
            </h4>
            <p className="mt-1.5 text-xs sm:text-sm text-cream/70 leading-relaxed font-sans">
              Open-air dining under flowering trees and warm evening lanterns.
            </p>
          </div>

          <div className="pillar-card rounded-2xl sm:rounded-3xl border border-forest-border/80 bg-forest-card/50 p-4 sm:p-6 backdrop-blur-sm transition-all hover:border-gold/50 hover:bg-forest-card">
            <div className="flex items-center justify-center size-10 sm:size-11 rounded-xl bg-gold/15 text-gold border border-gold/25 mb-3.5">
              <Palette className="size-5" />
            </div>
            <span className="eyebrow text-gold !text-[0.62rem] !tracking-[0.18em]">Pillar 02</span>
            <h4 className="mt-1.5 font-serif text-lg sm:text-xl font-light text-cream">
              Warm Interiors
            </h4>
            <p className="mt-1.5 text-xs sm:text-sm text-cream/70 leading-relaxed font-sans">
              Textured walls and ambient lighting for quiet dining.
            </p>
          </div>

          <div className="pillar-card rounded-2xl sm:rounded-3xl border border-forest-border/80 bg-forest-card/50 p-4 sm:p-6 backdrop-blur-sm transition-all hover:border-gold/50 hover:bg-forest-card">
            <div className="flex items-center justify-center size-10 sm:size-11 rounded-xl bg-gold/15 text-gold border border-gold/25 mb-3.5">
              <Users className="size-5" />
            </div>
            <span className="eyebrow text-gold !text-[0.62rem] !tracking-[0.18em]">Pillar 03</span>
            <h4 className="mt-1.5 font-serif text-lg sm:text-xl font-light text-cream">
              Shared Moments
            </h4>
            <p className="mt-1.5 text-xs sm:text-sm text-cream/70 leading-relaxed font-sans">
              Spacious seating for family gatherings and celebrations.
            </p>
          </div>

        </div>

        {/* Transition Bridge Cue */}
        <div className="mt-8 sm:mt-12 pt-5 border-t border-forest-border/50 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-center sm:text-left">
          <div className="flex items-center gap-2 text-gold">
            <ArrowDown className="size-3.5 animate-bounce" />
            <span className="text-xs font-semibold tracking-wider uppercase font-sans">
              Explore Gallery
            </span>
          </div>
          <p className="text-xs text-cream/60 font-sans">
            16 Authentic photographs from our Bhuj café
          </p>
        </div>

      </div>
    </section>
  )
}
