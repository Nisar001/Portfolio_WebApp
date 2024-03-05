import React from 'react'

const TabButton = ({active, selectTab, children}) => {

   const buttonClasses = active ? `text-white border-b boder-yellow-500` : `text-[#ADB7BE]`;

  return (
      <button onClick={selectTab}>
         <div className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
            {children}
         </div>
      </button>

  )
}

export default TabButton