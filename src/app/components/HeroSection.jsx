import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
   <section>
          <div className="grid grid-col-1 lg:grid-cols-12">
            <div className="col-span-7 place-self-center">
               <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">Hello, I'm Nisar</h1>
               <p className="text-[#ADB7BE] text-lg mb-6 lg:text-xl">I have a good background in Frontend, MERN (MongoDB, Express, React, Node.js), 
               and Java, and I am an enthusiastic student of Computer Science. My areas of competence 
               include database management, design, and web application development. 
               </p>
               <div>
                  <button>Hire Me !</button>
                  <button>Download Resume</button>
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