"use client"
import { useContext, useEffect, useState } from "react"
import { WorkoutContext } from "../context/WorkoutProvider"
import { WorkoutTypes } from "../types"
import EmptyWorkout from "../components/WorkoutSection/EmptyWorkout"
import TodayCard from "../components/WorkoutSection/TodayCard"
import SavedCard from "../components/WorkoutSection/SavedCard"
function page() {
    const [activeSection, setActiveSection] = useState("today")
    const { todayWorkouts, savedWorkouts, setTodayWorkouts, setSavedWorkouts }: { todayWorkouts: WorkoutTypes[], savedWorkouts: WorkoutTypes[] } = useContext(WorkoutContext)
    const [ex, setEx] = useState(0)
    const [min, setMin] = useState(0)
    const [cal, setCal] = useState(0)
    useEffect(() => {
        if (activeSection == "today") {
            setEx(todayWorkouts.length)
            const totalMin = todayWorkouts.reduce((acc, item) => acc += item.duration, 0)
            const totalCal = todayWorkouts.reduce((acc, item) => acc += item.caloriesBurned, 0)
            setMin(totalMin)
            setCal(totalCal)
        } else {
            setEx(savedWorkouts.length)
            const totalMin = savedWorkouts.reduce((acc, item) => acc += item.duration, 0)
            const totalCal = savedWorkouts.reduce((acc, item) => acc += item.caloriesBurned, 0)
            setMin(totalMin)
            setCal(totalCal)
        }
    }, [activeSection, todayWorkouts, savedWorkouts])

    const handleSubmit = (id: number) => {
        if (activeSection == "today") setTodayWorkouts(todayWorkouts.filter(item => item.id != id))
        else setSavedWorkouts(savedWorkouts.filter(item => item.id != id))
    }


    return (
        <div >
            <div className="countingSection grid grid-cols-3 py-8 px-6">
                <div className="ex">
                    <p className='text-[12px] text-primaryText'>Exercises</p>
                    <p className="text-[36px] text-foreground font-bold">{ex}</p>
                </div>
                <div className="min">
                    <p className='text-[12px] text-primaryText'>Minutes</p>
                    <p className="text-[36px] text-white font-bold">{min}</p>
                </div>
                <div className="cal">
                    <p className='text-[12px] text-primaryText'>Calories</p>
                    <p className="text-[36px] text-white font-bold">{cal}</p>
                </div>
            </div>

            <div className="navForDiffCat">
                <div className="flex items-center justify-between gap-4 px-4 py-2">
                    <div className="flex items-center gap-3 text-[12px]">
                        <span onClick={() => setActiveSection("today")} className={`${activeSection == "today" ? "bg-[#1F242D] border border-[#2B303D] text-white font-bold" : 'text-[#8A92A0]'} cursor-pointer`}>Today's Plan</span>
                        <span onClick={() => setActiveSection("save")} className={`${activeSection == "save" ? "bg-[#1F242D] border border-[#2B303D] text-white font-bold" : 'text-[#8A92A0]'} cursor-pointer`}>
                            Saved
                        </span>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="text-primaryText text-[12px]">Sort By</span>
                        <select className="flex items-center gap-1 text-white border border-primaryText">
                            <option className="bg-black">Duration</option>
                            <option className="bg-black">Min</option>
                            <option className="bg-black">Calories</option>
                        </select>
                    </div>
                </div>
            </div>
            {
                activeSection === "today" ? (
                    todayWorkouts.length ? (
                        todayWorkouts.map((item: WorkoutTypes) => (
                            <TodayCard key={item.id} data={item} submit={handleSubmit} />
                        ))) :
                        <EmptyWorkout />
                ) : (
                    savedWorkouts.length ? (
                        savedWorkouts.map((item: WorkoutTypes) => (
                            <SavedCard key={item.id} data={item} submit={handleSubmit} />
                        ))) :
                        <EmptyWorkout />
                )
            }
        </div>
    )
}

export default page
