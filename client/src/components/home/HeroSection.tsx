import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import ParticleCanvas from "@/components/particles/ParticleCanvas";
import { codeSnippets } from "@/data";
import { fadeIn, slideIn, staggerContainer } from "@/lib/animation";

const FloatingCodeSnippet = ({ code, position }: { code: string; position: any }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.6 }}
      className="floating-snippets absolute pointer-events-none select-none z-10 max-w-[250px] md:max-w-none"
      style={position}
    >
      <pre className="text-xs md:text-sm secondary-color overflow-hidden max-w-[200px] md:max-w-none">
        {code}
      </pre>
    </motion.div>
  );
};

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden gradient-bg"
    >
      <ParticleCanvas particleColor="#ffffff" />
      
      {codeSnippets.map((snippet) => (
        <FloatingCodeSnippet
          key={snippet.id}
          code={snippet.code}
          position={snippet.position}
        />
      ))}
      
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
      >
        <motion.h1
          variants={fadeIn("up", 0.3)}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-montserrat leading-tight glow-text"
        >
          Innovating the Digital Future, <span className="block">One Line at a Time</span>
        </motion.h1>
        
        <motion.p
          variants={fadeIn("up", 0.4)}
          className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
        >
          We craft elegant solutions to complex problems, turning your vision into digital reality with precision and expertise.
        </motion.p>
        
        <motion.div
          variants={fadeIn("up", 0.5)}
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center"
        >
          <Link href="/portfolio">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white glow transition-all duration-300"
            >
              Explore Our Work
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent/10 transition-all duration-300"
            >
              Let's Build Together
            </Button>
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        variants={slideIn("up", "tween", 1, 1)}
        initial="hidden"
        animate="show"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.a
          href="#who-we-are"
          className="text-white opacity-70 hover:opacity-100 transition-opacity duration-300"
          animate={{
            y: [0, 10, 0],
            transition: {
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            },
          }}
        >
          <ChevronDown className="h-8 w-8" />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
