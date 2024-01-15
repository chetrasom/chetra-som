import { FaGithub, FaTwitter } from "react-icons/fa";
import { techStack } from "../data";

const Hero = () => {
    return (
        <section 
            id="home"
            className="min-h-[85vh] md:min-h-[65vh] lg:min-h-[100vh] pt-[110px] pb-10 md:pt-y-0 bg-gray-100 flex items-center"
        >
            <div className="container">
                <div className="flex flex-col gap-y-5 md:flex-row md:gap-x-5 md:gap-y-0">

                    <div className="w-full md:w-[50%] lg:w-[60%]">
                    
                        {/* Intro */}
                        <div className="text-center md:text-left">
                            <h5 className="text-lg text-blue-500 mb-2">Hi, my name is</h5>
                            <h1 className="h1">Chetra Som</h1>
                            <h2 className="h2 text-stone-700">
                                I build thing for the web
                            </h2>
                            {/* <p className="mb-6 lg:mb-8 lg:max-w-md">
                                A passionate Front-end React Developer.
                                I enjoy working on every aspect of web development, from the user interface to the server logic. 
                            </p> */}
                            <p className="mb-6 lg:mb-8 lg:max-w-md">
                                I am a passionate front-end developer. focused on creating beautiful and user-friendly websites and web applications. 
                            </p>
                        </div>
                        
                        {/* Social */}
                        <div className="flex items-center justify-center gap-x-4 md:justify-start">
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

                    </div>

                    <div className="flex-1 -order-1 md:order-none">
                        <div className="h-[375px] w-full bg-hero-pattern bg-no-repeat bg-cover bg-top border-sm box lg:h-[475px]"></div>
                    </div>

                </div>

                {/* Tech stack */}
                <div className="flex flex-col items-center gap-y-6 md:flex-row md:gap-x-6 lg:gap-x-8 mt-8 md:mt-12 lg:mt-0">
                    <h3 className="h3 underline underline-offset-8 md:no-underline md:border-r-2 md:border-stone-500 md:pr-4 lg:pr-8">
                        Tech Stack
                    </h3>
                    <ul className="flex flex-wrap justify-center gap-x-4 gap-y-6 md:justify-start lg:gap-x-8">
                        {techStack.map((tech) => {
                            return (
                                <li key={tech.id}>
                                    <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-lg overflow-hidden p-2">
                                        <img src={tech.image} alt={tech.name} className="w-full h-full object-contain" />
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Hero;