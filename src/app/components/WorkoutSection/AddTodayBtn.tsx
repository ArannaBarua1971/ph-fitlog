"use client"
import { WorkoutTypes } from "@/app/types";
import Button from "../common/Button"
import { useContext } from "react";
import { WorkoutContext } from "@/app/context/WorkoutProvider";

function AddTodayBtn({ data }: { data: WorkoutTypes }) {
    const { todayWorkouts, setTodayWorkouts } = useContext(WorkoutContext)
    
    const handleSubmit = () => {
        const exists = todayWorkouts.some((i:WorkoutTypes) => i.id == data.id)
        if (!exists) {
            setTodayWorkouts((pre: WorkoutTypes[]) => [...pre, data]);
        }
    }
    return (
        <Button onClick={()=>handleSubmit()} style="text-black">
            <i className="fa-regular fa-calendar-plus me-2"></i>
            Add to today's plan
        </Button>
    )
}

export default AddTodayBtn
