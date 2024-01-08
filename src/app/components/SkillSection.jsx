import React from 'react'
import SkillCard from './SkillCard'

const SkillsData = [
   {
      title: "HTML",
      image: "/images/technologies/html.png",
      Status: "Advanced",
   },
   {
      title: "CSS",
      image: "/images/technologies/css.png",
      Status: "Advanced",
   },
   {
      title: "Bootstrap",
      image: "/images/technologies/bootstrap.jpg",
      Status: "Advanced",
   },
   {
      title: "Elastic UI",
      image: "/images/technologies/elasticUI.png",
      Status: "Intermediate",
   },
   {
      title: "JavaScript ES6",
      image: "/images/technologies/js.png",
      Status: "Advanced",
   },
   {
      title: "TypeScript",
      image: "/images/technologies/typescript.png",
      Status: "Intermediate",
   },
   {
      title: "React JS",
      image: "/images/technologies/react.png",
      Status: "Advanced",
   },
   {
      title: "Redux JS",
      image: "/images/technologies/redux.png",
      Status: "Intermediate",
   },
   {
      title: "Express JS",
      image: "/images/technologies/express-logo.png",
      Status: "Intermediate",
   },
   {
      title: "Node JS",
      image: "/images/technologies/node.png",
      Status: "Intermediate",
   },
   {
      title: "JAVA",
      image: "/images/technologies/java.png",
      Status: "Intermediate",
   },
   {
      title: "Python",
      image: "/images/technologies/python.jpeg",
      Status: "Intermediate",
   },
   {
      title: "Mongo DB",
      image: "/images/technologies/mongodb1.png",
      Status: "Advanced",
   },
   {
      title: "SQL",
      image: "/images/technologies/sql.png",
      Status: "Advanced",
   },
   {
      title: "DBMS",
      image: "/images/technologies/dbms.png",
      Status: "Advanced",
   },
   {
      title: "GIT",
      image: "/images/technologies/git.png",
      Status: "Advanced",
   },
   {
      title: "GitHUb",
      image: "/images/technologies/github.png",
      Status: "Advanced",
   },
   {
      title: "Ionic (Application FW)",
      image: "/images/technologies/ionic-logo.png",
      Status: "Learning",
   },
]  
const SkillSection = () => {
  return (
   <>
   <h2 className="text-center text-4xl font-bold text-white mt-4">
      My Skills
      </h2>
      <br/><br/>
    <div className="grid md:grid-cols-6 gap-2 md:gap-5">
      {
         SkillsData.map((skills)=><SkillCard  
         Sname={skills.title}  
         Simg={skills.image}
         Status={skills.Status}
         />)
      }
      </div>
      <br/><br/>
   </>
  )
}

export default SkillSection