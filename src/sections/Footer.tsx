import { motion } from "framer-motion";
import { ArrowUp, Heart, Github, Linkedin, Mail } from "lucide-react";

/**
 * Footer Component
 * Mobile fix: stacked centered layout on small screens
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
        {/* Mobile: stacked + centered  |  Desktop: single row */}
        <div className="flex flex-col items-center gap-5 md:flex-row md:justify-between md:gap-4">
          {/* Copyright */}
          <div className="flex flex-col items-center text-center gap-1 md:items-start md:text-left text-sm text-muted-foreground">
            <p>
              &copy; {currentYear}{" "}
              <span className="font-medium text-foreground">@PiyushSingh</span>.
              All rights reserved.
            </p>
            <p className="flex items-center gap-1 flex-wrap justify-center md:justify-start">
              Looking for a MERN Stack Developer? Let&apos;s connect and create
              impact.{" "}
              <Heart
                size={13}
                className="text-red-500 fill-red-500 flex-shrink-0"
              />
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/piyush-singh-b0a097224/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-muted hover:bg-[hsl(var(--accent))]/10 text-muted-foreground hover:text-[hsl(var(--accent))] transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:singhpiyush4111@gmail.com"
              className="p-2.5 rounded-full bg-muted hover:bg-[hsl(var(--accent))]/10 text-muted-foreground hover:text-[hsl(var(--accent))] transition-all"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-muted hover:bg-[hsl(var(--accent))]/10 text-muted-foreground hover:text-[hsl(var(--accent))] transition-all"
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
            className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-[hsl(var(--accent))] bg-muted hover:bg-[hsl(var(--accent))]/10 rounded-lg transition-all"
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
