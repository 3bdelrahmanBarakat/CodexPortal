import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeIn, staggerContainer } from "@/lib/animation";
import { featuredProjects } from "@/data";

const FeaturedProjects = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-darkest to-black relative overflow-hidden">
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
            Featured Projects
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.2)}
            className="text-gray-300 max-w-2xl mx-auto"
          >
            Our digital solutions speak for themselves. Explore our recent work and see the Codex difference in action.
          </motion.p>
        </motion.div>
        
        <div className="relative overflow-hidden">
          <motion.div
            variants={staggerContainer(0.1, 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="flex project-carousel gap-6 pb-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
          >
            {featuredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={fadeIn("right", 0.1 * project.id)}
                className="project-card snap-start min-w-[300px] md:min-w-[400px] w-[90vw] md:w-[500px] bg-dark-blue rounded-lg overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
              >
                <div className="relative h-60 overflow-hidden group">
                  <img
                    src={project.image}
                    alt={`Project screenshot of ${project.title}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-blue via-transparent to-transparent"></div>
                  <div className="project-tech absolute bottom-0 left-0 w-full p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      <span key={index} className="px-2 py-1 bg-primary/20 text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 font-montserrat">{project.title}</h3>
                  <p className="text-sm text-gray-300 mb-4">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <Link href={`/case-study/${project.slug}`} className="text-secondary-color hover:text-accent transition-colors duration-300 text-sm flex items-center">
                      <span>View Case Study</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    <span className="text-xs text-gray-400">{project.year}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="mt-10 text-center"
          >
            <Link href="/portfolio">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 transition-all duration-300"
              >
                <span>See Full Portfolio</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
