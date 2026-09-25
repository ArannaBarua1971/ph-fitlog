import React from 'react'
import WorkoutCard from './WorkoutCard';
import { WorkoutTypes } from '@/app/types';

const getWorkouts = async () => {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog")
    return res.json();
}

async function WorkoutGrid() {
    const workouts = await getWorkouts();
    return (
        <div className='grid grid-cols-3 py-8 gap-10'>
            {
                workouts.map((workout:WorkoutTypes)=>(
                    <WorkoutCard key={workout.id} data={workout}></WorkoutCard>
                ))
            }
        </div>
    )
}

export default WorkoutGrid