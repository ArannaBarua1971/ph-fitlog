import React, { Suspense } from 'react'
import WorkoutCard from './WorkoutCard';
import { WorkoutTypes } from '@/app/types';

const getWorkouts = async () => {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog")
    return res.json();
}

async function WorkoutGrid() {
    const workouts = await getWorkouts();
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 py-8 gap-10'>
            <Suspense fallback={<p>loading..</p>}>
                {
                    workouts.map((workout: WorkoutTypes) => (
                        <WorkoutCard key={workout.id} data={workout}></WorkoutCard>
                    ))
                }
            </Suspense>
        </div>
    )
}

export default WorkoutGrid