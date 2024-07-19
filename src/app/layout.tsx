import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import MobileMenu from '../components/MobileMenu.js'; // Assuming 'components' directory
import Features from '../components/Features.js';
import CallToAction from '../components/Call-to-action.js';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Saori´s App',
  description: 'Desde Bogotá al mundo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MobileMenu />
        <Features />
        <CallToAction />
        {children}
      </body>
    </html>
  )
}