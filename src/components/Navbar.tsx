import { Menu, MapPin } from 'lucide-react'
import { motion } from 'motion/react'
import { useState } from 'react'
import { forrestaNavLinks } from '../data/forrestaInfo'
import { forrestaInfo } from '../data/forrestaInfo'
import { useActiveSection } from '../hooks/useActiveSection'
import { useScrollPast } from '../hooks/useScrollPast'
import { cn } from '../lib/cn'
import { MobileMenu } from './MobileMenu'
import { Wordmark } from './Wordmark'

const SECTION_IDS = forrestaNavLinks.map(({ id }) => id)
const SOLID_AFTER_PX = 30

export function Navbar() {
  const solid = useScrollPast(SOLID_AFTER_PX)
  const activeId = useActiveSection(SECTION_IDS)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header
        role="banner"
        className={cn(
          'fixed inset-x-0 top-0 z-40 transition-all duration-500 ease-out',
          solid
            ? 'bg-forest-deep/95 text-cream py-3 shadow-[0_4px_24px_-4px_rgba(10,24,19,0.8)] backdrop-blur-md border-b border-gold/20'
            : 'bg-gradient-to-b from-forest-deep/90 via-forest-deep/40 to-transparent py-4 sm:py-5 text-cream'
        )}
      >
        <nav
          aria-label="Primary navigation"
          className="container-x flex items-center justify-between"
        >
          {/* Brand Wordmark */}
          <a
            id="brand-link"
            href="#home"
            aria-label="FORRESTA BHUJ Home"
            className="group inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-lg p-1"
          >
            <Wordmark size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <ul className="hidden items-center gap-1.5 lg:flex">
            {forrestaNavLinks.map(({ id, label, href }) => {
              const active = activeId === id

              return (
                <li key={id}>
                  <a
                    href={href}
                    aria-current={active ? 'true' : undefined}
                    className={cn(
                      'relative block px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200 rounded-full',
                      active
                        ? 'text-gold font-semibold'
                        : 'text-cream/80 hover:text-cream hover:bg-forest-card/50'
                    )}
                  >
                    {label}
                    {active && (
                      <motion.span
                        layoutId="nav-indicator"
                        aria-hidden="true"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                        className="absolute inset-x-3 bottom-0 h-0.5 bg-gradient-to-r from-gold/60 via-gold to-gold/60 rounded-full"
                      />
                    )}
                  </a>
                </li>
              )
            })}
          </ul>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Desktop Visit CTA */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 rounded-full border border-gold/60 bg-gold/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-gold transition-all duration-300 hover:bg-gold hover:text-forest-deep hover:shadow-gold active:scale-95"
            >
              <MapPin className="size-3.5" />
              <span>Visit Us</span>
            </a>

            {/* Mobile Directions Quick Link */}
            <a
              href={forrestaInfo.location.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Directions in Google Maps"
              className="sm:hidden grid size-11 place-items-center rounded-full border border-gold/30 bg-forest-card/80 text-gold active:bg-gold active:text-forest-deep"
            >
              <MapPin className="size-4" />
            </a>

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open mobile navigation menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="grid size-12 place-items-center rounded-full border border-cream/15 bg-forest-card/60 text-cream transition-colors hover:border-gold/40 hover:text-gold active:bg-forest-hover lg:hidden"
            >
              <Menu aria-hidden="true" className="size-6" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Navigation */}
      <MobileMenu
        open={menuOpen}
        activeId={activeId}
        onClose={() => setMenuOpen(false)}
      />
    </>
  )
}
