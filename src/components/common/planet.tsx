import {motion} from "framer-motion";

export const Planet = () => {
    return (
        <>
            <div className="absolute top-0 w-full z-10">
                <div className="relative flex flex-col h-[800px] overflow-x-hidden">
                    <div
                        className="absolute shadow-[0_0_55px_10px_rgba(59,130,241,0.5),_inset_0_0_55px_10px_rgba(59,130,241,0.5)] bg-black/10 -top-40 sm:-top-50 lg:-top-100 left-6 sm:left-60 lg:left-140 xl:left-230 transition-all ease-in-out duration-1000 rounded-full overflow-hidden">
                        <motion.div
                            className="rounded-full"
                            animate={{rotate: 360}}
                            transition={{repeat: Infinity, duration: 200, ease: "linear"}}
                        >
                            <img src="./Planet.webp" alt="asd"
                                 className="w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] lg:w-[800px] lg:h-[800px] max-w-[800px] max-h-[800px] transition-all ease-in-out duration-1000"/>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    )
}