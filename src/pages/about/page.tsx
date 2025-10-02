import { ExperiencesSM } from "../../components/common/experience-sm";
import SkillsPortfolioSm from "../../components/common/skills-sm";
import { MdCloudQueue } from "react-icons/md";
import { MdOutlineComputer } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { TbDatabaseCog } from "react-icons/tb";
import Footer from "../../components/layout/footer";

export default function Summary() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "./cv2.pdf";
    link.download = "CV_Cuello_Agustin.pdf";
    link.click();
  };

  return (
    <>
      <div className="flex flex-col sm:ml-25 overflow-x-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mt-10"
        >
          <img
            src="./me.webp"
            alt="Perfil"
            className="rounded-full w-60 h-60 mx-auto mb-6 object-cover border-4 border-neutral-600"
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hola Soy Agustin
          </h1>
          <p className="text-lg text-neutral-400 px-6">
            Desarrollador de software a tiempo completo
          </p>
          <button
            onClick={handleDownload}
            className="relative px-5 py-2.5 overflow-hidden cursor-pointer font-medium text-indigo-400 bg-black-30 border border-gray-700 rounded-lg shadow-inner group my-6"
          >
            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-indigo-600 group-hover:w-full ease"></span>
            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-indigo-600 group-hover:w-full ease"></span>
            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-indigo-600 group-hover:h-full ease"></span>
            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-indigo-600 group-hover:h-full ease"></span>
            <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-indigo-600 opacity-0 group-hover:opacity-100"></span>
            <span className="relative text-base font-semibold transition-colors duration-300 delay-200 group-hover:text-white ease">
              Download CV
            </span>
          </button>
        </motion.div>
        <section className="mb-16 flex p-3 flex-col items-center justify-center">
          <h2 className="text-3xl font-bold mb-10 mt-6 text-center">Lo que hago</h2>
          <div className="max-w-[1000px] flex flex-col sm:grid sm:grid-flow-col sm:grid-rows-2 p-3 gap-10 mb-10">
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="text-base text-neutral-400 mb-3 leading-relaxed"
            >
              <span className="font-bold mr-2 flex flex-row items-center gap-3">
                <TbDatabaseCog /> Back-End Development:
              </span>
              Aunque mi enfoque principal es el diseño web y el desarrollo front-end, tengo experiencia básica en el lado del servidor. Me manejo con Node.js y Java para tareas como crear APIs simples, conectar bases de datos o implementar autenticación. Esto me permite trabajar de forma más completa y colaborar mejor en proyectos full-stack.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-base text-neutral-400 mb-3 leading-relaxed"
            >
              <span className="font-bold mr-2 flex flex-row items-center gap-3">
                <IoSettingsOutline /> Front-End Development:
              </span>
              Transformo diseños en código limpio, responsivo y eficiente. Utilizo tecnologías como HTML, CSS, JavaScript y frameworks modernos para desarrollar sitios web interactivos, rápidos y compatibles con todos los navegadores.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="text-base text-neutral-400 mb-3 leading-relaxed"
            >
              <span className="font-bold mr-2 flex flex-row items-center gap-3">
                <MdCloudQueue />
                Gestión de servidores:
              </span>
              Tengo experiencia trabajando con sistemas operativos, configuración de software, redes y servicios relacionados. La administración de servidores es una de las áreas que más disfruto, ya que me permite tener control sobre el entorno donde corren los proyectos.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="text-base text-neutral-400 mb-3 leading-relaxed"
            >
              <span className="font-bold mr-2 flex flex-row items-center gap-3">
                <MdOutlineComputer /> Diseño Web:
              </span>
              Creo interfaces atractivas y funcionales que combinan estética con usabilidad. Me enfoco en ofrecer experiencias visuales claras y centradas en el usuario, asegurando que cada diseño se adapte a diferentes dispositivos y refleje la identidad del proyecto.
            </motion.p>
          </div>
        </section>
        <div className="flex flex-col xl:flex-row mt-[70px] justify-center gap-3 pb-40">
          <div className="flex flex-col xl:w-[50%]">
            <h2 className="text-3xl p-3 text-center">Experience</h2>
            <ExperiencesSM />
          </div>
          <div className="flex flex-col xl:w-[50%]">
            <h2 className="text-3xl p-3 text-center">Skills</h2>
            <SkillsPortfolioSm />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}