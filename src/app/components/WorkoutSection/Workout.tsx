import React from 'react'
import WorkoutGrid from './WorkoutGrid'

function Workout() {
  return (
    <div>
        <div className="content">
            <h1 className='title text-white text-[30px] font-bold'>THE LIBRARY</h1>
            <p className='text-[14px] text-primaryText'>Twelve lifts covering every major muscle group.</p>
        </div>
        {/* workout grid */}
        <WorkoutGrid/>
    </div>
  )
}

export default Workout