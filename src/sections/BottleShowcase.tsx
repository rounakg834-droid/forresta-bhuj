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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[900px] h-[650px] sm:h-[900px] rounded-full bg-[radial-gradient(circle_at_center,rgba(185,155,101,0.14)_0%,rgba(13,32,18,0.1)_45%,transparent_70%)] blur-3xl opacity-70" />
        <div className="absolute inset-0 bg-[radial-gradient(#b99b65_1px,transparent_1px)] [background-size:36px_36px] opacity-[0.035]" />
      </div>

      <div className="container-x relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-forest-card/80 px-4 py-1.5 text-gold shadow-sm backdrop-blur-md">
            <Sparkles className="size-3.5 text-gold" />
            <span className="eyebrow !text-[0.68rem] !tracking-[0.24em]">
              Artisanal Coffee Feature
            </span>
          </div>

          <h2
            id="coffee-showcase-heading"
            className="mt-4 font-serif text-[clamp(2.2rem,5.5vw,4.4rem)] font-light leading-[1.12] text-cream"
          >
            Signature Bottled <br className="hidden sm:inline" />
            <em className="italic font-normal text-gold">Garden Cold Brew.</em>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-cream/75 max-w-xl mx-auto font-sans leading-relaxed">
            Slow-steeped in cold mountain water amidst the serene gardens of Forresta Bhuj.
            A continuous celebration of single-origin craft, botanical elegance, and rich golden warmth.
          </p>
        </div>

        {/* Clean Static Editorial Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* LEFT: Clean Intact Photograph Card */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[460px] aspect-[4/5] rounded-3xl sm:rounded-[2.25rem] overflow-hidden border border-gold/25 bg-[#0a1811] shadow-[0_24px_60px_-15px_rgba(0,0,0,0.85)]">
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
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-forest-deep/85 px-3 py-1 text-[0.68rem] font-bold tracking-wider text-gold backdrop-blur-md border border-gold/25 shadow-sm uppercase">
                  <span className="size-1.5 rounded-full bg-emerald-400" />
                  House Reserve
                </span>
                <span className="text-[0.68rem] font-mono text-cream/70 tracking-wide bg-forest-deep/80 px-2.5 py-1 rounded-full backdrop-blur-sm border border-forest-border/40">
                  Bhuj, Gujarat
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: Editorial Typography & Quality Badges */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            <div className="flex items-center gap-2 mb-3">
              <span className="size-2 rounded-full bg-gold" />
              <span className="eyebrow text-gold !text-[0.72rem] !tracking-[0.25em]">
                Single-Origin Extraction
              </span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-cream leading-tight">
              Slow-Steeped Arabica. <br />
              <span className="text-gold italic font-normal">Sealed in Heritage Glass.</span>
            </h3>

            <p className="mt-4 text-sm sm:text-base text-cream/80 font-sans leading-relaxed">
              Every batch of Forresta Cold Brew is slow-extracted over sixteen deliberate hours from
              high-altitude arabica beans. Brewed at chilled cellar temperatures to eliminate acidity,
              the result is a remarkably velvety body with subtle notes of roasted cacao, toasted hazelnut,
              and wild honey.
            </p>

            <p className="mt-3 text-xs sm:text-sm text-cream/65 font-sans leading-relaxed">
              Hand-filled and vacuum-sealed into dark vintage glass bottles right here in our Bhuj garden café,
              ensuring peak botanical aromatics whenever you pop the seal.
            </p>

            {/* Quality Pillars Grid */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="flex items-center gap-3 rounded-2xl border border-forest-border/70 bg-forest-card/50 p-3.5 backdrop-blur-sm transition-all hover:border-gold/40 hover:bg-forest-card/80">
                <div className="flex items-center justify-center size-9 rounded-xl bg-gold/15 text-gold shrink-0 border border-gold/20">
                  <Clock className="size-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-cream">16-Hour Cold Extraction</h4>
                  <p className="text-[0.7rem] text-cream/60">Zero bitterness, maximum clarity</p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-forest-border/70 bg-forest-card/50 p-3.5 backdrop-blur-sm transition-all hover:border-gold/40 hover:bg-forest-card/80">
                <div className="flex items-center justify-center size-9 rounded-xl bg-gold/15 text-gold shrink-0 border border-gold/20">
                  <Coffee className="size-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-cream">Single-Origin Arabica</h4>
                  <p className="text-[0.7rem] text-cream/60">High-altitude estate beans</p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-forest-border/70 bg-forest-card/50 p-3.5 backdrop-blur-sm transition-all hover:border-gold/40 hover:bg-forest-card/80">
                <div className="flex items-center justify-center size-9 rounded-xl bg-gold/15 text-gold shrink-0 border border-gold/20">
                  <Droplet className="size-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-cream">Heritage Glass Bottle</h4>
                  <p className="text-[0.7rem] text-cream/60">Preserves botanical notes, zero plastic</p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-forest-border/70 bg-forest-card/50 p-3.5 backdrop-blur-sm transition-all hover:border-gold/40 hover:bg-forest-card/80">
                <div className="flex items-center justify-center size-9 rounded-xl bg-gold/15 text-gold shrink-0 border border-gold/20">
                  <ShieldCheck className="size-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-cream">Freshly Bottled Daily</h4>
                  <p className="text-[0.7rem] text-cream/60">Crafted on location in Bhuj</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-gold text-forest-deep text-xs sm:text-sm font-semibold tracking-wide shadow-gold transition-all duration-300 hover:bg-gold-light hover:scale-102 active:scale-98 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                <span>Visit Forresta &amp; Taste</span>
                <ChevronRight className="size-4" />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('menu')}
                className="inline-flex items-center gap-2 h-12 px-6 rounded-full border border-forest-border bg-forest-card/60 text-cream/90 text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 hover:text-cream hover:border-gold/50 hover:bg-forest-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                <span>View Complete Menu</span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
