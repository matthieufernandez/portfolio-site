"use client"

import Button from "./components/Button";
import Container from "./components/Container";
import InfoCard from "./components/projects/InfoCard";
import ProjectList from "./components/projects/ProjectList";
import Image from 'next/image'
import pfp from '../public/images/drawing-me.jpg'
import prof from '../public/images/me-professional-removebg.png'
import { motion } from "framer-motion";
import Form from "./components/Form";
import { useState, useEffect } from 'react'
import Link from "next/link";
import { frontend, backend, devops, languages, tools } from './lib/stack'
import { projects } from "./lib/projects";

export default function Home() {

  const [isHovered, setIsHovered] = useState(false);

  const handleHoverPicture = (e: any) => {
    e.preventDefault()
    setIsHovered(!isHovered)
  }

  return (
    <main className="max-w-full overflow-x-hidden bg-gradient-to-b from-[#D0E7FF] to-[#FF6F91]">
      
      <div id="splash" className="flex flex-col justify-center items-center px-4 py-10 min-h-[70vh] gap-3 ">
        <Container classes="">
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
                  <Link href="#portfolio">View my projects</Link>
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
              <Image src={pfp} width={450} height={450} alt="drawing of matthieu" loading="lazy" className="lg:relative md:static rounded-full border-8 border-black" />
            </motion.div>
          </div>
        </Container>
      </div>
      <div id="about" className="flex flex-col justify-center items-center px-4 py-10 min-h-[90vh]">
        <Container classes="">
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
              <div className="flex flex-col gap-8">
                <h1 className="text-6xl font-bold">About Me</h1>
                <h2 className="text-3xl font-semibold">Hi, I&apos;m Matt!</h2>
                <h2 className="text-xl font-semibold"> I&apos;m a full-stack engineer and web designer currently working in Montreal. <br /> 
                  After spending most of my life cooking and writing, I decided to take my love<br /> 
                  of tech to the next level and enrolled in Concordia University&apos;s immersive <br /> 
                  Full-Stack development program. It proved to be one of the best decisions<br />
                  I ever made. I have since dedicated myself to applying my creativit and my <br />
                  love of technology toward a career in development.
                  </h2>
              </div>
            </div>
        </Container>
        </div>

        <div id="portfolio" className="flex gap-4 flex-wrap justify-center items-center px-4 py-10 min-h-[90vh]">
          <Container classes="alt">
            <div className="flex flex-col justify-center items-center">
              <h1 className="font-bold text-2xl pb-4 z-10">
                  Frontend
              </h1>
              <InfoCard stack={frontend}/>
            </div>
          </Container>
          <Container classes="alt">
            <div className="flex flex-col justify-center items-center">
              <h1 className="font-bold text-2xl pb-4 z-10">
                  Backend
              </h1>
              <InfoCard stack={backend}/>
                
            </div>
          </Container>
          <Container classes="alt">
            <div className="flex flex-col justify-center items-center">
              <h1 className="font-bold text-2xl pb-4 z-10">
                    Devops
              </h1>
              <InfoCard stack={devops}/>
            </div>
          </Container>
          <Container classes="alt">
            <div className="flex flex-col justify-center items-center">
              <h1 className="font-bold text-2xl pb-4 z-10">
                  Languages
              </h1>
              <InfoCard stack={languages}/>
                
            </div>
          </Container>
          <Container classes="alt">
            <div className="flex flex-col justify-center items-center">
              <h1 className="font-bold text-2xl pb-4 z-10">
                  Tools
              </h1>
              <InfoCard stack={tools}/>
                
            </div>
          </Container>
      </div>
        <ProjectList projects={projects}/>
      <div id="contact" className="flex flex-col justify-center items-center px-4 py-10 min-h-[90vh]">
        <Form />
        <div id="cv" className="flex mt-6">
        <Link href="/assets/MF-CV-EN.pdf" target="__blank">
          <Button classes="rounded-full m-4 !bg-[#FBEAFF] hover:!bg-[#F9F871]">View my CV</Button>
        </Link>
        <a download href="/assets/MF-CV-EN.pdf">
          <Button classes="rounded-full m-4 !bg-[#FBEAFF] hover:!bg-[#F9F871]">Download CV</Button>
        </a>
        </div>
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



        // border-pink-300 border-solid border-4