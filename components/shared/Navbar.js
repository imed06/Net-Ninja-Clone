import Image from "next/image"
import logo from "../../public/ninja-logo.png"
import Link from "next/link"

const Navbar = () => {
    return (
        <nav className="bg-[#191919] sticky top-0 z-10">
            <div className="w-full flex flex-wrap items-center justify-between px-8 py-5">
                <Link href="/">
                    <div className=" cursor-pointer ml-3">
                        <Image src={logo} width={100} alt="net ninja Logo" />
                    </div>
                </Link>
                <div className="items-center justify-between text-sm hidden w-full md:flex md:w-auto md:order-1 mr-2">
                    <ul className="flex flex-row space-x-5 ">
                        <Link href="/p/net-ninja-pro">
                            <li>
                                <div className="  text-white hover:underline cursor-pointer">Net Ninja Pro</div>
                            </li>
                        </Link>
                        <Link href="/courses">
                            <li>
                                <div className="  text-white hover:underline cursor-pointer">All Courses</div>
                            </li>
                        </Link>
                        <a target="_blank" href="https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg" rel="noopener noreferrer">
                            <li>
                                <div className="  text-white hover:underline cursor-pointer">Youtube Channel</div>
                            </li>
                        </a>
                        <Link href="/login">
                            <li>
                                <div className="  text-white hover:underline cursor-pointer">Login</div>
                            </li>
                        </Link>
                        <Link href="/signup">
                            <li>
                                <div className=" text-white hover:underline cursor-pointer">Sign Up</div>
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar