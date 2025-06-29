import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animation";
import { featuredProjects } from "@/data";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";

// Extended projects for the portfolio page
const portfolioProjects = [
  ...featuredProjects,
  
];

// Get unique tech categories from all projects
const allTechs = portfolioProjects.flatMap((project) => project.techStack);
const uniqueTechs = ["All", ...new Set(allTechs)];

const Portfolio = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All"
    ? portfolioProjects
    : portfolioProjects.filter((project) => 
        project.techStack.includes(filter)
      );

  return (
    <>
      <Helmet>
        <title>Portfolio - Codex</title>
        <meta name="description" content="Explore our portfolio of digital projects spanning web development, mobile apps, AI solutions, and more." />
      </Helmet>
      <div className="pt-24 bg-gradient-to-b from-primary to-black">
        <div className="container mx-auto px-6 py-16">
          <motion.div
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="text-center mb-16"
          >
            <motion.h1
              variants={fadeIn("up", 0.1)}
              className="text-4xl md:text-6xl font-bold mb-6 font-montserrat text-white"
            >
              Proof of Concept
            </motion.h1>
            <motion.p
              variants={fadeIn("up", 0.2)}
              className="text-xl text-gray-300 max-w-2xl mx-auto"
            >
              Our portfolio of innovative solutions designed for real-world impact
            </motion.p>
          </motion.div>
        </div>
      </div>

      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {uniqueTechs.map((tech, index) => (
              <Button
                key={index}
                variant={filter === tech ? "default" : "outline"}
                onClick={() => setFilter(tech)}
                className={`${
                  filter === tech
                    ? "bg-primary text-white"
                    : "border-primary/30 text-white hover:bg-primary/10"
                } transition-all duration-300`}
              >
                {tech}
              </Button>
            ))}
          </motion.div>

          <motion.div
            variants={staggerContainer(0.1, 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={fadeIn("up", 0.1 * project.id)}
                className="bg-dark-blue rounded-lg overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
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
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold font-montserrat">{project.title}</h3>
                    <span className="text-xs text-gray-400">{project.year}</span>
                  </div>
                  <p className="text-sm text-gray-300 mb-4">{project.description}</p>
                  <a href={`/case-study/${project.slug}`} className="text-secondary-color hover:text-accent transition-colors duration-300 text-sm flex items-center">
                    <span>View Case Study</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
