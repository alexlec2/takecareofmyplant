import {ChevronDoubleLeftIcon} from "@heroicons/react/solid"
import {Link} from "react-router-dom";
import React from "react";

function Login(){
    return (
        <div className="bg-[url('/assets/ofHomePage/Branche3.png')] bg-no-repeat bg-fixed bg-center h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 px-16 py-8 bg-white drop-shadow-2xl rounded-lg ">
                <div className={"relative"}>
                    <div className={"absolute -top-1 -left-12"}>
                        <Link to="/"><ChevronDoubleLeftIcon className="h-8 mx-4 text-[#17BB76] hover:text-[#134e4a] active:text-[#16163F] transition delay-250"/></Link>
                    </div>
                    <h2 className="text-center text-4xl font-extrabold text-gray-900">TCOMP</h2>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Log in to your account</h2>

                </div>
                <form className="mt-8 space-y-6" action="#" method="POST">
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-[#58B77B] focus:border-[#58B77B] focus:z-10 sm:text-sm transition delay-50"
                                placeholder="Email address"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-[#58B77B] focus:border-[#58B77B] focus:z-10 sm:text-sm transition delay-50"
                                placeholder="Password"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                Remember me
                            </label>
                        </div>

                        <div className="text-sm">
                            <a href="/#" className="font-medium text-[#17BB76] hover:text-[#134e4a] active:text-[#16163F]">
                                Forgot your password?
                            </a>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className={"bg-[#17BB76] hover:bg-[#134e4a] active:bg-[#16163F] transition delay-50 text-white font-bold py-2 px-5 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"}>
                            Log in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;