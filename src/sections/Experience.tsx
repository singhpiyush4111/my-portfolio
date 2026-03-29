import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";

/**
 * Experience data from resume
 */
const experiences = [
  {
    id: "stealth",
    company: "StealthTechnocrats Pvt. Ltd",
    role: "MERN Stack Developer",
    type: "Full Time",
    period: "Feb 2025 - Present",
    location: "India",
    projects: [
      {
        name: "Faktum",
        description: "Germany-based Customer Rewards & Benefits Platform",
        bullets: [
          "Engineered OCR-driven loyalty system for invoice scanning and reward earning (1 Point per €100)",
          "Architected complete database schema using Drizzle-ORM, MySQL, and Zod for type-safety",
          "Developed automated eligibility engine and approval workflow for benefit disbursements",
          "Delivered end-to-end features including Customer App APIs and data-intensive Admin Dashboard",
        ],
      },
      {
        name: "Rideable",
        description:
          "Healthcare Mobility Platform (Wheelchair-accessible ride booking)",
        bullets: [
          "Developed scalable end-to-end platform similar to Ola/Uber for wheelchair-accessible car bookings",
          "Engineered high-performance APIs using Fastify and Drizzle-ORM with Node-cron and Redis caching",
          "Integrated Socket.io for real-time vendor notifications and Cloudinary for secure document uploads",
          "Built robust Admin module with Aadhaar/DL verification using JWT/UUID for multi-role authentication",
        ],
      },
      {
        name: "Money Mash Games",
        description: "Betting & Gaming Platform with Admin Panel",
        tech: "Node.js, Fastify, React.js, Redux, Node Forge, Firebase, MongoDB, Redis",
        bullets: [
          "Developed high-concurrency admin panel using Fastify for real-time user management",
          "Implemented Node Forge for encryption/decryption and PAN/Aadhaar-based KYC verification",
          "Integrated SabPaisa payment gateway and managed wallet features (deposits, bonuses, withdrawals)",
          "Implemented FCM for push notifications and Analytics for user activity tracking",
        ],
      },
    ],
  },
  {
    id: "tapmo",
    company: "TapMo India Pvt. Ltd",
    role: "MERN Stack Developer",
    type: "Full Time",
    period: "Dec 2023 - Dec 2024",
    location: "India",
    projects: [
      {
        name: "GST Invoice System",
        description: "GST calculation and reporting system",
        tech: "React.js, Material UI, Axios",
        bullets: [
          "Developed fully responsive frontend using Material UI with complex GST calculation APIs",
          "Built internal Excel import/export engine for bulk-uploading business invoices",
          "Generated GST reports for specific date ranges with automated calculations",
        ],
      },
      {
        name: "Smart Digital Business Card",
        description: "NFC-Card Management Platform",
        tech: "Node.js, NestJS, TypeORM, Ionic, React Query, JWT, Google OAuth",
        bullets: [
          "Developed scalable backend APIs using NestJS and TypeORM for efficient database management",
          "Built responsive mobile UI using Ionic Framework with Redux/React Query state management",
          "Secured platform using JWT for token management and Google OAuth for authentication",
        ],
      },
    ],
  },
  {
    id: "prudas",
    company: "Prudas Technologies Pvt. Ltd",
    role: "Trainee Developer",
    type: "Full Time Trainee",
    period: "May 2023 - Nov 2023",
    location: "India",
    projects: [
      {
        name: "Spirals Health",
        description: "Healthcare appointment booking platform",
        tech: "React, Node.js, Axios, JSON Web Tokens, React Router DOM",
        bullets: [
          "Developed user authentication with JWT/OTP verification",
          "Built core features like doctor search and appointment booking using MERN stack",
          "Implemented responsive UI and secure API endpoints",
        ],
      },
    ],
  },
];

/**
 * Education data
 */
const education = [
  {
    institution: "Chandigarh University",
    degree: "Bachelor of Computer Applications (BCA)",
    details: "CGPA: 7.03",
    period: "2019 - 2022",
  },
  {
    institution: "G.City Public School / Haryana Board",
    degree: "Senior Secondary (12th) & Secondary (10th)",
    details: "Percentage: 60.04%",
   
  },
];

/**
 * Experience Section Component
 * Timeline layout for work experience and education
 */
export function Experience() {
  return (
    <section
      id="experience"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30"
      aria-label="Experience section"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <FadeIn className="text-center mb-16">
          <p className="text-sm font-medium text-[hsl(var(--accent))] mb-2">
            My Journey
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Experience & Education
          </h2>
        </FadeIn>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Work Experience */}
          <div className="lg:col-span-2">
            <FadeIn>
              <h3 className="text-xl font-semibold text-foreground mb-8 flex items-center gap-2">
                <Briefcase size={20} className="text-[hsl(var(--accent))]" />
                Work Experience
              </h3>
            </FadeIn>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

              {/* Experience Items */}
              <div className="space-y-12">
                {experiences.map((exp, expIndex) => (
                  <FadeIn key={exp.id} delay={expIndex * 0.15}>
                    <div className="relative pl-12 md:pl-16">
                      {/* Timeline dot */}
                      <div className="absolute left-2 md:left-4 top-1 w-4 h-4 rounded-full bg-[hsl(var(--accent))] border-4 border-background" />

                      {/* Content */}
                      <div className="space-y-4">
                        {/* Header */}
                        <div>
                          <h4 className="text-lg font-semibold text-foreground">
                            {exp.company}
                          </h4>
                          <p className="text-[hsl(var(--accent))] font-medium">
                            {exp.role}
                          </p>
                          <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Calendar size={14} />
                              {exp.period}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin size={14} />
                              {exp.location}
                            </span>
                            <span className="px-2 py-0.5 rounded-full bg-muted text-xs">
                              {exp.type}
                            </span>
                          </div>
                        </div>

                        {/* Projects */}
                        <div className="space-y-4">
                          {exp.projects.map((project) => (
                            <motion.div
                              key={project.name}
                              whileHover={{ x: 4 }}
                              className="p-4 rounded-lg bg-background border border-border hover:border-[hsl(var(--accent))]/30 transition-all"
                            >
                              <h5 className="font-semibold text-foreground mb-1">
                                {project.name}
                              </h5>
                              <p className="text-sm text-muted-foreground mb-2">
                                {project.description}
                              </p>
                              {project.tech && (
                                <p className="text-xs text-[hsl(var(--accent))] mb-2">
                                  Tech: {project.tech}
                                </p>
                              )}
                              <ul className="space-y-1">
                                {project.bullets.map((bullet, bulletIndex) => (
                                  <li
                                    key={bulletIndex}
                                    className="text-sm text-muted-foreground flex items-start gap-2"
                                  >
                                    <span className="text-[hsl(var(--accent))] mt-1.5">
                                      •
                                    </span>
                                    {bullet}
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <FadeIn>
              <h3 className="text-xl font-semibold text-foreground mb-8 flex items-center gap-2">
                <GraduationCap
                  size={20}
                  className="text-[hsl(var(--accent))]"
                />
                Education
              </h3>
            </FadeIn>

            <div className="space-y-6">
              {education.map((edu, eduIndex) => (
                <FadeIn key={edu.institution} delay={eduIndex * 0.1}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="p-5 rounded-xl bg-background border border-border hover:border-[hsl(var(--accent))]/30 transition-all"
                  >
                    <h4 className="font-semibold text-foreground mb-1">
                      {edu.institution}
                    </h4>
                    <p className="text-[hsl(var(--accent))] text-sm font-medium mb-2">
                      {edu.degree}
                    </p>
                    <p className="text-sm text-muted-foreground mb-1">
                      {edu.details}
                    </p>
                    {/* <p className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar size={12} />
                      {edu.period}
                    </p> */}
                  </motion.div>
                </FadeIn>
              ))}
            </div>

            {/* Certifications */}
            <FadeIn delay={0.3}>
              <div className="mt-8 p-5 rounded-xl bg-[hsl(var(--accent))]/5 border border-[hsl(var(--accent))]/20">
                <h4 className="font-semibold text-foreground mb-3">
                  Certifications
                </h4>
                <ul className="space-y-2">
                  <li className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-[hsl(var(--accent))] mt-1">•</span>
                    MERN Stack Development
                  </li>
                  <li className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-[hsl(var(--accent))] mt-1">•</span>
                    Web Development
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
