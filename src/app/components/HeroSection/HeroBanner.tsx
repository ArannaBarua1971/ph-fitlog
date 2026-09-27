import Image from "next/image"
import Button from "../common/Button"
import Link from "next/link"
function HeroBanner() {
    return (
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-10 lg:gap-0 p-6 md:p-10 lg:p-14 bg-[#15171D]">
            <div className="content flex flex-col gap-5 w-full lg:w-[50%] text-center lg:text-left items-center lg:items-start">
                <p className="text-foreground text-[11px] font-bold">WORKOUT LIBRARY</p>
                <h1 className="text-white text-3xl sm:text-5xl lg:text-[60px] font-extrabold leading-tight my-0">TRAIN WITH INTENT. LOG
                    EVERY SET.</h1>
                <p className="text-primaryText text-sm sm:text-[16px] pe-0 lg:pe-20">FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                    into today's plan, and watch the week's work add up.</p>
                <div>
                    <Link href="#library">
                        <Button>BROWSE WORKOUTS</Button>
                    </Link>
                </div>
            </div>
            <div className="image flex justify-center w-full lg:w-auto">
                <Image src="/banner.png" alt="banner" width={334} height={334} className="w-48 h-48 sm:w-64 sm:h-64 lg:w-[334px] lg:h-[334px] object-contain" />
            </div>
        </div>
    )
}

export default HeroBanner