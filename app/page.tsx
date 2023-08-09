"use client"

import Button from "./components/Button";
import Container from "./components/Container";
import Image from 'next/image'
import pfp from '../public/images/drawing-me.jpg'
import prof from '../public/images/me-professional-removebg.png'
import { motion } from "framer-motion";
import { useState, useEffect } from 'react'


export default function Home() {

  const [isHovered, setIsHovered] = useState(false);

  const handleHoverPicture = (e: any) => {
    e.preventDefault()
    setIsHovered(!isHovered)
    console.log(isHovered)
  }

  return (
    <main className="max-w-full overflow-x-hidden">
      <div id="splash" className="bg-[#D0E7FF] flex flex-col justify-center items-center px-4 py-10 min-h-[70vh] gap-3">
        <Container>
          <div className="flex items-center gap-9 lg:flex-row md: flex-col">
            <motion.div className="flex flex-col" 
              transition={{
                  duration: .2,
                  ease: "linear",
                  delay: .1
              }}>
              <h1 id="fade" className="text-6xl font-bold">Design</h1>
              <h2 id="fade" className="text-6xl">Develop & Deploy</h2>
              <h3 id="fade" className="text-3xl py-4 mb-3">Full stack developer based in Montréal</h3>
              <div id="fade" className="mt-3">
                <Button classes="">
                  View my projects
                </Button>
              </div>
            </motion.div>
            <motion.div 
          whileInView={{
              opacity: 1,
              x: 50,
              y: 50,
              rotate: 0
          }}
          initial={{
              opacity: 0,
              x: 150,
              y: 50,  
              rotate: 10,
          }}
          transition={{
              duration: .3,
              delay: .2,
          }}>
              <Image src={pfp} width={400} height={400} alt="drawing of matthieu" loading="lazy" className="lg:relative md:static rounded-full border-8 border-black" />
            </motion.div>
          </div>
        </Container>
      </div>
      <div id="about" className="bg-[#D0E7FF] flex flex-col justify-center items-center px-4 py-10 min-h-[90vh]">
        <Container>
          <div className="flex flex-row">
            <motion.div style={{borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%"}} 
              whileInView={{
                  opacity: 1,
                  x: -30,
                  y: -50,
                  rotate: 0
              }}
              initial={{
                  opacity: 0,
                  x: 10,
                  y: 0,  
                  rotate: 10,
              }}
              transition={{
                  duration: .3,
                  // delay: .3
              }} 
              whileHover={{
                rotate: -10,
                scale: 1.1,
                transition: {
                  delay: 0,
                }
              }}>
                <div style={isHovered ? {} : {display: "none"}} className="flex w-5">
                  <div className="absolute p-4 bg-[#FF6F91] rounded-tr-lg rounded-tl-lg rounded-bl-lg top-[-5rem] border-4 border-black shadow-[6px_6px_0_black]">
                    <h3 className="text-xl font-semibold">HELLO 😁</h3>
                  </div>
                </div>
                <Image onMouseLeave={handleHoverPicture} onMouseEnter={handleHoverPicture} src={prof} width={380} height={380} style={{borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%"}} alt="photograph of Matt's face" loading="lazy" className="lg:relative md:static border-8 border-black bg-[url('../public/images/test.png')] mix-blend-overlay" />
              </motion.div>
              <div className="flex flex-col gap-4">
                <h1 className="text-6xl font-bold">About Me</h1>
                <h2 className="text-4xl font-semibold">Hi, I'm Matt!</h2>
                <h2 className="text-2xl font-semibold"> I'm a full-stack engineer and web designer currently 
                  <br /> working in Montreal. After spending most of my life <br /> 
                  cooking and writing, I decided to take my love of <br />
                  tech to the next level and enrolled in Concordia University's <br /> 
                  immersive Full-Stack development program. <br />
                  It proved to be one of the best decisions I ever made. <br />
                  I have since dedicated myself to applying my creativity <br />
                  and my love of technology toward a career in development.

                  
                  </h2>
              </div>
            </div>
        </Container>
      </div>
      <div id="portfolio" className="bg-[#D0E7FF] flex flex-col justify-center items-center px-4 py-10 min-h-[90vh]">
        <Container>
          <h1>
            THIS IS JUST A TEST
          </h1>
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sequi incidunt officia eius. Cupiditate, tempore.
          </h2>
          <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint vitae aliquam labore consequuntur mollitia reiciendis odio voluptatibus quidem laudantium suscipit beatae magni doloribus ad tempore optio dicta illo ab voluptas incidunt natus, et soluta nostrum harum excepturi. Odit eos doloribus quam deleniti debitis tempora, rerum sapiente excepturi ipsum officiis nulla veniam nam? Inventore accusamus cupiditate adipisci, voluptatum omnis voluptates illum explicabo consequuntur voluptate consectetur vitae sunt sapiente, rerum est dolores impedit molestias nisi ea laboriosam reprehenderit culpa ratione necessitatibus, iure itaque. Consequuntur magni aperiam sint laudantium nesciunt! Soluta omnis ut aperiam animi officia doloribus illo, reprehenderit unde autem accusantium minima!</h2>
        </Container>
      </div>
    </main>
  )
}

// shadow-[10px_10px_0_black]

// #845EC2
// #FF9671
// #FF6F91
// #

// left-[4.5rem] top-[3rem]

// bg-gradient-to-tr from-purple-600