import React from 'react'
import ProjectCard from './ProjectCard'

const projectsData = [
   {
      id: 1,
      title: "",
      description: "",
      image: "",
      tag: ["All", ""]
   },
   {
      id: 2,
      title: "",
      description: "",
      image: "",
      tag: ["All", ""]
   },
   {
      id: 3,
      title: "",
      description: "",
      image: "",
      tag: ["All", ""]
   },
   {
      id: 4,
      title: "",
      description: "",
      image: "",
      tag: ["All", ""]
   },
   {
      id: 5,
      title: "",
      description: "",
      image: "",
      tag: ["All", ""]
   },
   {
      id: 6,
      title: "",
      description: "",
      image: "",
      tag: ["All", ""]
   },
]
const ProjectSection = () => {
  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4">
      My Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
      {
         projectsData.map((project)=><ProjectCard 
         key={project.id} 
         title={project.title} 
         description={project.description} 
         imgUrl={project.imgUrl}/>)
      }
      </div>
    </>
  );
}

export default ProjectSection