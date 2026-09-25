import React, { ReactNode } from 'react'
interface ButtonProps{
    children:ReactNode,
    style?:string,
}
function Button({children,style}:ButtonProps) {
  return (
    <div className={`bg-foreground px-6 py-3  ${style}`}>{children}</div>
  )
}

export default Button