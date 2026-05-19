import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Calendar } from "lucide-react";
import { useActiveSection } from "@/hooks/useActiveSection";

const navItems = [
  { label: "Home", href: "home" },
  { label: "About", href: "about" },
  { label: "Expertise", href: "core-expertise" },
  { label: "Experience", href: "experience" },
  { label: "Skills", href: "skills" },
  { label: "Projects", href: "projects" },
  { label: "Contact", href: "contact" },
];

// ─── Schedule Meet Dialog ───────────────────────────────────────────────────
function ScheduleMeetDialog({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-sm sm:px-4 sm:py-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ type: "spring", damping: 25, stiffness: 250 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full sm:max-w-3xl bg-white sm:rounded-2xl rounded-t-2xl shadow-2xl flex flex-col"
        style={{ height: "90vh", maxHeight: "90vh" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100 shrink-0">
          <div className="flex items-center gap-2">
            <Calendar size={17} className="text-[hsl(var(--accent))]" />
            <span className="text-sm font-semibold text-gray-800">
              Let's Connect
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        {/* zcal iframe */}
        <div className="flex-1 overflow-hidden">
          <iframe
            src="https://zcal.co/emb/piyush-singh?showBackground=1&embed=1&embedType=iframe"
            loading="lazy"
            style={{
              border: "none",
              width: "100%",
              height: "100%",
            }}
            id="zcal-iframe"
            scrolling="yes"
            title="Schedule a meeting with Piyush"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Navbar ─────────────────────────────────────────────────────────────────
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const activeSection = useActiveSection(
    navItems.map((item) => item.href),
    150,
  );

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Body scroll lock when dialog open
  useEffect(() => {
    document.body.style.overflow = isDialogOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isDialogOpen]);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href);
    if (element) {
      const offsetPosition =
        element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
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
            ? "bg-white/95 backdrop-blur-md shadow-md"
            : "bg-white/80 backdrop-blur-sm shadow-sm"
        }`}
      >
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0"
          aria-label="Main navigation"
        >
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <button
              onClick={() => scrollToSection("home")}
              className="group flex items-center gap-2 text-lg md:text-xl font-bold tracking-wide"
            >
              <span className="text-[hsl(var(--accent))] group-hover:rotate-12 transition duration-300">
                {"</>"}
              </span>
              <span className="flex items-center">
                <span className="text-[hsl(var(--accent))] font-extrabold relative">
                  dev.
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[hsl(var(--accent))] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </span>
                <span className="bg-gradient-to-r from-foreground via-foreground to-[hsl(var(--accent))] bg-clip-text text-transparent">
                  Piyush
                </span>
              </span>
            </button>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-4">
              <ul className="flex items-center gap-1">
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
              <button
                onClick={() => setIsDialogOpen(true)}
                className="px-5 py-2 rounded-full bg-[hsl(var(--accent))] text-white text-sm font-medium shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300"
              >
                Let's Connect
              </button>
            </div>

            {/* Mobile Hamburger */}
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              id="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-72 bg-white shadow-xl"
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

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="pt-6"
                >
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsDialogOpen(true);
                    }}
                    className="w-full py-3 rounded-xl bg-[hsl(var(--accent))] text-white font-medium shadow-md hover:opacity-90 transition"
                  >
                    Let's Connect
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dialog */}
      <AnimatePresence>
        {isDialogOpen && (
          <ScheduleMeetDialog onClose={() => setIsDialogOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
