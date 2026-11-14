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
  { id: 'all', label: 'All' },
  { id: 'terrace', label: 'Garden Terrace' },
  { id: 'interior', label: 'Interiors' },
  { id: 'culinary', label: 'Culinary' },
  { id: 'beverage', label: 'Beverages' },
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

        gsap.fromTo(
          card,
          {
            clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
            opacity: 0.6,
          },
          {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            opacity: 1,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 88%',
              once: true,
            },
          }
        )

        if (img) {
          gsap.fromTo(
            img,
            { scale: 1.08, yPercent: -2 },
            {
              scale: 1.0,
              yPercent: 2,
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
    if (diff > 45) handleNext()
    if (diff < -45) handlePrev()
    setTouchStart(null)
  }

  const getDesktopSpanClass = (index: number) => {
    const pattern = index % 8
    switch (pattern) {
      case 0:
        return 'md:col-span-8 md:row-span-2'
      case 1:
        return 'md:col-span-4 md:row-span-2'
      case 2:
        return 'md:col-span-4 md:row-span-2'
      case 3:
        return 'md:col-span-4 md:row-span-1'
      case 4:
        return 'md:col-span-4 md:row-span-2'
      case 5:
        return 'md:col-span-8 md:row-span-2'
      case 6:
        return 'md:col-span-7 md:row-span-1'
      case 7:
        return 'md:col-span-5 md:row-span-1'
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
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-gold/30 bg-forest-card px-3 py-1 text-gold">
              <Sparkles className="size-3" />
              <span className="eyebrow !text-[0.62rem] sm:!text-xs !tracking-[0.2em]">Visual Diary</span>
            </div>
            <h2
              id="gallery-heading"
              className="mt-2.5 sm:mt-3.5 font-serif text-[clamp(1.9rem,4.5vw,3.6rem)] font-light leading-tight text-cream"
            >
              Photographs of <em className="italic font-normal text-gold">Forresta.</em>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
            <p className="max-w-md text-xs sm:text-base text-cream/75 leading-relaxed font-sans">
              Authentic moments from our garden terrace and café in Bhuj.
            </p>

            {/* Mobile View Toggle */}
            <div className="flex md:hidden items-center self-start rounded-full border border-forest-border bg-forest-card/80 p-0.5 text-xs">
              <button
                type="button"
                onClick={() => setMobileViewMode('feed')}
                className={cn(
                  'flex items-center gap-1.5 px-3 py-1 rounded-full font-medium transition-all active:scale-95',
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
                  'flex items-center gap-1.5 px-3 py-1 rounded-full font-medium transition-all active:scale-95',
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
        <div className="mt-5 sm:mt-8 overflow-x-auto no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
          <div
            role="tablist"
            aria-label="Filter gallery photographs"
            className="flex items-center gap-2 pb-1.5 min-w-max"
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
                    'relative h-11 px-4 sm:px-5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold active:scale-95',
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

        {/* DESKTOP: Asymmetric Masonry Grid */}
        <div
          ref={desktopGridRef}
          className="hidden md:grid mt-8 sm:mt-10 grid-cols-12 gap-5 sm:gap-6 auto-rows-[230px]"
        >
          <AnimatePresence mode="popLayout">
            {visibleImages.map((image, index) => {
              const spanClass = getDesktopSpanClass(index)

              return (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.45, ease: easePremium }}
                  onClick={() => openLightbox(index)}
                  className={cn(
                    'masonry-card group relative cursor-pointer overflow-hidden rounded-2xl sm:rounded-3xl border border-gold/25 bg-forest-card shadow-lg transition-all duration-500 hover:border-gold/60 hover:shadow-2xl',
                    spanClass
                  )}
                >
                  <img
                    src={image.src}
                    alt={image.caption}
                    className="gallery-img size-full object-cover transition-transform duration-700 ease-out group-hover:scale-106 select-none will-change-transform"
                    loading="lazy"
                  />

                  {/* Gradient Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/90 via-forest-deep/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Hover Information Layer */}
                  <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-between pointer-events-none">
                    <div className="flex items-center justify-between">
                      <span className="rounded-full bg-forest-deep/85 px-3 py-1 text-[0.65rem] font-bold tracking-wider text-gold uppercase backdrop-blur-md border border-gold/20">
                        {image.category}
                      </span>
                      <div className="size-9 rounded-full bg-forest-deep/80 text-gold grid place-items-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-md">
                        <ZoomIn className="size-4" />
                      </div>
                    </div>

                    <div>
                      <p className="font-serif text-base sm:text-lg text-cream font-light leading-snug drop-shadow-md">
                        {image.caption}
                      </p>
                      <p className="mt-1 text-xs text-gold/80 font-mono">
                        Bhuj, Gujarat
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>

        {/* MOBILE: App-Like Horizontal Swipeable Cards OR Grid */}
        <div className="md:hidden mt-5">
          {mobileViewMode === 'feed' ? (
            <div
              ref={mobileTrackRef}
              className="flex gap-3.5 overflow-x-auto snap-x snap-mandatory no-scrollbar -mx-4 px-4 pb-3"
            >
              {visibleImages.map((image, index) => (
                <div
                  key={image.id}
                  onClick={() => openLightbox(index)}
                  className="snap-center shrink-0 w-[84vw] max-w-[320px] rounded-2xl overflow-hidden border border-gold/30 bg-forest-card shadow-xl group active:scale-[0.98] transition-transform cursor-pointer"
                >
                  <div className="relative aspect-[4/5] w-full overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.caption}
                      className="size-full object-cover select-none"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/90 via-forest-deep/25 to-transparent" />
                    
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className="rounded-full bg-forest-deep/85 px-2.5 py-0.5 text-[0.62rem] font-bold tracking-wider text-gold uppercase backdrop-blur-md border border-gold/20">
                        {image.category}
                      </span>
                      <div className="size-8 rounded-full bg-forest-deep/80 text-gold grid place-items-center">
                        <Maximize2 className="size-3.5" />
                      </div>
                    </div>

                    <div className="absolute bottom-3.5 inset-x-3.5">
                      <p className="font-serif text-base text-cream leading-snug drop-shadow-md">
                        {image.caption}
                      </p>
                      <p className="mt-0.5 text-[0.65rem] text-gold/80 font-mono">
                        Tap for fullscreen view
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-2.5">
              {visibleImages.map((image, index) => (
                <div
                  key={image.id}
                  onClick={() => openLightbox(index)}
                  className="relative aspect-square rounded-xl overflow-hidden border border-gold/25 bg-forest-card shadow-md active:scale-95 transition-transform cursor-pointer"
                >
                  <img
                    src={image.src}
                    alt={image.caption}
                    className="size-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2">
                    <p className="text-[0.65rem] text-cream truncate font-medium">
                      {image.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-forest-deep/95 backdrop-blur-xl p-3 sm:p-6"
            onClick={closeLightbox}
          >
            {/* Lightbox Controls Header with Safe Area Insets */}
            <div className="absolute top-4 inset-x-4 sm:inset-x-8 pt-[env(safe-area-inset-top,0px)] flex items-center justify-between text-cream z-10 pointer-events-auto">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-gold">
                  {selectedIndex + 1} / {visibleImages.length}
                </span>
                <span className="text-xs text-cream/60 hidden sm:inline">•</span>
                <span className="text-xs text-cream/70 hidden sm:inline uppercase tracking-wider font-semibold">
                  {visibleImages[selectedIndex].category}
                </span>
              </div>

              <button
                type="button"
                onClick={closeLightbox}
                aria-label="Close fullscreen view"
                className="grid size-11 place-items-center rounded-full border border-cream/20 bg-forest-card/80 text-cream hover:border-gold hover:text-gold active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Left Nav Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                handlePrev()
              }}
              aria-label="Previous image"
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-10 grid size-12 place-items-center rounded-full border border-gold/30 bg-forest-card/80 text-gold hover:bg-gold hover:text-forest-deep active:scale-95 transition-all shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <ChevronLeft className="size-6" />
            </button>

            {/* Right Nav Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                handleNext()
              }}
              aria-label="Next image"
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-10 grid size-12 place-items-center rounded-full border border-gold/30 bg-forest-card/80 text-gold hover:bg-gold hover:text-forest-deep active:scale-95 transition-all shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <ChevronRight className="size-6" />
            </button>

            {/* Active Photograph Center Stage with Swipe Gesture Support */}
            <div
              className="relative max-h-[85vh] max-w-[92vw] sm:max-w-4xl flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <motion.img
                key={visibleImages[selectedIndex].id}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.3, ease: easePremium }}
                src={visibleImages[selectedIndex].src}
                alt={visibleImages[selectedIndex].caption}
                className="max-h-[68vh] sm:max-h-[78vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl border border-gold/30"
              />

              <div className="mt-3.5 text-center max-w-xl">
                <p className="font-serif text-base sm:text-xl text-cream font-light">
                  {visibleImages[selectedIndex].caption}
                </p>
                <p className="mt-0.5 text-xs text-gold/70 font-mono">
                  Swipe left/right or use arrow keys
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
