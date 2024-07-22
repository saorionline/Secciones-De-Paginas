import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import MobileMenu from '../components/A-MobileMenu.js'; // Assuming 'components' directory


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bogart App',
  description: 'Desde STEAM Bogotá al mundo',
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
        
        {children}
      </body>
    </html>
  )
}