"use client"
import { WorkoutTypes } from "@/app/types";
import Button from "../common/Button"
import { useContext } from "react";
import { WorkoutContext } from "@/app/context/WorkoutProvider";
import { toast } from 'react-toastify';
function AddTodayBtn({ data }: { data: WorkoutTypes }) {
    const { todayWorkouts, setTodayWorkouts } = useContext(WorkoutContext)

    const handleSubmit = () => {
        const exists = todayWorkouts.some((i: WorkoutTypes) => i.id == data.id)
        if (!exists) {
            setTodayWorkouts((pre: WorkoutTypes[]) => [...pre, data]);
            toast.success("workout is added", {
                style: {
                    background: "#1F242D",
                    color: "#FFFFFF",
                    border: "1px solid #2B303D",
                    borderRadius: "12px",
                    fontSize: "14px",
                },
            })
        }else{
            toast.warning("workout is already added", {
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
        <Button onClick={() => handleSubmit()} style="text-black">
            <i className="fa-regular fa-calendar-plus me-2"></i>
            Add to today's plan
        </Button>
    )
}

export default AddTodayBtn
