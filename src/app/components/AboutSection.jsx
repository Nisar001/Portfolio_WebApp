"use client";
import React, {useTransition, useState} from 'react'
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul>
        <li>1</li>
        <li>2</li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul>
        <li>B.Tech Computer Science & Engineering</li>
        <li>Higher Secondary School</li>
        <li>High School</li>
      </ul>
    )
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul>
        <li>1</li>
        <li>2</li>
      </ul>
    )
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("experience");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  }

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 ">
         <Image src="/images/about-image.jpg" width={500} height={500} alt="About Image"/>
         <div>
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I have a good background in Frontend, MERN (MongoDB, Express, React, Node.js), 
          and Java, and I am an enthusiastic student of Computer Science. My areas of competence 
          include database management, design, and web application development. 
          </p>
          <div className="flex flex-row mt-8">
            <TabButton 
            selectTab={() => handleTabChange("experience")} 
            active={tab==="experience"}>
            {" "}
            Experience
            {" "}
            </TabButton>
            <TabButton 
            selectTab={() => handleTabChange("education")} 
            active={tab==="education"}>
            {" "}
            Education
            {" "}
            </TabButton>
            <TabButton 
            selectTab={() => handleTabChange("certifications")} 
            active={tab==="certifications"}>
            {" "}
            Certifications
            {" "}
            </TabButton>
          </div>
          <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
         </div>
      </div>
    </section>
  )
}

export default AboutSection;