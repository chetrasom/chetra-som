import { SiGmail } from "react-icons/si";
import { FaTelegram } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";

const Contact = () => {
    return (
        <section className="py-[100px]" id="contact">
            <div className="container">

                <div className="text-center">
                    <h1 className="h2 mb-5">Get In Touch</h1>
                    <p className="md:max-w-md lg:max-w-lg mx-auto">
                        I&apos;m currently looking for opportunities. Whether its a Full-Time Job. Send me a message, I&apos;ll try to get back to you as soon as possible.
                    </p>
                </div>

                <div className="flex flex-col gap-y-8 px-10 my-10 md:px-0 lg:flex-row lg:gap-x-8 lg:justify-around lg:items-center lg:px-0 lg:gap-y-0 lg:my-14">
                    <div className="flex items-center gap-4">
                        <div className="text-3xl w-12 h-12 md:w-14 md:h-14 bg-white border border-gray-100 rounded-lg shadow-md overflow-hidden p-2 flex items-center justify-center group hover:translate-x-1 hover:shadow-green-400 transition-all">
                            <ImLocation2 className="group-hover:text-green-500 transition-all" />
                        </div>
                        
                        <div className="flex flex-col">
                            <strong>Address</strong>
                            <span className="font-semibold text-stone-600">
                                Street 261, Sangkat Boeng Salang, <br /> Khan Toulkork, Phnom Penh
                            </span>
                        </div>
                    </div>
                
                    <div className="flex items-center gap-4">
                        <div className="text-3xl w-12 h-12 md:w-14 md:h-14 bg-white border border-gray-100 rounded-lg shadow-md overflow-hidden p-2 flex items-center justify-center group hover:translate-x-1 hover:shadow-red-400 transition-all">
                            <SiGmail className="group-hover:text-red-500 transition-all" />
                        </div>
                        
                        <div className="flex flex-col">
                            <strong>Email</strong>
                            <span className="font-semibold text-stone-600">chetrasom7@gmail.com</span>
                        </div>
                    </div>
                    
                    <a 
                        href="https://t.me/ChetraDeveloper" 
                        target="_blank" 
                        rel="noreferrer"
                    >
                        <div className="flex items-center gap-4">
                            <div className="text-3xl w-12 h-12 md:w-14 md:h-14 bg-white border border-gray-100 rounded-lg shadow-md overflow-hidden p-2 flex items-center justify-center group hover:translate-x-1 hover:shadow-blue-400 transition-all">
                                <FaTelegram className="group-hover:text-blue-500 transition-all" />
                            </div>
                            
                            <div className="flex flex-col">
                                <strong>Telegram</strong>
                                <span className="font-semibold text-stone-600">+(855) 93 90 38 94</span>
                            </div>
                        </div>
                    </a>
                </div>

                {/* Form */}
                <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-2 lg:gap-8">

                    <div className="rounded-md overflow-hidden shadow-md">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7735346345685!2d104.88986594732408!3d11.568086059413378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31095173761d4a53%3A0xcd09ff2f4d326e3f!2sSETEC%20Institute!5e0!3m2!1sen!2skh!4v1705071705213!5m2!1sen!2skh" 
                            // width="100%" 
                            // height="100%" 
                            style={{ border: "0" }}
                            // allowfullscreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full h-[350px] lg:h-full"
                        ></iframe>
                    </div>

                    <div>
                        <h3 className="h2 font-bold">Contact me</h3>
                        <div>
                            <form>
                                <div className="flex flex-col md:flex-row md:gap-x-4">
                                    <div className="flex-1">
                                        <input 
                                            type="text" 
                                            name="name" 
                                            id="name" 
                                            placeholder="Name*"
                                            autoComplete="off"
                                            className="border focus:outline-none rounded-sm w-full h-12 px-4 mb-4"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <input 
                                            type="email" 
                                            name="email" 
                                            id="email" 
                                            placeholder="Email*"
                                            autoComplete="off"
                                            className="border focus:outline-none rounded-sm w-full h-12 px-4 mb-4"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <textarea 
                                        name="description" 
                                        id="description" 
                                        cols="30" 
                                        rows="10"
                                        placeholder="Your message here*"
                                        className="border focus:outline-none rounded-sm w-full p-4"
                                    ></textarea>
                                </div>

                                <div className="mt-4">
                                    <button
                                        className="bg-primary rounded-sm max-w-max h-12 px-6 uppercase font-semibold text-white"
                                    >
                                        send message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Contact