# Dark/Light Mode Configuration Guide

## Overview

The 3D landing page now supports dark and light themes that can be configured via environment variables.

## How to Change Theme

### 1. Edit `.env.local` File

Open the `.env.local` file in the project root and change the `NEXT_PUBLIC_THEME` value:

**For Dark Mode:**
```env
NEXT_PUBLIC_THEME=dark
```

**For Light Mode:**
```env
NEXT_PUBLIC_THEME=light
```

### 2. Restart Development Server

After changing the theme in `.env.local`, you need to restart the development server:

```bash
# Stop the current server (Ctrl+C)
# Then restart:
npm run dev
```

The new theme will be applied automatically!

## Theme Differences

### Dark Mode (Default)
- **Background**: Dark purple/blue gradient
- **Text**: White/light gray
- **3D Sphere**: Bright purple (#a855f7)
- **Particles**: Cyan (#06b6d4)
- **Glassmorphism**: Semi-transparent white with blur

### Light Mode
- **Background**: Light gradient (indigo to pink)
- **Text**: Dark gray/black
- **3D Sphere**: Darker purple (#7c3aed) for better contrast
- **Particles**: Darker cyan (#0891b2)
- **Glassmorphism**: More opaque white with subtle shadows
- **Lighting**: Golden accent light for warmth

## Technical Details

### Files Modified

1. **`.env.local`** - Theme configuration
2. **`lib/theme.js`** - Theme module that reads environment variable
3. **`app/layout.js`** - Applies theme class to body element
4. **`app/globals.css`** - Light mode CSS variables
5. **`components/Scene3D.jsx`** - Theme-based 3D colors

### How It Works

1. Environment variable `NEXT_PUBLIC_THEME` is set in `.env.local`
2. `lib/theme.js` reads the variable and exports the theme value
3. `app/layout.js` applies the theme as a CSS class (`dark-theme` or `light-theme`)
4. CSS uses the theme class to apply appropriate color variables
5. 3D scene reads the theme and uses corresponding colors

## Customization

You can customize the colors for each theme by editing:

**CSS Variables** (`app/globals.css`):
```css
/* Dark theme colors */
:root {
  --primary: #a855f7;
  --secondary: #3b82f6;
  /* ... */
}

/* Light theme colors */
body.light-theme {
  --primary: #7c3aed;
  --secondary: #2563eb;
  /* ... */
}
```

**3D Scene Colors** (`components/Scene3D.jsx`):
```javascript
const THEME_COLORS = {
  dark: {
    sphere: 0xa855f7,
    particles: 0x06b6d4,
    /* ... */
  },
  light: {
    sphere: 0x7c3aed,
    particles: 0x0891b2,
    /* ... */
  }
}
```

## Example

To switch from dark to light mode:

1. Open `.env.local`
2. Change `NEXT_PUBLIC_THEME=dark` to `NEXT_PUBLIC_THEME=light`
3. Save the file
4. Restart the dev server: `npm run dev`
5. Open `http://localhost:3000` to see the light theme!
