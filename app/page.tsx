import Image from 'next/image'
import HeroSection from '@/components/HeroSection'
import About from '@/components/Aboutme'
import Skills from '@/components/Skillsection'
import PortfolioSection from '@/components/PortfolioSection'
import ContactMe from '@/components/ContactMe'


const Home = () => {
  return (
    <div className='max-w-screen-xl mx-auto px-0 py-0'>
      <HeroSection />
      <About />
      <Skills />
      <PortfolioSection />
      <ContactMe />
    </div>
  )
}

export default Home


{/* <div className='relative'>
      <div className="absolute top-0 left-0 w-1/2 overflow-hidden leading-none">
        <svg className="relative block h-1/2 custom-shape" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 130" preserveAspectRatio="none">
          <path d="M1200 120L0 16.48 0 0 1200 0 1200 120y" className="fill-slate-950"></path>
        </svg>
      </div>
    </div> */}