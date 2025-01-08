import React, { useState } from "react";
import { CiViewTable } from "react-icons/ci";
import { FaGithub, FaExternalLinkAlt, FaReact, FaNode } from "react-icons/fa";
import { FiFramer } from "react-icons/fi";
import { SiTailwindcss, SiTypescript, SiMongodb, SiNextdotjs } from "react-icons/si";
import { TbBrandVite } from "react-icons/tb";
import { VscGraphLine } from "react-icons/vsc";

const ProjectsCard = () => {
  const [projects] = useState([
    {
      id: 1,
      title: "Plataforma de E-Commerce",
      description: "Una plataforma de Ventas completa con gestión de inventario, carrito de compras y gestión de usuarios.",
      image: "./projects/shop.webp",
      technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Framer-motion", "TypeScript", "Next.js"],
      link: "https://github.com/Otochicatole",
      github: "https://github.com/Otochicatole"
    },
    {
      id: 2,
      title: "Panel de Analiticas",
      description: "Panel interactivo para visualización de métricas y datos con gráficos personalizables y en tiempo real.",
      image: "./projects/analytics.webp",
      technologies: ["React", "TypeScript", "Recharts.js", "Tailwind CSS", "Vite", "Framer-motion"],
      link: "https://otochicatole.github.io/analytics/",
      github: "https://github.com/Otochicatole/analytics"
    },
    {
      id: 3,
      title: "Sistema de Drag and Drop",
      description: "Una sistema que permite la organización interactiva de elementos mediante arrastrar y soltar.",
      image: "./projects/drag.webp",
      technologies: ["React", "Tailwind CSS", "React-dnd", "Tailwind CSS", "Vite", "TypeScript"],
      link: "https://otochicatole.github.io/draganddrop/",
      github: "https://github.com/Otochicatole/draganddrop"
    }
  ]);

  const getTechIcon = (tech: string) => {
    switch (tech) {
      case "React":
        return <FaReact className="text-blue-400" />;
      case "Node.js":
        return <FaNode className="text-green-400" />;
      case "MongoDB":
        return <SiMongodb className="text-green-500" />;
      case "Tailwind CSS":
        return <SiTailwindcss className="text-cyan-400" />;
      case "TypeScript":
        return <SiTypescript className="text-blue-400" />;
      case "Framer-motion":
        return <FiFramer />;
      case "Next.js":
        return <SiNextdotjs />;
      case "Vite":
        return <TbBrandVite className="text-yellow-300" />;
      case "Recharts.js":
        return <VscGraphLine />;
      case "React-dnd":
        return <CiViewTable className="text-blue-400" />;
      default:
        return null;
    }
  };

  return (
    <div className=" animate-fade transition-all duration-300">
      <div className="mx-auto bg-black/20 border border-neutral-700/70 backdrop-blur-3xl shadow-2xl rounded-sm overflow-hidden">
        <div className="p-4 md:p-8 transition-all duration-300">
          <h1 className="text-4xl font-bold text-gray-100 text-center mb-4">
            Mis Proyectos
          </h1>

          <div className="mb-8 text-gray-300 text-center max-w-2xl mx-auto">
            <p className="text-lg">
            Bienvenido a proyectos. Cada proyecto representa un desafío único
            que he abordado utilizando tecnologías modernas y mejores prácticas en el desarrollo de software.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white/10 rounded-sm overflow-hidden shadow-xl transition-all duration-300 hover:bg-[#303030]"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                      (e.target as HTMLImageElement).src = "/asd.bmp";
                    }}
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-100 mb-2">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-1 bg-black/30 px-3 py-1 rounded-full"
                      >
                        {getTechIcon(tech)}
                        <span className="text-sm text-gray-300">{tech}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-gray-100 transition-colors"
                    >
                      <FaGithub className="text-xl" />
                      <span>Code</span>
                    </a>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <FaExternalLinkAlt />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;