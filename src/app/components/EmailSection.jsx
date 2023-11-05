import React from 'react'
import GithubIcon from "../../../public/icons8-github.svg";
import LinkedinIcon from "../../../public/icons8-linkedin.svg";
import Link from 'next/link';
import Image from 'next/image';

const EmailSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
      <div>
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
         <form className="flex flex-col gap-4">
            <label htmlFor="email" className="text-white">Your Email</label>
            <input 
            type="email" 
            id="email" 
            required
            placeholder="xyz@google.com"
            />
         </form>
      </div>
    </section>
  );
}

export default EmailSection