import Terminal from "../../components/common/terminal";
import TypingHeader from "../../components/common/typing";
import {
  LineHorizontal,
  LineTopButton,
  LineVerticalLeft,
  LineVerticalRight,
} from "../../components/ui/line";
import { ModalContextProvider } from "../../global/contexts/modal-context";
import { Projects } from "./sections/projects.tsx";
import { LuFileSpreadsheet, LuNotebook, LuUser } from "react-icons/lu";
import SkillsPortfolio from "./sections/skills.tsx";
import { IoIosArrowForward } from "react-icons/io";
import { Planet } from "../../components/common/planet.tsx";
import Footer from "../../components/layout/footer.tsx";

export default function Home() {
  return (
    <>
      <div className="flex flex-col overflow-x-hidden w-full pb-50 h-auto relative">
        <Planet />
        <ModalContextProvider>
          <div className="absolute top-0 w-full h-auto z-0">
            <div className="relative w-full h-full overflow-hidden">
              <img src="./background.webp" className="w-full max-h-[100vh]" />
              <div className=" absolute bottom-0 w-full h-15 sm:h-50 lg:h-100 bg-gradient-to-t from-[#0e0e0e] to-transparent"></div>
            </div>
          </div>
          <div className="flex flex-col m-2 mt-30 sm:ml-34 sm:pr-12 2xl:mx-80 z-20">
            <LineTopButton>
              <div className="flex flex-row gap-4 items-center justify-between text-blue-400">
                <div className="flex p-4 border-2 justify-center rounded-full items-center">
                  <LuFileSpreadsheet className="text-[20px]" />
                </div>
                <p>Ir a Resumen</p>
                <IoIosArrowForward className="text-[20px]" />
              </div>
            </LineTopButton>
            <LineVerticalLeft>
              <div className="flex flex-col p-6 ml-[15px] lg:ml-0 sm:p-6 lg:p-10">
                <TypingHeader text={["Front End Developer", "Web Developer"]} />
                <h1 className="text-2xl font-extralight mt-3 p-3">
                  Carlos Agustin Nicolas Cuello
                </h1>
                <div className="flex flex-col w-full min-h-[600px] mt-20 transition-all">
                  <div className="relative flex flex-col min-h-[600px] w-full mt-20 lg:p-3 sm:px-10">
                    <div className="absolute -left-[64px] hidden sm:flex top-3 items-center justify-center w-[50px] h-[50px] bg-[#0e0e0e] z-50 rounded-full border-2 border-[#3b82f6] shadow-[0_0_25px_10px_rgba(59,130,241,0.5),_inset_0_0_25px_10px_rgba(59,130,241,0.2)] ">
                      <LuUser className="text-[16px] text-[#3b82f6]" />
                    </div>
                    <Terminal />
                  </div>
                </div>
                <div className="relative flex flex-col mt-20 lg:p-3 sm:px-10">
                  <div className="absolute -left-[64px] hidden sm:flex top-3 items-center justify-center w-[50px] h-[50px] bg-[#0e0e0e] z-50 rounded-full border-2 border-[#5f00b8] shadow-[0_0_25px_10px_rgba(95,0,184,0.5),_inset_0_0_25px_10px_rgba(95,0,184,0.2)] ">
                    <LuNotebook className="text-[16px] text-purple-400" />
                  </div>
                  <Projects />
                </div>
              </div>
            </LineVerticalLeft>
            <LineHorizontal />
            <LineVerticalRight>
              <div className="relative flex flex-col min-h-[800px] lg:p-3 sm:px-10">
                <SkillsPortfolio />
                <div className="absolute -right-[24px] hidden sm:flex top-3 items-center justify-center w-[50px] h-[50px] bg-[#0e0e0e] z-50 rounded-full border-2 border-[#00df56] shadow-[0_0_25px_10px_rgba(0,223,86,0.5),_inset_0_0_25px_10px_rgba(0,223,86,0.2)] ">
                  <LuNotebook className="text-[16px] text-green-200" />
                </div>
              </div>
            </LineVerticalRight>
          </div>
        </ModalContextProvider>
      </div>
      <Footer />
    </>
  );
}
