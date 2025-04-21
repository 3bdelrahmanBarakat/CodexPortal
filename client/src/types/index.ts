export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  year: string;
  techStack: string[];
  slug?: string;
}

export interface CaseStudy {
  id: number;
  title: string;
  slug: string;
  clientName: string;
  problem: string;
  solution: string;
  techStack: string[];
  results: string;
  images: string[];
  projectId: number; // Reference to the featured project
}

export interface Testimonial {
  id: number;
  content: string;
  name: string;
  position: string;
  company: string;
  rating: number;
  image: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface TechIcon {
  id: number;
  name: string;
  icon: string;
}

export interface TeamMember {
  id: number;
  name: string;
  position: string;
  bio: string;
  image: string;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export interface TimelineItem {
  id: number;
  year: string;
  title: string;
  description: string;
}

export interface Value {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Stat {
  id: number;
  value: number;
  label: string;
  icon: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  socialLinks: {
    instagram: "https://www.instagram.com/codexsolutions_?igsh=dDZ1cjN4Z3lkeGht&utm_source=qr";
    facebook: "https://www.facebook.com/share/18ZrzsXMY6/?mibextid=wwXIfr";
    tiktok: "https://www.tiktok.com/@codex.solutions?_t=ZS-8visP6Ryob2&_r=1";
    whatsapp: "https://api.whatsapp.com/send?phone=201288944409";
  };
}

export interface CodeSnippet {
  id: number;
  code: string;
  language: string;
  position: 
    { top: string; left: string; opacity?: number; } | 
    { top: string; right: string; opacity?: number; } | 
    { bottom: string; left: string; opacity?: number; };
}
