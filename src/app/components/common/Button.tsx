"use client"
import React, { ReactNode } from 'react'
interface ButtonProps{
    children:ReactNode,
    style?:string,
    onClick?:()=>void
}
function Button({children,style,onClick}:ButtonProps) {
  return (
    <button onClick={onClick} className={` px-6 py-3  ${style} cursor-pointer`}>{children}</button>
  )
}

export default Button