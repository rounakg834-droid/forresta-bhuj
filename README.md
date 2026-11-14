# FORRESTA BHUJ 🌿☕

> **Premium Botanical Garden Café & Artisanal Kitchen**  
> *HIMS Business Park, Airport Road, Bhuj, Gujarat, India*

A cinematic, mobile-first WebGL 3D website built for **FORRESTA BHUJ**. The experience combines a real-time Three.js 3D coffee house, spline-based camera journeys across café stations, an interactive drink turntable, editorial photo galleries with authentic café photography, and an artisanal menu.

---

## ✨ Features

### 1. ☕ Real-time 3D WebGL Coffee House
- **Three.js (r187) & React Three Fiber**: Fully rendered 3D architectural coffee house with warm volumetric lighting, soft dust motes, floating coffee beans, and animated steam wisps.
- **Cinematic 5-Station Camera Flight**: Seamless spline journeys triggered by navigation and scrolling across `#home`, `#about`, `#gallery`, `#menu`, and `#contact`. Smooth page dimming during camera transit.
- **In-World Picture Frames**: Real Forresta Bhuj photographs dynamically mapped onto 10 framed canvas meshes hanging on the walls inside the 3D room.
- **Adaptive Performance & Quality Tiering**: Automatically detects GPU capability and device pixel ratio (DPR) with graceful fallbacks.

### 2. 🧊 Interactive 3D Drink Turntable
- **Drink Inspection Rig**: Visitors can rotate 3D drinks 360° via touch swipe or mouse drag.
- **Mesh Swapping**: Switches seamlessly between hot ceramic mugs with latte art foam and tall ribbed glasses with iced matcha layers and transparent ice cubes.
- **INR (`₹`) Pricing**: Fully integrated with Forresta's signature drink list (*Signature Spanish Latte*, *Caramel Macchiato*, *Iced Matcha Latte*, *Mocha Espresso*).

### 3. 📱 Mobile-First Native App Experience
- Designed and tested across **360px, 375px, 390px, and 430px** viewports.
- Zero horizontal overflow, touch-responsive quick dock, full-screen drawer menu, and gesture-driven galleries.
- Instant hydration and zero blank screens on reload.

### 4. 📸 Interactive Editorial Photography
- **100% Authentic Photos**: All imagery sourced exclusively from real Forresta Bhuj café photography (`public/assets/images/forrestabhuj IMAGE/`).
- **Masonry Layout & Lightbox**: Responsive multi-column layout with zoom transitions, keyboard navigation (Escape, Left, Right), and touch swipe support.

### 5. 🍽️ Artisanal Culinary Menu
- Complete menu covering specialty coffees, signature bottled shakes, gourmet grilled sandwiches, and royal kulhad beverages.
- Dietary tags (Vegetarian, Chef's Special, Signature) and live search/filter functionality.

### 6. 📍 Visit & Contact Information
- Location: HIMS Business Park, Airport Road, Bhuj, Gujarat 370001
- Timings: Open daily from 11:00 AM to 11:00 PM
- Integrated Google Maps directions, direct WhatsApp inquiry, and call links.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript
- **Bundler & Build**: Vite 6+
- **Styling**: Tailwind CSS 4
- **3D & WebGL**: Three.js (r187), `@react-three/fiber`, `@react-three/drei`, `@react-three/postprocessing`
- **Animations**: GSAP 3.15 + ScrollTrigger, Motion
- **Icons**: Lucide React

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18.0 or higher recommended)
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/rounakg834-droid/forresta-bhuj.git
cd forresta-bhuj

# Install dependencies
npm install

# Start development server
npm run dev
```

### Production Build

```bash
# Type check and build optimized bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 📁 Project Structure

```
├── .github/workflows/    # CI/CD and deployment workflows
├── public/
│   ├── assets/images/    # Authentic Forresta Bhuj photography & assets
│   └── models/           # 3D world models (kemen-world.glb)
├── src/
│   ├── components/       # UI components (Navbar, Lightbox, MenuStage, SceneBackdrop, etc.)
│   ├── data/             # Menu, gallery, scenes, and café metadata
│   ├── hooks/            # Custom React hooks (useScene, useActiveSection, useFocusTrap)
│   ├── sections/         # Page sections (Hero, About, BottleShowcase, Experience, Gallery, Menu, Contact)
│   ├── styles/           # Tailwind CSS & global styling
│   └── world/            # 3D WebGL world (WorldCanvas, Director, CoffeeHouse, ProductTurntable, etc.)
├── index.html            # Main HTML entry with SEO metadata
├── package.json          # Project dependencies & scripts
├── tsconfig.json         # TypeScript configuration
└── vite.config.ts        # Vite configuration
```

---

## 📄 License

Private repository for FORRESTA BHUJ. All brand assets and photographs are proprietary.
