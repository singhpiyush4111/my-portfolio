import { motion } from "framer-motion";
import { Download, Code, Shield, Zap, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/FadeIn";

/**
 * Key strengths data
 */
const strengths = [
  {
    icon: Code,
    title: "Clean Code",
    description:
      "Writing maintainable, well-documented code following best practices",
  },
  {
    icon: Shield,
    title: "Secure APIs",
    description:
      "Implementing robust authentication and authorization mechanisms",
  },
  {
    icon: Zap,
    title: "High Performance",
    description: "Optimizing applications for speed and scalability",
  },
  {
    icon: Database,
    title: "Database Design",
    description: "Architecting efficient database schemas and queries",
  },
];

/**
 * About Section Component
 * Professional bio and key strengths
 */
export function About() {
  return (
    <section
      id="about"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8"
      aria-label="About section"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <FadeIn className="text-center mb-16">
          <p className="text-sm font-medium text-[hsl(var(--accent))] mb-2">
            Get To Know Me
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            About Me
          </h2>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Bio Content */}
          <FadeIn delay={0.1}>
            <div className="space-y-6">
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                I&apos;m a{" "}
                <strong className="text-foreground">
                  MERN Stack Developer
                </strong>{" "}
                with{" "}
                <strong className="text-foreground">
                  3 years of experience
                </strong>{" "}
                building high-performance backend systems and scalable Admin
                Panels for diverse industries including Fintech, Ride-booking,
                Betting platforms, and NFC-Card Management systems.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                My expertise lies in architecting secure APIs, implementing
                real-time data processing, and creating user-centric interfaces.
                I have a proven track record of solving complex technical
                challenges and delivering robust, end-to-end digital solutions.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                I&apos;m passionate about writing clean, maintainable code and
                constantly learning new technologies to stay at the forefront of
                web development.
              </p>

              {/* Download Resume Button */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="pt-4"
              >
                <Button
                  size="lg"
                  className="bg-foreground hover:bg-foreground/90 text-background px-6 py-5 text-base font-medium rounded-lg transition-all"
                  asChild
                >
                  <a
                    href="/Piyush Singh Resume 2026.pdf"
                    download
                    className="inline-flex items-center gap-2"
                  >
                    <Download size={18} />
                    Download Resume (PDF)
                  </a>
                </Button>
              </motion.div>
            </div>
          </FadeIn>

          {/* Key Strengths Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {strengths.map((strength, index) => (
              <FadeIn key={strength.title} delay={0.2 + index * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="p-6 rounded-xl bg-muted/50 border border-border hover:border-[hsl(var(--accent))]/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-[hsl(var(--accent))]/10 flex items-center justify-center mb-4 group-hover:bg-[hsl(var(--accent))]/20 transition-colors">
                    <strength.icon
                      size={24}
                      className="text-[hsl(var(--accent))]"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {strength.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {strength.description}
                  </p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
