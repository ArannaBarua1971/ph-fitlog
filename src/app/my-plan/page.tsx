"use client"
import { useState } from "react"

function page() {
    const [activeSection,setActiveSection]=useState("today")

    return (
        <div >
            <div className="countingSection grid grid-cols-3 py-8 px-6">
                <div className="ex">
                    <p className='text-[12px] text-primaryText'>Exercises</p>
                    <p className="text-[36px] text-foreground font-bold">1</p>
                </div>
                <div className="min">
                    <p className='text-[12px] text-primaryText'>Exercises</p>
                    <p className="text-[36px] text-white font-bold">1</p>
                </div>
                <div className="cal">
                    <p className='text-[12px] text-primaryText'>Exercises</p>
                    <p className="text-[36px] text-white font-bold">1</p>
                </div>
            </div>

            <div className="navForDiffCat">
                <div className="flex items-center justify-between gap-4 px-4 py-2">
                    <div className="flex items-center gap-3 text-[12px]">
                        <span onClick={()=> setActiveSection("today")} className={`${activeSection=="today"?"bg-[#1F242D] border border-[#2B303D] text-white font-bold":'text-[#8A92A0]'} cursor-pointer`}>Today's Plan</span>
                        <span onClick={()=> setActiveSection("save")} className={`${activeSection=="save"?"bg-[#1F242D] border border-[#2B303D] text-white font-bold":'text-[#8A92A0]'} cursor-pointer`}>
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
{/* 
            {
                (activeSection=="today")?
                (
                    
                )
                :
                (

                )
            } */}
        </div>
    )
}

export default page
