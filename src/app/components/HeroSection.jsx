"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
   <section>
          <div className="grid grid-col-1 sm:grid-cols-12">
            <div className="col-span-7 place-self-center text-center sm:text-left">
               <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-green-500 ">Hello, I'm <br/>Nisar Khan{" "}
              </span>
              <br></br>
               <TypeAnimation
                  sequence={[
                  'Programmer',
                  1000, 
                  'Web Developer',
                  1000,
                  'React Developer',
                  1000,
                  'Designer',
                  1000
               ]}
               wrapper="span"
               speed={50}
               repeat={Infinity}
               /></h1>
               <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">I am a Computer Science Student.</p>
               <div>
                  <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-yellow-500 to-green-500 hover:bg-slate-200 text-white">
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLScgb7cIAYxpPKNjZsf883aHrhOkKYHd50lYxTDZhvp__2c2kg/viewform?vc=0&c=0&w=1&flr=0">Hire Me !</a>
                  </button>
                  <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-yellow-500 to-green-500 hover:bg-slate-800 text-white mt-3">
                  <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                     <a href="/files/Nisar_khan Resume_NW.pdf" download>Download Resume</a>
                  </span>
                  </button>
               </div>
            </div>
            <div className="col-span-5 place-self-center mt-4 lg:mt-0">
               <div className="rounded-full bg-[#181818] w-[250px]  h-[250px] lg:w-[250px] lg:h-[250px] relative">
                  <Image src="/images/bgr-pic.png"
                  alt='Hero Image'
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  width={150}
                  height={150}
                  />
               </div>
            </div>
          </div>
   </section>
  );
};

export default HeroSection;