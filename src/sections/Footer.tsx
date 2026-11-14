import { ArrowUp, MapPin, Clock, Heart } from 'lucide-react'
import { InstagramIcon } from '../components/SocialIcons'
import { Wordmark } from '../components/Wordmark'
import { forrestaInfo, forrestaNavLinks } from '../data/forrestaInfo'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-forest-deep text-cream border-t border-forest-border/60 overflow-hidden">
      {/* Decorative Top Accent Line with Gold Gradient */}
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      {/* Container with extra bottom padding on mobile so content is never obscured by the mobile floating quick dock */}
      <div className="container-x pt-12 sm:pt-16 pb-28 sm:pb-32 lg:pb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-7 sm:gap-8 lg:gap-12 items-start">
          {/* Brand Column */}
          <div className="md:col-span-6 lg:col-span-5">
            <a href="#home" aria-label="FORRESTA BHUJ Home" className="inline-block">
              <Wordmark size="md" />
            </a>

            <p className="mt-3.5 text-xs sm:text-base leading-relaxed text-cream/75 max-w-sm font-sans">
              A botanical garden café in Bhuj for good food, fresh vibes, and quiet conversations.
            </p>

            <div className="mt-4 sm:mt-5 flex items-center gap-3">
              <a
                href={forrestaInfo.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Forresta Bhuj on Instagram"
                className="grid size-10 place-items-center rounded-full border border-gold/40 bg-forest-card text-gold hover:bg-gold hover:text-forest-deep active:scale-95 transition-all duration-200"
              >
                <InstagramIcon className="size-4" />
              </a>

              <a
                href={forrestaInfo.location.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Find Forresta on Google Maps"
                className="grid size-10 place-items-center rounded-full border border-gold/40 bg-forest-card text-gold hover:bg-gold hover:text-forest-deep active:scale-95 transition-all duration-200"
              >
                <MapPin className="size-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 lg:col-span-3">
            <h3 className="eyebrow text-gold font-bold text-xs">Explore</h3>
            <ul className="mt-2.5 sm:mt-3 space-y-1.5 sm:space-y-2">
              {forrestaNavLinks.map(({ id, label, href }) => (
                <li key={id}>
                  <a
                    href={href}
                    className="text-xs sm:text-sm text-cream/75 hover:text-gold transition-colors inline-block py-1"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Timings Details */}
          <div className="md:col-span-3 lg:col-span-4">
            <h3 className="eyebrow text-gold font-bold text-xs">Visit</h3>
            <div className="mt-2.5 sm:mt-3 space-y-2 text-xs sm:text-sm text-cream/75 font-sans">
              <div className="flex items-start gap-2">
                <MapPin className="size-3.5 text-gold shrink-0 mt-0.5" />
                <span>
                  {forrestaInfo.location.venue}, {forrestaInfo.location.street}, {forrestaInfo.location.city}
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="size-3.5 text-gold shrink-0 mt-0.5" />
                <span>
                  {forrestaInfo.timings.hours} ({forrestaInfo.timings.days})
                </span>
              </div>
            </div>

            <div className="mt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gold hover:text-gold-light"
              >
                <span>Plan Your Visit</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="mt-8 sm:mt-12 pt-5 border-t border-forest-border/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream/60">
          <p className="flex items-center gap-1.5 text-center sm:text-left text-[0.72rem] sm:text-xs">
            <span>© 2026 FORRESTA BHUJ. Handcrafted in Gujarat with</span>
            <Heart className="size-3 text-rose-400 fill-rose-400 inline" />
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-forest-card px-3.5 py-1.5 text-gold hover:border-gold hover:bg-gold hover:text-forest-deep active:scale-95 transition-all duration-200"
          >
            <span className="text-[0.65rem] font-bold uppercase tracking-wider">Back to Top</span>
            <ArrowUp className="size-3" />
          </button>
        </div>
      </div>
    </footer>
  )
}
