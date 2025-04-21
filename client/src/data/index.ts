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
    title: "SEO Optimization",
    description: "Enhancing your online presence through strategic SEO practices that improve visibility, drive traffic, and increase conversions.",
    icon: "search",
    features: ["Keyword Research", "On-Page SEO", "Content Strategy"],
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
  { id: 2, name: "Laravel", icon: "laravel" },
  { id: 3, name: "Flutter", icon: "flutter" },
  { id: 4, name: "AWS", icon: "aws" },
  { id: 6, name: "Vue.js", icon: "vuejs" },
  { id: 8, name: "Android", icon: "android" },
];

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Abdelrahman Barakat",
    position: "Backend Developer",
    bio: "Alex built Codex from the ground up with a vision to create technology that empowers people. With over 15 years in the industry, he brings strategic insight and technical expertise to every project.",
    image: "https://i.ibb.co/DDJ34RCR/Snapinst-app-468989894-549240554697602-9214018573755546646-n-1080.jpg",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    id: 2,
    name: "Mohamed Nasser",
    position: "Mobile App Developer",
    bio: "Sarah leads our technical strategy and ensures we're always at the cutting edge. Her background in AI and distributed systems helps us create solutions that are as elegant as they are powerful.",
    image: "https://scontent.fcai20-5.fna.fbcdn.net/v/t39.30808-6/481274764_1227087272352868_2434984631338816663_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHMOhd9eQt9_pUS4b6KLpN-Ioi3lcgGQXYiiLeVyAZBdhlsEY3ytNQX2tPI6crE1xi1Y4RbZX2RjG_piH5t91cp&_nc_ohc=NqWpgKdmcCQQ7kNvwGqUkJS&_nc_oc=AdmQFBprIPFART-IR6Sa5715TkXNWJ9gmyPkbeCINt0rRqaacLsZamTi7CMn3xizr_M&_nc_zt=23&_nc_ht=scontent.fcai20-5.fna&_nc_gid=KLl5fug02aBRpuIlflSYew&oh=00_AfG3SidJvE9RK6MOWEHp0cHlCMrcdgzdIokucza8ePB72Q&oe=680CBAB5",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    id: 3,
    name: "Mohamed Atef",
    position: "FullStack Developer",
    bio: "Michael believes great design is invisible. He obsesses over the details so our users don't have to, creating intuitive interfaces that make complex tasks feel simple and natural.",
    image: "https://scontent.fcai20-1.fna.fbcdn.net/v/t39.30808-6/474587231_1359669362061961_2100668483350874104_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHmj9mpsCGSvF9SqVDCYD2DX6Iu4Z0EsBRfoi7hnQSwFDqlstqW6g0gKNY0wy6rP_Wyfnvw_ynRtGcUpVNlHsAP&_nc_ohc=u3w2rGSxZjYQ7kNvwFzjFWn&_nc_oc=AdmcNaGPyQe11uFgrbV1KaNgw6nluiAeZVuxVCqI-MuPcnVqTCKCChkntFxWuIOciEE&_nc_zt=23&_nc_ht=scontent.fcai20-1.fna&_nc_gid=eL6AKdmtkh4lHIkYC3fkow&oh=00_AfE6aQvH-rXt8TXWgHEcA-kqXO2wrulPJ-MNNeTWdUkW1g&oe=680CA857",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    id: 4,
    name: "Mohamed Hassanein",
    position: "Marketing Specialist",
    bio: "Emily is our code quality champion and technical mentor. With expertise in multiple frameworks and languages, she ensures our solutions are as robust and maintainable as they are innovative.",
    image: "https://i.ibb.co/Q3TdN91d/12106-B74-27-A3-4921-A1-F6-40-FF683010-AF.jpg",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },

  {
    id: 5,
    name: "Mahmoud Amin",
    position: "Mobile App Developer",
    bio: "Emily is our code quality champion and technical mentor. With expertise in multiple frameworks and languages, she ensures our solutions are as robust and maintainable as they are innovative.",
    image: "https://scontent.fcai20-3.fna.fbcdn.net/v/t39.30808-6/473417317_122151840920342361_8294178731824840291_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEappkCwOFaAtlIzw5qVf6UC2IgL1hnlqcLYiAvWGeWp6Wiqs4jSE_wX1LxFT9oy_i2WFB2TpaulcDWh9ACzMST&_nc_ohc=I21Jwa-pKMYQ7kNvwEFQGMH&_nc_oc=Adnh7Gzj3y_6p6ljlsm6DuMGksVriOuel5Rpb6sVSDINMdYZJSNHM137kHS18ieN5lE&_nc_zt=23&_nc_ht=scontent.fcai20-3.fna&_nc_gid=zf_CLNv21lE_-Hdu3wCeaw&oh=00_AfHgj8t6AuPDYiriPft0jFWGObNDjsw7qsANcaQbMTMnbw&oe=680C8729",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  }
];

export const timelineItems: TimelineItem[] = [
  {
    id: 1,
    year: "2022",
    title: "A Shared Vision",
    description: "Five friends, each with a different dream, came together with one mission: to create something meaningful in the world of technology.",
  },
  {
    id: 2,
    year: "2023",
    title: "From Passion to Code",
    description: "With a shared passion for innovation, we transformed our ideas into real tech solutions, learning, growing, and building along the way.",
  },
  {
    id: 3,
    year: "2024",
    title: "Codex is Born",
    description: "Codex officially launched as a software development agency, combining creativity and cutting-edge tech to serve businesses across industries.",
  },
  {
    id: 4,
    year: "2024",
    title: "Our First Product: Ta3leemi",
    description: "We developed Ta3leemi, an online learning platform built to make education more accessible, organized, and interactive for students and institutions.",
  },
  {
    id: 5,
    year: "2025",
    title: "Vision: #1 in the Middle East",
    description: "Our journey continues. We’re on a mission to become the leading tech company in the region—one innovation at a time.",
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
  email: "Codexegy@gmail.com",
  phone: "+201032398267",
  address: "Cairo, Egypt",
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
