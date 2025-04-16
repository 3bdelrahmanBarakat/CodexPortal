import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { fadeIn, staggerContainer } from "@/lib/animation";
import { services, getServiceIcon } from "@/data";
import ProcessSteps from "./ProcessSteps";
import TechStack from "./TechStack";

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-black to-dark-blue relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeIn("up", 0.1)}
            className="text-3xl md:text-5xl font-bold mb-4 font-montserrat text-gradient"
          >
            Solutions Engineered to Scale
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.2)}
            className="text-gray-300 max-w-2xl mx-auto"
          >
            We build technology that grows with your business, solving today's challenges while preparing for tomorrow's opportunities.
          </motion.p>
        </motion.div>
        
        <motion.div
          variants={staggerContainer(0.1, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => {
            const ServiceIcon = getServiceIcon(service.icon);
            
            return (
              <motion.div
                key={service.id}
                variants={fadeIn("up", 0.1 * service.id)}
                className="service-card bg-dark-blue/60 backdrop-blur-sm rounded-lg overflow-hidden border border-primary/10 shadow-lg transform transition-all duration-500 hover:scale-[1.03] hover:shadow-xl hover:border-primary/30 group"
              >
                <div className="h-2 bg-gradient-to-r from-primary to-accent"></div>
                <div className="p-6">
                  <div className="w-16 h-16 mb-6 rounded-full bg-primary/10 flex items-center justify-center text-secondary-color group-hover:text-accent transition-colors duration-300">
                    <ServiceIcon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-montserrat group-hover:text-gradient transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="text-sm text-gray-400 space-y-1 mb-4">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Check className="h-4 w-4 text-secondary-color mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        
        {/* Process Section */}
        <ProcessSteps />
        
        {/* Tech Stack Section */}
        <TechStack />
      </div>
    </section>
  );
};

export default ServicesSection;
