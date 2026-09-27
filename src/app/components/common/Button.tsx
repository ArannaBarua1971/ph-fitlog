
import React, { ReactNode } from 'react'
interface ButtonProps{
    children:ReactNode,
    style?:string,
    onClick?:()=>void
}
function Button({children,style,onClick}:ButtonProps) {
  return (
    <button onClick={onClick} className={` bg-foreground text-black border-none  px-6 py-3 text-[12px] font-bold rounded-[15px] inline  ${style} cursor-pointer`}>{children}</button>
  )
}

export default Button