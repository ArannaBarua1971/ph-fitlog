import React, { ReactNode } from 'react'
interface BadgeProps{
    children:ReactNode,
    style?:string,
}
function Badge({children,style}:BadgeProps) {
  return (
    <div className={`bg-foreground px-2.5 py-0.5 rounded-full font-bold text-[11px]  ${style}`}>{children}</div>
  )
}

export default Badge