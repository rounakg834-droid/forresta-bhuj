import { Sparkles, Clock, Coffee, ShieldCheck, Droplet, ChevronRight } from 'lucide-react'
import { scrollToSection } from '../lib/scrollToSection'

export function BottleShowcase() {
  return (
    <section
      id="coffee-showcase"
      aria-labelledby="coffee-showcase-heading"
      className="relative w-full section-pad bg-gradient-to-b from-[#07140e] via-[#0c1f16] to-[#07130d] text-cream overflow-hidden border-t border-forest-border/40"
    >
      {/* Anchor for backward compatibility with signature bottle links */}
      <span id="signature-bottle" className="sr-only" aria-hidden="true" />

      {/* Atmospheric Background Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] sm:w-[750px] h-[480px] sm:h-[750px] rounded-full bg-[radial-gradient(circle_at_center,rgba(185,155,101,0.12)_0%,rgba(13,32,18,0.08)_45%,transparent_70%)] blur-3xl opacity-70" />
        <div className="absolute inset-0 bg-[radial-gradient(#b99b65_1px,transparent_1px)] [background-size:36px_36px] opacity-[0.03]" />
      </div>

      <div className="container-x relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-7 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-gold/30 bg-forest-card/80 px-3 py-1 text-gold shadow-sm backdrop-blur-md">
            <Sparkles className="size-3 text-gold" />
            <span className="eyebrow !text-[0.62rem] sm:!text-xs !tracking-[0.2em]">
              House Specialty
            </span>
          </div>

          <h2
            id="coffee-showcase-heading"
            className="mt-3 font-serif text-[clamp(1.95rem,4.8vw,3.6rem)] font-light leading-[1.12] text-cream"
          >
            Signature Bottled <br className="hidden sm:inline" />
            <em className="italic font-normal text-gold">Cold Brew.</em>
          </h2>

          <p className="mt-2.5 text-sm sm:text-base text-cream/75 max-w-lg mx-auto font-sans leading-relaxed">
            Slow-steeped for a smooth, naturally rich finish. Freshly bottled in our Bhuj café.
          </p>
        </div>

        {/* Clean Static Editorial Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-12 items-center">
          
          {/* LEFT: Photograph Card */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="relative w-full max-w-[280px] sm:max-w-[380px] lg:max-w-[430px] aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden border border-gold/25 bg-[#0a1811] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.85)]">
              <img
                src={`${import.meta.env.BASE_URL}assets/images/forresta-coffee.png`}
                alt="Signature Forresta Cold Brew bottle nestled in dark forest foliage with golden ambient lighting"
                className="size-full object-cover select-none"
                loading="lazy"
                draggable={false}
              />

              {/* Soft Vignette Overlay */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#08150f]/80 via-transparent to-black/20" />

              {/* Bottom Context Badge */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between pointer-events-none">
                <span className="inline-flex items-center gap-1 rounded-full bg-forest-deep/85 px-2.5 py-0.5 text-[0.62rem] sm:text-xs font-bold tracking-wider text-gold backdrop-blur-md border border-gold/25 shadow-sm uppercase">
                  <span className="size-1.5 rounded-full bg-emerald-400" />
                  House Reserve
                </span>
                <span className="text-[0.62rem] sm:text-xs font-mono text-cream/70 tracking-wide bg-forest-deep/80 px-2 py-0.5 rounded-full backdrop-blur-sm border border-forest-border/40">
                  Bhuj, Gujarat
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: Editorial Typography & Quality Badges */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            <div className="flex items-center gap-2 mb-2">
              <span className="size-1.5 sm:size-2 rounded-full bg-gold" />
              <span className="eyebrow text-gold !text-[0.65rem] sm:!text-[0.7rem] !tracking-[0.2em]">
                Cold Extraction
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-light text-cream leading-tight">
              Slow-Steeped Arabica. <br />
              <span className="text-gold italic font-normal">Sealed in Glass.</span>
            </h3>

            <p className="mt-3 text-sm sm:text-base text-cream/80 font-sans leading-relaxed">
              Extracted cold over 16 hours for a velvety body with low acidity and rich cocoa notes. Sealed in glass for peak freshness.
            </p>

            {/* Quality Pillars Grid */}
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5">
              <div className="flex items-center gap-3 rounded-2xl border border-forest-border/70 bg-forest-card/50 p-3 backdrop-blur-sm transition-all hover:border-gold/40 hover:bg-forest-card/80">
                <div className="flex items-center justify-center size-8 rounded-xl bg-gold/15 text-gold shrink-0 border border-gold/20">
                  <Clock className="size-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-cream">16-Hour Brew</h4>
                  <p className="text-[0.68rem] text-cream/60">Smooth body with low acidity</p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-forest-border/70 bg-forest-card/50 p-3 backdrop-blur-sm transition-all hover:border-gold/40 hover:bg-forest-card/80">
                <div className="flex items-center justify-center size-8 rounded-xl bg-gold/15 text-gold shrink-0 border border-gold/20">
                  <Coffee className="size-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-cream">Single-Origin Arabica</h4>
                  <p className="text-[0.68rem] text-cream/60">Balanced, rich chocolate notes</p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-forest-border/70 bg-forest-card/50 p-3 backdrop-blur-sm transition-all hover:border-gold/40 hover:bg-forest-card/80">
                <div className="flex items-center justify-center size-8 rounded-xl bg-gold/15 text-gold shrink-0 border border-gold/20">
                  <Droplet className="size-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-cream">Glass Bottle</h4>
                  <p className="text-[0.68rem] text-cream/60">Preserves fresh aromatics</p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-forest-border/70 bg-forest-card/50 p-3 backdrop-blur-sm transition-all hover:border-gold/40 hover:bg-forest-card/80">
                <div className="flex items-center justify-center size-8 rounded-xl bg-gold/15 text-gold shrink-0 border border-gold/20">
                  <ShieldCheck className="size-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-cream">Made Fresh Daily</h4>
                  <p className="text-[0.68rem] text-cream/60">Bottled on site in Bhuj</p>
                </div>
              </div>
            </div>

            {/* CTAs with 48px touch targets */}
            <div className="mt-6 sm:mt-7 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-gold text-forest-deep text-xs sm:text-sm font-semibold tracking-wide shadow-gold transition-all duration-300 hover:bg-gold-light active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                <span>Visit &amp; Taste</span>
                <ChevronRight className="size-4" />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('menu')}
                className="inline-flex items-center gap-2 h-12 px-6 rounded-full border border-forest-border bg-forest-card/60 text-cream/90 text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 hover:text-cream hover:border-gold/50 hover:bg-forest-card active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                <span>View Menu</span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
