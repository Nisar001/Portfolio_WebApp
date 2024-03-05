import React from 'react'

const SkillCard = ({Simg, Sname, Status}) => {
  return (
   <div>
      <div 
         className="h-40 md:h-40 w-30 md:w-30 rounded-t-xl relative group" 
         style={{background: `url(${Simg})`, backgroundSize: "cover"}}
         >
      </div>
      <div className="text-white rounded-b-l mt-3 bg-[#181818] py-4 px-4">
         <h5 className="text-xl font-semibold mb-2">{Sname}</h5>
         <p className="text-[#ADB7BE]">Status -  {Status}</p>
      </div>
   </div>
  )
}

export default SkillCard