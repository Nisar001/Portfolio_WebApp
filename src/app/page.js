import Image from 'next/image';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import ProjectSection from './components/ProjectSection';
import EmailSection from './components/EmailSection';
import Footer from './components/Footer';
import SkillSection from './components/SkillSection';

export default function Home() {
  return (
    <main className="flex min-h-scree h-full w-full flex-col bg-[#121212] container bg-cover">
     <Navbar/>
      <div className="container mt-24 mx-auto px-12 py=4">  
      <HeroSection/>
      <AboutSection/>
      <SkillSection/>
      <ProjectSection/>
      <EmailSection/>
      </div>
      <Footer/>
    </main>
  )
}
