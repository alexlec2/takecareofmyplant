import React from 'react'

const About = () => {
    return (
        <div id="About" className="grid grid-cols-1 place-content-center bg-[#ECF8EC] py-0.5">
            <div className="w-full my-44">
                <div className="max-w-[1240px] mx-16 md:mx-32 2xl:mx-auto">
                    <div className="text-center py-5">
                        <h2 className="text-4xl lg:text-5xl font-bold text-[#406A51]">Save up time and water by using our App.</h2>
                        <p className="text-2xl lg:text-3xl py-6 text-gray-500">Ljijum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="grid lg:grid-cols-3 gap-6 px-2 text-center">
                        <div className="bg-white border-2 border-[#52A67C] py-8 rounded-xl shadow-xl">
                            <p className="text-6xl font-bold text-teal-500 animate-pulse">50L</p>
                            <p className="text-gray-400 mt-2">You saved 50 litters of water !</p>
                        </div>
                        <div className="bg-white border-2 border-[#52A67C] py-8 rounded-xl shadow-xl">
                            <p className="text-6xl font-bold text-teal-500 animate-pulse">2h</p>
                            <p className="text-gray-400 mt-2">You saved two hours watering !</p>
                        </div>
                        <div className=" bg-white border-2 border-[#52A67C] py-8 rounded-xl shadow-xl">
                            <p className="text-6xl font-bold text-teal-500 animate-pulse">4%</p>
                            <p className="text-gray-400 mt-2">You reduced your ecological footprint by 4% !</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
