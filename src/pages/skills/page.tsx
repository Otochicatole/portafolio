import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaReact, FaNode, FaDatabase, FaHtml5, FaCss3Alt, FaJs, FaSass, FaGithub, FaTrello, FaJira, FaTimes } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiExpress, SiMongodb, SiPrisma, SiMysql, SiDocker } from "react-icons/si";
import { TbTool } from "react-icons/tb";

const skillDescriptions: Record<string, string> = {
  React: "React es una biblioteca de JavaScript para construir interfaces de usuario. Permite a los desarrolladores crear componentes de UI reutilizables y gestionar el estado de la aplicación de manera eficiente.",
  TypeScript: "TypeScript es un lenguaje de programación fuertemente tipado que se basa en JavaScript, brindándote mejores herramientas a cualquier escala.",
  "Framer Motion": "Framer Motion es una biblioteca de movimiento lista para producción para React que impulsa las animaciones en interfaces de usuario.",
  "Tailwind CSS": "Tailwind CSS es un framework CSS utility-first que permite el desarrollo rápido de UI con clases predefinidas.",
  Sass: "Sass es un lenguaje de script preprocesador que se interpreta o compila en CSS, agregando funciones poderosas como variables y reglas anidadas.",
  CSS: "CSS (Hojas de Estilo en Cascada) es un lenguaje de hojas de estilo utilizado para describir la presentación de un documento escrito en HTML.",
  HTML: "HTML es el lenguaje de marcado estándar para documentos diseñados para mostrarse en un navegador web.",
  JavaScript: "JavaScript es un lenguaje de programación que permite páginas web interactivas y es una parte esencial de las aplicaciones web.",
  "Node.js": "Node.js es un entorno de ejecución de JavaScript construido sobre el motor V8 de Chrome, que permite ejecutar JavaScript en el lado del servidor.",
  "Next.js": "Next.js es un framework de React que permite funcionalidades como renderizado del lado del servidor y generación de sitios web estáticos.",
  "Express.js": "Express.js es un framework de aplicación web minimalista y flexible para Node.js que proporciona un conjunto robusto de características.",
  MongoDB: "MongoDB es un programa de base de datos orientado a documentos multiplataforma, clasificado como una base de datos NoSQL.",
  Prisma: "Prisma es un ORM de próxima generación que ayuda a los desarrolladores a construir más rápido y cometer menos errores con un modelo de datos intuitivo.",
  MySQL: "MySQL es un sistema de gestión de bases de datos relacionales de código abierto utilizado para aplicaciones web y procesamiento de transacciones en línea.",
  Docker: "Docker es una plataforma para desarrollar, enviar y ejecutar aplicaciones en contenedores.",
  Git: "Git es un sistema de control de versiones distribuido para rastrear cambios en el código fuente durante el desarrollo de software.",
  GitHub: "GitHub es un servicio de alojamiento basado en web para control de versiones usando Git, utilizado principalmente para código.",
  Trello: "Trello es una aplicación de gestión de proyectos y organización de tareas basada en web, estilo Kanban.",
  Jira: "Jira es un producto de seguimiento de problemas que permite el seguimiento de errores y la gestión ágil de proyectos."
};

interface Skill {
  name: string;
  icon: JSX.Element;
}

interface ModalProps {
  skill: Skill;
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ skill, isOpen, onClose }: ModalProps) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="bg-neutral-800 p-6 rounded-lg max-w-md w-full relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-200"
          >
            <FaTimes />
          </button>
          <div className="flex items-center gap-3 mb-4">
            <div className="text-3xl">{skill.icon}</div>
            <h3 className="text-xl font-bold text-neutral-200">{skill.name}</h3>
          </div>
          <p className="text-neutral-300">{skillDescriptions[skill.name]}</p>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

interface SkillSectionProps {
  title: string;
  items: Skill[];
  icon: JSX.Element;
}

const SkillSection = ({ title, items, icon }: SkillSectionProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="w-full"
  >
    <div className="flex items-center gap-3 mb-4">
      <div className="text-2xl text-neutral-400">{icon}</div>
      <h2 className="text-xl font-bold text-neutral-200">{title}</h2>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {items.map((skill, index) => (
        <SkillCard key={index} {...skill} />
      ))}
    </div>
  </motion.div>
);

const SkillCard = ({ name, icon }: Skill) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-neutral-800 p-4 rounded-sm flex flex-col items-center justify-center gap-2 hover:bg-neutral-700 transition-colors duration-300 cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="text-3xl">{icon}</div>
        <p className="text-neutral-300 text-sm font-medium">{name}</p>
      </motion.div>
      <Modal
        skill={{ name, icon }}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

const SkillsPortfolio = () => {
  const skills = {
    frontend: [
      { name: "React", icon: <FaReact className="text-blue-500" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
      { name: "Framer Motion", icon: <FaReact className="text-purple-500" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: "Sass", icon: <FaSass className="text-pink-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-400" /> },
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> }
    ],
    backend: [
      { name: "Node.js", icon: <FaNode className="text-green-500" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-400" /> }
    ],
    database: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "Prisma", icon: <SiPrisma className="text-teal-500" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-500" /> }
    ],
    tools: [
      { name: "Docker", icon: <SiDocker className="text-blue-400" /> },
      { name: "Git", icon: <FaGithub className="text-gray-400" /> },
      { name: "GitHub", icon: <FaGithub className="text-purple-400" /> },
      { name: "Trello", icon: <FaTrello className="text-blue-500" /> },
      { name: "Jira", icon: <FaJira className="text-blue-400" /> }
    ]
  };

  return (
    <div className="min-h-screen bg-neutral-900 py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral-100 mb-4">Skills</h1>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Una visión completa de mi experiencia técnica en varias tecnologías y herramientas.
          </p>
        </div>

        <div className="space-y-12">
          <SkillSection
            title="Desarrollo Frontend"
            items={skills.frontend}
            icon={<FaReact className="text-blue-500" />}
          />
          <SkillSection
            title="Desarrollo Backend"
            items={skills.backend}
            icon={<FaNode className="text-green-500" />}
          />
          <SkillSection
            title="Gestión de Bases de Datos"
            items={skills.database}
            icon={<FaDatabase className="text-blue-400" />}
          />
          <SkillSection
            title="Herramientas"
            items={skills.tools}
            icon={<TbTool className="text-blue-400" />}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default SkillsPortfolio;
