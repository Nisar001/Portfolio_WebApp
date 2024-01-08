"use client";
import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag';


const projectsData = [
   {
      id: 1,
      title: "V-Room ",
      description: "Video Conferencing Web Application based on React, Redux, Typescript and Firebase also include the Zego-Cloud.",
      image: "/images/projects/vroom.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/Nisar001/V_Room",
      previewUrl: "https://github.com/Nisar001/V_Room",
   },
   {
      id: 2,
      title: "3D Mario",
      description: "A mario game in 3d which is developed on unity software and c# is used for scripting.",
      image: "/images/projects/marioImage.jpg",
      tag: ["All", "Other"],
      gitUrl: "https://github.com/Nisar001/mario-game-3D",
      previewUrl: "https://github.com/Nisar001/mario-game-3D",
   },
   {
      id: 3,
      title: "PortFolio Web Application",
      description: "Self Portfolio using NextJS and modern technologies.",
      image: "/images/projects/portfolio.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/Nisar001/portfolio_webapp",
      previewUrl: "/",
   },
   {
      id: 4,
      title: "Facial Expression Detection",
      description: "A Python language system based on super-vised learning which detect the face of the user and gives the output.",
      image: "/images/projects/facialexp.png",
      tag: ["All", "Other"],
      gitUrl: "https://github.com/Nisar001/facial-expression-detection",
      previewUrl: "/",
   },
   {
      id: 5,
      title: "Job Portal",
      description: "A web application based on full MERN Stack technology with cloud database and fully responsiveness.",
      image: "/images/projects/jobPortal.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/Nisar001/Job_Portal",
      previewUrl: "/",
   },
   {
      id: 6,
      title: "E-Commerce Platform",
      description: "ECommerce web application based on Full MERN stack with cloud database.",
      image: "/images/projects/ECOME.jpg",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/Nisar001/E-Commerce-Web-App",
      previewUrl: "/",
   },
]
const ProjectSection = () => {
   
   const [tag, setTag] = useState("All");

   const handleTagChange = (newTag) => {
      setTag(newTag);
   };

   const filteredProjects = projectsData.filter((project) => 
      project.tag.includes(tag)
   );

  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4">
      My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
         <ProjectTag 
         onClick={handleTagChange} 
         name="All" 
         isSelected={tag === "All"}
         />
         <ProjectTag 
         onClick={handleTagChange} 
         name="Web" 
         isSelected={tag === "Web"}
         />
         <ProjectTag 
         onClick={handleTagChange} 
         name="Other" 
         isSelected={tag === "Other"}
         />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
      {
         filteredProjects.map((project)=><ProjectCard 
         key={project.id} 
         title={project.title} 
         description={project.description} 
         imgUrl={project.image}
         gitUrl={project.gitUrl}
         previewUrl={project.previewUrl}/>)
      }
      </div>
    </>
  );
}

export default ProjectSection