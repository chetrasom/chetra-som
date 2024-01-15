import { FaCloudArrowDown } from "react-icons/fa6";
import aboutImg from '../assets/images/Programming-amico.png';

const About = () => {
    return (
        <section className="section pt-[100px]" id="about">
            <div className="container">

                <div className="flex flex-col gap-y-4 lg:flex-row lg:gap-10">
                
                    <div className="flex-1">
                        <figure className="rounded-lg overflow-hidden">
                            <img 
                                src={aboutImg}
                                alt="about" 
                                className="w-full h-full object-cover md:object-contain lg:object-fill"
                            />
                        </figure>
                    </div>

                    <div className="flex-1">

                        <div>
                            <h2 className="h2 text-primary">About Me</h2>
                        </div>
                        <div className="space-y-4">
                            <p>
                                I am a passionate front-end developer. I am a dedicated and enthusiastic developer with a passion for coding and problem-solving.
                                I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques.
                            </p>
                            <p>
                                I am self-driven and hardworking. I am able to adapt very quickly, and I am also a team player who thrives on collaborating with cross-functional teams to produce outstanding web applications.
                            </p>

                            <div className="pt-5">
                                <ul className="grid grid-cols-1 gap-y-4 md:grid-cols-2">
                                    <li>
                                        <div className="space-y-1">
                                            <h4 className="uppercase font-bold text-stone-700">name</h4>
                                            <p>Chetra Som</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="space-y-1">
                                            <h4 className="uppercase font-bold text-stone-700">email</h4>
                                            <p>chetrasom7@gmail.com</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="space-y-1">
                                            <h4 className="uppercase font-bold text-stone-700">education</h4>
                                            <p>Web Development</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="space-y-1">
                                            <h4 className="uppercase font-bold text-stone-700">employment</h4>
                                            <p>Open</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Download button */}
                        <div className="mt-6">
                            <a 
                                href="/" 
                                className="flex items-center gap-2 border border-blue-500 rounded-md max-w-max px-5 h-12 md:h-14 md:px-6 md:gap-4 shadow-md group hover:translate-x-1 hover:shadow-blue-400 transition-all"
                            >
                                <FaCloudArrowDown className="w-6 h-6 group-hover:text-blue-500 group-hover:transition-all" />Resume
                            </a>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default About;