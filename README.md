# 3D Landing Page - Next.js & Three.js

A stunning landing page featuring interactive 3D animations powered by React Three Fiber and Next.js.

## Features

- 🎨 **Modern Design** - Dark theme with glassmorphism effects
- 🌟 **3D Animations** - Interactive animated sphere with distortion effects
- ✨ **Particle System** - Dynamic floating particles
- 🎯 **Interactive** - Mouse-controlled camera rotation
- 🌓 **Dark/Light Mode** - Configurable theme via .env file
- 📱 **Responsive** - Works perfectly on all devices
- ⚡ **Optimized** - Built with Next.js for best performance

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Theme Configuration

The app supports both dark and light themes. To change the theme:

1. Edit `.env.local` file in the project root
2. Set `NEXT_PUBLIC_THEME` to either `dark` or `light`:
   ```env
   NEXT_PUBLIC_THEME=dark  # or light
   ```
3. Restart the development server

See [THEME_GUIDE.md](./THEME_GUIDE.md) for detailed theme customization options.

## Project Structure

```
simple-website/
├── app/
│   ├── layout.js          # Root layout with metadata
│   ├── page.js            # Main landing page
│   ├── page.module.css    # Page-specific styles
│   └── globals.css        # Global styles and theme
├── components/
│   └── Scene3D.jsx        # 3D scene component
├── lib/
│   └── theme.js           # Theme configuration
├── .env.local             # Environment variables (theme config)
├── .env.example           # Environment variables template
├── package.json
├── next.config.js
└── THEME_GUIDE.md         # Theme customization guide
```

## Technologies Used

- **Next.js 15** - React framework
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Helper components for R3F
- **Three.js** - 3D graphics library

## Build for Production

```bash
npm run build
npm start
```

## Customization

### Change Colors

Edit the CSS variables in `app/globals.css`:

```css
:root {
  --primary: #a855f7;    /* Purple */
  --secondary: #3b82f6;  /* Blue */
  --accent: #06b6d4;     /* Cyan */
}
```

### Modify 3D Scene

Edit `components/Scene3D.jsx` to change:
- Sphere size and distortion
- Particle count and colors
- Camera position and rotation speed
- Lighting effects

## License

MIT
