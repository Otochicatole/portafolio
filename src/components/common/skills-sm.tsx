import { motion } from "framer-motion";
import { SkillSection } from "./skills-components";
import { FaReact, FaDatabase } from "react-icons/fa";
import { TbTool } from "react-icons/tb";
import { BsDatabaseFillGear } from "react-icons/bs";
import { skills } from "../arrays/array-skills";

const SkillsPortfolioSm = () => {
  return (
    <div className="flex flex-row justify-between min-h-screen px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col w-full mt-6"
      >
        <div className="space-y-2">
          <SkillSection
            variant="col"
            title="Frontend development"
            items={skills.frontend}
            icon={<FaReact className="text-blue-500" />}
          />
          <SkillSection
            variant="col"
            title="Backend development"
            items={skills.backend}
            icon={<BsDatabaseFillGear className="text-green-500" />}
          />
          <SkillSection
            variant="col"
            title="Database management"
            items={skills.database}
            icon={<FaDatabase className="text-blue-400" />}
          />
          <SkillSection
            variant="col"
            title="Tools"
            items={skills.tools}
            icon={<TbTool className="text-blue-400" />}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default SkillsPortfolioSm;