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
        title: "Plataforma de E-Commerce",
        language: "TypeScript",
        description: "Una plataforma moderna de comercio electrónico para ropa, desarrollada utilizando Next.js, Tailwind CSS y TypeScript. En este proyecto, aprendí a construir aplicaciones web escalables y optimizadas para SEO, además de integrar pasarelas de pago y manejar el estado global de la aplicación.",
        technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
        hasCode: true,
        codeLink: undefined,
        demoLink: undefined,
        image: "./projects/ecommerce.webp"
    },
    {
        id: 2,
        title: "Portafolio de Fotografía",
        language: "TypeScript",
        description: "Un sitio web profesional de portafolio de fotografía para una fotógrafa italiana, construido con Next.js, TypeScript y Tailwind CSS. Este proyecto me permitió mejorar mis habilidades en diseño responsivo, optimización de imágenes y creación de experiencias de usuario atractivas.",
        technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
        hasCode: true,
        codeLink: "https://github.com/Otochicatole/photograph-front",
        demoLink: "https://maranzana.photography/",
        image: "./projects/photograph.webp"
    },
    {
        id: 3,
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
        id: 4,
        title: "Sistema Turnos",
        language: "TypeScript",
        description: "Un sistema integral de agendamiento de citas para una Barberia, desarrollado con Next.js, TypeScript y Tailwind CSS. Este proyecto me ayudó a profundizar en la gestión de formularios y validacion de datos.",
        technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
        hasCode: true,
        codeLink: "https://github.com/Otochicatole/turnos",
        demoLink: "https://ventus.hair/",
        image: "./projects/barber.webp"
    },
    {
        id: 5,
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
        id: 6,
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
        id: 7,
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
        id: 8,
        title: "API de Productos, Categorias, Subcategorias  y Servicio de autenticacion.",
        language: "Java",
        description: "Servicio de autenticacion basico jwt con Spring Boot",
        technologies: ["Java", "Spring Boot"],
        hasCode: true,
        codeLink: "https://github.com/Otochicatole/java-api-product-example",
        demoLink: undefined,
        image: "./projects/java.webp"
    }
];
