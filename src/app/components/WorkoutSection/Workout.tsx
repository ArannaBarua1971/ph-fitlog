"use client"
import { Suspense, useState } from 'react';
import WorkoutGrid from './WorkoutGrid'
import Loading from '../common/Loading';
const getWorkouts = async () => {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog")
    return res.json();
}

function Workout() {
  const [workoutPromise]=useState(getWorkouts());
  return (
    <section id='library'>
        <div className="content">
            <h1 className='title text-white text-[30px] font-bold'>THE LIBRARY</h1>
            <p className='text-[14px] text-primaryText'>Twelve lifts covering every major muscle group.</p>
        </div>
        {/* workout grid */}
        <Suspense fallback={<Loading/>}>
          <WorkoutGrid workoutPromise={workoutPromise}/>
        </Suspense>
    </section>
  )
}

export default Workout