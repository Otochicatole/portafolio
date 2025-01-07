import { motion } from "framer-motion";
import { FaDownload, FaGithub, FaLinkedin} from "react-icons/fa";
import { experiences, education, skillsPercentage } from "../../global/data/data";

const AboutMe = () => {


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/cv/cv.pdf';
    link.download = 'CV_Agustin_Cuello.pdf';
    link.click();
};

  return (
    <div className="min-h-screen bg-neutral-900 text-gray-100 px-6 py-8 md:px-8">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-6xl mx-auto"
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.img
            src="./profile.webp"
            alt="Perfil"
            className="w-40 h-40 rounded-full mx-auto mb-6 object-cover border-4 border-neutral-600"
            whileHover={{ scale: 1.1 }}
          />
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Hola, Soy Agustin Cuello</h1>
          <p className="text-xl text-neutral-400">Desarrollador Front-End & Entusiasta de la Tecnología</p>
        </motion.div>

        {/* Professional Summary */}
        <motion.section variants={itemVariants} className="mb-16">
          <h2 className="text-3xl font-bold mb-6 ">Resumen Profesional</h2>
          <p className="text-base text-neutral-400 leading-relaxed">
            Desarrollador Frontend con un año de experiencia en la creación de interfaces web dinámicas y eficientes. Competente en React, TypeScript y JavaScript, con habilidades avanzadas en la implementación de estilos utilizando Tailwind CSS, Sass y CSS tradicional. Experiencia en la creación de animaciones e interactividad con Framer Motion y un sólido manejo de HTML semántico.
            Familiaridad con tecnologías de backend como Node.js, Next.js y Express.js, además de experiencia trabajando con bases de datos MongoDB, Prisma y MySQL, lo que permite una colaboración efectiva en entornos de desarrollo full-stack.
            Conocimientos en herramientas de control de versiones y colaboración como Git y GitHub. Gestión de proyectos ágil con Trello y Jira, garantizando la entrega de productos de alta calidad en plazos establecidos.
            En búsqueda de oportunidades para seguir creciendo profesionalmente y contribuir con soluciones innovadoras en el desarrollo web.
          </p>
        </motion.section>

        {/* Skills Section */}
        <motion.section variants={itemVariants} className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-neutral-400">Habilidades</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillsPercentage.map((skill, index) => (
              <motion.div
                key={index}
                className="bg-neutral-800 p-6 rounded-sm"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center mb-4">
                  <span className="text-2xl text-neutral-400 mr-3">{skill.icon}</span>
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                </div>
                <div className="w-full bg-neutral-700 rounded-sm h-2.5">
                  <motion.div
                    className="bg-neutral-500 h-2.5 rounded-sm"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.proficiency}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section variants={itemVariants} className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-neutral-400">Experiencia</h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="bg-neutral-800 p-6 rounded-sm"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                <p className="text-neutral-400 mb-2">{exp.company} • {exp.period}</p>
                <p className="text-gray-300">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section variants={itemVariants} className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-neutral-400">Educación</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="bg-neutral-800 p-6 rounded-sm"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                <p className="text-neutral-400">{edu.institution}</p>
                <p className="text-gray-300">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section variants={itemVariants} className="text-center">
          <motion.button
            className="bg-neutral-600 hover:bg-neutral-700 text-white px-8 py-3 rounded-sm inline-flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownload}
          >
            <FaDownload />
            <span>Descargar CV</span>
          </motion.button>

          <div className="mt-8 flex justify-center space-x-6">
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
        </motion.section>
      </motion.div>
    </div>
  );
};

export default AboutMe;