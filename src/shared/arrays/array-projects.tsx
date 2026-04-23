export interface Project {
    id: number;
    title: string;
    language: string;
    description: string;
    technologies: string[];
    hasCode: boolean;
    codeLink?: string;
    demoLink?: string;
    image?: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: "API de Productos, Categorias, Subcategorias  y Servicio de autenticacion.",
        language: "Java",
        description: "API REST desarrollada con Spring Boot para la gestión de productos, categorías y subcategorías, con autenticación basada en JWT utilizando Spring Security.\n" +
            "\n" +
            "Permite registro e inicio de sesión de usuarios, cuenta con endpoints protegidos y operaciones CRUD completas, organizada bajo una arquitectura modular y escalable.",
        technologies: ["Java", "Spring Boot"],
        hasCode: true,
        codeLink: "https://github.com/Otochicatole/java-api-product-example",
        demoLink: undefined,
        image: "./projects/java.webp"
    },
    {
        id: 2,
        title: "Sitio Web de Portafolio para Maquilladora con Administración de Contenido",
        language: "TypeScript",
        description: "Monorepo orientado a la construcción de un sitio web de portafolio profesional para maquillaje, diseñado bajo una arquitectura desacoplada frontend + CMS headless.",
        technologies: ["TypeScript", "Next.js", "Tailwind CSS", "React"],
        hasCode: true,
        codeLink: "https://github.com/Otochicatole/monorepo-ana-lopez",
        demoLink: "https://anaartista.com/",
        image: "./projects/ana.webp"
    },
    {
        id: 3,
        title: "Sistema Integral de Gestión de Productos, Ventas y Bundles con Analítica Avanzada",
        language: "TypeScript",
        description: "Aplicación para gestionar productos, ventas y bundles desde una única plataforma, con control de stock en tiempo real y estadísticas de rendimiento (semanales, mensuales y anuales) para una mejor toma de decisiones.",
        technologies: ["TypeScript", "Next.js", "Tailwind CSS", "React", "Prisma", "PostgreSQL"],
        hasCode: true,
        codeLink: undefined,
        demoLink: "https://product-manager-tan.vercel.app/",
        image: "./projects/pm.webp"
    },
    {
        id: 4,
        title: "Sistema Turnos y gestion de Barberia",
        language: "TypeScript",
        description: "Un sistema integral de agendamiento de citas para una Barberia, desarrollado con Next.js, TypeScript y Tailwind CSS. Este proyecto me ayudó a profundizar en la gestión de formularios y validacion de datos.",
        technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
        hasCode: true,
        codeLink: undefined,
        demoLink: "https://ventus-app-v2.vercel.app/",
        image: "./projects/barber.webp"
    },
    {
        id: 5,
        title: "React Flow",
        language: "TypeScript",
        description: "React Flow es una biblioteca de gráficos interactivos para React. Permite crear y manipular gráficos complejos de forma sencilla y eficiente.",
        technologies: ["React", "React Flow", "TypeScript"],
        hasCode: true,
        codeLink: "https://github.com/Otochicatole/react-flow",
        demoLink: "https://flow-seven-khaki.vercel.app/",
        image: "./projects/flow.webp"
    },
    {
        id: 6,
        title: "Portafolio de Fotografía",
        language: "TypeScript",
        description: "Un sitio web profesional de portafolio de fotografía para una fotógrafa italiana, construido con Next.js, TypeScript y Tailwind CSS. Este proyecto me permitió mejorar mis habilidades en diseño responsivo, optimización de imágenes y creación de experiencias de usuario atractivas.",
        technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
        hasCode: true,
        codeLink: "https://github.com/Otochicatole/photograph-front",
        demoLink: undefined,
        image: "./projects/photograph.webp"
    },
    {
        id: 7,
        title: "API de Productos",
        language: "Java",
        description: "Una API RESTful robusta para la gestión de datos de productos, implementada utilizando Java y el framework Spring. En este proyecto, aprendí a diseñar y desarrollar APIs escalables, manejar bases de datos relacionales y aplicar principios de arquitectura limpia.",
        technologies: ["Java", "Spring"],
        hasCode: true,
        codeLink: "https://github.com/Otochicatole/api-products",
        demoLink: undefined,
        image: "./projects/java.webp"
    },
    {
        id: 9,
        title: "Herramienta de Visualización de Datos",
        language: "TypeScript",
        description: "Una herramienta interactiva para la visualización y análisis de datos mediante gráficos, construida con React, TypeScript y Tailwind CSS. Este proyecto me permitió aprender sobre la manipulación de datos, la creación de gráficos dinámicos y la optimización del rendimiento en aplicaciones interactivas.",
        technologies: ["React", "Tailwind CSS", "TypeScript"],
        hasCode: true,
        codeLink: "https://github.com/Otochicatole/analytics",
        demoLink: "https://otochicatole.github.io/analytics/",
        image: "./projects/analytics.webp"
    },
    {
        id: 10,
        title: "Gestión de Tareas con Drag and Drop",
        language: "TypeScript",
        description: "Una aplicación de gestión de tareas con funcionalidad de arrastrar y soltar, desarrollada utilizando React, TypeScript y Tailwind CSS. Este proyecto me permitió mejorar mis habilidades en la implementación de interfaces de usuario interactivas y en la gestión del estado de componentes complejos.",
        technologies: ["React", "Tailwind CSS", "TypeScript"],
        hasCode: true,
        codeLink: "https://github.com/Otochicatole/draganddrop",
        demoLink: "https://otochicatole.github.io/draganddrop/",
        image: "./projects/drag.webp"
    },
    {
        id: 11,
        title: "Plataforma de E-Commerce",
        language: "TypeScript",
        description: "Una plataforma moderna de comercio electrónico para ropa, desarrollada utilizando Next.js, Tailwind CSS y TypeScript. En este proyecto, aprendí a construir aplicaciones web escalables y optimizadas para SEO, además de integrar pasarelas de pago y manejar el estado global de la aplicación.",
        technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
        hasCode: true,
        codeLink: "https://github.com/Otochicatole/ecommerce-front",
        demoLink: undefined,
        image: "./projects/ecommerce.webp"
    },
];
