import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useActiveSection } from "@/hooks/useActiveSection";

/**
 * Navigation items for the portfolio
 */
const navItems = [
  { label: "Home", href: "home" },
  { label: "About", href: "about" },
  { label: "Experience", href: "experience" },
  { label: "Projects", href: "projects" },
  { label: "Skills", href: "skills" },
  { label: "Contact", href: "contact" },
];

/**
 * Navbar Component
 * Fixed navigation bar with smooth scrolling and active section highlighting
 */
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection(
    navItems.map((item) => item.href),
    150,
  );

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (href: string) => {
    const element = document.getElementById(href);
    if (element) {
      const offset = 80; // Account for fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <nav
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
          aria-label="Main navigation"
        >
          <div className="flex items-center justify-between h-16 md:h-20">
            <button
              onClick={() => scrollToSection("home")}
              className="group flex items-center gap-2 text-lg md:text-xl font-bold tracking-wide"
            >
              {/* Code Icon */}
              <span className="text-[hsl(var(--accent))] group-hover:rotate-12 transition duration-300">
                {"</>"}
              </span>

              {/* Styled Name */}
              <span className="flex items-center">
                {/* D styled like code */}
                <span className="text-[hsl(var(--accent))] font-extrabold relative">
                  dev.
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[hsl(var(--accent))] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </span>

                {/* Rest text */}
                <span className="bg-gradient-to-r from-foreground via-foreground to-[hsl(var(--accent))] bg-clip-text text-transparent">
                  Piyush
                </span>
              </span>
            </button>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-md ${
                      activeSection === item.href
                        ? "text-[hsl(var(--accent))]"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    aria-current={
                      activeSection === item.href ? "page" : undefined
                    }
                  >
                    {item.label}
                    {activeSection === item.href && (
                      <motion.span
                        layoutId="activeSection"
                        className="absolute inset-0 bg-[hsl(var(--accent))]/10 rounded-md -z-10"
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}
                  </button>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-foreground hover:bg-muted transition-colors"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Menu Panel */}
            <motion.div
              id="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-64 bg-white shadow-xl"
            >
              <div className="pt-20 px-4">
                <ul className="space-y-1">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <button
                        onClick={() => scrollToSection(item.href)}
                        className={`w-full text-left px-4 py-3 text-base font-medium rounded-md transition-colors ${
                          activeSection === item.href
                            ? "bg-[hsl(var(--accent))]/10 text-[hsl(var(--accent))]"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted"
                        }`}
                        aria-current={
                          activeSection === item.href ? "page" : undefined
                        }
                      >
                        {item.label}
                      </button>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
