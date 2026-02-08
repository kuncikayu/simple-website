'use client'

import { Inter } from 'next/font/google'
import './globals.css'
import { THEME } from '../lib/theme'
import { Analytics } from '@vercel/analytics/next'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <title>3D Landing Page - Stunning Interactive Experience</title>
                <meta name="description" content="A modern landing page featuring interactive 3D animations powered by Three.js" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </head>
            <body className={`${inter.className} ${THEME}-theme`} data-theme={THEME}>
                {children}
                <Analytics />
            </body>
        </html>
    )
}
