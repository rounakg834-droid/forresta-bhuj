import { cn } from '../lib/cn'

interface WordmarkProps {
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  lightMode?: boolean
}

export function Wordmark({ className, size = 'md', lightMode = false }: WordmarkProps) {
  const sizeClasses = {
    sm: 'text-lg sm:text-xl',
    md: 'text-xl sm:text-2xl lg:text-[1.7rem]',
    lg: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl',
    xl: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl',
  }

  return (
    <div className={cn('inline-flex flex-col items-start leading-none tracking-tight select-none', className)}>
      <div className={cn('flex items-center gap-1 font-serif font-light tracking-[0.12em] sm:tracking-[0.14em]', sizeClasses[size])}>
        {/* F-O-R-R-E-S-T-A with leaf emblem integrated */}
        <span className={cn(lightMode ? 'text-forest' : 'text-cream')}>FORREST</span>
        <span className={cn(lightMode ? 'text-forest' : 'text-cream')}>A</span>
        {/* Botanical leaf emblem */}
        <svg
          aria-hidden="true"
          className={cn(
            'size-[0.68em] -ml-0.5 inline-block animate-pulse-subtle',
            lightMode ? 'text-gold-dark' : 'text-gold'
          )}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
        </svg>
      </div>
      <div className="flex w-full items-center justify-between gap-1.5 sm:gap-2 pt-1">
        <span className="h-px flex-1 bg-gold/40" />
        <span
          className={cn(
            'font-sans text-[0.56rem] sm:text-[0.66rem] font-bold tracking-[0.28em] sm:tracking-[0.38em] uppercase',
            lightMode ? 'text-gold-dark' : 'text-gold'
          )}
        >
          BHUJ • GUJARAT
        </span>
        <span className="h-px flex-1 bg-gold/40" />
      </div>
    </div>
  )
}
