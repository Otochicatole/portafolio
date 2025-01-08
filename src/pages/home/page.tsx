import { motion } from "framer-motion";
import { experiences, skills, svgIcons } from "../../global/data/data";
import FlexibleContainer from "../../components/common/container-glow";
import ProjectsCard from "../../components/common/projects";
import TypingText from "../../components/common/typing-text";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import { FiCheck, FiCopy } from "react-icons/fi";
import { MdOutgoingMail } from "react-icons/md";



export default function Home() {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("nicocuello122@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };


    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = './cv/cv.pdf';
        link.download = 'CV_Agustin_Cuello.pdf';
        link.click();
    };

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            x: -50
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const skillVariants = {
        hidden: {
            opacity: 0,
            x: 50
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className="flex flex-col w-full h-full">
            <FlexibleContainer>
                <div className="flex flex-col w-full min-h-[500px] items-center justify-center p-4 pb-20 relative bg-black/40 backdrop-blur-3xl">
                    <TypingText />
                    <h3 className="text-xl lg:text-3xl animate-fade-left mt-3 transition-all">
                        Carlos Agustin Nicolas Cuello
                    </h3>

                    <motion.section variants={itemVariants} className="text-center">
                        <div className="mt-12 flex justify-center space-x-6">
                            <motion.a
                                href="https://github.com/Otochicatole"
                                whileHover={{ scale: 1.2 }}
                                className="text-2xl text-gray-400 hover:text-neutral-400"
                            >
                                <FaGithub />
                            </motion.a>
                            <motion.a
                                href="https://www.linkedin.com/in/carlos-agustin-nicolas-cuello-0b88221bb"
                                whileHover={{ scale: 1.2 }}
                                className="text-2xl text-gray-400 hover:text-neutral-400"
                            >
                                <FaLinkedin />
                            </motion.a>
                        </div>

                        <motion.button
                            className="bg-white/5 border border-gray-700 hover:bg-black/10 hover:border-green-700 text-white text-sm px-4 py-1 rounded-sm inline-flex items-center space-x-2 mt-4"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleDownload}
                        >
                            <FaDownload />
                            <span>Descargar CV</span>
                        </motion.button>
                    </motion.section>

                    <div className="xl:absolute xl:left-3 xl:bottom-3 flex flex-row items-center gap-2 transform text-sm bg-white/10 rounded-md p-1 px-3 backdrop-blur-sm mt-6">
                    <MdOutgoingMail className="text-xl" />
                        <p className="text-sm text-neutral-400">nicocuello122@gmail.com</p>
                        <button
                            onClick={handleCopy}
                            className="flex items-center p-2 py-1 rounded-md text-neutral-400 hover:bg-white/5 hover:text-white transition-colors"
                        >
                            {copied ? (
                                <>
                                    <FiCheck className="text-green-500" />
                                </>
                            ) : (
                                <>
                                    <FiCopy />
                                </>
                            )}
                        </button>
                    </div>

                    <div className="flex flex-row flex-wrap ml-4 mr-4 space-x-2 mt-3 bg-white/10 p-2 pr-3 pl-3 rounded-[6px] absolute bottom-6 gap-1 right-50 animate-fade animate-delay-100">
                        {svgIcons.map((icon, index) => (
                            <div key={index} className="relative group">
                                <img
                                    src={icon.src}
                                    alt={icon.alt}
                                    className="w-6 h-6 group-hover:scale-125 transition-transform duration-200 cursor-help"
                                />
                                <span className="absolute bottom-9 left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 bg-black text-white text-xs px-2 py-1 rounded-md transition-all duration-200">
                                    {icon.alt}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </FlexibleContainer>
            <div className="min-h-screen transition-all py-12 px-2 sm:px-6 lg:px-8">
                <div className="w-full mx-auto">
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* EXPERIENCIA */}
                        <div>
                            <h2 className="text-3xl font-bold text-center mb-12">
                                Experiencia Profesional
                            </h2>
                            <motion.div
                                className="relative"
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                <div className="hidden md:block absolute left-8 top-8 bottom-0 w-0.5 bg-gray-600">
                                    <motion.div
                                        className="absolute w-2 h-2 bg-blue-500 rounded-full"
                                        style={{
                                            left: "50%",
                                            transform: "translateX(-50%)",
                                            boxShadow: "0 0 10px 2px rgba(100, 100, 255, 0.7)"
                                        }}
                                        animate={{
                                            top: ["0%", "100%"],
                                            opacity: [1, 0.3, 1, 0.3, 1, 0.3, 1]
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "linear"
                                        }}
                                    />
                                    <div className="absolute left-[-3px] -top-1 w-2 h-2 bg-gray-600 rounded-full" />
                                    <div className="absolute left-[-3px] -bottom-1 w-2 h-2 bg-gray-600 rounded-full" />
                                </div>
                                {experiences.map((experience) => (
                                    <motion.div
                                        key={experience.id}
                                        className="relative mb-8"
                                        variants={itemVariants}
                                    >
                                        <div className="flex items-start">
                                            <div className="hidden md:flex items-center justify-center w-16 h-16 bg-[#202020] rounded-full border-4 border-gray-600 z-10">
                                                {experience.icon}
                                            </div>
                                            <motion.div whileHover={{ scale: 1.01 }} className="md:ml-6 bg-white/10 border border-white/5 p-6 rounded-sm shadow-xl flex-1 hover:bg-black/20 hover:border-white  transition-colors duration-200">
                                                <div className="flex justify-between items-center mb-2">
                                                    <h3 className="text-xl font-bold text-white">{experience.title}</h3>
                                                    <span className="text-xs ml-3 text-blue-200">{experience.period}</span>
                                                </div>
                                                <div className="text-lg font-semibold text-emerald-500 mb-2">
                                                    {experience.company}
                                                </div>
                                                {experience.description.map((desc) => (
                                                    <p key={desc.id} className=" text-gray-300 mb-2">
                                                        {desc.text}
                                                    </p>
                                                ))}
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>

                        {/* Skills */}
                        <div>
                            <h2 className="text-3xl font-bold text-white text-center mb-12">Skills</h2>
                            <motion.div
                                className="relative"
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                <div className="hidden md:block absolute left-8 top-8 bottom-0 w-0.5 bg-gray-600">
                                    <motion.div
                                        className="absolute w-2 h-2 bg-blue-500 rounded-full"
                                        style={{
                                            left: "50%",
                                            transform: "translateX(-50%)",
                                            boxShadow: "0 0 10px 2px rgba(100, 100, 255, 0.7)"
                                        }}
                                        animate={{
                                            top: ["0%", "100%"],
                                            opacity: [1, 0.3, 1, 0.3, 1, 0.3, 1]
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "linear"
                                        }}
                                    />
                                    <div className="absolute left-[-3px] -top-1 w-2 h-2 bg-gray-600 rounded-full" />
                                    <div className="absolute left-[-3px] -bottom-1 w-2 h-2 bg-gray-600 rounded-full" />
                                </div>

                                {skills.map((skill) => (
                                    <motion.div
                                        key={skill.id}
                                        className="relative mb-8"
                                        variants={skillVariants}
                                    >
                                        <div className="flex items-start">
                                            <div className="hidden md:flex items-center justify-center w-16 h-16 bg-[#202020] rounded-full border-4 border-gray-600 z-10">
                                                {skill.icon}
                                            </div>
                                            <motion.div whileHover={{ scale: 1.01 }} className="md:ml-6 bg-white/10 border border-white/5 p-6 rounded-sm shadow-xl flex-1 hover:bg-black/20 hover:border-white  transition-colors duration-200">
                                                <h3 className="text-xl font-bold text-white mb-4">{skill.category}</h3>
                                                <div className="flex flex-wrap gap-2">
                                                    {skill.items.map((item, index) => (
                                                        <span
                                                            key={index}
                                                            className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm"
                                                        >
                                                            {item}
                                                        </span>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                    <ProjectsCard />
                </div>
            </div>
        </div>
    );
}
