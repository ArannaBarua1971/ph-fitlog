"use client"
import Button from "../common/Button"

function SavedBtn() {
    return (
        <Button style="text-[#E5E7EB] bg-none flex justify-center items-center rounded-[10px] gap-2 border border-primaryText">
            <i className="fa-regular fa-bookmark"></i>
            Save for later
        </Button>
    )
}

export default SavedBtn
