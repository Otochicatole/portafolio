import { FaBriefcase, FaRocket } from "react-icons/fa";

export const experiences = [
    {
        id: 1,
        title: "Desarrollador Frontend",
        company: "Uploy",
        period: "06/09/2023 - 26/11/2024",
        description: [
            "Desarrollé y mantuve aplicaciones web con React y Next.js, logrando mejoras significativas en la eficiencia del desarrollo y la calidad del código.",
            "Colaboré con equipos de diseño para crear interfaces responsivas y accesibles, utilizando Tailwind CSS para acelerar el desarrollo y asegurar un diseño coherente.",
            "Implementé TypeScript en proyectos de gran escala, lo que mejoró la mantenibilidad del código y redujo errores en producción."
        ],
        icon: <FaRocket/>
    },
    {
        id: 3,
        title: "Desarrollador Freelance",
        company: "Aplicación de Tienda Online (Next.js Fullstack)",
        period: "28/11/2024 - Actualidad",
        description: [
            "Desarrollé una aplicación web fullstack para una tienda online utilizando Next.js, integrando React y Material UI para un frontend dinámico y funcional.",
            "En el backend, implementé servicios con API Routes, gestioné la base de datos con MongoDB y Mongoose, y desarrollé funcionalidades como carrito de compras, manejo de usuarios, inventario y pedidos.",
            "Para garantizar seguridad y eficiencia, utilicé JWT y OAuth en la autenticación y autoricé pagos a través de Stripe. Además, optimicé el rendimiento con imágenes mejoradas, SSR y SSG.",
            "Trabajé estrechamente con el cliente para definir requerimientos, realizar pruebas y entregar una solución escalable y satisfactoria."
        ],
        icon: <FaBriefcase/>
    },
];