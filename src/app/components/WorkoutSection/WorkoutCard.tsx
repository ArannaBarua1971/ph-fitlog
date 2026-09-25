import React from 'react'
import { WorkoutTypes } from '@/app/types'
import Badge from '../common/Badge'
import Image from 'next/image'
interface WorkoutProps {
    data: WorkoutTypes
}
function WorkoutCard({ data }: WorkoutProps) {
    return (
        <div className=" rounded-2xl overflow-hidden bg-[#15171c]">
            <div className=" h-56 w-full">
                <img
                    className='w-full h-full object-cover'
                    src={data.image}
                    alt="Barbell Bench Press"
                />
            </div>

            <div className="px-4 pt-4 pb-5">
                <div className="flex gap-2 mb-3">
                    {
                        data.muscleGroups.map(item=>(
                            <Badge key={item}>{item}</Badge>
                        ))
                    }
                </div>

                <h2 className="text-xl font-extrabold tracking-tight text-white">
                    {data.name}
                </h2>
                <p className="text-gray-400 text-sm mt-1">{data.equipment}</p>

                <div className="h-px bg-gray-700 my-3" />

                <div className="flex text-primaryText gap-4">
                    <div className='flex gap-1 justify-center items-center' >
                        <i className="fa-regular fa-clock"></i>
                        <span>{data.duration }min</span>
                    </div>
                    <div  className='flex gap-2 justify-center items-center'>
                        <i className="fa-solid fa-fire"></i>
                        <span>{data.caloriesBurned} kcal</span>
                    </div>
                    <div className='flex gap-1 justify-center items-center'>
                        <i className="fa-regular fa-star"></i>
                        <span>{data.rating}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkoutCard
