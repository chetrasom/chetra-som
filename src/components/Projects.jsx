import { projectsData } from '../data';
import ProjectCard from './ProjectCard';

const Projects = () => {
    return (
        <section className="py-[100px]" id="projects">
            <div className="container">
                <div className="flex items-center gap-x-2 mb-6">
                    <h3 className="max-w-max font-bold text-2xl md:text-3xl text-primary">Things I&apos;ve Built</h3>
                    {/* <div className="h-[0.8px] w-full md:max-w-xs lg:max-w-md bg-blue-300"></div> */}
                </div>

                <div className='flex flex-col gap-y-10'>
                    {projectsData.map((project) => {
                        return <ProjectCard key={project.id} project={project} />
                    })}
                </div>

            </div>
        </section>
    )
}

export default Projects