import { motion } from "framer-motion";
import { ArrowUp, Heart, Github, Linkedin, Mail } from "lucide-react";

/**
 * Footer Component
 * Minimal footer with copyright and back to top button
 */
export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="py-8 px-4 sm:px-6 lg:px-8 bg-muted/30 border-t border-border"
      aria-label="Footer"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-sm text-muted-foreground">
            <p>
              &copy; {currentYear}{" "}
              <span className="font-medium text-foreground">@PiyushSingh</span>.
              All rights reserved.
            </p>
            <span className="hidden md:inline text-border">|</span>
            <p className="flex items-center gap-1">
              Looking for a MERN Stack Developer? Let's connect and create
              impact. <Heart size={14} className="text-red-500 fill-red-500" />
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/piyush-singh-b0a097224/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-muted hover:bg-[hsl(var(--accent))]/10 text-muted-foreground hover:text-[hsl(var(--accent))] transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:singhpiyush4111@gmail.com"
              className="p-2 rounded-full bg-muted hover:bg-[hsl(var(--accent))]/10 text-muted-foreground hover:text-[hsl(var(--accent))] transition-all"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-muted hover:bg-[hsl(var(--accent))]/10 text-muted-foreground hover:text-[hsl(var(--accent))] transition-all"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
          </div>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-[hsl(var(--accent))] bg-muted hover:bg-[hsl(var(--accent))]/10 rounded-lg transition-all"
            aria-label="Back to top"
          >
            Back to top
            <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
