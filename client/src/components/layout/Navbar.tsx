import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import codexLogo from "../../assets/codex-logo-white.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  // Handle scroll for header transparency
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled && !isMobileMenuOpen
            ? "bg-opacity-80 backdrop-blur-md bg-darkest py-2"
            : "bg-transparent py-4"
        }`}
      >
        <nav className="container mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <img src={codexLogo} alt="Codex" className="h-10" />
          </Link>

          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors duration-300 ${
                  location === link.href
                    ? "secondary-color"
                    : "text-white hover:secondary-color"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            className="md:hidden text-white focus:outline-none z-[101]" // Higher z-index for clickability
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed top-[60px] left-0 right-0 bg-darkest/100 backdrop-blur-lg z-[100] min-h-[calc(100vh-60px)] isolate"
            style={{ WebkitBackdropFilter: "blur(10px)" }} // Safari fallback
          >
            <div className="container mx-auto px-6 py-6 flex flex-col items-center justify-center min-h-[calc(100vh-60px)]">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors duration-300 py-3 text-lg font-medium ${
                    location === link.href
                      ? "secondary-color"
                      : "text-white hover:secondary-color"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;