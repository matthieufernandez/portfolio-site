import Button from "./components/Button";
import Container from "./components/Container";
import Image from 'next/image'
import pfp from '../public/images/drawing-me.jpg'


export default function Home() {

  return (
    <main className="bg-[#D0E7FF] flex flex-col items-center p-4 min-h-screen gap-3">
      <Container>
        <div className="flex items-center gap-9 lg:flex-row md: flex-col">
          <div className="flex flex-col">
            <h1 id="fade" className={"text-6xl font-bold transition-opacity ease-in duration-700 opacity-100"}>Design</h1>
            <h2 id="fade" className="text-6xl transition-opacity ease-in duration-700 opacity-100">Develop & Deploy</h2>
            <h3 id="fade" className="text-3xl py-4 transition-opacity ease-in duration-700 opacity-100">Full stack developer based in Montréal</h3>
            <div id="fade" className="transition-opacity ease-in duration-700 opacity-100">
              <Button>
                View my projects
              </Button>
            </div>
          </div>
          <div>
            <Image src={pfp} width={400} height={400} alt="drawing of matthieu" loading="lazy" className="lg:relative md:static rounded-full border-8 border-black left-[4.5rem] top-[3rem]" />
          </div>
        </div>
      </Container>
    </main>
  )
}

// shadow-[10px_10px_0_black]

// #845EC2
// #FF9671
// #FF6F91
// #D65DB1