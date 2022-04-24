import React from 'react'

import {
    BeakerIcon,
    GlobeIcon,
    ClockIcon,
    DeviceMobileIcon,
} from "@heroicons/react/solid"

import {Link} from "react-router-dom";


const Presentation = () => {
    return (

        <div id="Presentation" className="scroll-smooth bg-[#FFFFFA] h-max pt-16 md:pt-24">
            <div className={"blockHome grid grid-rows-3 lg:grid-rows-2 lg:grid-cols-2 place-items-center text-center lg:text-left py-10"}>
                <div className={"lg:row-span-2 grid grid-rows-7 px-9 lg:px-3 lg:pl-36 gap-8 lg:gap-10 2xl:gap-16"}>
                    <div className={"row-span-3"}>
                        <p className={"text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold"}>Have your own connected garden now !</p>
                    </div>
                    <div className={"row-span-2"}>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <p className={"text-1xl md:text-2xl font-light"}>Discover our solution designed <a className="font-semibold">to reduce water consumption</a> and  <a
                            className="font-semibold">to free up your time</a></p>
                    </div>
                    <div className={"row-span-2 self-center"}>
                        <button className={"text-xl bg-teal-500 hover:bg-[#134e4a] active:bg-[#16163F] transition delay-50 text-white font-semibold py-2 px-5 rounded-full"}>
                            <Link to="/Login">Get Started !</Link>
                        </button>
                    </div>
                </div>

                <div className="lg:row-span-2 w-11/12 md:w-10/12 pt-5 md:pt-0">
                   <img className={"pt-3 lg:pt-0 w-full"} src={"/assets/ofHomePage/etagerebghd.png"} alt="etagere" />
                </div>
                <div className="lg:col-span-2 flex flex-col mt-10 mb-5 py-4 w-8/12 max-w-[712px] bg-neutral-50 border border-slate-300 rounded-xl text-center shadow-xl">
                    <p className="text-sm font-bold pt-2 pb-4">Data Services</p>
                    <div className="grid grid-cols-2 place-content-center md:flex md:justify-around">
                        <div className={"grid justify-items-end pr-2 md:pr-0"}><p className="flex text-slate-600 text-sm"><BeakerIcon className="h-6 px-2 text-teal-500" />Save Water</p></div>
                        <div className={"grid justify-items-start pl-2 md:pl-0"}><p className="flex text-slate-600 text-sm"><GlobeIcon className="h-6 px-2 text-teal-500" />Save planet</p></div>
                        <div className={"grid justify-items-end pr-3 pt-3 md:pr-0 md:pt-0"}><p className="flex text-slate-600 text-sm"><ClockIcon className="h-6 px-2 text-teal-500" />Save Time</p></div>
                        <div className={"grid justify-items-start pl-2 pt-3 md:pl-0 md:pt-0"}><p className="flex text-slate-600 text-sm"><DeviceMobileIcon className="h-6 px-2 text-teal-500"/>Everywhere</p></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Presentation