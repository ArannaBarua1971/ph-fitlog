"use client"
import Button from "../common/Button"
import { useContext } from "react";
import { WorkoutContext } from "@/app/context/WorkoutProvider";
import { WorkoutTypes } from "@/app/types";
import { toast } from 'react-toastify';

function SavedBtn({ data }: { data: WorkoutTypes }) {
    const { savedWorkouts, setSavedWorkouts } = useContext(WorkoutContext)

    const handleSubmit = () => {
        const exists = savedWorkouts.some((i: WorkoutTypes) => i.id == data.id)
        if (!exists) {
            setSavedWorkouts((pre: WorkoutTypes[]) => [...pre, data]);
            toast.success("workout is saved", {
                style: {
                    background: "#1F242D",
                    color: "#FFFFFF",
                    border: "1px solid #2B303D",
                    borderRadius: "12px",
                    fontSize: "14px",
                },
            })
        } else {
            toast.warning("workout is already saved", {
                style: {
                    background: "#1F242D",
                    color: "#FFFFFF",
                    border: "1px solid #2B303D",
                    borderRadius: "12px",
                    fontSize: "14px",
                },
            })
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
