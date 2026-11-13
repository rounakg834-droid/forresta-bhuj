import { MotionConfig } from 'motion/react'
import { SceneProvider } from './components/SceneProvider'
import { SceneBackdrop } from './components/SceneBackdrop'
import { LoadingScreen } from './components/LoadingScreen'
import { Navbar } from './components/Navbar'
import { MobileQuickDock } from './components/MobileQuickDock'
import { ToastProvider } from './components/ToastProvider'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Experience } from './sections/Experience'
import { Gallery } from './sections/Gallery'
import { BottleShowcase } from './sections/BottleShowcase'
import { Menu } from './sections/Menu'
import { Contact } from './sections/Contact'
import { Footer } from './sections/Footer'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <ToastProvider>
        <SceneProvider>
          {/* Animated Loading Screen (Under 1s, non-blocking) */}
          <LoadingScreen />

          {/* Genuine 3D WebGL World & Cinematic Camera Journey */}
          <SceneBackdrop />

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
          <main id="main" tabIndex={-1} className="relative z-10 w-full overflow-x-clip transition-opacity duration-300">
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
        </SceneProvider>
      </ToastProvider>
    </MotionConfig>
  )
}
