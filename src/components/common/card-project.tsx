import { useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { Project } from "../arrays/array-projects";

interface CardProjectProps {
    project: Project;
    index?: number;
}

export default function CardProject({ project, index = 0 }: CardProjectProps) {
    const cardRef = useRef<HTMLDivElement | null>(null);
    const glowRef = useRef<HTMLDivElement | null>(null);
    const tweenRef = useRef<gsap.core.Tween | null>(null);
    const [isHover, setIsHover] = useState(false);
    const holdTimeoutRef = useRef<number | null>(null);

    const initialState = {
        opacity: 0,
        y: 28,
        scale: 0.98,
        rotateX: 8,
        filter: "blur(6px)",
    } as const;

    const visibleState = {
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.68,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.08 * index,
        },
    } as const;

    const setGlowPosition = (x: number, y: number) => {
        if (!glowRef.current || !cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const adjustedX = x + 10;
        const adjustedY = y + 10;
        const fromX = Number(glowRef.current.style.getPropertyValue("--x").replace("px", "")) || (rect.width / 2 + 10);
        const fromY = Number(glowRef.current.style.getPropertyValue("--y").replace("px", "")) || (rect.height / 2 + 10);
        tweenRef.current?.kill();
        tweenRef.current = gsap.to({ x: fromX, y: fromY }, {
            x: adjustedX,
            y: adjustedY,
            duration: 0.5,
            ease: "power2.out",
            overwrite: true,
            onUpdate: function () {
                if (!glowRef.current) return;
                const curr = this.targets()[0] as { x: number; y: number };
                glowRef.current.style.setProperty("--x", `${curr.x}px`);
                glowRef.current.style.setProperty("--y", `${curr.y}px`);
            },
        });
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!glowRef.current || !cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        setGlowPosition(x, y);
    };

    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setGlowPosition(x, y);
        if (holdTimeoutRef.current) {
            clearTimeout(holdTimeoutRef.current);
            holdTimeoutRef.current = null;
        }
        requestAnimationFrame(() => setIsHover(true));
    };

    const handleMouseLeave = () => {
        tweenRef.current?.kill();
        tweenRef.current = null;
        if (holdTimeoutRef.current) {
            clearTimeout(holdTimeoutRef.current);
        }
        holdTimeoutRef.current = window.setTimeout(() => {
            setIsHover(false);
            holdTimeoutRef.current = null;
        }, 200);
    };

    return (
        <motion.article
            ref={cardRef}
            initial={initialState}
            whileInView={visibleState}
            viewport={{ once: true, amount: 0.4 }}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative group rounded-2xl p-[2px] bg-gradient-to-br from-neutral-800/20 via-neutral-700/10 to-transparent transition-colors duration-300 hover:via-neutral-700/20 h-full"
        >
            <div
                ref={glowRef}
                className="pointer-events-none absolute rounded-2xl mix-blend-screen transition-opacity duration-1000 ease-out"
                style={{
                    top: "-10px",
                    left: "-10px",
                    right: "-10px",
                    bottom: "-10px",
                    background: [
                        "radial-gradient(360px circle at var(--x, 50%) var(--y, 50%), rgba(0, 189, 47, 0.28), transparent 60%)",
                        "radial-gradient(440px circle at var(--x, 50%) var(--y, 50%), rgba(13, 0, 134, 0.25), transparent 70%)",
                    ].join(", "),
                    filter: "blur(22px)",
                    opacity: isHover ? 1 : 0,
                    transition: "opacity 1.1s cubic-bezier(0.22,1,0.36,1)",
                    willChange: "opacity",
                }}
            />

            <motion.div
                className="relative rounded-2xl backdrop-blur-3xl flex flex-col justify-between p-4 text-gray-300 h-full overflow-hidden shadow-lg"
                whileTap={{ scale: 0.99 }}
                transition={{ 
                    scale: { duration: 0.2, ease: [0.22, 1, 0.36, 1] },
                }}
            >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />
                
                <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                <p className="text-sm mb-2">{project.language}</p>
                <p className="text-sm mb-4">{project.description}</p>
                <div className="text-sm flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-black/20 px-2 py-1 rounded">
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="flex justify-between items-center mt-6">
                    <br />
                    <div className="flex items-center gap-3">
                        {project.hasCode && project.codeLink && (
                            <a className="cursor-pointer hover:text-blue-300" href={project.codeLink}>
                                Code
                            </a>
                        )}
                        {project.demoLink && (
                            <a className="cursor-pointer hover:text-blue-300" href={project.demoLink}>
                                View
                            </a>
                        )}
                    </div>
                </div>
            </motion.div>
        </motion.article>
    );
}