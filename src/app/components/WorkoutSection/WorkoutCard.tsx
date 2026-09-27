import React from 'react'
import { WorkoutTypes } from '@/app/types'
import Badge from '../common/Badge'
import Image from 'next/image'
import Link from 'next/link'
interface WorkoutProps {
    data: WorkoutTypes
}
function WorkoutCard({ data }: WorkoutProps) {
    return (
        <Link href={`/workout/${data.id}`}>
            <div className="rounded-2xl overflow-hidden bg-[#15171c] hover:scale-[1.02] transition-transform duration-200">
                <div className="h-48 sm:h-52 md:h-56 w-full">
                    <img
                        className="w-full h-full object-cover"
                        src={data.image}
                        alt={data.name || "Workout image"}
                    />
                </div>

                <div className="p-4 sm:p-5">
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3">
                        {
                            data.muscleGroups.map(item => (
                                <Badge key={item}>{item}</Badge>
                            ))
                        }
                    </div>

                    <h2 className="text-lg sm:text-xl font-extrabold tracking-tight text-white line-clamp-1">
                        {data.name}
                    </h2>
                    <p className="text-gray-400 text-xs sm:text-sm mt-1 line-clamp-1">{data.equipment}</p>

                    <div className="h-px bg-gray-700 my-3" />

                    <div className="flex flex-wrap items-center justify-between sm:justify-start text-primaryText text-xs sm:text-sm gap-2 sm:gap-4">
                        <div className="flex gap-1 justify-center items-center">
                            <i className="fa-regular fa-clock"></i>
                            <span>{data.duration}min</span>
                        </div>
                        <div className="flex gap-1.5 sm:gap-2 justify-center items-center">
                            <i className="fa-solid fa-fire"></i>
                            <span>{data.caloriesBurned} kcal</span>
                        </div>
                        <div className="flex gap-1 justify-center items-center">
                            <i className="fa-regular fa-star"></i>
                            <span>{data.rating}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default WorkoutCard
