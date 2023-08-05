import Link from 'next/link'
// import Head from 'next/head'

export default function Navbar() {
  return (
    <nav className='bg-[#FBEAFF] border-y-4 border-black p-4 flex justify-between flex-col md:flex-row sticky top-0 '>
        <h1 className='text-2xl font-bold text-black'>
            <Link href="/">Home</Link>
        </h1>
        <h1 className='text-2xl text-black'>
          About
        </h1>
        <h1 className='text-2xl text-black'>
          Portfolio
        </h1>
        <h1 className='text-2xl text-black'>
          GitHub
        </h1>
        <h1 className='text-2xl text-black'>
          LinkedIn
        </h1>
    </nav>
  )
}
