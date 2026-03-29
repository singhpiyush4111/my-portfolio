import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Code2, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

/**
 * Hero Section Component
 * Split layout: left = text content, right = profile picture with floating UI cards
 */
const names = ["Piyush Singh"];
export function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = names[index];
    let typingSpeed = isDeleting ? 60 : 120;

    const timeout = setTimeout(() => {
      setDisplayText((prev) =>
        isDeleting
          ? current.substring(0, prev.length - 1)
          : current.substring(0, prev.length + 1),
      );

      if (!isDeleting && displayText === current) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % names.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index]);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden"
      aria-label="Hero section"
    >
      {/* Decorative background shapes */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[55%] h-full bg-gradient-to-bl from-[hsl(var(--accent))]/8 via-transparent to-transparent rounded-bl-[120px]" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[hsl(var(--accent))]/5 rounded-full -translate-x-1/2 translate-y-1/2" />
        {/* Diagonal accent bar — top right */}
        <div className="absolute top-16 right-[42%] w-2 h-28 bg-[hsl(var(--accent))]/30 rotate-12 rounded-full" />
        <div className="absolute top-32 right-[40%] w-1 h-16 bg-[hsl(var(--accent))]/20 rotate-12 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-screen py-20 lg:py-0">
          {/* ── LEFT: Text content ── */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 mb-6 w-fit"
            >
              <span className="flex h-2 w-2 rounded-full bg-[hsl(var(--accent))] animate-pulse" />
              <span className="text-xs font-semibold tracking-[0.18em] uppercase text-[hsl(var(--accent))]">
                MERN Stack Developer
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="text-4xl sm:text-6xl md:text-7xl font-black text-foreground tracking-tight leading-[1.05] mb-4"
            >
              <span className="relative inline-block">{displayText}</span>
              <span className="ml-1 animate-pulse">|</span>
            </motion.h1>

            {/* Summary */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-base md:text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed"
            >
              Architecting high-performance backend systems and scalable Admin
              Panels for{" "}
              <strong className="text-foreground font-semibold">
                Fintech, Ride-booking & Betting
              </strong>{" "}
              platforms. Expert in secure APIs, real-time data, and clean UIs.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex flex-col sm:flex-row items-start gap-3 mb-10"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))]/90 text-white px-8 py-6 text-base font-semibold rounded-xl transition-all hover:scale-105 shadow-lg shadow-[hsl(var(--accent))]/20"
              >
                View Projects
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border-2 border-foreground/15 hover:border-[hsl(var(--accent))] hover:text-[hsl(var(--accent))] px-8 py-6 text-base font-semibold rounded-xl transition-all"
              >
                Contact Me
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="flex items-center gap-3"
            >
              {[
                {
                  href: "https://www.linkedin.com/in/piyush-singh-b0a097224/",
                  icon: <Linkedin size={18} />,
                  label: "LinkedIn",
                },
                {
                  href: "mailto:singhpiyush4111@gmail.com",
                  icon: <Mail size={18} />,
                  label: "Email",
                },
                {
                  href: "https://github.com",
                  icon: <Github size={18} />,
                  label: "GitHub",
                },
              ].map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-4 py-2.5 rounded-xl bg-muted hover:bg-[hsl(var(--accent))]/10 text-muted-foreground hover:text-[hsl(var(--accent))] transition-all text-sm font-medium"
                  aria-label={label}
                >
                  {icon}
                  <span className="hidden sm:inline">{label}</span>
                </a>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: Profile Picture + Floating Cards ── */}
          <div className="relative flex justify-center items-center order-1 lg:order-2">
            {/* Background blob behind photo */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[360px] h-[360px] sm:w-[420px] sm:h-[420px] rounded-full bg-gradient-to-br from-[hsl(var(--accent))]/15 via-[hsl(var(--accent))]/5 to-transparent" />
            </div>

            {/* Diagonal accent shapes */}
            <div className="absolute top-4 right-8 w-14 h-14 rounded-2xl bg-[hsl(var(--accent))]/20 rotate-12 pointer-events-none" />
            <div className="absolute bottom-12 left-4 w-8 h-8 rounded-xl bg-[hsl(var(--accent))]/30 -rotate-12 pointer-events-none" />
            <div className="absolute top-1/3 right-0 w-4 h-4 rounded-full bg-[hsl(var(--accent))]/50 pointer-events-none" />

            {/* Profile picture container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative z-10"
            >
              {/* Photo frame */}
              <div className="relative w-[280px] h-[340px] sm:w-[320px] sm:h-[390px] md:w-[360px] md:h-[440px]">
                {/* Outer decorative ring */}
                <div className="absolute -inset-3 rounded-[32px] border-2 border-dashed border-[hsl(var(--accent))]/20 rounded-[36px]" />

                {/* Photo card */}
                <div className="relative w-full h-full rounded-[28px] overflow-hidden border border-border/50 shadow-2xl">
                  {/* Image */}
                  <img
                    src="/IMG-20260211-WA0000.jpg"
                    alt="Piyush Singh"
                    className="w-full h-full object-cover object-top 
               brightness-105 contrast-110 saturate-110 
               transition-all duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      const parent = target.parentElement!;
                      parent.innerHTML = `
        <div style="width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;">
          <div style="width:96px;height:96px;border-radius:50%;background:hsl(var(--accent)/0.15);display:flex;align-items:center;justify-content:center;font-size:2rem;font-weight:800;color:hsl(var(--accent));">PS</div>
          <p style="font-size:0.75rem;color:var(--muted-foreground);text-align:center;padding:0 1rem;">Add your photo at<br/><code style="font-size:0.7rem;">/public/profile-photo.jpg</code></p>
        </div>`;
                    }}
                  />

                  {/* Edge Fade Overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none 
    bg-gradient-to-t from-black/10 via-transparent to-transparent"
                  />

                  <div
                    className="absolute inset-0 pointer-events-none 
    bg-gradient-to-r from-black/10 via-transparent to-transparent"
                  />

                  {/* Soft vignette (corner fade) */}
                  <div
                    className="absolute inset-0 pointer-events-none 
    shadow-[inset_0_0_60px_rgba(0,0,0,0.15)] rounded-[28px]"
                  />
                </div>

                {/* ── Floating card: Top-right — Projects count ── */}
                <motion.div
                  initial={{ opacity: 0, x: 20, y: -10 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="absolute -top-4 -right-6 sm:-right-10 bg-background/95 backdrop-blur-sm border border-border/60 rounded-2xl px-4 py-3 shadow-xl min-w-[130px]"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs text-muted-foreground font-medium">
                      Projects Done
                    </span>
                  </div>
                  <p className="text-2xl font-black text-foreground leading-none">
                    10+
                  </p>
                  <p className="text-xs text-[hsl(var(--accent))] font-semibold mt-0.5">
                    Across 3 domains
                  </p>
                </motion.div>

                {/* ── Floating card: Bottom-left — Experience ── */}
                <motion.div
                  initial={{ opacity: 0, x: -20, y: 10 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                  className="absolute -bottom-4 -left-6 sm:-left-10 bg-background/95 backdrop-blur-sm border border-border/60 rounded-2xl px-4 py-3 shadow-xl min-w-[140px]"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Code2 size={12} className="text-[hsl(var(--accent))]" />
                    <span className="text-xs text-muted-foreground font-medium">
                      Experience
                    </span>
                  </div>
                  <p className="text-2xl font-black text-foreground leading-none">
                    3+ yrs
                  </p>
                  <p className="text-xs text-[hsl(var(--accent))] font-semibold mt-0.5">
                    MERN Stack
                  </p>
                </motion.div>

                {/* ── Floating pill: Right-center — Stack badge ── */}
                <motion.div
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.15 }}
                  className="absolute top-1/2 -translate-y-1/2 -right-4 sm:-right-8 bg-[hsl(var(--accent))] text-white rounded-xl px-3 py-2 shadow-lg shadow-[hsl(var(--accent))]/30 flex flex-col items-center gap-1"
                >
                  <Zap size={14} className="text-white/90" />
                  <span
                    className="text-[10px] font-bold tracking-wide writing-mode-vertical"
                    style={{
                      writingMode: "vertical-rl",
                      textOrientation: "mixed",
                      transform: "rotate(180deg)",
                      letterSpacing: "0.1em",
                    }}
                  >
                    FULL STACK
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={() => scrollToSection("about")}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="p-2 rounded-full text-muted-foreground hover:text-[hsl(var(--accent))] transition-colors"
          aria-label="Scroll to about section"
        >
          <ArrowDown size={22} />
        </motion.button>
      </motion.div>
    </section>
  );
}

export default Hero;
