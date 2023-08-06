import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className='bg-[#FBEAFF] border-y-4 border-black p-2 flex justify-between flex-col items-center z-50 md:flex-row sticky top-0 '>
        <h1 className='text-2xl font-bold text-black group transition duration-300 ml-3'>
            <Link href="/">Home</Link>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-black"></span>
        </h1>
        <div className='flex'>
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