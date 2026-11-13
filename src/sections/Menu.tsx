import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Sparkles, CheckCircle2 } from 'lucide-react'
import { menuCategories, verifiedMenuItems, type ForrestaMenuCategory } from '../data/forrestaMenu'
import { useGsapContext, gsap } from '../hooks/useGsapScrollTrigger'
import { scrollToSection } from '../lib/scrollToSection'
import { MenuStage } from '../components/MenuStage'
import { cn } from '../lib/cn'
import { easePremium } from '../lib/motion'

export function Menu() {
  const [activeCategory, setActiveCategory] = useState<ForrestaMenuCategory>('all')
  const sectionRef = useRef<HTMLElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  const filteredItems =
    activeCategory === 'all'
      ? verifiedMenuItems
      : verifiedMenuItems.filter((item) => item.category === activeCategory)

  // Scroll entrance animation
  useGsapContext(sectionRef, () => {
    if (!gridRef.current) return
    const cards = gridRef.current.querySelectorAll('.menu-card')

    gsap.fromTo(
      cards,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 85%',
        },
      }
    )
  }, [activeCategory])

  return (
    <section
      ref={sectionRef}
      id="menu"
      aria-labelledby="menu-heading"
      className="relative text-cream overflow-hidden border-t border-forest-border/40"
    >
      {/* Interactive 3D Bar & Drink Turntable Stage */}
      <MenuStage />

      {/* Handcrafted Culinary Specialties & Verified Dishes */}
      <div className="section-pad !pt-12 bg-forest-card/30 border-t border-forest-border/40">
        <div className="container-x">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-forest-card px-3.5 py-1 text-gold">
                <Sparkles className="size-3" />
                <span className="eyebrow !text-[0.65rem] !tracking-[0.2em]">Verified Offerings</span>
              </div>
              <h2
                id="menu-heading"
                className="mt-4 font-serif text-[clamp(2.1rem,5vw,3.75rem)] font-light leading-tight text-cream"
              >
                Handcrafted <em className="italic font-normal text-gold">Culinary Creations.</em>
              </h2>
            </div>
            <p className="max-w-md text-sm sm:text-base text-cream/75 leading-relaxed font-sans">
              Prepared fresh to order in our Bhuj kitchen. From signature loaded club sandwiches to earthen kulhad delicacies.
            </p>
          </div>

        {/* Filter Navigation Tabs (Touch-friendly & Swipeable) */}
        <div className="mt-10 sm:mt-14 overflow-x-auto no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
          <div
            role="tablist"
            aria-label="Filter menu items by category"
            className="flex items-center gap-2 pb-2 min-w-max"
          >
            {menuCategories.map((cat) => {
              const isActive = activeCategory === cat.id

              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(cat.id)}
                  className={cn(
                    'relative h-11 px-5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold select-none',
                    isActive
                      ? 'text-forest-deep'
                      : 'text-cream/80 bg-forest-card/60 hover:text-cream hover:bg-forest-card'
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-menu-pill"
                      transition={{ type: 'spring', stiffness: 360, damping: 32 }}
                      className="absolute inset-0 rounded-full bg-gold shadow-gold -z-10"
                    />
                  )}
                  {cat.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Menu Cards Grid with Staggered Entrance & Interactive Elevation */}
        <div
          ref={gridRef}
          className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.article
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.45, ease: easePremium }}
                className="menu-card group relative flex flex-col overflow-hidden rounded-2xl sm:rounded-3xl border border-forest-border bg-forest-card/70 transition-all duration-300 hover:border-gold/60 hover:bg-forest-card hover:-translate-y-1.5 hover:shadow-2xl active:scale-[0.99]"
              >
                {/* Photo Header with Zoom */}
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-forest-deep">
                  <img
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-card via-transparent to-transparent" />
                  
                  {/* Category & Badge */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2">
                    <span className="rounded-full bg-forest-deep/85 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-gold backdrop-blur-md border border-gold/25">
                      {item.categoryLabel}
                    </span>
                    {item.badge && (
                      <span className="rounded-full bg-gold/90 px-2.5 py-0.5 text-[0.62rem] font-bold uppercase tracking-wider text-forest-deep shadow-sm">
                        {item.badge}
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="font-serif text-xl sm:text-2xl font-light text-cream group-hover:text-gold-light transition-colors">
                    {item.name}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-cream/75 font-sans flex-1">
                    {item.description}
                  </p>

                  {/* Highlights Tags */}
                  <div className="mt-4 pt-4 border-t border-forest-border flex flex-wrap gap-1.5">
                    {item.highlights.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 rounded-md bg-forest-deep/60 px-2 py-1 text-[0.65rem] font-medium text-cream/70"
                      >
                        <CheckCircle2 className="size-2.5 text-gold" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Cinematic Feature Link for Bottled Specialty */}
                  {item.id === 'bottled-shake-special' && (
                    <button
                      type="button"
                      onClick={() => scrollToSection('coffee-showcase')}
                      className="mt-3.5 inline-flex items-center justify-center gap-1.5 w-full rounded-xl border border-gold/40 bg-gold/15 py-2 px-3 text-xs font-semibold text-gold transition-all hover:bg-gold hover:text-forest-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                    >
                      <Sparkles className="size-3" />
                      <span>Experience Bottled Coffee Showcase ↑</span>
                    </button>
                  )}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Disclaimer / In-Café Service Notice */}
        <div className="mt-12 sm:mt-16 rounded-2xl border border-gold/20 bg-forest-card/40 p-4 sm:p-6 text-center">
          <p className="text-xs sm:text-sm text-cream/70 leading-relaxed font-sans">
            <span className="font-semibold text-gold">Authentic Café Showcase:</span> All featured
            items are photographed on location at Forresta Bhuj. Please visit our café to view today’s complete menu, daily specials, and beverages.
          </p>
        </div>
      </div>
    </div>
  </section>
  )
}
