import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';


const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('gmail', 'test_tcomp', form.current, 'YAO4plFY11b_mCUDg')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };


    return(
        <div id="Contact" className="bg-[url('/assets/ofHomePage/dong.svg')] w-full py-32 h-full">
            <div className={"grid place-content-center"}>
                <div className="bg-white backdrop-filter pt-14 shadow-2xl rounded-lg sm:px-10 place-content-center w-[350px] lg:w-[700px] mt-10 flex items-center flex-col">
                    <div><h1 className="text-3xl lg:text-5xl font-bold text-center">Send us a message !</h1></div>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="py-8 px-10 w-full">
                            <div className="form-group">
                                <p>Your Name</p>
                                <input type="text" className="form-control border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:
                                outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 w-full hover:bg-[#FAFAFA] duration-200" placeholder="Name" name="name"/>
                            </div>
                            <div className="form-group pt-4">
                                <p>Your Email</p>
                                <input type="email" className="form-control border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:
                                outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 w-full hover:bg-[#FAFAFA] duration-200" placeholder="Email Address" name="email"/>
                            </div>
                            <div className="form-group pt-4">
                                <p>Your message</p>
                                <textarea className="form-control border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:
                                outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 w-full hover:bg-[#FAFAFA] duration-200" id="" cols="30" rows="8" placeholder="Your message" name="message"/>
                            </div>
                            <div className="pt-4 text-center">
                                <button className="bg-teal-500 hover:bg-[#] active:bg-[#16163F] transition delay-50 text-white font-bold py-2 px-5 rounded-full"><input type="submit" className="btn btn-info" value="Send Message"/></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact