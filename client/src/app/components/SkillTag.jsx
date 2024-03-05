import React from 'react'

const SkillTag = ({name, onClick, isSelected}) => {
  const buttonStyles = isSelected ? "text-white border-green-500" : "text-[#ADB7BE] border-slate-600 hover:border-white"
   return (
   <button 
   className={`${buttonStyles} rounded-full border-2 px-4 py-2 text-lg cursor-pointer relative`}
   onClick={() => onClick(name)}
   >
   {name}
   </button>
  )
}

export default SkillTag