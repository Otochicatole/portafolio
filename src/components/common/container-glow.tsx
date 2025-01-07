import { ReactNode, MouseEvent, useState, useEffect } from "react";
import { motion } from "framer-motion";

interface FlexibleContainerProps {
  children: ReactNode;
}


const FlexibleContainer = ({ children }: FlexibleContainerProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [clickedGlow, setClickedGlow] = useState('40%');

  useEffect(() => {
    setClickedGlow('0%');
    const timeout = setTimeout(() => {
      setClickedGlow('40%');
    }, 500); 

    return () => clearTimeout(timeout);
  }, [clicked]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div onClick={() => setClicked(!clicked)} className="h-full w-full flex">
      <motion.div
        className="relative w-full bg-opacity-10 backdrop-blur-2xl rounded-sm overflow-hidden"
        style={{
          backdropFilter: "blur(12px)",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setIsHovered(false)}
        onMouseEnter={() => setIsHovered(true)}
        role="region"
        aria-label="Interactive container"
        animate={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 128, 128, 0.3) 0%, transparent ${isHovered ? clickedGlow : "0%"})`,
          opacity: 1,
    
        }}
        initial={{
          background: "transparent",
          opacity: 0,
        }}
        transition={{
          background: {
            duration: 0.5,
            ease: "easeOut",
          },
          opacity: {
            duration: 0.5,
            ease: "easeOut",
          },
        }}
      >
        <div
          style={{
            background: "linear-gradient(135deg, transparent, rgba(0,0,0, 0.1))",
          }}
          className="absolute inset-0 w-full"
        />
        <div className="relative z-10 flex flex-col w-full">
          <div className="flex w-full items-center justify-between animate-slideDown"></div>
          <div className="animate-slideUp w-full">{children}</div>
        </div>
      </motion.div>
    </div>
  );
};

export default FlexibleContainer;
