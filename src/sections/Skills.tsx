import { motion } from "framer-motion";
import {
  Server,
  Layout,
  Database,
  Wrench,
  Code2,
  TestTube,
} from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/StaggerContainer";

/**
 * Skills data organized by category
 */
const skillCategories = [
  {
    name: "Backend",
    icon: Server,
    description: "Server-side development & APIs",
    skills: [
      "Node.js",
      "Express.js",
      "NestJS",
      "Fastify",
      "REST APIs",
      "Server Architecture",
      "Authentication & Authorization",
      "Payment Integration",
      "Socket.io",
      "Node-cron",
    ],
  },
  {
    name: "Frontend",
    icon: Layout,
    description: "User interface development",
    skills: [
      "React.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "Tailwind CSS",
      "Material UI",
      "ShadCN UI",
      "Redux",
      "Zustand",
      "React Query",
      "Framer Motion",
    ],
  },
  {
    name: "Database",
    icon: Database,
    description: "Data storage & management",
    skills: [
      "MongoDB",
      "MySQL",
      "SQL",
      "Drizzle ORM",
      "TypeORM",
      "Redis",
      "Database Design",
      "Schema Validation",
    ],
  },
  {
    name: "Tools & DevOps",
    icon: Wrench,
    description: "Development & deployment tools",
    skills: [
      "Git / GitHub",
      "Nginx",
      "CI/CD Basics",
      "Linux Server Management",
      "Firebase Analytics",
      "Push Notification (FCM)",
      "Node Forge (Security)",
      "Postman",
      "Cloudinary",
    ],
  },
  {
    name: "Testing & Design",
    icon: TestTube,
    description: "Quality assurance & UI/UX",
    skills: ["Postman API Testing", "Figma", "UI/UX Understanding"],
  },
  {
    name: "Languages",
    icon: Code2,
    description: "Programming languages",
    skills: ["JavaScript", "TypeScript", "HTML/CSS", "SQL"],
  },
];

/**
 * Skills Section Component
 * Categorized skill badges with icons
 */
export function Skills() {
  return (
    <section
      id="skills"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8"
      aria-label="Skills section"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <FadeIn className="text-center mb-16">
          <p className="text-sm font-medium text-[hsl(var(--accent))] mb-2">
            What I Bring
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Technical Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit built over 3 years of professional
            experience across multiple domains and technologies.
          </p>
        </FadeIn>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <FadeIn key={category.name} delay={categoryIndex * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="h-full p-6 rounded-xl bg-muted/50 border border-border hover:border-[hsl(var(--accent))]/30 transition-all group"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[hsl(var(--accent))]/10 flex items-center justify-center group-hover:bg-[hsl(var(--accent))]/20 transition-colors">
                    <category.icon
                      size={20}
                      className="text-[hsl(var(--accent))]"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {category.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skills Tags */}
                <StaggerContainer
                  staggerDelay={0.03}
                  className="flex flex-wrap gap-2"
                >
                  {category.skills.map((skill) => (
                    <StaggerItem key={skill}>
                      <span className="inline-block px-3 py-1.5 text-sm rounded-md bg-background border border-border hover:border-[hsl(var(--accent))]/30 hover:text-[hsl(var(--accent))] transition-all cursor-default">
                        {skill}
                      </span>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* Additional Info */}
        {/* <FadeIn delay={0.5} className="mt-12">
          <div className="p-6 rounded-xl bg-[hsl(var(--accent))]/5 border border-[hsl(var(--accent))]/20 text-center">
            <p className="text-muted-foreground">
              <strong className="text-foreground">Languages:</strong> Hindi, English
            </p>
          </div>
        </FadeIn> */}
      </div>
    </section>
  );
}

export default Skills;
