"use client"
import { WorkoutContext } from "@/app/context/WorkoutProvider";
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useContext, useEffect, useState } from "react";

function Navbar() {
    const pathname = usePathname();
    const { todayWorkouts, savedWorkouts } = useContext(WorkoutContext);
    const [plan, setPlan] = useState(0);
    const [save, setSave] = useState(0);
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        setPlan(todayWorkouts.length);
        setSave(savedWorkouts.length)
    }, [todayWorkouts, savedWorkouts])

    const links: { href: string, content: string }[] = [
        { href: "/", content: "Workouts" },
        { href: "/my-plan", content: "My Plan" }
    ]
    return (
        <nav className="w-full py-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Link href={"/"} className="flex items-center gap-2">
                        <img src="/logo.png" alt="logo" className="h-6 w-auto" />
                        <span className="font-bold text-white">FITLOG</span>
                    </Link>
                </div>

                <div className="hidden md:flex flex-wrap items-center justify-center gap-1 sm:gap-0">
                    {
                        links.map(link => (
                            <Link className={`px-3 sm:px-4 py-1.5 rounded-full ${pathname === link.href ? "text-foreground bg-[#243119]" : "text-primaryText"} text-[12px] font-medium transition-colors`}
                                key={link.content} href={link.href}>{link.content}</Link>
                        ))
                    }
                </div>

                <div className="hidden md:flex items-center gap-4 sm:gap-5 text-xs text-zinc-400 font-medium">
                    <Link href="/my-plan">
                        <div className="flex items-center gap-2">
                            <span className="text-3 text-white">Plan</span>
                            <span className="bg-foreground w-4 h-4 flex items-center justify-center rounded-full text-[9px]">
                                {plan}
                            </span>
                        </div>
                    </Link>
                    <Link href="/my-plan">

                        <div className="flex items-center gap-2 text-primaryText">
                            <span>Saved</span>
                            <span className="w-4 h-4 flex items-center justify-center rounded-full text-[9px]">
                                {save}
                            </span>
                        </div>
                    </Link>
                </div>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-foreground p-1 focus:outline-none"
                    aria-label="Toggle menu"
                >
                    <i className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"} text-xl`}></i>
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="md:hidden flex flex-col gap-2 mt-4 pt-4 border-t border-zinc-800">
                    {links.map((link) => (
                        <Link
                            key={link.content}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={`px-4 py-2 rounded-lg ${pathname === link.href
                                ? "text-foreground bg-[#243119]"
                                : "text-primaryText"
                                } text-sm font-medium transition-colors`}
                        >
                            {link.content}
                        </Link>
                    ))}
                    <div className="md:hidden flex items-center gap-4 sm:gap-5 text-xs text-zinc-400 font-medium px-4 py-2">
                        <Link href="/my-plan">
                            <div className="flex items-center gap-2">
                                <span className="text-3 text-white">Plan</span>
                                <span className="bg-foreground w-4 h-4 flex items-center justify-center rounded-full text-[9px]">
                                    {plan}
                                </span>
                            </div>
                        </Link>
                        <Link href="/my-plan">

                            <div className="flex items-center gap-2 text-primaryText">
                                <span>Saved</span>
                                <span className="w-4 h-4 flex items-center justify-center rounded-full text-[9px]">
                                    {save}
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar