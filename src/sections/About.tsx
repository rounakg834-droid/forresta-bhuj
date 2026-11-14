import { useRef } from 'react'
import { Sparkles, Utensils, Flower2, HeartHandshake, ShieldCheck } from 'lucide-react'
import { storefrontImage, openingImage } from '../data/forrestaImages'
import { useGsapContext, gsap } from '../hooks/useGsapScrollTrigger'

export function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageCardRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useGsapContext(sectionRef, () => {
    // Parallax on storefront image card
    if (imageCardRef.current) {
      gsap.fromTo(
        imageCardRef.current.querySelector('img'),
        { yPercent: -6, scale: 1.06 },
        {
          yPercent: 6,
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: imageCardRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      )
    }

    // Staggered reveal for values cards
    if (cardsRef.current) {
      const valueCards = cardsRef.current.querySelectorAll('.value-card')
      gsap.fromTo(
        valueCards,
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 85%',
          },
        }
      )
    }
  })

  const values = [
    {
      icon: Utensils,
      title: 'Fresh & Wholesome',
      description: 'Made to order with fresh, quality ingredients.',
    },
    {
      icon: Flower2,
      title: 'Garden Ambience',
      description: 'Lush open terrace with quiet, leafy corners.',
    },
    {
      icon: HeartHandshake,
      title: 'Warm Hospitality',
      description: 'A welcoming space for friends and family gatherings.',
    },
    {
      icon: ShieldCheck,
      title: 'Artisanal Craft',
      description: 'Signature shakes, kulhad brews, and grilled bites.',
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="about"
      aria-labelledby="story-heading"
      className="relative section-pad bg-forest-card/30 text-cream overflow-hidden border-t border-forest-border/40"
    >
      {/* Anchor for backward compatibility with story links */}
      <span id="story" className="sr-only" aria-hidden="true" />

      <div className="container-x">
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-forest-card px-3.5 py-1 text-gold">
            <Sparkles className="size-3" />
            <span className="eyebrow !text-[0.65rem] !tracking-[0.2em]">Our Story</span>
          </div>
          <h2
            id="story-heading"
            className="mt-3 sm:mt-4 font-serif text-[clamp(2rem,4.5vw,3.5rem)] font-light leading-tight text-cream"
          >
            Welcome to <em className="italic font-normal text-gold">Forresta.</em>
          </h2>
          <p className="mt-3 text-[0.95rem] sm:text-base leading-relaxed text-cream/80 font-sans">
            Good food. Fresh vibes. Beautiful moments. A serene garden escape at HIMS Business Park, Bhuj.
          </p>
        </div>

        {/* Dual Photo Showcase Grid */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Storefront Image Card with Parallax */}
          <div ref={imageCardRef} className="lg:col-span-6 relative group overflow-hidden">
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-gold/30 bg-forest-card shadow-2xl">
              <img
                src={storefrontImage.src}
                alt={storefrontImage.caption}
                className="w-full aspect-[4/5] sm:aspect-[3/4] object-cover transition-transform duration-700 ease-out will-change-transform"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/30 to-transparent" />
              <div className="absolute bottom-5 inset-x-5 sm:bottom-6 sm:inset-x-6">
                <span className="eyebrow text-gold font-bold">Storefront &amp; Architecture</span>
                <p className="mt-1 font-serif text-base sm:text-lg font-light text-cream">
                  Botanical Garden &amp; Storefront
                </p>
              </div>
            </div>
          </div>

          {/* Right Narrative & Grand Opening Card */}
          <div className="lg:col-span-6 flex flex-col gap-5 sm:gap-6">
            {/* Opening Celebration Card */}
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-gold/25 bg-forest-card/80 p-5 sm:p-6 shadow-lift transition-all duration-300 hover:border-gold/50">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-center">
                <img
                  src={openingImage.src}
                  alt={openingImage.caption}
                  className="size-28 sm:size-32 rounded-2xl object-cover shrink-0 border border-gold/30"
                  loading="lazy"
                />
                <div>
                  <span className="eyebrow text-gold">Grand Opening</span>
                  <h3 className="mt-1 font-serif text-lg sm:text-xl font-light text-cream">
                    Rooted in Tradition
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-cream/75">
                    Opened with warm family blessings to bring fresh, wholesome food and welcoming hospitality to Bhuj.
                  </p>
                </div>
              </div>
            </div>

            {/* Core Values 2x2 Grid with Staggered Entrance */}
            <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              {values.map((val) => {
                const Icon = val.icon
                return (
                  <div
                    key={val.title}
                    className="value-card rounded-2xl border border-forest-border bg-forest-card/40 p-4 transition-all duration-300 hover:border-gold/40 hover:bg-forest-card/70"
                  >
                    <div className="size-9 rounded-xl bg-gold/15 text-gold grid place-items-center mb-2.5">
                      <Icon className="size-4" />
                    </div>
                    <h4 className="font-serif text-base sm:text-lg text-cream">{val.title}</h4>
                    <p className="mt-1 text-xs leading-relaxed text-cream/70 font-sans">
                      {val.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
