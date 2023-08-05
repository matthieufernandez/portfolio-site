import './globals.css'
import type { Metadata } from 'next'
import { Arimo } from 'next/font/google'
import Navbar from './components/Navbar'

const arimo = Arimo({ 
  subsets: ['latin'], 
  // weight: ['400', '700'], 
})

export const metadata: Metadata = {
  title: 'Matthieu Fernandez',
  description: 'My portfolio site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={arimo.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
