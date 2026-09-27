import Image from "next/image"

function Footer() {
    return (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 sm:py-10 mt-5 text-center sm:text-left">
            <div className="flex items-center gap-2">
                <Image src="/logo.png" alt="logo" width={30} height={30}/>
                <span className="font-bold text-white text-[14px]">FITLOG</span>
            </div>
            <div className="content text-xs sm:text-sm text-[#6B7280]">
                <p>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
            </div>
        </div>
    )
}

export default Footer
