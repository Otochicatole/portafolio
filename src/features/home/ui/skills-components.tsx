import { motion } from "framer-motion";
import React, {useState} from "react";
import {Box, IconButton, Modal as JoyModal, Typography} from "@mui/joy";
import {FaTimes} from "react-icons/fa";


interface Skill {
    name: string;
    icon: React.JSX.Element;
    description: string;
}

interface SkillSectionProps {
    variant?: string;
    title: string;
    items: Skill[];
    icon: React.JSX.Element;
}
interface ModalProps {
    skill: Skill;
    isOpen: boolean;
    onClose: () => void;
}


const Modal = ({ skill, isOpen, onClose }: ModalProps) => (
    <JoyModal open={isOpen} onClose={onClose}>
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, boxShadow: 24, p: 4, borderRadius: 2, backgroundColor: '#202020', color: '#fff' }}>
            <IconButton onClick={onClose} sx={{ position: 'absolute', top: 8, right: 8, color: '#fff' }}>
                <FaTimes />
            </IconButton>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                <Box sx={{ fontSize: 32 }}>{skill.icon}</Box>
                <Typography sx={{ color: '#fff' }}>{skill.name}</Typography>
            </Box>
            <Typography sx={{ color: '#fff' }}>{skill.description}</Typography>
        </Box>
    </JoyModal>
);

export const SkillSection = ({ title, items, icon, variant }: SkillSectionProps) => {
    const [onHover, setOnHover] = useState(false);
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-row gap-3 items-center justify-end w-full"
            onMouseEnter={() => setOnHover(true)}
            onMouseLeave={() => setOnHover(false)}
        >
            <div className={`flex ${variant === 'col'? 'flex-col':'lg:flex-row flex-col'} w-full overflow-hidden justify-center`}>
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: onHover ? 1 : 0}}
                    transition={{duration: 0.5}}
                    className="gap-3 p-1 flex flex-row items-center w-[350px] pr-6"
                >
                    <div className="text-2xl text-neutral-400 p-2 text-center">{icon}</div>
                    <h2 className="text-sm text-neutral-100 p-2 text-center">{title}</h2>
                </motion.div>
                <div
                    className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 p-2">
                    {items.map((skill, index) => (
                        <SkillCard key={index} {...skill} />
                    ))}
                </div>
            </div>
        </motion.div>
    );
}


export const SkillCard = ({name, icon, description}: Skill) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <motion.div
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
                className="bg-white/5 p-4 rounded-sm flex flex-col items-center justify-center gap-2  hover:bg-white/15 transition-all duration-300 cursor-pointer  hover:shadow-[0_0_1px_2px_rgba(240,240,240,0.5),_inset_0_0_55px_10px_rgba(0,0,0,0.5)]"
                onClick={() => setIsModalOpen(true)}
            >
                <div className="text-3xl">{icon}</div>
                <p className="text-sm font-medium text-center">{name}</p>
            </motion.div>
            <Modal
                skill={{ name, icon, description }}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
};