/**
 * Type definitions for the portfolio website
 */

// Navigation item type
export interface NavItem {
  label: string;
  href: string;
}

// Experience item type
export interface Experience {
  id: string;
  company: string;
  role: string;
  type: string;
  period: string;
  location?: string;
  projects: Project[];
}

// Project type
export interface Project {
  name: string;
  description: string;
  tech?: string;
  bullets: string[];
}

// Skill category type
export interface SkillCategory {
  name: string;
  skills: string[];
}

// Social link type
export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

// Contact form data type
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
