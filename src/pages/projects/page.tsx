import {useState} from "react";
import {motion} from "framer-motion";
import {FaSearch} from "react-icons/fa";
import {projects} from "../../shared/arrays/array-projects";
import Footer from "../../shared/components/layout/footer";
import CardProject from "../../features/projects/ui/card-project.tsx";

export default function ProjectsPage() {
    const [search, setSearch] = useState("");
    const [focused, setFocused] = useState(false);

    const filteredProjects = projects.filter((project) =>
        project.title.toLowerCase().includes(search.toLowerCase()),
    );

    return (
        <>
            <main className="min-h-screen mt-25 text-gray-200 sm:pl-25 p-6 pb-40">
                <section className="flex flex-col items-center justify-center ">
                    <h1 className="text-3xl font-bold text-center mb-10">Proyectos</h1>
                    <motion.div
                        className={`relative w-full flex items-center bg-white rounded-sm shadow-md transition-all duration-300 max-w-[1000px] ${focused
                            ? "ring-2 ring-blue-400 scale-105"
                            : "ring-1 ring-gray-300"
                        }`}
                    >
                        <FaSearch className="text-gray-500 ml-4" size={20}/>
                        <input
                            type="text"
                            placeholder="Busca un Proyecto..."
                            className="w-full p-3 pl-10 pr-4 text-gray-900 rounded-sm outline-none bg-transparent"
                            onChange={(e) => setSearch(e.target.value)}
                            onFocus={() => setFocused(true)}
                            onBlur={() => setFocused(false)}
                        />
                    </motion.div>
                    <div className="border-t border-gray-200/10 w-full mt-10"/>
                    <motion.section
                        className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 pt-10 gap-6 lg:p-10"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 0.5}}
                    >
                        {filteredProjects.length > 0 ? (
                            filteredProjects.map((project) => (
                                <CardProject key={project.id} {...project} />
                            ))
                        ) : (
                            <p className="text-center text-gray-400">No projects found</p>
                        )}
                    </motion.section>
                </section>
            </main>
            <Footer/>
        </>
    );
}