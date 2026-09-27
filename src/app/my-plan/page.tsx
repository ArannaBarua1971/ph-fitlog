"use client"

import { useContext, useState } from "react"
import { WorkoutContext } from "../context/WorkoutProvider"
import { WorkoutTypes } from "../types"
import EmptyWorkout from "../components/WorkoutSection/EmptyWorkout"
import TodayCard from "../components/WorkoutSection/TodayCard"
import SavedCard from "../components/WorkoutSection/SavedCard"
import { toast } from "react-toastify"

function Page() {
    const [activeSection, setActiveSection] = useState("today")
    const [sortBy, setSortBy] = useState("due")

    const { todayWorkouts, savedWorkouts, setTodayWorkouts, setSavedWorkouts } = useContext(WorkoutContext)

    const workouts = activeSection === "today" ? todayWorkouts : savedWorkouts

    const sortedWorkouts = [...workouts].sort((a, b) => {
        if (sortBy === "due") return b.duration - a.duration
        if (sortBy === "cal") return b.caloriesBurned - a.caloriesBurned
        return b.rating - a.rating
    })

    const ex = workouts.length
    const min = workouts.reduce((acc: number, item: WorkoutTypes) => acc + item.duration, 0)
    const cal = workouts.reduce((acc: number, item: WorkoutTypes) => acc + item.caloriesBurned, 0)

    const handleSubmit = (id: number,message:string) => {
        if (activeSection === "today") {
            setTodayWorkouts((prev: WorkoutTypes[]) => prev.filter(item => item.id !== id))
        } else {
            setSavedWorkouts((prev: WorkoutTypes[]) => prev.filter(item => item.id !== id))
        }
        toast.success(message, {
            style: {
                background: "#1F242D",
                color: "#FFFFFF",
                border: "1px solid #2B303D",
                borderRadius: "12px",
                fontSize: "14px",
            }
        })
    }

    return (
        <div>
    <div className="countingSection grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-0 py-6 sm:py-8 px-4 sm:px-6 text-center sm:text-left">
        <div className="ex">
            <p className="text-[12px] text-primaryText">Exercises</p>
            <p className="text-2xl sm:text-[36px] text-foreground font-bold">{ex}</p>
        </div>
        <div className="min">
            <p className="text-[12px] text-primaryText">Minutes</p>
            <p className="text-2xl sm:text-[36px] text-white font-bold">{min}</p>
        </div>
        <div className="cal">
            <p className="text-[12px] text-primaryText">Calories</p>
            <p className="text-2xl sm:text-[36px] text-white font-bold">{cal}</p>
        </div>
    </div>

    <div className="navForDiffCat">
        <div className="flex flex-col sm:flex-row md:items-center  justify-between gap-4 px-4 py-2 ">
            <div className="flex justify-around items-center gap-2 sm:gap-3 text-[12px] sm:w-auto border border-gray-600 rounded-lg p-1 ">
                <span
                    onClick={() => setActiveSection("today")}
                    className={` rounded-lg transition-colors ${
                        activeSection === "today" 
                            ? "bg-[#1F242D] border border-[#2B303D] text-white font-bold" 
                            : "text-[#8A92A0]"
                    } cursor-pointer px-3 py-1.5`}
                >
                    Today's Plan
                </span>
                <span
                    onClick={() => setActiveSection("save")}
                    className={`px-3 py-1.5 rounded-lg transition-colors ${
                        activeSection === "save" 
                            ? "bg-[#1F242D] border border-[#2B303D] text-white font-bold" 
                            : "text-[#8A92A0]"
                    } cursor-pointer px-3 py-1.5`}
                >
                    Saved
                </span>
            </div>

            <div className="flex items-center justify-end gap-2 sm:w-auto">
                <span className="text-primaryText text-[12px]">Sort By</span>
                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-black text-white border border-primaryText px-2 py-1 rounded text-xs focus:outline-none"
                >
                    <option value="due">Duration</option>
                    <option value="rating">Rating</option>
                    <option value="cal">Calories</option>
                </select>
            </div>
        </div>
    </div>

    {sortedWorkouts.length > 0 ? (
        sortedWorkouts.map((item: WorkoutTypes) =>
            activeSection === "today" ? (
                <TodayCard key={item.id} data={item} submit={handleSubmit} />
            ) : (
                <SavedCard key={item.id} data={item} submit={handleSubmit} />
            )
        )
    ) : (
        <EmptyWorkout />
    )}
</div>
    )
}

export default Page