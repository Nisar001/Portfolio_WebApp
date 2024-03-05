import React from 'react'
import GithubIcon from "../../../public/icons8-github.svg";
import LinkedinIcon from "../../../public/icons8-linkedin.svg";
import Link from 'next/link';
import Image from 'next/image';

const EmailSection = () => {
   
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-600 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
      <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
      <p className="text-[#ADB7BE] mb-4 max-w-md">
      I am currently looking for the opportunity, my inbox is always open.
      Whether you have a question or just want to say hi, I'll try my best
      to get back to you !
      </p>
      <div className="socials flex flex-row gap-2">
         <Link href="https://github.com/Nisar001">
            <Image src={GithubIcon} alt="Github Icon"/>
         </Link>
         <Link href="https://www.linkedin.com/in/nisar-khan-05b019214/">
            <Image src={LinkedinIcon} alt="LinkedIn Icon"/>
         </Link>
      </div>
      </div>
      <div>
         <form className="flex flex-col">
         <div className="mb-6">
            <label 
               htmlFor="email" 
               className="text-white block mb-2 text-sm font-medium">
            Your Email
            </label>
            <input 
               type="email" 
               id="email" 
               required
               className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
               placeholder="xyz@google.com"
            />
         </div>
         <div className='mb-6'>
            <label 
               htmlFor="subject" 
               className="text-white block mb-2 text-sm font-medium">
            Subject
            </label>
            <input 
               type="text" 
               id="subject" 
               required
               className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
               placeholder="Just say Hi !"
            />
         </div>  
         <div className="mb-6">
            <label
               htmlFor="message"
               className="text-white block text-sm mb-2 font-medium"
            >
            Message
            </label>
            <textarea
               name="message"
               id="message"
               className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
               placeholder="Let's talk about..."
            />
         </div> 
         <div className="mb-6">
            <label 
               htmlFor="email" 
               className="text-white block mb-2 text-sm font-medium">
            Today's Date
            </label>
            <input 
               type="date" 
               id="date" 
               required
               className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
               placeholder="Enter Date"
            />
         </div>
         <button
            type="submit"
            className="bg-yellow-500 hover:bg-green-500 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
               Send Message
            </button>

         </form>
      </div>
    </section>
  );
}

export default EmailSection