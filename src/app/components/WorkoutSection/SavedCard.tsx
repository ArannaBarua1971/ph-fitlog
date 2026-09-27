
import { WorkoutTypes } from '@/app/types'
import Image from 'next/image'

function SavedCard({ data ,submit}: { data: WorkoutTypes,submit:(id:number)=>void }) {

    return (
        <div className="flex items-center gap-4 rounded-xl border border-gray-700 bg-[#15161d] p-3 text-white">
            <Image
                src={data.image}
                alt={data.name}
                width={80}
                height={30}
                className=" rounded-lg object-cover"
            />

            <div className="min-w-0 flex-1">
                <h3 className="text-sm font-bold uppercase tracking-wide">
                    {data.name}
                </h3>

                <p className="mt-0.5 text-xs text-gray-400">Medicine Ball</p>

                <div className="mt-1.5 flex items-center gap-3 text-xs text-gray-300">
                    <span className="flex items-center gap-1">
                        <i className="fa-regular fa-clock text-lime-400"></i>
                        {data.duration} min
                    </span>

                    <span className="flex items-center gap-1">
                        <i className="fa-solid fa-fire text-lime-400"></i>
                        {data.caloriesBurned} kcal
                    </span>

                    <span className="flex items-center gap-1">
                        <i className="fa-regular fa-star text-lime-400"></i>
                        {data.rating}
                    </span>
                </div>
            </div>

            <div className="flex shrink-0 items-center gap-3">
                <button className="rounded-full border border-gray-700 px-4 py-2 text-xs transition hover:bg-gray-800">
                    View Details
                </button>

                <button className="flex items-center gap-1.5 rounded-full bg-lime-400 px-4 py-2 text-xs font-medium text-black transition hover:bg-lime-300">
                    <i className="fa-solid fa-check"></i>
                    Mark as Done
                </button>

                <button onClick={()=> submit(data.id)}  className="ml-1 text-gray-500 transition hover:text-white">
                    <i className="fa-solid fa-xmark"></i>
                </button>
            </div>
        </div>
    )
}

export default SavedCard
