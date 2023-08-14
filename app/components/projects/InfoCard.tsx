"use client"

import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'

type Props = {
    stack: TechStack,
}

export default function InfoCard( { stack }: Props ) {

  const [display, setDisplay] = useState(false);
  const [key, setKey] = useState(0);

  const handleHover = (e: any, key: number) => {
    e.preventDefault();
    setKey(key);
    setDisplay(true);
  }

  const handleExit = (e: any) => {
    e.preventDefault();
    setDisplay(false);
    setKey(0);

    setTimeout(() => {
      setDisplay(false);
      setKey(0);
    }, 6000)
  }

  return (
    <div className="grid grid-rows-2 grid-flow-col place-items-center w-[23vw]">
    {stack.map((tec) => {
        return (
          <div key={tec.id} className=''>
            <div key={tec.id} className='flex flex-col justify-center items-center'>
              <div key={tec.id} onMouseEnter={(e) => handleHover(e, tec.id)} onMouseLeave={handleExit} className='p-2 relative whitespace-nowrap'>
                {key===tec.id && (
                  <motion.div key={tec.id} className={`${!display ? "hidden" : "flex"} bg-[#FF6F91] shadow-[4px_4px_0_black] z-30 absolute bottom-12 right-12 rounded-tr-lg rounded-tl-lg rounded-bl-lg border-solid border-4 border-black`}
                  initial={{
                    opacity: 0,
                  }} 
                  animate={{
                    opacity: 1,
                  }} 
                  transition={{
                    duration: .5,
                  }}>
                    <h3 className='font-semibold text-lg px-2'>{tec.name}</h3>
                  </motion.div>)}
                <Image src={tec.img} alt={`${tec.name} icon`} height={65} width={65} title={`${tec.name}`} />
                </div>
            </div>
          </div>
        )
    })}

    </div>
  )
}