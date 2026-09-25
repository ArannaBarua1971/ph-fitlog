"use client"
import Button from "../common/Button"

function AddTodayBtn() {
    return (
        <Button style="font-semibold text-black bg-foreground flex justify-center items-center rounded-[10px] gap-2 border border-primaryText">
            <i className="fa-regular fa-calendar-plus"></i>
            Add to today's plan
        </Button>
    )
}

export default AddTodayBtn
