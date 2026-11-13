import { X, MapPin, Phone, Clock } from 'lucide-react'
import { InstagramIcon } from './SocialIcons'
import { AnimatePresence, motion } from 'motion/react'
import { useRef, type MouseEvent } from 'react'
import { forrestaNavLinks, forrestaInfo } from '../data/forrestaInfo'
import { useFocusTrap } from '../hooks/useFocusTrap'
import { useScrollLock } from '../hooks/useScrollLock'
import { cn } from '../lib/cn'
import { easePremium } from '../lib/motion'
import { scrollToSection } from '../lib/scrollToSection'
import { Wordmark } from './Wordmark'

interface MobileMenuProps {
  open: boolean
  activeId: string
  onClose: () => void
}

export function MobileMenu({ open, activeId, onClose }: MobileMenuProps) {
  useScrollLock(open)

  return (
    <AnimatePresence>
      {open && <MobileMenuDialog activeId={activeId} onClose={onClose} />}
    </AnimatePresence>
  )
}

function MobileMenuDialog({ activeId, onClose }: Omit<MobileMenuProps, 'open'>) {
  const dialogRef = useRef<HTMLDivElement>(null)
  useFocusTrap(dialogRef, onClose)

  const handleNavigate = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault()
    onClose()
    window.requestAnimationFrame(() => scrollToSection(id))
  }

  return (
    <motion.div
      ref={dialogRef}
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
      initial={{ opacity: 0, x: '100%' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: '100%' }}
      transition={{ duration: 0.4, ease: easePremium }}
      className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-forest-deep text-cream"
    >
      {/* Drawer Header */}
      <div className="container-x flex h-20 shrink-0 items-center justify-between border-b border-forest-border">
        <Wordmark size="sm" />
        <button
          type="button"
          onClick={onClose}
          aria-label="Close navigation menu"
          className="grid size-12 place-items-center rounded-full border border-gold/30 bg-forest-card text-gold transition-colors hover:bg-gold hover:text-forest-deep"
        >
          <X aria-hidden="true" className="size-6" />
        </button>
      </div>

      {/* Navigation Links */}
      <nav aria-label="Mobile navigation" className="container-x flex flex-1 flex-col justify-center py-6">
        <ul className="divide-y divide-forest-border/60">
          {forrestaNavLinks.map(({ id, label, number }, index) => {
            const isActive = activeId === id

            return (
              <motion.li
                key={id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: 0.08 + index * 0.05, ease: easePremium }}
              >
                <a
                  href={`#${id}`}
                  onClick={(event) => handleNavigate(event, id)}
                  aria-current={isActive ? 'true' : undefined}
                  className={cn(
                    'group flex items-center justify-between py-4 text-left transition-colors',
                    isActive ? 'text-gold' : 'text-cream hover:text-gold'
                  )}
                >
                  <span className="font-serif text-2xl sm:text-3xl font-light tracking-wide">
                    {label}
                  </span>
                  <span className="font-sans text-xs font-semibold tracking-widest text-gold/60 group-hover:text-gold">
                    {number}
                  </span>
                </a>
              </motion.li>
            )
          })}
        </ul>
      </nav>

      {/* Café Quick Details & Action Drawer Footer */}
      <div className="container-x shrink-0 border-t border-forest-border bg-forest-card/50 py-6 space-y-4">
        {/* Address & Hours snippet */}
        <div className="space-y-2 text-xs text-cream/70">
          <div className="flex items-center gap-2 text-gold">
            <MapPin className="size-3.5 shrink-0" />
            <span className="font-semibold">{forrestaInfo.location.venue}, {forrestaInfo.location.street}</span>
          </div>
          <p className="pl-5 text-cream/60">{forrestaInfo.location.city}, {forrestaInfo.location.state}</p>
          <div className="flex items-center gap-2 pt-1 text-cream/80">
            <Clock className="size-3.5 shrink-0 text-gold" />
            <span>{forrestaInfo.timings.hours} ({forrestaInfo.timings.days})</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3 pt-2">
          <a
            href={forrestaInfo.location.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl bg-gold py-3 text-xs font-bold uppercase tracking-wider text-forest-deep shadow-gold active:scale-95"
          >
            <MapPin className="size-4" />
            <span>Directions</span>
          </a>

          <a
            href={forrestaInfo.contact.phoneHref}
            className="flex items-center justify-center gap-2 rounded-xl border border-gold/40 bg-forest-card py-3 text-xs font-bold uppercase tracking-wider text-gold active:bg-gold/10"
          >
            <Phone className="size-4" />
            <span>Call Café</span>
          </a>
        </div>

        {/* Instagram social link */}
        <div className="pt-2 text-center">
          <a
            href={forrestaInfo.contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs text-gold/80 hover:text-gold"
          >
            <InstagramIcon className="size-4" />
            <span>Follow on Instagram {forrestaInfo.contact.instagramHandle}</span>
          </a>
        </div>
      </div>
    </motion.div>
  )
}
