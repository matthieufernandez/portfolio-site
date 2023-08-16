import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className='bg-[#FBEAFF] border-y-4 border-black p-1 lg:flex justify-between items-center z-50 sticky top-0 md: hidden sm:hidden'>
        <div className='flex items-center'>
          {/* add Logo here */}
          <h1 className='text-2xl font-bold text-black group transition duration-300 ml-3'>
              <Link href="/">Home</Link>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-black"></span>
          </h1>
        </div>
        <div className='flex lg:flex-row md:flex-col'>
          <h1 className='text-2xl text-black p-4 group transition duration-300'>
            <Link href="#about">About</Link>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-black"></span>
          </h1>
          <h1 className='text-2xl text-black p-4 group transition duration-300'>
            <Link href="#portfolio">Portfolio</Link>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-black"></span>
          </h1>
          <h1 className='text-2xl text-black p-4 group transition duration-300'>
            <Link href="#contact">Contact</Link>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-black"></span>
          </h1>
          <h1 className='text-2xl text-black p-4 group transition duration-300'>
            <Link href="#contact">CV</Link>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-black"></span>
          </h1>
          <h1 className='text-2xl text-black p-4 group transition duration-300'>
            <Link href="https://github.com/matthieufernandez" target="_blank">Github</Link>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-black"></span>
          </h1>
          <h1 className='text-2xl text-black p-4 group transition duration-300'>
            <Link href="https://www.linkedin.com/in/matthieu-fernandez-developer/" target="_blank">LinkedIn</Link>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-black"></span>
          </h1>
        </div>
    </nav>
  )
}

// hover:underline hover:duration-300 decoration-4