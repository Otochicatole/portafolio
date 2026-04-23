import Terminal from "../../features/home/ui/terminal.tsx";
import TypingHeader from "../../features/home/ui/typing.tsx";
import {
    LineHorizontal,
    LineTopButton,
    LineVerticalLeft,
    LineVerticalRight,
} from "../../features/home/ui/line.tsx";
import {ModalContextProvider} from "../../global/contexts/modal-context";
import {Projects} from "../../features/home/ui/projects.tsx";
import {LuFileSpreadsheet, LuNotebook, LuUser} from "react-icons/lu";
import SkillsPortfolio from "../../features/home/ui/skills.tsx";
import {IoIosArrowForward} from "react-icons/io";
import {Planet} from "../../features/home/ui/planet.tsx";
import Rocket from "../../features/home/ui/rocket.tsx";
import Footer from "../../shared/components/layout/footer.tsx";

export default function Home() {

    return (
        <>
            <main className="flex flex-col overflow-x-hidden w-full pb-50 h-auto relative">
                <Planet/>
                <ModalContextProvider>
                    <div className="absolute top-0 w-full h-auto z-0">
                        <div className="relative w-full h-full overflow-hidden">
                            <img src="./background.webp" className="w-full max-h-screen"/>
                            <div
                                className=" absolute bottom-0 w-full h-15 sm:h-50 lg:h-100 bg-linear-to-t from-[#0e0e0e] to-transparent"/>
                        </div>
                    </div>
                    <section className="flex flex-col m-2 mt-30 sm:ml-12 sm:pr-12 2xl:mx-80 z-20">
                        <div className="relative hidden sm:block">
                            <div className="absolute border border-blue-500 -top-25 left-90">
                                <Rocket/>
                            </div>
                        </div>
                        <LineTopButton>
                            <div className="flex flex-row gap-4 items-center justify-between text-blue-400">
                                <div className="flex p-4 border-2 justify-center rounded-full items-center">
                                    <LuFileSpreadsheet className="text-[20px]"/>
                                </div>
                                <p>Ir a Resumen</p>
                                <IoIosArrowForward className="text-[20px]"/>
                            </div>
                        </LineTopButton>
                        <LineVerticalLeft>
                            <section className="flex flex-col p-1 ml-3.75 lg:ml-0 sm:p-6 lg:p-10">
                                <header className="flex flex-col w-full gap-10 px-4">
                                    <TypingHeader text={["Front End Developer", "Web Developer"]}/>
                                    <section className="flex flex-col gap-3 max-w-3xl">
                                        <h1 className="text-xl sm:text-3xl font-extralight mt-3">
                                            Carlos Agustin Nicolas Cuello
                                        </h1>
                                        <p className="text-sm leading-8 text-white/60 md:leading-9">
                                            Desarrollo soluciones web combinando diseño y tecnología. Me especializo en
                                            front-end, creando interfaces modernas, responsivas y eficientes, y
                                            complemento
                                            mi trabajo con conocimientos en back-end y gestión de servidores para
                                            abordar
                                            proyectos de forma más completa.
                                        </p>
                                    </section>
                                </header>
                                <section className="flex flex-col w-full min-h-150 mt-20 transition-all">
                                    <div className="relative flex flex-col min-h-150 w-full mt-20 lg:p-3 sm:px-10">
                                        <div
                                            className="absolute -left-16 hidden sm:flex top-3 items-center justify-center w-12.5 h-12.5 bg-[#0e0e0e] z-50 rounded-full border-2 border-[#3b82f6] shadow-[0_0_25px_10px_rgba(59,130,241,0.5),inset_0_0_25px_10px_rgba(59,130,241,0.2)] ">
                                            <LuUser className="text-[16px] text-[#3b82f6]"/>
                                        </div>
                                        <Terminal/>
                                    </div>
                                </section>
                                <section className="relative flex flex-col mt-20 lg:p-3 sm:px-10">
                                    <div
                                        className="absolute -left-16 hidden sm:flex top-3 items-center justify-center w-12.5 h-12.5 bg-[#0e0e0e] z-50 rounded-full border-2 border-[#5f00b8] shadow-[0_0_25px_10px_rgba(95,0,184,0.5),inset_0_0_25px_10px_rgba(95,0,184,0.2)]">
                                        <LuNotebook className="text-[16px] text-purple-400"/>
                                    </div>
                                    <Projects/>
                                </section>
                            </section>
                        </LineVerticalLeft>
                        <LineHorizontal/>
                        <LineVerticalRight>
                            <section className="relative flex flex-col min-h-200 lg:p-3 sm:px-10">
                                <SkillsPortfolio/>
                                <div
                                    className="absolute -right-6 hidden sm:flex top-3 items-center justify-center w-12.5 h-12.5 bg-[#0e0e0e] z-50 rounded-full border-2 border-[#00df56] shadow-[0_0_25px_10px_rgba(0,223,86,0.5),inset_0_0_25px_10px_rgba(0,223,86,0.2)]">
                                    <LuNotebook className="text-[16px] text-green-200"/>
                                </div>
                            </section>
                        </LineVerticalRight>
                    </section>
                </ModalContextProvider>
            </main>
            <Footer/>
        </>
    );
}
