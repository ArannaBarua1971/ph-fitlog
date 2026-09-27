import Button from "../common/Button"

function EmptyWorkout() {
  return (
    <div className='border border-gray-600 py-[97px] px-3 flex flex-col justify-center rounded-2xl border-dashed
     items-center gap-2'>
            <h1 className="text-white text-2xl font-bold">NOTHING HERE YET</h1>
            <p className="text-primaryText text-[12px]">Browse the library and add a lift to get today moving.</p>
            <Button style="mt-3">Go to workouts</Button>
    </div>
  )
}

export default EmptyWorkout
