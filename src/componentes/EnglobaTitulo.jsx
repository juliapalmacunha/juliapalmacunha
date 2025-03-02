import React from 'react'

const EnglobaTitulo = ({children}) => {
  return (
    <div className="mb-[50px] font-poppinsSemibold text-3xl ">
      <p className="mb-[18px] "> {children} </p>
      <div className="top-0 left-0 w-[200px] h-[1px] bg-gradient-to-r from-[#7b2cbf] to-[#f9c5e3] brightness-125"></div>
    </div>
  )
}

export default EnglobaTitulo