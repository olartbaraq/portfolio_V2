import Image from "next/image"
import Logo from "@/public/logo.jpg"
import { NAVTEXT } from "@/texts/navbartext"
import Link from "next/link"




const Navbar = () => {
    return (
        <div className="flex justify-between items-center w-full h-20 z-10">
            <div className="flex items-center">
                <Image src={Logo} alt="my-logo" height={60} width={60}/>
            </div>

            <div className="flex items-center space-x-10">
                {NAVTEXT.map(links => (
                    <ul key={links.id}>
                        <Link className="text-black" href={links.href}>{links.title}</Link>
                    </ul>
                ))}
            </div>
        </div>
    )
}

export default Navbar