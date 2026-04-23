import { FaBriefcase, FaRocket } from "react-icons/fa";

export const experiences = [
    {
        id: 1,
        title: "Desarrollador Front-end",
        company: "Stage1 Labs · Jornada completa · Remoto",
        period: "May 2022 – Ago 2023",
        description: [
            "Desarrollo de aplicaciones web y juegos multiplataforma con React.js, Next.js y React Native.",
            "Implementación de interfaces dinámicas, responsivas y accesibles, optimizando rendimiento.",
            "Creación de juegos casuales para móvil y navegador con animaciones, Redux Toolkit/Zustand y funcionalidades en tiempo real (Firebase, Supabase).",
            "Configuración de CI/CD con Vercel y GitHub Actions, asegurando despliegues rápidos, escalables y confiables."
        ],
        icon: <FaRocket/>
    },
    {
        id: 2,
        title: "Desarrollador Front-end",
        company: "Uploy · Jornada completa · Remoto",
        period: "Sep 2023 – Sep 2025",
        description: [
            "Desarrollo de aplicaciones web con React.js y Next.js, implementando Server-Side Rendering (SSR) para optimizar rendimiento y SEO.",
            "Integración con APIs REST y GraphQL, además de configuración de webhooks para comunicación entre servicios y automatización de procesos.",
            "Implementación de seguridad en autenticación y autorización mediante JWT, OAuth2 y NextAuth, asegurando protección de datos y control de accesos."
        ],
        icon: <FaBriefcase/>
    },
];