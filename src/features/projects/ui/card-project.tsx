import {motion} from "framer-motion";
import {FaExternalLinkAlt, FaGithub} from "react-icons/fa";

interface CardProjectProps {
    id: string | number;
    title: string;
    description: string;
    image?: string;
    technologies: string[];
    hasCode: boolean;
    codeLink?: string;
    demoLink?: string;
}

export default function CardProject({
                                        title,
                                        description,
                                        image,
                                        technologies,
                                        hasCode,
                                        codeLink,
                                        demoLink,
                                    }: CardProjectProps) {
    return (
        <motion.article
            className="group relative flex h-full flex-col overflow-hidden rounded-sm border border-zinc-800 bg-zinc-900/60 backdrop-blur-xl transition-all duration-300 hover:border-zinc-700 hover:shadow-[0_10px_40px_rgba(0,0,0,0.45)]">
            <div className="relative h-52 w-full overflow-hidden">
                <img
                    src={image ?? "/fallback.png"}
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"/>
            </div>

            <div className="flex flex-1 flex-col p-5">
                <h3 className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-zinc-100">
                    {title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-zinc-400">
                    {description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                    {technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="rounded-md border border-zinc-700 bg-zinc-800/70 px-2.5 py-1 text-xs font-medium text-zinc-300 transition-colors duration-300 group-hover:border-zinc-600 group-hover:bg-zinc-800"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
                    {hasCode && codeLink && (
                        <a
                            href={codeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-800/80 px-4 py-2 text-sm font-medium text-zinc-200 transition-all duration-300 hover:border-zinc-500 hover:bg-zinc-700 hover:text-white"
                        >
                            <FaGithub size={16}/>
                            Code
                        </a>
                    )}

                    {demoLink && (
                        <a
                            href={demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-black transition-all duration-300 hover:bg-zinc-200"
                        >
                            <FaExternalLinkAlt size={14}/>
                            Demo
                        </a>
                    )}
                </div>
            </div>
        </motion.article>
    );
}