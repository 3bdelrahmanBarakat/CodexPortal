import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
import { fadeIn, staggerContainer } from "@/lib/animation";
import { caseStudies, featuredProjects } from "@/data";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const CaseStudy = () => {
  const { slug } = useParams();
  const caseStudy = caseStudies.find((cs) => cs.slug === slug);

  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, [slug]);

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-black">
        <h1 className="text-3xl font-bold mb-4">Case Study Not Found</h1>
        <p className="text-gray-400 mb-8">The case study you're looking for doesn't exist or has been moved.</p>
        <Link href="/portfolio">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
            Back to Portfolio
          </Button>
        </Link>
      </div>
    );
  }

  // Find the related project
  const project = featuredProjects.find((p) => p.id === caseStudy.projectId);

  // Find next case study for navigation
  const nextCaseStudyIndex = caseStudies.findIndex((cs) => cs.id === caseStudy.id) + 1;
  const nextCaseStudy = nextCaseStudyIndex < caseStudies.length ? caseStudies[nextCaseStudyIndex] : caseStudies[0];

  return (
    <div className="pt-24 pb-16 bg-black">
      {/* Breadcrumb */}
      <div className="container mx-auto px-6 mb-8">
        <div className="flex items-center text-sm text-gray-400">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link href="/portfolio" className="hover:text-white transition-colors">Portfolio</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-secondary-color">{project?.title}</span>
        </div>
      </div>

      {/* Hero section */}
      <div className="container mx-auto px-6 mb-16">
        <div className="max-w-4xl">
          <motion.h1
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            animate="show"
            className="text-3xl md:text-5xl font-bold mb-6 font-montserrat"
          >
            {caseStudy.title}
          </motion.h1>
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            className="flex items-center mb-8"
          >
            <span className="mr-4 text-gray-300">Client:</span>
            <span className="text-white font-medium">{caseStudy.clientName}</span>
          </motion.div>
        </div>
      </div>

      {/* Main image */}
      <div className="container mx-auto px-6 mb-16">
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          animate="show"
          className="w-full rounded-lg overflow-hidden shadow-xl"
        >
          <img
            src={caseStudy.images[0]}
            alt={`${caseStudy.title} main image`}
            className="w-full h-auto object-cover"
          />
        </motion.div>
      </div>

      {/* Content sections */}
      <div className="container mx-auto px-6 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <motion.div
              variants={staggerContainer()}
              initial="hidden"
              animate="show"
              className="space-y-12"
            >
              {/* Problem */}
              <motion.div variants={fadeIn("up", 0.1)}>
                <h2 className="text-2xl font-bold mb-4 font-montserrat text-gradient">Problem/Challenge</h2>
                <p className="text-gray-300 leading-relaxed">{caseStudy.problem}</p>
              </motion.div>

              {/* Solution */}
              <motion.div variants={fadeIn("up", 0.2)}>
                <h2 className="text-2xl font-bold mb-4 font-montserrat text-gradient">Our Solution</h2>
                <p className="text-gray-300 leading-relaxed">{caseStudy.solution}</p>
              </motion.div>

              {/* Results */}
              <motion.div variants={fadeIn("up", 0.3)}>
                <h2 className="text-2xl font-bold mb-4 font-montserrat text-gradient">Results/Outcome</h2>
                <p className="text-gray-300 leading-relaxed">{caseStudy.results}</p>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            animate="show"
            className="lg:col-span-1"
          >
            <div className="bg-dark-blue/50 backdrop-blur-sm p-6 rounded-lg border border-primary/20 sticky top-24">
              <h3 className="text-xl font-bold mb-4 font-montserrat">Next Project</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {caseStudy.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary/20 rounded-full text-sm text-secondary-color"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-bold mb-4 font-montserrat">Year</h3>
              <p className="text-gray-300 mb-8">{project?.year}</p>

              <Link href={`/case-study/${nextCaseStudy.slug}`}>
                <Button
                  className="w-full bg-gradient-to-r from-primary to-accent text-white hover:opacity-90"
                >
                  <span>Next Case Study</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Additional images */}
      <div className="container mx-auto px-6 mb-16">
        <motion.h2
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          animate="show"
          className="text-2xl font-bold mb-8 font-montserrat text-center text-gradient"
        >
          Project Visuals
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseStudy.images.slice(1).map((image, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", 0.1 * (index + 1))}
              initial="hidden"
              animate="show"
              className="rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={image}
                alt={`${caseStudy.title} image ${index + 2}`}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA section */}
      <div className="container mx-auto px-6">
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          animate="show"
          className="bg-dark-blue/50 backdrop-blur-sm p-8 md:p-12 rounded-lg border border-primary/20 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 font-montserrat">Ready to Build Your Own Success Story?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your ideas into reality with our expertise in {project?.techStack.join(", ")}.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/contact">
              <Button className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent text-white hover:opacity-90">
                <span>Let's Talk</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button variant="outline" className="w-full sm:w-auto border-primary text-primary hover:bg-primary/10">
                <ArrowLeft className="mr-2 h-4 w-4" />
                <span>Back to Portfolio</span>
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CaseStudy;