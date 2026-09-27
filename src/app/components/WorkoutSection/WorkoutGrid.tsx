import WorkoutCard from './WorkoutCard';
import { WorkoutTypes } from '@/app/types';
import { use } from 'react'
interface WorkoutGridProps {
  workoutPromise: Promise<WorkoutTypes[]>;
}
function WorkoutGrid({workoutPromise}:WorkoutGridProps) {

    const workouts=use(workoutPromise)
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 py-8 gap-10'>
                {
                    workouts.map((workout: WorkoutTypes) => (
                        <WorkoutCard key={workout.id} data={workout}></WorkoutCard>
                    ))
                }
        </div>
    )
}

export default WorkoutGrid