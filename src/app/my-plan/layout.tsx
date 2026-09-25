import React, { ReactNode } from 'react'

function layout({children}:{children:ReactNode}) {
  return (
    <div className="my-10">
            <div className="content">
                <h1 className='title text-white text-[30px] font-bold'>MY PLAN</h1>
                <p className='text-[14px] text-primaryText'>Cap of five lifts for today. Finish them, then load more.</p>
            </div>
             {children}
        </div>
  )
}

export default layout
