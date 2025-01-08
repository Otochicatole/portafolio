import { FaBriefcase, FaRocket, FaReact, FaNode, FaDatabase, FaServer, FaCode, } from "react-icons/fa";
import { TbTool } from "react-icons/tb";

export const svgIcons = [
  { src: "./svg/github-color-svgrepo-com.svg", alt: "GitHub" },
  { src: "./svg/git-svgrepo-com.svg", alt: "Git" },
  { src: "./svg/javascript-svgrepo-com.svg", alt: "JavaScript" },
  { src: "./svg/typescript-svgrepo-com.svg", alt: "TypeScript" },
  { src: "./svg/css-3-svgrepo-com.svg", alt: "CSS" },
  { src: "./svg/html-5-svgrepo-com.svg", alt: "HTML" },
  { src: "./svg/framer-svgrepo-com.svg", alt: "Framer Motion" },
  { src: "./svg/mongo-svgrepo-com.svg", alt: "MongoDB" },
  { src: "./svg/mongoose-svgrepo-com.svg", alt: "Mongoose" },
  { src: "./svg/react-svgrepo-com.svg", alt: "React" },
  { src: "./svg/nextjs-svgrepo-com.svg", alt: "Next.js" },
  { src: "./svg/tailwind-svgrepo-com.svg", alt: "Tailwind CSS" },
  { src: "./svg/vite-svgrepo-com.svg", alt: "Vite" },
  { src: "./svg/figma-svgrepo-com.svg", alt: "Figma" },
  { src: "./svg/sass-svgrepo-com.svg", alt: "Sass" },
  { src: "./svg/express-svgrepo-com.svg", alt: "Express.js" },
];

export const experiences = [
  {
    id: 1,
    title: "Desarrollador Frontend",
    company: "Uploy",
    period: "06/09/2023 - 26/11/2024",
    description: [
      { id: 1, text: "Desarrollé y mantuve aplicaciones web con React y Next.js, logrando mejoras significativas en la eficiencia del desarrollo y la calidad del código." },
      { id: 2, text: "Colaboré con equipos de diseño para crear interfaces responsivas y accesibles, utilizando Tailwind CSS para acelerar el desarrollo y asegurar un diseño coherente." },
      { id: 3, text: "Implementé TypeScript en proyectos de gran escala, lo que mejoró la mantenibilidad del código y redujo errores en producción." }
    ],
    icon: <FaRocket className="text-emerald-500" />
  },
  {
    id: 3,
    title: "Desarrollador Freelance",
    company: "Aplicación de Tienda Online (Next.js Fullstack)",
    period: "28/11/2024 - 30/12/2024",
    description: [
      { id: 1, text: "Desarrollé una aplicación web fullstack para una tienda online utilizando Next.js, integrando React y Material UI para un frontend dinámico y funcional." },
      { id: 2, text: "En el backend, implementé servicios con API Routes, gestioné la base de datos con MongoDB y Mongoose, y desarrollé funcionalidades como carrito de compras, manejo de usuarios, inventario y pedidos." },
      { id: 3, text: "Para garantizar seguridad y eficiencia, utilicé JWT y OAuth en la autenticación y autoricé pagos a través de Stripe. Además, optimicé el rendimiento con imágenes mejoradas, SSR y SSG." },
      { id: 4, text: "Trabajé estrechamente con el cliente para definir requerimientos, realizar pruebas y entregar una solución escalable y satisfactoria." },
    ],
    icon: <FaBriefcase className="text-emerald-500" />
  },
];

export const certificationsData = [
  {
    id: 1,
    title: "JavaScript",
    organization: "LinkedIn Learning",
    date: "ene 02, 2025",
    description: "Domina JavaScript para desarrollar aplicaciones web dinámicas y interactivas.",
    image: "./certificados/javascript.webp"
  },
  {
    id: 2,
    title: "React",
    organization: "LinkedIn Learning",
    date: "ene 03, 2025",
    description: "React.js para construir interfaces de usuario dinámicas y reactivas.",
    image: "./certificados/react.webp"
  },
  {
    id: 3,
    title: "Olimpiada Jurisdiccional de Programación",
    organization: "INET",
    date: "3 - 4 de octubre de 2019",
    description: "Ciudad de Mar del Plata, provincia de Buenos Aires.",
    image: "./certificados/olimpiada.webp"
  },
  {
    id: 4,
    title: "Olimpiada Nacional de Programación",
    organization: "INET",
    date: "29 de octubre - 2 de noviembre de 2019",
    description: "Ciudad de Buenos Aires.",
    image: "./certificados/olimpiada-nacional.webp"
  }
]

export const education = [
  {
    degree: "Técnico informático",
    institution: "I.P.F.L.B. - E.E.S.T Nº5",
    description: "3 años en el Instituto Privado Fray Luis Beltrán - Los años siguientes en la Escuela de Educación Técnica 5.",
  }
];

export const skills = [
  {
    id: 1,
    category: "Frontend",
    items: ["React", "TypeScript", "Framer Motion", "Taildwind CSS", "Sass", "CSS", "HTML", "JavaScript"],
    icon: <FaReact className="text-blue-500" />
  },
  {
    id: 2,
    category: "Backend",
    items: ["Node.js", "Next.js", "Express.js"],
    icon: <FaNode className="text-green-500" />
  },
  {
    id: 3,
    category: "Database",
    items: ["MongoDB", "Prisma", "MySQL"],
    icon: <FaDatabase className="text-yellow-500" />
  },
  {
    id: 4,
    category: "Herramientas",
    items: ["Docker", "Git", "GitHub", "Trello", "Jira"],
    icon: <TbTool className="text-purple-500" />
  }
];

export const skillsPercentage = [
  { name: "Desarrollo Frontend", icon: <FaCode />, proficiency: 95 },
  { name: "UX/UI Design", icon: <FaCode />, proficiency: 90 },
  { name: "Gestión de Base de Datos", icon: <FaDatabase />, proficiency: 60 },
  { name: "Desarrollo Backend", icon: <FaServer />, proficiency: 55 }
];