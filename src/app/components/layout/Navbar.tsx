"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

function Navbar() {
    const pathname = usePathname();
    const links: { href: string, content: string }[] = [
        { href: "/", content: "Workouts" },
        { href: "/my-plan", content: "My Plan" }
    ]
    return (
        <nav className="flex items-center justify-between py-4">
            <div className="flex items-center gap-2">
                <img src="/logo.png" alt="logo" />
                <span className="font-bold text-white">FITLOG</span>
            </div>

            <div className="flex items-center">
                {
                    links.map(link => (
                        <Link className={` px-4 py-1.5 rounded-full ${pathname === link.href ? "text-foreground bg-[#243119]" : "text-primaryText"} text-[12px] font-medium`}
                         key={link.content} href={link.href}>{link.content}</Link>
                    ))
                }
            </div>

            <div className="flex items-center gap-5 text-xs text-zinc-400 font-medium">
                <div className="flex items-center gap-2">
                    <span className="text-3 text-white">Plan</span>
                    <span className="bg-foreground  w-4 h-4 flex items-center justify-center rounded-full text-[9px]">
                        0
                    </span>
                </div>

                <div className="flex items-center gap-2 text-primaryText">
                    <span>Saved</span>
                    <span className="w-4 h-4 flex items-center justify-center rounded-full text-[9px]">
                        0
                    </span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar