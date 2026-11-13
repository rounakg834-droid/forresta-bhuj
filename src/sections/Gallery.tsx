import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import {
  Sparkles,
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  LayoutGrid,
  Columns,
  Maximize2,
} from 'lucide-react'
import { forrestaImages, type ForrestaImage } from '../data/forrestaImages'
import { useGsapContext, gsap } from '../hooks/useGsapScrollTrigger'
import { cn } from '../lib/cn'
import { easePremium } from '../lib/motion'

type GalleryFilter = 'all' | 'terrace' | 'interior' | 'culinary' | 'beverage'

const filterTabs: { id: GalleryFilter; label: string }[] = [
  { id: 'all', label: 'All Photos' },
  { id: 'terrace', label: 'Garden Terrace & Facade' },
  { id: 'interior', label: 'Interiors & Lighting' },
  { id: 'culinary', label: 'Culinary Highlights' },
  { id: 'beverage', label: 'Beverages & Signatures' },
]

export function Gallery() {
  const [activeFilter, setActiveFilter] = useState<GalleryFilter>('all')
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [mobileViewMode, setMobileViewMode] = useState<'feed' | 'grid'>('feed')

  const sectionRef = useRef<HTMLElement>(null)
  const desktopGridRef = useRef<HTMLDivElement>(null)
  const mobileTrackRef = useRef<HTMLDivElement>(null)

  const visibleImages: ForrestaImage[] =
    activeFilter === 'all'
      ? forrestaImages
      : forrestaImages.filter((img) => img.category === activeFilter)

  // GSAP Smooth Clip-Path Mask Reveal on Desktop Masonry
  useGsapContext(
    sectionRef,
    () => {
      if (!desktopGridRef.current) return
      const cards = desktopGridRef.current.querySelectorAll('.masonry-card')

      cards.forEach((card) => {
        const img = card.querySelector('.gallery-img')

        // Clip-path mask reveal as each card enters viewport
        gsap.fromTo(
          card,
          {
            clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
            opacity: 0.6,
          },
          {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            opacity: 1,
            duration: 0.85,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 88%',
              once: true,
            },
          }
        )

        // Subtle image parallax while scrolling
        if (img) {
          gsap.fromTo(
            img,
            { scale: 1.12, yPercent: -4 },
            {
              scale: 1.0,
              yPercent: 4,
              ease: 'none',
              scrollTrigger: {
                trigger: card,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1.2,
              },
            }
          )
        }
      })
    },
    [activeFilter]
  )

  const openLightbox = (index: number) => {
    setSelectedIndex(index)
  }

  const closeLightbox = () => {
    setSelectedIndex(null)
  }

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return
    setSelectedIndex((prev) => (prev! > 0 ? prev! - 1 : visibleImages.length - 1))
  }, [selectedIndex, visibleImages.length])

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return
    setSelectedIndex((prev) => (prev! < visibleImages.length - 1 ? prev! + 1 : 0))
  }, [selectedIndex, visibleImages.length])

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (selectedIndex === null) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') handlePrev()
      if (e.key === 'ArrowRight') handleNext()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedIndex, handlePrev, handleNext])

  // Touch swipe gestures for mobile Lightbox
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return
    const touchEnd = e.changedTouches[0].clientX
    const diff = touchStart - touchEnd
    if (diff > 50) handleNext()
    if (diff < -50) handlePrev()
    setTouchStart(null)
  }

  // Asymmetric desktop span styles to create editorial magazine composition
  const getDesktopSpanClass = (index: number) => {
    const pattern = index % 8
    switch (pattern) {
      case 0:
        return 'md:col-span-8 md:row-span-2' // Grand feature landscape/square
      case 1:
        return 'md:col-span-4 md:row-span-2' // Tall portrait
      case 2:
        return 'md:col-span-4 md:row-span-2' // Tall portrait
      case 3:
        return 'md:col-span-4 md:row-span-1' // Compact square
      case 4:
        return 'md:col-span-4 md:row-span-2' // Tall portrait
      case 5:
        return 'md:col-span-8 md:row-span-2' // Large showcase
      case 6:
        return 'md:col-span-7 md:row-span-1' // Wide gourmet spread
      case 7:
        return 'md:col-span-5 md:row-span-1' // Balanced landscape
      default:
        return 'md:col-span-4 md:row-span-2'
    }
  }

  return (
    <section
      ref={sectionRef}
      id="gallery"
      aria-labelledby="gallery-heading"
      className="relative w-full section-pad bg-forest-deep text-cream overflow-hidden border-t border-forest-border/40"
    >
      <div className="container-x">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-forest-card px-3.5 py-1 text-gold">
              <Sparkles className="size-3" />
              <span className="eyebrow !text-[0.65rem] !tracking-[0.2em]">Visual Diary</span>
            </div>
            <h2
              id="gallery-heading"
              className="mt-4 font-serif text-[clamp(2.2rem,5vw,3.9rem)] font-light leading-tight text-cream"
            >
              Photographs of <em className="italic font-normal text-gold">Forresta.</em>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <p className="max-w-md text-sm sm:text-base text-cream/75 leading-relaxed font-sans">
              Authentic on-location moments. From moonlit garden tables to hand-welded art and clay kulhad specialties.
            </p>

            {/* Mobile View Toggle (Feed vs Grid) */}
            <div className="flex md:hidden items-center self-start rounded-full border border-forest-border bg-forest-card/80 p-1 text-xs">
              <button
                type="button"
                onClick={() => setMobileViewMode('feed')}
                className={cn(
                  'flex items-center gap-1.5 px-3 py-1 rounded-full font-medium transition-colors',
                  mobileViewMode === 'feed'
                    ? 'bg-gold text-forest-deep font-bold shadow-sm'
                    : 'text-cream/70 hover:text-cream'
                )}
              >
                <Columns className="size-3" />
                <span>Swipe Cards</span>
              </button>
              <button
                type="button"
                onClick={() => setMobileViewMode('grid')}
                className={cn(
                  'flex items-center gap-1.5 px-3 py-1 rounded-full font-medium transition-colors',
                  mobileViewMode === 'grid'
                    ? 'bg-gold text-forest-deep font-bold shadow-sm'
                    : 'text-cream/70 hover:text-cream'
                )}
              >
                <LayoutGrid className="size-3" />
                <span>Grid</span>
              </button>
            </div>
          </div>
        </div>

        {/* Category Filter Navigation Tabs */}
        <div className="mt-8 sm:mt-12 overflow-x-auto no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
          <div
            role="tablist"
            aria-label="Filter gallery photographs"
            className="flex items-center gap-2 pb-2 min-w-max"
          >
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.id

              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => {
                    setActiveFilter(tab.id)
                    setSelectedIndex(null)
                  }}
                  className={cn(
                    'relative h-11 px-5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold',
                    isActive
                      ? 'text-forest-deep'
                      : 'text-cream/80 bg-forest-card/60 hover:text-cream hover:bg-forest-card'
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-gallery-pill"
                      transition={{ type: 'spring', stiffness: 360, damping: 32 }}
                      className="absolute inset-0 rounded-full bg-gold shadow-gold -z-10"
                    />
                  )}
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* ===================================================================== */}
        {/* MOBILE GALLERY VIEW: Edge-to-Edge Swipeable Feed OR Compact Grid    */}
        {/* ===================================================================== */}
        <div className="md:hidden mt-8">
          {mobileViewMode === 'feed' ? (
            /* Large App-Like Horizontal Swipe Track */
            <div
              ref={mobileTrackRef}
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar -mx-4 px-4 pb-4 select-none"
            >
              {visibleImages.map((img, idx) => (
                <article
                  key={img.id}
                  onClick={() => openLightbox(idx)}
                  className="group relative w-[86vw] max-w-[350px] aspect-[4/5] rounded-3xl overflow-hidden shrink-0 snap-center border border-forest-border bg-forest-card shadow-xl cursor-pointer"
                >
                  <img
                    src={img.src}
                    alt={img.caption}
                    className="size-full object-cover select-none transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  
                  {/* Subtle Gradient & Information Card Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/95 via-forest-deep/30 to-transparent flex flex-col justify-between p-5">
                    <div className="flex justify-between items-center">
                      <span className="rounded-full bg-forest-deep/80 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-gold backdrop-blur-md border border-gold/30">
                        {img.categoryLabel}
                      </span>
                      <span className="grid size-8 place-items-center rounded-full bg-forest-deep/80 text-gold border border-gold/30">
                        <Maximize2 className="size-3.5" />
                      </span>
                    </div>

                    <div>
                      <h4 className="font-serif text-lg font-light text-cream line-clamp-1">
                        {img.title}
                      </h4>
                      <p className="mt-1 text-xs text-cream/75 line-clamp-2 font-sans">
                        {img.caption}
                      </p>
                      <span className="mt-3 inline-flex items-center gap-1.5 text-[0.68rem] font-semibold text-gold tracking-wide">
                        <span>Tap to view fullscreen</span>
                        <ZoomIn className="size-3" />
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            /* Mobile 2-Column Clean Grid */
            <div className="grid grid-cols-2 gap-3">
              {visibleImages.map((img, idx) => (
                <div
                  key={img.id}
                  onClick={() => openLightbox(idx)}
                  className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-forest-border bg-forest-card shadow-md cursor-pointer"
                >
                  <img
                    src={img.src}
                    alt={img.caption}
                    className="size-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/90 via-transparent to-transparent flex items-end p-2.5">
                    <p className="text-[0.68rem] font-medium text-cream line-clamp-1">
                      {img.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Swipe Indicator for mobile feed */}
          {mobileViewMode === 'feed' && (
            <div className="mt-2 text-center text-[0.68rem] text-cream/50 font-sans tracking-wide">
              ← Swipe horizontally to explore all {visibleImages.length} photographs →
            </div>
          )}
        </div>

        {/* ===================================================================== */}
        {/* DESKTOP GALLERY VIEW: Asymmetric Masonry Layout with Parallax Masks  */}
        {/* ===================================================================== */}
        <div
          ref={desktopGridRef}
          className="hidden md:grid grid-cols-12 auto-rows-[220px] lg:auto-rows-[260px] gap-5 mt-12"
        >
          {visibleImages.map((img, idx) => (
            <div
              key={img.id}
              onClick={() => openLightbox(idx)}
              className={cn(
                'masonry-card group relative overflow-hidden rounded-3xl border border-forest-border/80 bg-forest-card shadow-xl cursor-pointer transition-all duration-300 hover:border-gold/60 hover:-translate-y-1',
                getDesktopSpanClass(idx)
              )}
            >
              <img
                src={img.src}
                alt={img.caption}
                className="gallery-img size-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 will-change-transform select-none"
                loading="lazy"
              />

              {/* Ambient Gradient and Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/95 via-forest-deep/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                <div className="flex justify-end">
                  <span className="grid size-10 place-items-center rounded-full bg-forest-deep/80 text-gold border border-gold/40 shadow-md backdrop-blur-md transition-transform group-hover:scale-110">
                    <ZoomIn className="size-4" />
                  </span>
                </div>

                <div>
                  <span className="rounded-full bg-forest-deep/85 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-gold backdrop-blur-md border border-gold/25 inline-block mb-2">
                    {img.categoryLabel}
                  </span>
                  <h4 className="font-serif text-xl lg:text-2xl font-light text-cream">
                    {img.title}
                  </h4>
                  <p className="mt-1 text-xs lg:text-sm text-cream/80 font-sans line-clamp-2 max-w-lg">
                    {img.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===================================================================== */}
      {/* FULLSCREEN TOUCH & KEYBOARD-ENABLED LIGHTBOX MODAL                     */}
      {/* ===================================================================== */}
      <AnimatePresence>
        {selectedIndex !== null && visibleImages[selectedIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-forest-deep/95 backdrop-blur-2xl p-4 sm:p-8 select-none"
            onClick={closeLightbox}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Top Bar: Counter & Close button */}
            <div className="absolute top-4 inset-x-4 sm:top-6 sm:inset-x-8 flex items-center justify-between text-cream z-20">
              <div className="rounded-full bg-forest-card/85 px-4 py-1.5 text-xs font-semibold tracking-wider text-gold border border-gold/30 backdrop-blur-md">
                Photograph {selectedIndex + 1} of {visibleImages.length}
              </div>
              <button
                type="button"
                onClick={closeLightbox}
                aria-label="Close Lightbox"
                className="grid size-12 place-items-center rounded-full border border-gold/40 bg-forest-card text-gold hover:bg-gold hover:text-forest-deep transition-all shadow-lg active:scale-95"
              >
                <X className="size-6" />
              </button>
            </div>

            {/* Prev Navigation Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                handlePrev()
              }}
              aria-label="Previous photograph"
              className="absolute left-2 sm:left-6 z-20 grid size-12 place-items-center rounded-full border border-gold/40 bg-forest-card/85 text-gold hover:bg-gold hover:text-forest-deep transition-all shadow-lg active:scale-95 backdrop-blur-md"
            >
              <ChevronLeft className="size-6" />
            </button>

            {/* Main Lightbox Content */}
            <div
              className="relative max-h-[82vh] max-w-4xl w-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                key={visibleImages[selectedIndex].id}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.3, ease: easePremium }}
                src={visibleImages[selectedIndex].src}
                alt={visibleImages[selectedIndex].caption}
                className="max-h-[68vh] w-auto max-w-full rounded-2xl object-contain border border-gold/40 shadow-2xl"
              />

              {/* Caption Card */}
              <div className="mt-4 w-full text-center max-w-xl px-2">
                <span className="text-[0.65rem] font-bold uppercase tracking-wider text-gold">
                  {visibleImages[selectedIndex].categoryLabel}
                </span>
                <h4 className="font-serif text-lg sm:text-2xl font-light text-cream mt-0.5">
                  {visibleImages[selectedIndex].title}
                </h4>
                <p className="mt-1 text-xs sm:text-sm text-cream/75 font-sans leading-relaxed">
                  {visibleImages[selectedIndex].caption}
                </p>
              </div>
            </div>

            {/* Next Navigation Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                handleNext()
              }}
              aria-label="Next photograph"
              className="absolute right-2 sm:right-6 z-20 grid size-12 place-items-center rounded-full border border-gold/40 bg-forest-card/85 text-gold hover:bg-gold hover:text-forest-deep transition-all shadow-lg active:scale-95 backdrop-blur-md"
            >
              <ChevronRight className="size-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
