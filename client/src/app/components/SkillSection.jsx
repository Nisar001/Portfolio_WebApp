"use client"
import React, {useState} from 'react'
import SkillCard from './SkillCard'
import SkillTag from './SkillTag'

const skillsData = [
   {
      id: 1,
      title: "HTML",
      image: "/images/technologies/html.png",
      Status: "Advanced",
      tag: ["Web"],
   },
   {
      id: 2,
      title: "CSS",
      image: "/images/technologies/css.png",
      Status: "Advanced",
      tag: ["Web"],
   },
   {
      id: 3,
      title: "Bootstrap",
      image: "/images/technologies/bootstrap.jpg",
      Status: "Advanced",
      tag: ["Web"],
   },
   {
      id: 4,
      title: "Elastic UI",
      image: "/images/technologies/elasticUI.png",
      Status: "Intermediate",
      tag: ["Web"],
   },
   {
      id: 5,
      title: "JavaScript ES6",
      image: "/images/technologies/js.png",
      Status: "Advanced",
      tag: ["Web"],
   },
   // {
   //    id: 6,
   //    title: "TypeScript",
   //    image: "/images/technologies/typescript.png",
   //    Status: "Intermediate",
   //    tag: ["Web", "Mobile"],
   // },
   {
      id: 7,
      title: "React JS",
      image: "/images/technologies/react.png",
      Status: "Advanced",
      tag: ["Web"],
   },
   {
      id: 8,
      title: "Redux JS",
      image: "/images/technologies/redux.png",
      Status: "Intermediate",
      tag: ["Web"],
   },
   {
      id: 9,
      title: "Express JS",
      image: "/images/technologies/express-logo.png",
      Status: "Intermediate",
      tag: ["Web"],
   },
   {
      id: 10,
      title: "Node JS",
      image: "/images/technologies/node.png",
      Status: "Intermediate",
      tag: ["Web"],
   },
   {
      id: 11,
      title: "JAVA",
      image: "/images/technologies/java.png",
      Status: "Intermediate",
      tag: ["Programming"],
   },
   {
      id: 12,
      title: "Python",
      image: "/images/technologies/python.jpeg",
      Status: "Intermediate",
      tag: ["Programming"],
   },
   {
      id: 13,
      title: "Mongo DB",
      image: "/images/technologies/mongodb1.png",
      Status: "Advanced",
      tag: ["DB"],
   },
   {
      id: 14,
      title: "SQL",
      image: "/images/technologies/sql.png",
      Status: "Advanced",
      tag: ["DB"],
   },
   {
      id: 15,
      title: "DBMS",
      image: "/images/technologies/dbms.png",
      Status: "Advanced",
      tag: ["DB"],
   },
   {
      id: 16,
      title: "GIT",
      image: "/images/technologies/git.png",
      Status: "Advanced",
      tag: ["Tools"],
   },
   {
      id: 17,
      title: "GitHUb",
      image: "/images/technologies/github.png",
      Status: "Advanced",
      tag: ["Tools"],
   },
   // {
   //    id: 18,
   //    title: "Ionic (Application FW)",
   //    image: "/images/technologies/ionic-logo.png",
   //    Status: "Learning",
   //    tag: ["Mobile"],
   // },
]  
const SkillSection = () => {

   const [tag, setTag] = useState("Web");

   const handleTagChange = (newTag) => {
      setTag(newTag);
   };

   const filteredSkills = skillsData.filter((skills) => 
      skills.tag.includes(tag)
   );

  return (
   <>
   <h2 className="text-center text-4xl font-bold text-white mt-4">
      My Skills
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
         <SkillTag
         onClick={handleTagChange} 
         name="Web" 
         isSelected={tag === "Web"}
         />
         <SkillTag
         onClick={handleTagChange} 
         name="DB" 
         isSelected={tag === "DB"}
         />
         <SkillTag
         onClick={handleTagChange} 
         name="Tools" 
         isSelected={tag === "Tools"}
         />
      </div>
    <div className="grid md:grid-cols-6 gap-2 md:gap-5">
      {
         filteredSkills.map((skills)=><SkillCard 
         key={skills.id}
         Sname={skills.title}  
         Simg={skills.image}
         Status={skills.Status}/>)
      }
      </div>
      <br/><br/>
   </>
  )
}

export default SkillSection