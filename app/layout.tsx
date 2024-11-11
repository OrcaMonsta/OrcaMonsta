import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'

const cornerstone = localFont({
  src: '../public/cornerstone.ttf',
  variable: '--font-cornerstone'
})

export const metadata: Metadata = {
  title: 'Orca Monsta',
  description: 'Step into the trenches',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cornerstone.variable}>
      <body>{children}</body>
    </html>
  )
}