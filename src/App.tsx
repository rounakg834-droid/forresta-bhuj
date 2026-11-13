import { MotionConfig } from 'motion/react'
import { Component, lazy, Suspense, type ReactNode } from 'react'
import { LoadingScreen } from './components/LoadingScreen'
import { Navbar } from './components/Navbar'
import { MobileQuickDock } from './components/MobileQuickDock'
import { ToastProvider } from './components/ToastProvider'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Experience } from './sections/Experience'
import { BottleShowcase } from './sections/BottleShowcase'
import { Menu } from './sections/Menu'
import { Gallery } from './sections/Gallery'
import { Contact } from './sections/Contact'
import { Footer } from './sections/Footer'

// Defensive boundary so 3D never crashes the website
class CanvasBoundary extends Component<{ children: ReactNode }> {
  state = { hasError: false }
  static getDerivedStateFromError() {
    return { hasError: true }
  }
  componentDidCatch(err: unknown) {
    console.warn('3D Canvas background disabled:', err)
  }
  render() {
    return this.state.hasError ? null : this.props.children
  }
}

// Lazy load the 3D Botanical Canvas
const ForrestaCanvas = lazy(() =>
  import('./world/ForrestaCanvas').then((mod) => ({ default: mod.ForrestaCanvas }))
)

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <ToastProvider>
        {/* Animated Loading Screen (Under 1s, non-blocking) */}
        <LoadingScreen />

        {/* Ambient 3D Botanical World Background with Error Isolation */}
        <CanvasBoundary>
          <Suspense fallback={null}>
            <ForrestaCanvas />
          </Suspense>
        </CanvasBoundary>

        {/* Skip to Main Content Accessibility Link */}
        <a
          href="#main"
          className="sr-only rounded-full bg-gold px-5 py-3 text-sm font-semibold text-forest-deep focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60]"
        >
          Skip to content
        </a>

        {/* Primary Navigation */}
        <Navbar />

        {/* Main Page Flow */}
        <main id="main" tabIndex={-1} className="relative z-10 w-full overflow-x-clip">
          <Hero />
          <About />
          <Experience />
          <Gallery />
          <BottleShowcase />
          <Menu />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Mobile-First Floating Quick Action Dock */}
        <MobileQuickDock />
      </ToastProvider>
    </MotionConfig>
  )
}
