import { BiLogoSpringBoot } from "react-icons/bi";
import {
    FaReact,
    FaNode,
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaSass,
    FaGithub,
    FaTrello,
    FaJira,
    FaJava
} from "react-icons/fa";
import {
    SiTypescript,
    SiTailwindcss,
    SiNextdotjs,
    SiExpress,
    SiMongodb,
    SiPrisma,
    SiMysql,
    SiDocker,
    SiRedux
} from "react-icons/si";

export const skills = {
    frontend: [
        {
            name: "React", 
            icon: <FaReact className="text-blue-500"/>,
            description: "React es una biblioteca de JavaScript para construir interfaces de usuario. Permite a los desarrolladores crear componentes de UI reutilizables y gestionar el estado de la aplicación de manera eficiente."
        },
        {
            name: "TypeScript", 
            icon: <SiTypescript className="text-blue-600"/>,
            description: "TypeScript es un lenguaje de programación fuertemente tipado que se basa en JavaScript, brindándote mejores herramientas a cualquier escala."
        },
        {
            name: "Framer Motion", 
            icon: <FaReact className="text-purple-500"/>,
            description: "Framer Motion es una biblioteca de movimiento lista para producción para React que impulsa las animaciones en interfaces de usuario."
        },
        {
            name: "Tailwind CSS", 
            icon: <SiTailwindcss className="text-cyan-400"/>,
            description: "Tailwind CSS es un framework CSS utility-first que permite el desarrollo rápido de UI con clases predefinidas."
        },
        {
            name: "Sass", 
            icon: <FaSass className="text-pink-500"/>,
            description: "Sass es un lenguaje de script preprocesador que se interpreta o compila en CSS, agregando funciones poderosas como variables y reglas anidadas."
        },
        {
            name: "CSS", 
            icon: <FaCss3Alt className="text-blue-400"/>,
            description: "CSS (Hojas de Estilo en Cascada) es un lenguaje de hojas de estilo utilizado para describir la presentación de un documento escrito en HTML."
        },
        {
            name: "HTML", 
            icon: <FaHtml5 className="text-orange-500"/>,
            description: "HTML es el lenguaje de marcado estándar para documentos diseñados para mostrarse en un navegador web."
        },
        {
            name: "JavaScript", 
            icon: <FaJs className="text-yellow-400"/>,
            description: "JavaScript es un lenguaje de programación que permite páginas web interactivas y es una parte esencial de las aplicaciones web."
        },
        {
            name: "Redux", 
            icon: <SiRedux className="text-purple-800" />,
            description: "Redux es una biblioteca de gestión de estado predecible para aplicaciones JavaScript. "
        }
    ],
    backend: [
        {
            name: "Node.js", 
            icon: <FaNode className="text-green-500"/>,
            description: "Node.js es un entorno de ejecución de JavaScript construido sobre el motor V8 de Chrome, que permite ejecutar JavaScript en el lado del servidor."
        },
        {
            name: "Next.js", 
            icon: <SiNextdotjs className="text-white"/>,
            description: "Next.js es un framework de React que permite funcionalidades como renderizado del lado del servidor y generación de sitios web estáticos."
        },
        {
            name: "Express.js", 
            icon: <SiExpress className="text-gray-400"/>,
            description: "Express.js es un framework de aplicación web minimalista y flexible para Node.js que proporciona un conjunto robusto de características."
        },
        {
            name: "Java", 
            icon: <FaJava className="text-orange-300" />,
            description: "Java es un lenguaje de programación de propósito general, orientado a objetos y diseñado para ser portátil, seguro y eficiente. Fue desarrollado por Sun Microsystems (ahora propiedad de Oracle) y es ampliamente utilizado para crear aplicaciones web, móviles (especialmente Android), de escritorio y empresariales. Una de sus características clave es que el código Java se compila en bytecode, que se ejecuta en la Máquina Virtual de Java (JVM), lo que permite que funcione en múltiples plataformas sin modificaciones."
        },
        {
            name: "Spring", 
            icon: <BiLogoSpringBoot className="text-green-400" />,
            description: "Spring es un framework (marco de trabajo) para Java que facilita el desarrollo de aplicaciones, especialmente las de tipo empresarial. Proporciona herramientas para manejar tareas comunes como la inyección de dependencias, la gestión de transacciones, el acceso a bases de datos y la creación de aplicaciones web. Una de sus partes más conocidas es Spring Boot, que simplifica aún más la creación de aplicaciones al reducir la configuración necesaria y permitir que se ejecuten fácilmente como servicios independientes. Spring es muy usado para construir aplicaciones robustas, escalables y fáciles de mantener."
        }
    ],
    database: [
        {
            name: "MongoDB", 
            icon: <SiMongodb className="text-green-500"/>,
            description: "MongoDB es un programa de base de datos orientado a documentos multiplataforma, clasificado como una base de datos NoSQL."
        },
        {
            name: "Prisma", 
            icon: <SiPrisma className="text-teal-500"/>,
            description: "Prisma es un ORM de próxima generación que ayuda a los desarrolladores a construir más rápido y cometer menos errores con un modelo de datos intuitivo."
        },
        {
            name: "MySQL", 
            icon: <SiMysql className="text-blue-500"/>,
            description: "MySQL es un sistema de gestión de bases de datos relacionales de código abierto utilizado para aplicaciones web y procesamiento de transacciones en línea."
        }
    ],
    tools: [
        {
            name: "Docker", 
            icon: <SiDocker className="text-blue-400"/>,
            description: "Docker es una plataforma para desarrollar, enviar y ejecutar aplicaciones en contenedores."
        },
        {
            name: "Git", 
            icon: <FaGithub className="text-gray-400"/>,
            description: "Git es un sistema de control de versiones distribuido para rastrear cambios en el código fuente durante el desarrollo de software."
        },
        {
            name: "GitHub", 
            icon: <FaGithub className="text-purple-400"/>,
            description: "GitHub es un servicio de alojamiento basado en web para control de versiones usando Git, utilizado principalmente para código."
        },
        {
            name: "Trello", 
            icon: <FaTrello className="text-blue-500"/>,
            description: "Trello es una aplicación de gestión de proyectos y organización de tareas basada en web, estilo Kanban."
        },
        {
            name: "Jira", 
            icon: <FaJira className="text-blue-400"/>,
            description: "Jira es un producto de seguimiento de problemas que permite el seguimiento de errores y la gestión ágil de proyectos."
        }
    ]
};