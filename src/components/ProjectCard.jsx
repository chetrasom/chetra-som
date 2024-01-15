import PropTypes from 'prop-types';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from "react-icons/fi";

const ProjectCard = ({ project }) => {
    const { thumbnail, name, description, techStack, source, demo, order } = project;

    return (
        <div className='bg-white flex flex-col gap-y-5 lg:flex-row lg:gap-10 rounded-xl border border-gray-100 p-5 shadow-xl shadow-blue-200'>
            
            <figure className={`${order && 'lg:order-1'} bg-gray-200 w-full h-[350px] md:h-[450px] lg:h-[500px] rounded-xl border border-gray-100 overflow-hidden`}>
                <a href={demo} target="_blank" rel="noreferrer">
                    <img 
                        src={thumbnail} 
                        alt={name} 
                        className='translate-y-0 hover:-translate-y-2/4 ease-in-out duration-3000' 
                    />
                </a>
            </figure>

            <div className='lg:max-w-md lg:w-full'>
                <h3 className='h2 capitalize'>{name}</h3>

                <p>
                    {description}
                </p>

                <div className='flex flex-wrap justify-center gap-x-4 gap-y-3 py-6 font-semibold text-stone-600 md:justify-start'>
                    {techStack.map((tech) => {
                        return (
                            <div key={tech} className='max-w-max px-3 py-1 rounded-md border border-gray-100 shadow-md'>
                                {tech}
                            </div>
                        )
                    })}
                </div>

                <div className='flex items-center justify-center gap-x-6 mt-4 lg:justify-start'>
                    <div>
                        <a 
                            href={source} 
                            target="_blank" 
                            rel="noreferrer" 
                            className='flex items-center gap-x-2 font-semibold hover:translate-x-1 hover:text-blue-500 transition-all'
                        >
                            Source <FaGithub className='w-6 h-6' />
                        </a>
                    </div>
                        
                    <div className='flex items-center gap-x-2 font-semibold'>
                        <a 
                            href={demo} 
                            target="_blank" 
                            rel="noreferrer" 
                            className='flex items-center gap-x-2 font-semibold hover:translate-x-1 hover:text-blue-500 transition-all'
                        >
                            Live Demo <FiExternalLink className='w-6 h-6' />
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProjectCard;

ProjectCard.propTypes = {
    project: PropTypes.object
}