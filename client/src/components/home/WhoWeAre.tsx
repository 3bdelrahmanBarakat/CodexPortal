import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeIn, float } from "@/lib/animation";

const WhoWeAre = () => {
  return (
    <section id="who-we-are" className="py-20 bg-darkest">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="order-2 md:order-1"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-montserrat text-gradient">
              Who We Are
            </h2>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              At Codex, we're more than developers – we're digital architects designing the future of technology solutions. Founded on the principle that great software begins with understanding people, we merge technical excellence with human-centered design.
            </p>
            
            <p className="text-gray-300 mb-8 leading-relaxed">
              Our team of passionate technologists thrives on solving complex challenges with elegant simplicity, creating digital experiences that empower businesses and delight users.
            </p>
            
            <Link 
              href="/about"
              className="flex items-center secondary-color hover:accent-color transition-colors duration-300 group"
            >
              <span className="mr-2">Learn more about our journey</span>
              <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
          
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="order-1 md:order-2 flex justify-center"
          >
            <motion.div
              variants={float}
              initial="initial"
              animate="animate"
              className="relative w-full max-w-md h-80"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg"></div>
              <div className="absolute inset-0 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
                  alt="Team collaboration"
                  className="w-full h-full object-cover opacity-80 mix-blend-overlay"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-darkest via-transparent to-transparent rounded-lg"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
