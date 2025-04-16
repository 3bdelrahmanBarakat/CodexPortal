import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animation";
import { techStack } from "@/data";
import { Code } from "lucide-react";

const TechStack = () => {
  // Replace Font Awesome with simple styled elements for better reliability
  const renderTechIcon = (icon: string) => {
    return (
      <div className="flex items-center justify-center w-10 h-10">
        <Code className="h-6 w-6 text-white" />
        <span className="ml-1 text-xs font-bold text-white">{icon.substring(0, 2).toUpperCase()}</span>
      </div>
    );
  };

  return (
    <div className="mt-24 px-4">
      <motion.h3
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="text-2xl md:text-3xl font-bold mb-12 font-montserrat text-center accent-color"
      >
        Our Tech Stack
      </motion.h3>
      
      <motion.div
        variants={staggerContainer(0.05, 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-8 justify-items-center"
      >
        {techStack.map((tech) => (
          <motion.div
            key={tech.id}
            variants={fadeIn("up", 0.05 * tech.id)}
            className="tech-icon w-full max-w-[120px] h-20 rounded-lg bg-dark-blue border border-primary/20 flex flex-col items-center justify-center transition-all duration-300 hover:bg-primary/20 hover:scale-105 group cursor-pointer relative"
          >
            {renderTechIcon(tech.icon)}
            <span className="text-white text-xs mt-2">{tech.name}</span>
            <span className="tech-tooltip absolute bottom-full left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap mb-2 border border-primary/30">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TechStack;
