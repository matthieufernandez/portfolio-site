"use client"

import { motion } from 'framer-motion'
import Image from 'next/image';
import { useRef, useEffect, useState } from 'react'

type Props = {
  projects: Projects;
}

export default function ProjectList( {projects}: Props ) {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(carousel.current)
  }, [])

  return (
    <div>
      <motion.div ref={carousel} className="carousel mx-[20%] cursor-grab overflow-hidden p-4">
        <motion.div drag="x" dragConstraints={{right: 0}} className="inner-carouse flex gap-5">
          {projects.map(project => {
            return(
              <motion.div key={project.id} className="flex min-h-[30rem] min-w-[26rem]">
                <Image src={project.img} loading="lazy" alt={project.description} width={450} height={600} className="m-4 border-4 border-black shadow-[6px_6px_0_black] pointer-events-none"/>
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>
    </div>
  )
}
