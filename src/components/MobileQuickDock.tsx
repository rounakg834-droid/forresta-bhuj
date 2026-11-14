import { MapPin, Phone, UtensilsCrossed } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import { useScrollPast } from '../hooks/useScrollPast'
import { forrestaInfo } from '../data/forrestaInfo'

export function MobileQuickDock() {
  const visible = useScrollPast(300)

  return (
    <AnimatePresence>
      {visible && (
        <motion.aside
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 32 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-4 bottom-4 z-40 lg:hidden pointer-events-auto"
          aria-label="Quick café actions"
        >
          <div className="mx-auto max-w-md rounded-2xl bg-forest-card/95 p-2 shadow-2xl backdrop-blur-xl border border-gold/30">
            <div className="grid grid-cols-3 gap-2">
              <a
                href="#menu"
                className="flex flex-col items-center justify-center gap-1 rounded-xl py-2 px-1 text-center text-cream transition-colors active:bg-forest-hover"
              >
                <UtensilsCrossed className="size-4 text-gold" />
                <span className="text-[0.68rem] font-semibold tracking-wide">Menu</span>
              </a>

              <a
                href={forrestaInfo.location.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-1 rounded-xl bg-gold/15 py-2 px-1 text-center text-gold transition-colors active:bg-gold/25"
              >
                <MapPin className="size-4 text-gold-light" />
                <span className="text-[0.68rem] font-bold tracking-wide">Directions</span>
              </a>

              <a
                href="#contact"
                className="flex flex-col items-center justify-center gap-1 rounded-xl py-2 px-1 text-center text-cream transition-colors active:bg-forest-hover"
              >
                <Phone className="size-4 text-gold" />
                <span className="text-[0.68rem] font-semibold tracking-wide">Visit</span>
              </a>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  )
}
