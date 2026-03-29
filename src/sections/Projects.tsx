import { motion } from 'framer-motion';
import { Car, Gamepad2, CreditCard, FileText, HeartPulse, IdCard } from 'lucide-react';
import { FadeIn } from '@/components/animations/FadeIn';

/**
 * Projects data
 */
const projects = [
  {
    id: 'faktum',
    name: 'Faktum',
    description:
      'Germany-based Customer Rewards & Benefits Platform with OCR-driven loyalty system',
    longDescription:
      'A sophisticated platform where users scan invoices to earn rewards (1 Point per €100). Features an automated eligibility engine and approval workflow for benefit disbursements.',
    icon: CreditCard,
    tech: [
      'Node.js',
      'Fastify',
      'Drizzle ORM',
      'MySQL',
      'Zod',
      'React.js',
      'OCR',
    ],
    highlights: [
      'OCR-driven invoice scanning',
      'Automated eligibility engine',
      'Benefit plan management',
      'Admin approval workflow',
    ],
    color: 'from-blue-500/20 to-cyan-500/20',
    iconColor: 'text-blue-500',
  },
  {
    id: 'rideable',
    name: 'Rideable',
    description:
      'Healthcare Mobility Platform for wheelchair-accessible car bookings',
    longDescription:
      'An end-to-end platform similar to Ola/Uber specifically designed for wheelchair-accessible car bookings, managing complex workflows for Users, Vendors, and Admin.',
    icon: Car,
    tech: [
      'Node.js',
      'Fastify',
      'Drizzle ORM',
      'Socket.io',
      'Redis',
      'Cloudinary',
      'React.js',
      'ShadCN UI',
    ],
    highlights: [
      'Real-time booking updates',
      'Vendor/Driver onboarding',
      'Aadhaar/DL verification',
      'Medical document uploads',
    ],
    color: 'from-green-500/20 to-emerald-500/20',
    iconColor: 'text-green-500',
  },
  {
    id: 'money-mash',
    name: 'Money Mash Games',
    description:
      'Betting & Gaming Platform with comprehensive Admin Panel',
    longDescription:
      'A high-concurrency betting platform with real-time user management, KYC verification, payment gateway integration, and wallet management features.',
    icon: Gamepad2,
    tech: [
      'Node.js',
      'Fastify',
      'React.js',
      'Redux',
      'MongoDB',
      'Redis',
      'Firebase',
      'Node Forge',
    ],
    highlights: [
      'Real-time user management',
      'PAN/Aadhaar KYC verification',
      'SabPaisa payment gateway',
      'Wallet & bonus management',
    ],
    color: 'from-purple-500/20 to-pink-500/20',
    iconColor: 'text-purple-500',
  },
  {
    id: 'smart-card',
    name: 'Smart Digital Business Card',
    description:
      'NFC-Card Management Platform for digital business cards',
    longDescription:
      'A scalable platform for managing NFC-enabled digital business cards with seamless authentication and responsive mobile interface.',
    icon: IdCard,
    tech: [
      'Node.js',
      'NestJS',
      'TypeORM',
      'Ionic',
      'React Query',
      'JWT',
      'Google OAuth',
    ],
    highlights: [
      'NFC card management',
      'Mobile-responsive UI',
      'Google OAuth integration',
      'Secure token management',
    ],
    color: 'from-orange-500/20 to-amber-500/20',
    iconColor: 'text-orange-500',
  },
  {
    id: 'gst-invoice',
    name: 'GST Invoice System',
    description:
      'GST calculation and reporting system with Excel integration',
    longDescription:
      'A comprehensive system for managing business invoices with automated GST calculations, Excel import/export, and detailed reporting.',
    icon: FileText,
    tech: ['React.js', 'Material UI', 'Axios', 'Excel Processing'],
    highlights: [
      'GST calculation APIs',
      'Excel import/export',
      'Bulk invoice upload',
      'Date-range reporting',
    ],
    color: 'from-red-500/20 to-rose-500/20',
    iconColor: 'text-red-500',
  },
  {
    id: 'spirals-health',
    name: 'Spirals Health',
    description:
      'Healthcare appointment booking platform',
    longDescription:
      'A healthcare platform enabling users to search for doctors and book appointments with secure authentication and real-time availability.',
    icon: HeartPulse,
    tech: [
      'React',
      'Node.js',
      'MongoDB',
      'JWT',
      'React Router DOM',
    ],
    highlights: [
      'Doctor search & filtering',
      'Appointment booking',
      'JWT/OTP authentication',
      'Real-time availability',
    ],
    color: 'from-teal-500/20 to-cyan-500/20',
    iconColor: 'text-teal-500',
  },
];

/**
 * Projects Section Component
 * Project cards with hover effects and technology tags
 */
export function Projects() {
  return (
    <section
      id="projects"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30"
      aria-label="Projects section"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <FadeIn className="text-center mb-16">
          <p className="text-sm font-medium text-[hsl(var(--accent))] mb-2">
            My Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects I&apos;ve worked on across Fintech,
            Healthcare, Gaming, and NFC-Card Management domains.
          </p>
        </FadeIn>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, projectIndex) => (
            <FadeIn key={project.id} delay={projectIndex * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                className="group h-full flex flex-col rounded-xl bg-background border border-border hover:border-[hsl(var(--accent))]/30 overflow-hidden transition-all shadow-sm hover:shadow-lg"
              >
                {/* Project Header with Gradient */}
                <div
                  className={`relative h-32 bg-gradient-to-br ${project.color} flex items-center justify-center`}
                >
                  <div className="w-16 h-16 rounded-2xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <project.icon
                      size={32}
                      className={project.iconColor}
                    />
                  </div>
                </div>

                {/* Project Content */}
                <div className="flex-1 p-6 flex flex-col">
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-[hsl(var(--accent))] transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-1 mb-4">
                    {project.highlights.map((highlight, index) => (
                      <li
                        key={index}
                        className="text-xs text-muted-foreground flex items-start gap-2"
                      >
                        <span className="text-[hsl(var(--accent))] mt-0.5">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.tech.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-xs rounded bg-muted text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-2 py-0.5 text-xs rounded bg-muted text-muted-foreground">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
