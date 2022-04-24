import React from 'react'
import {Disclosure} from "@headlessui/react";
import {MenuIcon, XIcon} from "@heroicons/react/outline";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div id={"header"} className={"fixed top-0 z-50 w-full transition duration-500 bg-[#FFFFFA] backdrop-filter backdrop-blur-lg bg-opacity-80 text-black drop-shadow-none "}>
            <header>
                <nav className={""}>
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <ul>
                                    <div className={"flex h-24 text-center text-xl font-semibold"}>
                                        <div className={"w-6/12 md:flex-none w-[200px] lg:w-[250px] ml-5 lg:ml-20"}>
                                            <li><a href={"#Presentation"}><img src={"/assets/ofHomePage/logoV2bg.png"} alt="logo" className={"h-24 md:h-[110px]"}/></a></li>
                                        </div>
                                        <div className={"hidden md:grow md:block md:grid md:grid-cols-1 md:place-items-center"}>
                                            <div className={"flex justify-center lg:gap-20 gap-10"}>
                                                <div className={"w-1/3 hover:text-teal-500 active:text-[#16163F] transition duration-300"}>
                                                    <li><a href={"#Presentation"}>Home</a></li>
                                                </div>
                                                <div className={"w-1/3 hover:text-teal-500 active:text-[#16163F] transition duration-300"}>
                                                    <li><a href={"#About"}>About</a></li>
                                                </div>
                                                <div className={"w-1/3 hover:text-teal-500 active:text-[#16163F] transition duration-300"}>
                                                    <li><a href={"#Contact"}>Contact</a></li>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={"hidden md:block w-[200px] lg:w-[250px] mr-5 lg:mr-20 md:grid md:grid-cols-2 md:place-items-center"}>
                                            <button className="bg-transparent text-teal-500 text-teal-500 hover:text-[#134e4a] active:text-[#16163F] transition delay-50">
                                                <Link to="/Login">Log in</Link>
                                            </button>
                                            <button className="text-lg bg-teal-500 hover:bg-[#134e4a] active:bg-[#16163F] transition delay-50 text-white font-semibold py-2 px-4 rounded-full min-w-[96px]">
                                                <Link to="/Login">Sign up</Link>
                                            </button>
                                        </div>
                                        <div className={"md:hidden w-6/12 flex place-items-center justify-end mr-12"}>
                                            <Disclosure.Button>
                                                <span className={"sr-only"}>Open main menu</span>
                                                {open ? (
                                                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                                                ) : (
                                                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                                )}
                                            </Disclosure.Button>
                                        </div>
                                    </div>
                                </ul>
                                <Disclosure.Panel className="flex flex-col text-center pb-5 md:hidden border-b border-black">
                                    <ul>
                                        <div className={"py-3 hover:text-[#17BB76] active:text-[#16163F] transition delay-50"}>
                                            <li><a href={"#Presentation"}>Home</a></li>
                                        </div>
                                        <div className={"py-3 hover:text-[#17BB76] active:text-[#16163F] transition delay-50"}>
                                            <li><a href={"#About"}>About</a></li>
                                        </div>
                                        <div className={"py-3 hover:text-[#17BB76] active:text-[#16163F] transition delay-50"}>
                                            <li><a href={"#Contact"}>Contact</a></li>
                                        </div>
                                        <div className={"py-3"}>
                                            <button className={"text-lg bg-teal-500 hover:bg-[#134e4a] active:bg-[#16163F] transition delay-50 text-white font-semibold py-2 px-5 rounded-full"}>
                                                <Link to="/Login">Log in</Link>
                                            </button>
                                        </div>
                                    </ul>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </nav>
            </header>
        </div>

    )
}

export default Navbar