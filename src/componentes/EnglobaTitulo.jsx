import React from 'react'

const EnglobaTitulo = ({children}) => {
  return (
    <div className="mb-[30px] font-poppinsSemibold text-3xl text-[#ecb8fa] ">
      <p className="mb-[14px] "> {children} </p>
      <div className="top-0 left-0 w-[100px] h-[1.8px] bg-gradient-to-r from-[#7b2cbf] to-[#f9c5e3] brightness-125"></div>
    </div>
  )
}

export default EnglobaTitulo