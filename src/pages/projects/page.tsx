import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaSearch } from "react-icons/fa";
import { projects } from "../../components/arrays/array-projects";
import Footer from "../../components/layout/footer";

export default function ProjectsPage() {
    const [search, setSearch] = useState("");
    const [focused, setFocused] = useState(false);

    const filteredProjects = projects.filter((project) =>
        project.title.toLowerCase().includes(search.toLowerCase()),
    );

    return (
        <>
            <div className="min-h-screen mt-[100px] text-gray-200 sm:pl-25 p-6 pb-40">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold text-center mb-10">Proyectos</h1>
                    <motion.div
                        className={`relative w-full flex items-center bg-white rounded-sm shadow-md transition-all duration-300 max-w-[1000px] ${focused
                            ? "ring-2 ring-blue-400 scale-105"
                            : "ring-1 ring-gray-300"
                            }`}
                    >
                        <FaSearch className="text-gray-500 ml-4" size={20} />
                        <input
                            type="text"
                            placeholder="Busca un Proyecto..."
                            className="w-full p-3 pl-10 pr-4 text-gray-900 rounded-sm outline-none bg-transparent"
                            onChange={(e) => setSearch(e.target.value)}
                            onFocus={() => setFocused(true)}
                            onBlur={() => setFocused(false)}
                        />
                    </motion.div>
                    <div className="border-t border-gray-200/10 w-full mt-10" />
                    <motion.div
                        className="space-y-6 mt-6 w-full lg:w-3/4 transition-all duration-300"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        {filteredProjects.length > 0 ? (
                            filteredProjects.map((project) => (
                                <motion.div
                                    key={project.id}
                                    className="group relative bg-white/5 hover:bg-white/70 hover:shadow-[0_0_55px_10px_rgba(240,240,240,0.5),_inset_0_0_55px_10px_rgba(0,0,0,0.5)] hover:text-black backdrop-blur-3xl flex flex-col sm:flex-row items-center gap-3 justify-between p-4 rounded-lg shadow-lg transition-all duration-500 text-gray-300"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-80 h-80 sm:w-40 sm:h-40 sm:m-6 rounded-md object-cover"
                                    />
                                    <div className="flex-1 h-fit text-center md:text-left pb-20">
                                        <h3 className="text-xl font-semibold">{project.title}</h3>
                                        <p className="">{project.description}</p>
                                        <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-2">
                                            {project.technologies.map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className="px-2 py-1 text-sm bg-white/5 rounded-md group-hover:bg-black/20"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="absolute bottom-6 right-[27%] sm:right-10 flex flex-wrap justify-center md:justify-start gap-4 mt-4">
                                            {project.hasCode && project.codeLink && (
                                                <a
                                                    href={project.codeLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 hover:bg-black/50 hover:text-blue-500 p-2 px-4 rounded-lg text-blue-500 group-hover:text-blue-800  cursor-pointer trnasition-all duration-300"
                                                >
                                                    <FaGithub size={20} /> Code
                                                </a>
                                            )}
                                            {project.demoLink && (
                                                <a
                                                    href={project.demoLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 hover:bg-black/50 hover:text-green-500 p-2 px-3 rounded-lg text-green-500 group-hover:text-green-800  cursor-pointer trnasition-all duration-300"
                                                >
                                                    <FaExternalLinkAlt size={20} /> View
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))
                        ) : (
                            <p className="text-center text-gray-400">No projects found</p>
                        )}
                    </motion.div>
                </div>
            </div>
            <Footer />
        </>
    );
}