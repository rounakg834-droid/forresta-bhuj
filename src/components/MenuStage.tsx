import { useRef, useState, type KeyboardEvent, type PointerEvent } from 'react'
import { drinks } from '../data/menu'
import { cn } from '../lib/cn'
import { rig } from '../world/rig'
import { Reveal } from './Reveal'
import { SceneStage } from './SceneStage'
import { SectionHeading } from './SectionHeading'

const RADIANS_PER_PIXEL = 0.009
const KEY_TURN = 0.32
const MAX_TILT = 0.28

function tilt(amount: number) {
  rig.inspect.pitch = Math.max(-MAX_TILT, Math.min(MAX_TILT, rig.inspect.pitch + amount))
}

/** Lets the visitor pick a drink and turn it over on the bar, by dragging or with arrow keys. */
export function MenuStage() {
  const [activeId, setActiveId] = useState(drinks[0].id)
  const lastPoint = useRef<{ x: number; y: number } | null>(null)
  const active = drinks.find(({ id }) => id === activeId) ?? drinks[0]

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    lastPoint.current = { x: event.clientX, y: event.clientY }
    rig.dragging = true
  }

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!lastPoint.current) {
      return
    }
    const dx = event.clientX - lastPoint.current.x
    const dy = event.clientY - lastPoint.current.y
    rig.inspect.yaw += dx * RADIANS_PER_PIXEL
    tilt(dy * RADIANS_PER_PIXEL)
    lastPoint.current = { x: event.clientX, y: event.clientY }
  }

  const handlePointerUp = () => {
    lastPoint.current = null
    rig.dragging = false
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const moves: Record<string, () => void> = {
      ArrowLeft: () => (rig.inspect.yaw -= KEY_TURN),
      ArrowRight: () => (rig.inspect.yaw += KEY_TURN),
      ArrowUp: () => tilt(-KEY_TURN),
      ArrowDown: () => tilt(KEY_TURN),
    }
    const move = moves[event.key]

    if (move) {
      event.preventDefault()
      move()
    }
  }

  return (
    <SceneStage
      overlay={
        <div
          role="slider"
          tabIndex={0}
          aria-label="Rotate the drink. Swipe horizontally to turn it."
          aria-valuetext={active.name}
          aria-valuemin={0}
          aria-valuemax={360}
          aria-valuenow={0}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onPointerLeave={handlePointerUp}
          onKeyDown={handleKeyDown}
          className="absolute inset-x-0 top-0 h-1/3 cursor-grab touch-pan-y rounded-2xl active:cursor-grabbing lg:left-2/5 lg:h-auto lg:bottom-0"
        />
      }
    >
      <SectionHeading
        id="menu-heading"
        index="04"
        label="Artisan Coffee"
        tone="dark"
        title={
          <>
            Interactive 3D <em className="font-normal italic text-gold">Bar</em>
          </>
        }
      />
      <Reveal delay={0.1}>
        <div aria-live="polite" className="mt-4 sm:mt-5 max-w-md">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-forest-card/80 px-3 py-1 text-[0.62rem] sm:text-xs font-bold tracking-wider text-gold border border-gold/30 mb-2">
            <span>Swipe or drag drink to rotate in 3D</span>
          </div>
          <p className="font-serif text-xl sm:text-2xl md:text-3xl text-cream">
            {active.name}
            <span className="ml-2.5 sm:ml-3 text-base sm:text-lg font-sans font-semibold text-gold">₹{active.price}</span>
          </p>
          <p className="mt-1.5 leading-relaxed text-pretty text-cream/90 text-xs sm:text-sm md:text-base">{active.description}</p>
          <p className="mt-1 text-xs sm:text-sm text-gold font-medium">{active.notes}</p>
        </div>
        <div
          role="group"
          aria-label="Choose a drink to inspect in 3D"
          className="pointer-events-auto mt-4 sm:mt-5 flex w-fit max-w-full gap-1.5 overflow-x-auto rounded-full bg-forest-deep/80 p-1 backdrop-blur-md border border-forest-border no-scrollbar"
        >
          {drinks.map(({ id, name }) => (
            <button
              key={id}
              type="button"
              aria-pressed={activeId === id}
              onClick={() => {
                setActiveId(id)
                rig.drinkId = id
              }}
              className={cn(
                'h-11 shrink-0 rounded-full px-3.5 sm:px-4 text-xs font-semibold whitespace-nowrap transition-all duration-200 active:scale-95',
                activeId === id ? 'bg-gold text-forest-deep font-bold shadow-gold' : 'text-cream hover:bg-forest-card',
              )}
            >
              {name.replace('Forresta ', '')}
            </button>
          ))}
        </div>
      </Reveal>
    </SceneStage>
  )
}
