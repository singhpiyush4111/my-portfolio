import { Navbar } from "@/sections/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Experience } from "@/sections/Experience";
import { Skills } from "@/sections/Skills";
import { Projects } from "@/sections/Projects";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import "./App.css";
import CoreExpertise from "./sections/Coreexpertise";

/**
 * Main App Component
 * Portfolio website for Piyush Singh - MERN Stack Developer
 *
 * Features:
 * - Fixed navbar with smooth scrolling navigation
 * - Hero section with call-to-action buttons
 * - About section with professional bio
 * - Experience timeline with work history
 * - Skills section with categorized badges
 * - Projects showcase with cards
 * - Contact form and social links
 * - Footer with back to top
 *
 * All sections use Framer Motion for smooth animations
 */
function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Core Expertise Section */}
        <CoreExpertise />

        {/* Experience & Education Section */}
        <Experience />

        {/* Skills Section */}
        <Skills />

        {/* Projects Section */}
        <Projects />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
