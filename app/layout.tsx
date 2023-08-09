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

          {/* NAME ABOVE HEADER */}
          <section className='flex justify-center bg-[#D0E7FF]'>
            <h1 className='p-4 text-3xl ml-6 font-black tracking-[.6rem]'>
              matthieu
            </h1>
            <h1 className='p-4 text-3xl font-thin tracking-[.5rem]'>
              fernandez
            </h1>
          </section>
          {/* END NAME SECTION */}

          <Navbar />
          {children}
        </body>
      </html>
    )
  }
