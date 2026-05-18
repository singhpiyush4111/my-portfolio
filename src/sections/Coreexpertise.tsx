import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { Server, Puzzle, Database, Layers } from "lucide-react";

/**
 * Core expertise areas — backend-focused
 */
const expertiseList = [
  {
    icon: Server,
    title: "Backend & API Design",
    description:
      "Production REST APIs for Fintech, Ride-booking & Betting — JWT auth, RBAC, OTP, OAuth (Google/Facebook), KYC (PAN, Aadhaar, bank), and Socket.io real-time systems.",
    tags: ["Node.js", "Express", "NestJS", "Socket.io", "JWT", "RBAC"],
  },
  {
    icon: Puzzle,
    title: "Third-Party Integrations",
    description:
      "Integrated payment gateways, Firebase FCM push notifications, automated email, social login, OTP services, and KYC verification APIs in live production apps.",
    tags: ["Payment Gateway", "Firebase FCM", "Nodemailer", "KYC APIs", "OTP"],
  },
  {
    icon: Database,
    title: "Database & Caching",
    description:
      "Complex schema design in MongoDB & MySQL, query optimization, Redis caching for low-latency reads, and ORM usage with Drizzle & TypeORM.",
    tags: ["MongoDB", "MySQL", "Redis", "Drizzle ORM", "TypeORM"],
  },
  {
    icon: Layers,
    title: "Admin Panels & Infra",
    description:
      "Full-featured admin dashboards with role management, analytics & reporting. Linux server setup, Nginx reverse proxy, and CI/CD pipelines for zero-downtime deploys.",
    tags: ["React", "TypeScript", "Nginx", "Linux", "CI/CD"],
  },
];

export function CoreExpertise() {
  return (
    <section
      id="core-expertise"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30"
      aria-label="Core Expertise section"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <FadeIn className="text-center mb-16">
          <p className="text-sm font-medium text-[hsl(var(--accent))] mb-2 tracking-widest uppercase">
            What I Do Best
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Core Expertise
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            3+ years building backend systems that scale — from auth flows to
            real-time infra, here's where I go deep.
          </p>
        </FadeIn>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {expertiseList.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative h-full p-6 rounded-2xl bg-background border border-border hover:border-[hsl(var(--accent))]/40 hover:shadow-lg hover:shadow-[hsl(var(--accent))]/5 transition-all duration-300"
              >
                {/* Accent top-bar on hover */}
                <div className="absolute top-0 left-6 right-6 h-[2px] rounded-full bg-[hsl(var(--accent))] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                {/* Icon */}
                <div className="w-11 h-11 rounded-xl bg-[hsl(var(--accent))]/10 flex items-center justify-center mb-4 group-hover:bg-[hsl(var(--accent))]/20 transition-colors">
                  <item.icon size={20} className="text-[hsl(var(--accent))]" />
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-[hsl(var(--accent))] transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-md bg-[hsl(var(--accent))]/8 text-[hsl(var(--accent))] font-medium border border-[hsl(var(--accent))]/15"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoreExpertise;
