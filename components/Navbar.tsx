import Image from "next/image"
import Logo from "@/public/logo.jpg"
import { NAVTEXT } from "@/texts/navbartext"
import Link from "next/link"




const Navbar = () => {
    return (
        <div className="flex justify-between items-center w-full h-20">
            <div className="flex items-center space-x-10">
                {NAVTEXT.map(links => (
                    <ul className="text-slate-50" key={links.id}>
                        <Link className="text-slate-50" href={links.href}>{links.title}</Link>
                    </ul>
                ))}
            </div>
        </div>
    )
}

export default Navbar