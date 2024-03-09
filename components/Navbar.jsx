'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    const [active, setActive] = useState(false);
    
    useEffect(() => {
        function handleResize() {
            // Check window width and update active state
            if (window.innerWidth > 640) { // Assuming the sm breakpoint is 640px
                setActive(false);
            }
        }

        // Add event listener to window resize
        window.addEventListener("resize", handleResize);

        // Cleanup function to remove event listener
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Run this effect only once on component mount

    return (
        <div className="flex justify-between h-16 items-center bg-white w-full">
            <span className="ml-14">
                <Image src="/logo.svg" width={110} height={110} alt="logo" />
            </span>
            <ul className={`items-center font-semibold sm:gap-5 sm:text-xs sm:flex sm:mr-6 sm:visible md:gap-5 md:mr-10 md:text-sm lg:mr-20 lg:gap-10 ${active ? 'flex flex-col absolute top-16 right-0 bg-white justify-evenly w-[45%] h-[40%] p-4 text-[10px] gap-5 font-normal sm:hidden' : 'sm:flex hidden'}`}>
                <li>
                    <Link href="/">Crypto Taxes</Link>
                </li>
                <li>
                    <Link href="/">Free Tools</Link>
                </li>
                <li>
                    <Link href="/">Resource Center</Link>
                </li>
                <li>
                    <Link href="/">
                        <div className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800 pl-5 pr-5 pt-2 pb-2 rounded-lg text-white">
                            Get Started
                        </div>
                    </Link>
                </li>
            </ul>
            <button onClick={() => setActive(!active)} className="sm:hidden mr-6 size-lg">
                <GiHamburgerMenu />
            </button>
        </div>
    );
};

export default Navbar;
