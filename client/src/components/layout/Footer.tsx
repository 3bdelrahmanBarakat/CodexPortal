import { Link } from "wouter";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animation";
import codexLogo from "../../assets/codex-logo-white.png";

const Footer = () => {
  return (
    <footer className="py-10 bg-darkest border-t border-primary-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <Link 
              href="/"
              className="flex items-center mb-4"
            >
              <img src={codexLogo} alt="Codex" className="h-10" />
            </Link>
            <p className="text-gray-400 mb-6">
              Innovating the digital future, one line at a time. We build technology solutions that transform businesses and delight users.
            </p>
          </motion.div>
          
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <h4 className="text-lg font-bold mb-4 font-montserrat text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/" 
                  className="text-gray-400 hover:secondary-color transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="text-gray-400 hover:secondary-color transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:secondary-color transition-colors duration-300"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-gray-400 hover:secondary-color transition-colors duration-300"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:secondary-color transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <h4 className="text-lg font-bold mb-4 font-montserrat text-white">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:secondary-color transition-colors duration-300">Web Development</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:secondary-color transition-colors duration-300">Mobile Apps</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:secondary-color transition-colors duration-300">AI & Automation</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:secondary-color transition-colors duration-300">UX/UI Design</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:secondary-color transition-colors duration-300">Software Consulting</a>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <h4 className="text-lg font-bold mb-4 font-montserrat text-white">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <form className="flex">
              <Input
                type="email"
                placeholder="Your email address"
                className="rounded-r-none bg-darkBlue border-primary/30 focus:ring-2 focus:ring-secondary/50 text-white w-full"
                required
              />
              <Button type="submit" className="rounded-l-none bg-primary hover:bg-primary/90">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </form>
          </motion.div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500">&copy; {new Date().getFullYear()} Codex Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
