
import Button from "../common/Button"
import Link from "next/link"

function EmptyWorkout() {
  return (
    <div className='border border-gray-600 border-dashed rounded-2xl mt-2 py-24.25 px-3 text-center '>
      <h1 className="text-white text-2xl font-bold">NOTHING HERE YET</h1>
      <p className="text-primaryText text-[12px]">Browse the library and add a lift to get today moving.</p>
      <Link href="/"><Button style="mt-3">Go to workouts</Button></Link>
    </div>
  )
}

export default EmptyWorkout
