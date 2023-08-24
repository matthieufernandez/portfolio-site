"use client"

import { motion, scroll } from 'framer-motion'
import Image from 'next/image';
import { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'

type Props = {
  projects: Projects;
}

export default function ProjectList( {projects}: Props ) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [display, setDisplay] = useState(false);

  const handleNext = () => {
    setCurrentIndex( (prevIndex) => prevIndex + 1 === projects.length ? 0 : prevIndex + 1 )
  }

  const handlePrevious = () => {
    setCurrentIndex( (prevIndex) => prevIndex - 1 < 0 ? projects.length - 1 : prevIndex - 1 )
  }

  const handleClick = (index: number) => {
    setCurrentIndex(index);
  }


  return (
    <div>
      <div className="carousel flex justify-center items-center">
        <div className="inner-carousel flex justify-center items-center gap-4">
          <div className="flex items-center justify-start hover:cursor-pointer p-4 w-10 h-10 mr-7 rounded-full bg-slate-50/50 hover:bg-slate-50/75" onClick={handlePrevious} >
            <FaChevronLeft className="scale-150" />
          </div>
          <motion.div className="border-4 border-black shadow-[6px_6px_0_black]">
            <Image className="max-h-[500px]" src={`${projects[currentIndex === 0 ? projects.length - 1 : currentIndex - 1].img}`} alt="carousel picture" width={300} height={300} />
          </motion.div>
          <motion.div className="border-4 border-black shadow-[6px_6px_0_black]">
            <Image className="min-h-[600px]" src={`${projects[currentIndex].img}`} alt={`${projects[currentIndex].name}`} width={500} height={700} />
          </motion.div>
          <motion.div className="border-4 border-black shadow-[6px_6px_0_black]">
            <Image className="max-h-[500px]" src={`${projects[currentIndex === projects.length - 1 ? 0 : currentIndex + 1].img}`} alt="carousel picture" width={300} height={300} />
          </motion.div>
          <div className="flex items-center justify-start hover:cursor-pointer p-4 w-10 h-10 ml-7 rounded-full bg-slate-50/50 hover:bg-slate-50/75" onClick={handlePrevious} >
            <FaChevronRight className="scale-150" />
          </div>
        </div>
      </div>
    </div>
  )
}
