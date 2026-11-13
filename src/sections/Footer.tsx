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

      <div className="container-x py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Brand Column */}
          <div className="md:col-span-6 lg:col-span-5">
            <a href="#home" aria-label="FORRESTA BHUJ Home" className="inline-block">
              <Wordmark size="lg" />
            </a>

            <p className="mt-5 text-sm sm:text-base leading-relaxed text-cream/75 max-w-sm font-sans">
              Bhuj’s premier botanical garden café. Handcrafted multi-cuisine culinary creations,
              royal kulhad beverages, and serene open-air dining under Gujarat’s starlit skies.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={forrestaInfo.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Forresta Bhuj on Instagram"
                className="grid size-11 place-items-center rounded-full border border-gold/40 bg-forest-card text-gold hover:bg-gold hover:text-forest-deep transition-all duration-300"
              >
                <InstagramIcon className="size-5" />
              </a>

              <a
                href={forrestaInfo.location.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Find Forresta on Google Maps"
                className="grid size-11 place-items-center rounded-full border border-gold/40 bg-forest-card text-gold hover:bg-gold hover:text-forest-deep transition-all duration-300"
              >
                <MapPin className="size-5" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 lg:col-span-3">
            <h3 className="eyebrow text-gold font-bold">Explore Forresta</h3>
            <ul className="mt-4 space-y-2.5">
              {forrestaNavLinks.map(({ id, label, href }) => (
                <li key={id}>
                  <a
                    href={href}
                    className="text-sm text-cream/75 hover:text-gold transition-colors inline-block py-1"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Timings Details */}
          <div className="md:col-span-3 lg:col-span-4">
            <h3 className="eyebrow text-gold font-bold">Café Location</h3>
            <div className="mt-4 space-y-3 text-sm text-cream/75 font-sans">
              <div className="flex items-start gap-2.5">
                <MapPin className="size-4 text-gold shrink-0 mt-1" />
                <span>
                  {forrestaInfo.location.venue}, {forrestaInfo.location.street}, {forrestaInfo.location.city}, {forrestaInfo.location.state}
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="size-4 text-gold shrink-0 mt-1" />
                <span>
                  {forrestaInfo.timings.hours} ({forrestaInfo.timings.days})
                </span>
              </div>
            </div>

            <div className="mt-6">
              <a
                href="#visit"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold hover:text-gold-light"
              >
                <span>Plan Your Gathering</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="mt-14 sm:mt-18 pt-8 border-t border-forest-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/60">
          <p className="flex items-center gap-1.5 text-center sm:text-left">
            <span>© {new Date().getFullYear()} FORRESTA BHUJ. Handcrafted in Gujarat with</span>
            <Heart className="size-3 text-rose-400 fill-rose-400 inline" />
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-forest-card px-4 py-2 text-gold hover:border-gold hover:bg-gold hover:text-forest-deep transition-all duration-300"
          >
            <span className="text-[0.68rem] font-bold uppercase tracking-wider">Back to Top</span>
            <ArrowUp className="size-3.5" />
          </button>
        </div>
      </div>
    </footer>
  )
}
