import { useEffect, useRef } from "react";
import { Github, Linkedin, Mail, Code2, Zap, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";

/**
 * Hero Section — GSAP powered
 * Animations: timeline reveal, letter scramble, floating cards, mouse parallax, magnetic buttons
 */

const SCRAMBLE_CHARS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%";
const FINAL_NAME = "Piyush Singh";

export function Hero() {
  // Refs
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);
  const blobRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const viewBtnRef = useRef<HTMLButtonElement>(null);
  const contactBtnRef = useRef<HTMLButtonElement>(null);

  const scrollToSection = (href: string) => {
    const el = document.getElementById(href);
    if (el) {
      const offset = 80;
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.pageYOffset - offset,
        behavior: "smooth",
      });
    }
  };

  // ── Letter Scramble for name ──
  const scrambleName = (el: HTMLElement) => {
    const target = FINAL_NAME;
    let iteration = 0;
    const totalFrames = target.length * 4;

    const interval = setInterval(() => {
      el.textContent = target
        .split("")
        .map((char, i) => {
          if (char === " ") return " ";
          if (i < Math.floor(iteration / 4)) return char;
          return SCRAMBLE_CHARS[
            Math.floor(Math.random() * SCRAMBLE_CHARS.length)
          ];
        })
        .join("");

      iteration++;
      if (iteration > totalFrames) {
        el.textContent = target;
        clearInterval(interval);
      }
    }, 40);
  };

  // ── Main GSAP Timeline ──
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(
        [
          badgeRef.current,
          nameRef.current,
          paraRef.current,
          ctaRef.current,
          socialRef.current,
          scrollIndicatorRef.current,
        ],
        { opacity: 0, y: 40 },
      );
      gsap.set(photoRef.current, { opacity: 0, scale: 0.88, y: 30 });
      gsap.set([card1Ref.current, card2Ref.current], {
        opacity: 0,
        scale: 0.8,
      });
      gsap.set(pillRef.current, { opacity: 0, x: 20 });

      // Master timeline
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.to(badgeRef.current, { opacity: 1, y: 0, duration: 0.6 })
        .add(() => {
          if (nameRef.current) {
            gsap.to(nameRef.current, { opacity: 1, y: 0, duration: 0.01 });
            scrambleName(nameRef.current);
          }
        }, "-=0.1")
        .to(paraRef.current, { opacity: 1, y: 0, duration: 0.6 }, "-=0.3")
        .to(ctaRef.current, { opacity: 1, y: 0, duration: 0.55 }, "-=0.35")
        .to(socialRef.current, { opacity: 1, y: 0, duration: 0.5 }, "-=0.3")
        .to(
          photoRef.current,
          { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "back.out(1.4)" },
          "-=0.9",
        )
        .to(
          card1Ref.current,
          { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(2)" },
          "-=0.4",
        )
        .to(
          card2Ref.current,
          { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(2)" },
          "-=0.3",
        )
        .to(pillRef.current, { opacity: 1, x: 0, duration: 0.45 }, "-=0.3")
        .to(
          scrollIndicatorRef.current,
          { opacity: 1, y: 0, duration: 0.4 },
          "-=0.1",
        );

      // Floating cards loop
      gsap.to(card1Ref.current, {
        y: -10,
        duration: 2.8,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 1.5,
      });
      gsap.to(card2Ref.current, {
        y: 10,
        duration: 3.2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 1.8,
      });
      gsap.to(pillRef.current, {
        y: -8,
        duration: 2.5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 2,
      });

      // Blob slow pulse
      gsap.to(blobRef.current, {
        scale: 1.08,
        duration: 4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      // Scroll bounce
      gsap.to(scrollIndicatorRef.current, {
        y: 8,
        duration: 1.4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 2.5,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // ── Mouse Parallax ──
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2; // -1 to 1
      const y = (e.clientY / innerHeight - 0.5) * 2;

      gsap.to(photoRef.current, {
        x: x * 10,
        y: y * 8,
        duration: 0.8,
        ease: "power2.out",
      });
      gsap.to(card1Ref.current, {
        x: x * 16,
        y: y * -12,
        duration: 1,
        ease: "power2.out",
      });
      gsap.to(card2Ref.current, {
        x: x * -14,
        y: y * 14,
        duration: 1,
        ease: "power2.out",
      });
      gsap.to(pillRef.current, {
        x: x * 18,
        y: y * -8,
        duration: 0.9,
        ease: "power2.out",
      });
      gsap.to(blobRef.current, {
        x: x * 20,
        y: y * 16,
        duration: 1.2,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(
        [
          photoRef.current,
          card1Ref.current,
          card2Ref.current,
          pillRef.current,
          blobRef.current,
        ],
        {
          x: 0,
          y: 0,
          duration: 1,
          ease: "power3.out",
        },
      );
    };

    section.addEventListener("mousemove", handleMouseMove);
    section.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      section.removeEventListener("mousemove", handleMouseMove);
      section.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // ── Magnetic Buttons ──
  const makeMagnetic = (ref: React.RefObject<HTMLButtonElement>) => ({
    onMouseMove: (e: React.MouseEvent<HTMLButtonElement>) => {
      const btn = ref.current;
      if (!btn) return;
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      gsap.to(btn, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.3,
        ease: "power2.out",
      });
    },
    onMouseLeave: () => {
      gsap.to(ref.current, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.4)",
      });
    },
  });

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-20"
      aria-label="Hero section"
    >
      {/* ── Background ── */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* Main gradient blob */}
        <div
          ref={blobRef}
          className="absolute top-0 right-0 w-[58%] h-full bg-gradient-to-bl from-[hsl(var(--accent))]/10 via-[hsl(var(--accent))]/3 to-transparent rounded-bl-[140px]"
        />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[hsl(var(--accent))]/5 rounded-full -translate-x-1/3 translate-y-1/3" />

        {/* Grid texture */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Diagonal bars */}
        <div className="absolute top-20 right-[43%] w-[2px] h-24 bg-[hsl(var(--accent))]/25 rotate-12 rounded-full" />
        <div className="absolute top-36 right-[41%] w-[1px] h-14 bg-[hsl(var(--accent))]/15 rotate-12 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-80px)]">
          {/* ── LEFT ── */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
            {/* Badge */}
            <div
              ref={badgeRef}
              className="inline-flex items-center gap-2 mb-6 w-fit"
            >
              <span className="flex h-2 w-2 rounded-full bg-[hsl(var(--accent))] animate-pulse" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[hsl(var(--accent))]">
                MERN Stack Developer
              </span>
            </div>

            {/* Name — scramble target */}
            <h1
              ref={nameRef}
              className="text-5xl sm:text-6xl md:text-7xl font-black text-foreground tracking-tight leading-[1.05] mb-5 font-mono"
            >
              {FINAL_NAME}
            </h1>

            {/* Summary */}
            <p
              ref={paraRef}
              className="text-base md:text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed"
            >
              Architecting high-performance backend systems and scalable Admin
              Panels for{" "}
              <strong className="text-foreground font-semibold">
                Fintech, Ride-booking & Betting
              </strong>{" "}
              platforms. Expert in secure APIs, real-time data, and clean UIs.
            </p>

            {/* CTA */}
            <div
              ref={ctaRef}
              className="flex flex-col sm:flex-row items-start gap-3 mb-10"
            >
              <button
                ref={viewBtnRef}
                onClick={() => scrollToSection("projects")}
                {...makeMagnetic(viewBtnRef)}
                className="bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))]/90 text-white px-8 py-4 text-base font-semibold rounded-xl transition-colors shadow-lg shadow-[hsl(var(--accent))]/25 cursor-pointer"
              >
                View Projects
              </button>
              <button
                ref={contactBtnRef}
                onClick={() => scrollToSection("contact")}
                {...makeMagnetic(contactBtnRef)}
                className="border-2 border-foreground/15 hover:border-[hsl(var(--accent))] hover:text-[hsl(var(--accent))] px-8 py-4 text-base font-semibold rounded-xl transition-colors cursor-pointer bg-transparent"
              >
                Contact Me
              </button>
            </div>

            {/* Social Links */}
            <div ref={socialRef} className="flex items-center gap-3">
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
            </div>
          </div>

          {/* ── RIGHT: Photo + Cards ── */}
          <div className="relative flex justify-center items-center order-1 lg:order-2 py-16 lg:py-0">
            {/* Blob */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[360px] h-[360px] sm:w-[420px] sm:h-[420px] rounded-full bg-gradient-to-br from-[hsl(var(--accent))]/12 via-[hsl(var(--accent))]/4 to-transparent" />
            </div>

            {/* Accent shapes */}
            <div className="absolute top-4 right-8 w-14 h-14 rounded-2xl bg-[hsl(var(--accent))]/15 rotate-12 pointer-events-none" />
            <div className="absolute bottom-12 left-4 w-8 h-8 rounded-xl bg-[hsl(var(--accent))]/25 -rotate-12 pointer-events-none" />
            <div className="absolute top-1/3 right-0 w-3 h-3 rounded-full bg-[hsl(var(--accent))]/50 pointer-events-none" />

            {/* Photo */}
            <div ref={photoRef} className="relative z-10">
              <div className="relative w-[270px] h-[330px] sm:w-[310px] sm:h-[380px] md:w-[350px] md:h-[430px]">
                {/* Dashed ring */}
                <div className="absolute -inset-3 rounded-[36px] border-2 border-dashed border-[hsl(var(--accent))]/20" />

                {/* Photo card */}
                <div className="relative w-full h-full rounded-[28px] overflow-hidden border border-border/40 shadow-2xl">
                  <img
                    src="/IMG-20260211-WA0000.jpg"
                    alt="Piyush Singh"
                    className="w-full h-full object-cover object-top brightness-105 contrast-110 saturate-105 transition-all duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      const parent = target.parentElement!;
                      parent.innerHTML = `<div style="width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;background:hsl(var(--muted))"><div style="width:80px;height:80px;border-radius:50%;background:hsl(var(--accent)/0.15);display:flex;align-items:center;justify-content:center;font-size:1.8rem;font-weight:900;color:hsl(var(--accent))">PS</div></div>`;
                    }}
                  />
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                  <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_50px_rgba(0,0,0,0.12)] rounded-[28px]" />
                </div>

                {/* Floating card: top-right */}
                <div
                  ref={card1Ref}
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
                </div>

                {/* Floating card: bottom-left */}
                <div
                  ref={card2Ref}
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
                </div>

                {/* Pill badge */}
                <div
                  ref={pillRef}
                  className="absolute top-1/2 -translate-y-1/2 -right-4 sm:-right-8 bg-[hsl(var(--accent))] text-white rounded-xl px-3 py-2 shadow-lg shadow-[hsl(var(--accent))]/35 flex flex-col items-center gap-1"
                >
                  <Zap size={14} className="text-white/90" />
                  <span
                    className="text-[10px] font-bold"
                    style={{
                      writingMode: "vertical-rl",
                      textOrientation: "mixed",
                      transform: "rotate(180deg)",
                      letterSpacing: "0.1em",
                    }}
                  >
                    FULL STACK
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <button
          onClick={() => scrollToSection("about")}
          className="p-2 rounded-full text-muted-foreground hover:text-[hsl(var(--accent))] transition-colors"
          aria-label="Scroll to about section"
        >
          <ArrowDown size={22} />
        </button>
      </div>
    </section>
  );
}

export default Hero;
