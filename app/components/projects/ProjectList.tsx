"use client"

import { motion, scroll } from 'framer-motion'
import Image from 'next/image';
import { useRef, useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'

type Props = {
  projects: Projects;
}

export default function ProjectList( {projects}: Props ) {

  const [currentIndex, setCurrentIndex] = useState(0);

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
      <div className="carousel">
        <div className="inner-carousel flex">
          <FaChevronLeft onClick={handlePrevious} />
          <Image src={`${projects[currentIndex === 0 ? projects.length - 1 : currentIndex - 1].img}`} alt="something" width={300} height={300} />
          <Image src={`${projects[currentIndex].img}`} alt="something" width={500} height={500} />
          <Image src={`${projects[currentIndex === projects.length - 1 ? 0 : currentIndex + 1].img}`} alt="something" width={300} height={300} />
          <FaChevronRight onClick={handleNext}/>
        </div>
      </div>
    </div>
  )
}
