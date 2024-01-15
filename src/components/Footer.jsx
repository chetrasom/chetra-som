import { FaGithub, FaTwitter } from "react-icons/fa";
import logo from '../assets/images/logo-06da2c41.svg';

const Footer = () => {
    const getFullYear = new Date().getFullYear();

    return (
        <footer className='bg-stone-900 py-6'>
            <div className="container">
                <div className="relative h-[350px]">
                    <div className="h-full flex flex-col items-center justify-center text-center p-6">

                        <div>
                            <a href="#">
                                <img src={logo} alt="logo" className='w-24 h-24' />
                            </a>
                        </div>

                        <p className='text-[#f1f2f5] pb-5 md:max-w-md md:pb-6'>
                            A dedicated and enthusiastic developer with a passion for coding and
                            problem-solving.
                        </p>

                        <div className="flex items-center justify-center gap-x-4 md:justify-start pb-5 md:pb-6">
                            <a 
                                href="https://github.com/chetrasom" 
                                target="_blank"
                                rel="noreferrer" 
                                className="text-3xl w-12 h-12 md:w-14 md:h-14 bg-white border border-gray-100 rounded-lg shadow-md overflow-hidden p-2 flex items-center justify-center group hover:translate-x-1 hover:shadow-blue-400 transition-all"
                            >
                                <FaGithub className="group-hover:text-blue-500 group-hover:transition-all" />
                            </a>
                            <a 
                                href="https://twitter.com/chetra_som"
                                target="_blank"
                                rel="noreferrer" 
                                className="text-3xl w-12 h-12 md:w-14 md:h-14 bg-white border border-gray-100 rounded-lg shadow-md overflow-hidden p-2 flex items-center justify-center group hover:-translate-x-1 hover:shadow-blue-400  transition-all"
                            >
                                <FaTwitter className="group-hover:text-blue-500 group-hover:transition-all" />
                            </a>
                        </div>

                        <div className="text-[#f1f2f5] flex flex-wrap items-center justify-center gap-x-2">
                            <span>All rights reserved © {getFullYear}</span>
                            <strong>Chetra Som</strong>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;