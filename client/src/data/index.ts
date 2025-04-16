import {
  CaseStudy,
  CodeSnippet,
  ContactInfo,
  ProcessStep,
  Project,
  Service,
  Stat,
  TeamMember,
  TechIcon,
  Testimonial,
  TimelineItem,
  Value,
} from "@/types";
import {
  Code,
  Smartphone,
  Brain,
  Palette,
  Lightbulb,
  Search,
  PencilRuler,
  Rocket,
  LineChart,
} from "lucide-react";

export const featuredProjects: Project[] = [
  {
    id: 1,
    title: "FinTech Dashboard",
    description: "A comprehensive financial analytics platform with real-time data visualization and predictive insights.",
    image: "https://images.unsplash.com/photo-1616469829941-c7200edec809?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=480&q=80",
    year: "2023",
    techStack: ["React", "Node.js", "GraphQL"],
    slug: "fintech-dashboard"
  },
  {
    id: 2,
    title: "WellnessAI",
    description: "An AI-powered health companion app that provides personalized wellness recommendations and habit tracking.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=480&q=80",
    year: "2023",
    techStack: ["Flutter", "Firebase", "Machine Learning"],
    slug: "wellness-ai"
  },
  {
    id: 3,
    title: "ShopStream",
    description: "A modern e-commerce platform with real-time inventory management and streamlined checkout process.",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=480&q=80",
    year: "2022",
    techStack: ["Next.js", "MongoDB", "AWS"],
    slug: "shop-stream"
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "The team at Codex transformed our outdated systems into a streamlined digital platform that exceeded our expectations. Their technical expertise and strategic insight made all the difference.",
    name: "Michael Thompson",
    position: "CTO",
    company: "FinanceHub",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
  },
  {
    id: 2,
    content: "Codex helped us launch our app in record time without compromising on quality. Their attention to detail and commitment to excellence is unmatched. We're already planning our next project with them.",
    name: "Sarah Johnson",
    position: "Founder",
    company: "HealthTech Innovations",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
  },
  {
    id: 3,
    content: "Working with Codex was a game-changer for our e-commerce business. Their custom solutions increased our conversion rates by 45% and streamlined our entire operation. True professionals who deliver results.",
    name: "David Chen",
    position: "CEO",
    company: "Global Retail Solutions",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
  },
];

export const services: Service[] = [
  {
    id: 1,
    title: "Web Development",
    description: "Crafting responsive, high-performance web applications that deliver exceptional user experiences and drive business results.",
    icon: "code",
    features: ["Progressive Web Apps", "E-commerce Platforms", "Custom Web Portals"],
  },
  {
    id: 2,
    title: "Mobile App Development",
    description: "Creating intuitive, feature-rich mobile experiences for iOS and Android that connect with your users wherever they are.",
    icon: "mobile",
    features: ["Native & Cross-Platform Apps", "IoT Integration", "Wearable Technology"],
  },
  {
    id: 3,
    title: "AI & Automation",
    description: "Harnessing artificial intelligence and machine learning to optimize processes, enhance decision-making, and create smarter systems.",
    icon: "brain",
    features: ["Predictive Analytics", "Chatbots & Virtual Assistants", "Process Automation"],
  },
  {
    id: 4,
    title: "UX/UI Design",
    description: "Designing intuitive interfaces and seamless user experiences that engage, delight, and convert visitors into loyal customers.",
    icon: "paint",
    features: ["User Research & Testing", "Interaction Design", "Visual Identity Systems"],
  },
  {
    id: 5,
    title: "Software Consulting",
    description: "Providing strategic guidance and technical expertise to help businesses make informed technology decisions and maximize ROI.",
    icon: "bulb",
    features: ["Technology Assessment", "Digital Transformation", "Legacy System Modernization"],
  },
];

export const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: "Discover",
    description: "We dive deep to understand your business, users, and goals.",
    icon: "search",
  },
  {
    id: 2,
    title: "Design",
    description: "We create user-centered designs that align with your brand and objectives.",
    icon: "pencil",
  },
  {
    id: 3,
    title: "Develop",
    description: "We build robust, scalable solutions using cutting-edge technologies.",
    icon: "code",
  },
  {
    id: 4,
    title: "Deploy",
    description: "We launch your solution with rigorous testing and quality assurance.",
    icon: "rocket",
  },
  {
    id: 5,
    title: "Optimize",
    description: "We continuously improve your solution based on data and feedback.",
    icon: "chart",
  },
];

export const techStack: TechIcon[] = [
  { id: 1, name: "React", icon: "react" },
  { id: 2, name: "Node.js", icon: "node-js" },
  { id: 3, name: "Python", icon: "python" },
  { id: 4, name: "AWS", icon: "aws" },
  { id: 5, name: "Angular", icon: "angular" },
  { id: 6, name: "Vue.js", icon: "vuejs" },
  { id: 7, name: "Swift", icon: "swift" },
  { id: 8, name: "Android", icon: "android" },
];

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Alex Johnson",
    position: "CEO & Founder",
    bio: "Alex built Codex from the ground up with a vision to create technology that empowers people. With over 15 years in the industry, he brings strategic insight and technical expertise to every project.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    id: 2,
    name: "Sarah Chen",
    position: "CTO",
    bio: "Sarah leads our technical strategy and ensures we're always at the cutting edge. Her background in AI and distributed systems helps us create solutions that are as elegant as they are powerful.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    id: 3,
    name: "Michael Park",
    position: "Lead UX Designer",
    bio: "Michael believes great design is invisible. He obsesses over the details so our users don't have to, creating intuitive interfaces that make complex tasks feel simple and natural.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    position: "Senior Developer",
    bio: "Emily is our code quality champion and technical mentor. With expertise in multiple frameworks and languages, she ensures our solutions are as robust and maintainable as they are innovative.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
];

export const timelineItems: TimelineItem[] = [
  {
    id: 1,
    year: "2015",
    title: "Humble Beginnings",
    description: "Codex started as a two-person operation in a small apartment, focused on creating custom web solutions for local businesses.",
  },
  {
    id: 2,
    year: "2017",
    title: "First Major Client",
    description: "Landed our first enterprise client and expanded the team to 10 talented developers and designers.",
  },
  {
    id: 3,
    year: "2019",
    title: "International Expansion",
    description: "Opened our second office and began serving clients across North America, Europe, and Asia.",
  },
  {
    id: 4,
    year: "2021",
    title: "AI Division Launch",
    description: "Established our specialized AI and automation division to help clients harness the power of machine learning.",
  },
  {
    id: 5,
    year: "2023",
    title: "Today",
    description: "Now a team of 50+ experts, we continue to push the boundaries of what's possible in digital solutions.",
  },
];

export const values: Value[] = [
  {
    id: 1,
    title: "Innovation",
    description: "We constantly explore new technologies and approaches to solve complex problems in unique ways.",
    icon: "Lightbulb",
  },
  {
    id: 2,
    title: "Craftsmanship",
    description: "We believe in attention to detail and take pride in creating solutions that are as elegant as they are functional.",
    icon: "Tool",
  },
  {
    id: 3,
    title: "Collaboration",
    description: "We work closely with our clients, ensuring their vision and needs are at the center of everything we build.",
    icon: "Users",
  },
];

export const stats: Stat[] = [
  {
    id: 1,
    value: 200,
    label: "Projects Completed",
    icon: "CheckSquare",
  },
  {
    id: 2,
    value: 25,
    label: "Technologies Mastered",
    icon: "Code",
  },
  {
    id: 3,
    value: 15000,
    label: "Hours Saved for Clients",
    icon: "Clock",
  },
  {
    id: 4,
    value: 98,
    label: "Client Satisfaction",
    icon: "Heart",
  },
];

export const contactInfo: ContactInfo = {
  email: "hello@codex-tech.com",
  phone: "+1 (555) 123-4567",
  address: "123 Innovation Drive, Tech City, TC 10101",
  socialLinks: {
    linkedin: "#",
    twitter: "#",
    github: "#",
    dribbble: "#",
  },
};

export const codeSnippets: CodeSnippet[] = [
  {
    id: 1,
    code: `const future = async () => {
  await innovate();
  return buildTomorrow();
}`,
    language: "javascript",
    position: { top: "15%", left: "5%", opacity: 0.7 },
  },
  {
    id: 2,
    code: `class Solution {
  implement() {
    return this.code.transform(ideas);
  }
}`,
    language: "javascript",
    position: { top: "25%", right: "5%" },
  },
  {
    id: 3,
    code: `function createImpact(vision) {
  return vision.map(idea => 
    digitalize(idea)
  );
}`,
    language: "javascript",
    position: { bottom: "20%", left: "5%" },
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "FinTech Dashboard: Transforming Financial Analytics",
    slug: "fintech-dashboard",
    clientName: "FinanceHub",
    problem: "FinanceHub struggled with an outdated analytics system that couldn't handle the growing volume of financial data. They needed a modern, scalable solution that would provide real-time insights and predictive analytics to their financial advisors and clients.",
    solution: "We developed a comprehensive financial analytics platform built with React and Node.js, leveraging GraphQL for efficient data fetching. The dashboard integrates multiple data sources and uses advanced visualization techniques to present complex financial information in an intuitive way. Key features include real-time transaction monitoring, custom alert systems, and AI-powered trend prediction.",
    techStack: ["React", "Node.js", "GraphQL", "D3.js", "TensorFlow", "AWS"],
    results: "The new dashboard reduced data processing time by 85% and improved user engagement by 40%. Financial advisors can now make faster, better-informed decisions, and clients have praised the intuitive interface. FinanceHub has seen a 25% increase in client retention since implementing the new system.",
    images: [
      "https://images.unsplash.com/photo-1616469829941-c7200edec809?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=480&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=480&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=480&q=80"
    ],
    projectId: 1
  },
  {
    id: 2,
    title: "WellnessAI: Personalized Health Companion",
    slug: "wellness-ai",
    clientName: "HealthTech Innovations",
    problem: "HealthTech Innovations wanted to create a mobile application that could help users maintain healthy habits and provide personalized wellness recommendations. Traditional health apps were too generic and failed to keep users engaged over time.",
    solution: "We built WellnessAI, a cross-platform mobile app developed with Flutter and powered by Firebase. The app uses machine learning algorithms to analyze user data and provide truly personalized health recommendations. We created a habit tracking system with adaptive reminders, integrated wearable device connectivity, and implemented a recommendation engine that improves over time as it learns user preferences and patterns.",
    techStack: ["Flutter", "Firebase", "Machine Learning", "TensorFlow Lite", "Google Cloud", "Swift", "Kotlin"],
    results: "WellnessAI achieved a 78% user retention rate after three months, significantly higher than industry averages. The app has helped users improve consistency in health routines by 64% and has received acclaim for its intuitive design and personalized approach. HealthTech Innovations has secured additional funding based on the app's success.",
    images: [
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=480&q=80",
      "https://images.unsplash.com/photo-1539186607619-df476afe6ff5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=480&q=80",
      "https://images.unsplash.com/photo-1631817337262-dc2bdd8a3661?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=480&q=80"
    ],
    projectId: 2
  },
  {
    id: 3,
    title: "ShopStream: Modern E-Commerce Platform",
    slug: "shop-stream",
    clientName: "Global Retail Solutions",
    problem: "Global Retail Solutions faced challenges with their existing e-commerce platform, including inventory discrepancies, slow checkout processes, and poor mobile performance. These issues were leading to cart abandonment and lost sales.",
    solution: "We developed ShopStream, a modern e-commerce platform built with Next.js and MongoDB. The system features real-time inventory management that synchronizes across all sales channels, an optimized one-page checkout process, and a responsive design that delivers the same high-quality experience across all devices. We implemented advanced search and filtering capabilities, personalized product recommendations, and seamless integration with multiple payment processors.",
    techStack: ["Next.js", "MongoDB", "AWS", "Redis", "Stripe", "Elasticsearch", "Tailwind CSS"],
    results: "After launching ShopStream, Global Retail Solutions saw a 45% increase in conversion rates and a 60% reduction in cart abandonment. The real-time inventory system eliminated overselling issues, and the streamlined checkout process reduced average checkout time from 3.5 minutes to just 58 seconds. Mobile sales increased by 70% in the first quarter after launch.",
    images: [
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=480&q=80",
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=480&q=80",
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=480&q=80"
    ],
    projectId: 3
  }
];

export const getServiceIcon = (icon: string) => {
  switch (icon) {
    case "code":
      return Code;
    case "mobile":
      return Smartphone;
    case "brain":
      return Brain;
    case "paint":
      return Palette;
    case "bulb":
      return Lightbulb;
    case "search":
      return Search;
    case "pencil":
      return PencilRuler;
    case "rocket":
      return Rocket;
    case "chart":
      return LineChart;
    default:
      return Code;
  }
};
