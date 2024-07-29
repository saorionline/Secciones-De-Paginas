import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Medical App',
  description: 'Women´s Health',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='relative isolate overflow-hidden bg-gray-200 '>
          <Image
              alt="Transistor"
              src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
              width={138}
              height={38}
              className="mt-4 mb-4 col-span-2 max-h-8 w-full object-contain lg:col-span-1"
            />
        </div>
        {children}
      </body>
    </html>
  )
}