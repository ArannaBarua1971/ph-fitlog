"use client"
import Button from "../common/Button"
import { useContext } from "react";
import { WorkoutContext } from "@/app/context/WorkoutProvider";
import { WorkoutTypes } from "@/app/types";


 function SavedBtn({data}:{data:WorkoutTypes}) {
    const {savedWorkouts, setSavedWorkouts } = useContext(WorkoutContext)

    const handleSubmit = () => {
        const exists = savedWorkouts.some((i:WorkoutTypes) => i.id == data.id)
        if (!exists) {
            setSavedWorkouts((pre: WorkoutTypes[]) => [...pre, data]);
        }
    }
    return (
        <Button onClick={() => handleSubmit()} style="text-black bg-transparent text-white border border-primaryText">
            <i className="fa-regular fa-bookmark me-2"></i>
            Save for later
        </Button>
    )
}

export default SavedBtn
