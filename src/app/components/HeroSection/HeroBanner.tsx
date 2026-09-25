import Image from "next/image"
import Button from "../common/Button"

function HeroBanner() {
    return (
        <div className="flex justify-between p-14 bg-[#15171D]">
            <div className="content grid grid-cols-1 gap-5 w-[50%]">
                <p className="text-foreground text-[11px] font-bold"  >WORKOUT LIBRARY</p>
                <h1 className="text-white text-[60px] font-extrabold leading-tight my-0">TRAIN WITH INTENT. LOG
                    EVERY SET.</h1>
                <p className="text-primaryText text-[16px] pe-20">FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                    into today's plan, and watch the week's work add up.</p>
                <div>
                    <Button style="text-[12px] font-bold rounded-[5px] inline bg-foreground">BROWSE WORKOUTS</Button>
                </div>
            </div>
            <div className="image col-span-3">
                <Image src="/banner.png" alt="banner" width={334} height={334}></Image>
            </div>
        </div>
    )
}

export default HeroBanner