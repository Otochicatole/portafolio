import { Project } from "../arrays/array-projects";


export default function CardProject({ project }: { project: Project }) {
    return (
        <>
            <div
                className="bg-white/5 hover:bg-white/70 hover:shadow-[0_0_55px_10px_rgba(240,240,240,0.5),_inset_0_0_55px_10px_rgba(0,0,0,0.5)] hover:text-black backdrop-blur-3xl border border-neutral-800 flex flex-col justify-between p-4 rounded-lg shadow-lg transition-all duration-500 text-gray-300">
                <h2 className="text-xl font-bold mb-2 ">{project.title}</h2>
                <p className="text-sm  mb-2 ">{project.language}</p>
                <p className="text-sm mb-4">{project.description}</p>
                <div className="text-sm">{project.technologies.map((tech, index) => (
                    <span key={index} className="bg-black/20 px-2 py-1 rounded mr-1">{tech}</span>
                ))}
                </div>
                <div className="flex justify-between items-center mt-6">
                    <br />
                    <div className="flex items-center gap-3">
                        {project.hasCode && project.codeLink && (
                            <a className="cursor-pointer hover:text-blue-800" href={project.codeLink}>Code</a>
                        )}
                        {project.demoLink && (
                            <a className="cursor-pointer hover:text-blue-800" href={project.demoLink}>View</a>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}