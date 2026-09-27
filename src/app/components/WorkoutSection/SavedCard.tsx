
import { WorkoutTypes } from '@/app/types'
import Image from 'next/image'
import Link from 'next/link'
import Button from '../common/Button'

function SavedCard({ data ,submit}: { data: WorkoutTypes,submit:(id:number,message:string)=>void }) {

    return (
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-xl border border-gray-700 bg-[#15161d] p-3 sm:p-4 mb-3">
    <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto min-w-0">
        <Image
            src={data.image}
            alt={data.name}
            width={80}
            height={30}
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg object-cover shrink-0"
        />

        <div className="min-w-0 flex-1 text-white">
            <h3 className="text-sm font-bold uppercase tracking-wide truncate">
                {data.name}
            </h3>

            <p className="mt-0.5 text-xs text-gray-400">Medicine Ball</p>

            <div className="mt-1.5 flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-gray-300">
                <span className="flex items-center gap-1">
                    <i className="fa-regular fa-clock text-foreground"></i>
                    {data.duration} min
                </span>

                <span className="flex items-center gap-1">
                    <i className="fa-solid fa-fire text-foreground"></i>
                    {data.caloriesBurned} kcal
                </span>

                <span className="flex items-center gap-1">
                    <i className="fa-regular fa-star text-foreground"></i>
                    {data.rating}
                </span>
            </div>
        </div>
    </div>

    <div className="flex flex-wrap sm:flex-nowrap shrink-0 items-center justify-between sm:justify-end gap-2 sm:gap-3 w-full sm:w-auto border-t sm:border-t-0 border-gray-800 pt-2 sm:pt-0">
        <Link href={`/workout/${data.id}`} className="flex-1 sm:flex-none">
            <Button style="w-full sm:w-auto bg-transparent text-white border border-primaryText font-normal py-2">
                View Details
            </Button>
        </Link>

        <button onClick={() => submit(data.id, "workout is removed successfully")} className="ml-1 text-gray-500 transition hover:text-white p-1">
            <i className="fa-solid fa-xmark"></i>
        </button>
    </div>
</div>
    )
}

export default SavedCard
