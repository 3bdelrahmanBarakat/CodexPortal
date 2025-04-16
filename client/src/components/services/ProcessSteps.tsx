import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animation";
import { processSteps, getServiceIcon } from "@/data";

const ProcessSteps = () => {
  return (
    <div className="mt-24">
      <motion.h3
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="text-2xl md:text-3xl font-bold mb-12 font-montserrat text-center text-gradient"
      >
        Our Process
      </motion.h3>
      
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex flex-wrap lg:flex-nowrap lg:justify-center gap-6 px-4 pb-4">
          {processSteps.map((step) => {
            const StepIcon = getServiceIcon(step.icon);
            
            return (
              <motion.div
                key={step.id}
                variants={fadeIn("right", 0.1 * step.id)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className="process-step w-full sm:w-5/12 md:w-[calc(33%-1rem)] lg:w-[250px] text-center flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4 relative">
                  <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-accent flex items-center justify-center text-xs font-bold">
                    {step.id}
                  </span>
                  <StepIcon className="text-secondary-color h-6 w-6" />
                </div>
                <h4 className="text-lg font-bold mb-2 font-montserrat">{step.title}</h4>
                <p className="text-sm text-gray-400">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProcessSteps;
