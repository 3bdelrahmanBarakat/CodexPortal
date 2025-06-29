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
    title: "Ta3leemi LMS",
    description: "Create, manage, and deliver courses with ease. Track progress, engage learners, and keep everything organized in one place.",
    image: "https://i.ibb.co/whbQ09Wj/Screenshot-2025-06-29-030526.png",
    year: "2024",
    techStack: ["Vuejs", "Laravel", "Socket.io", "MySQL"],
    slug: "ta3leemi-lms"
  },
  {
    id: 2,
    title: "ShopHub",
    description: "Build and run your online store with ease. Manage products, process orders, and offer a smooth shopping experience for your customers.",
    image: "https://i.ibb.co/Zp2b0c7f/Screenshot-2025-06-29-032327.png",
    year: "2025",
    techStack: ["TypeScript", "ExpressJs", "PostgreSQL", "Redis"],
    slug: "shophub-ecommerce"
  },
  {
    id: 3,
    title: "MentorQuest",
    description: "Connect mentors and mentees in one place. Schedule sessions, track goals, and support personal and professional growth.",
    image: "https://i.ibb.co/5hNFrHrn/Screenshot-414.png",
    year: "2023",
    techStack: ["Laravel", "Js", "Mysql"],
    slug: "mentor-quest"
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
    image: "https://i.ibb.co/gMNLhns0/Whats-App-Image-2025-04-22-at-23-06-31-1bca8414.jpg",
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
    image: "https://i.ibb.co/kVT5Q6jd/Whats-App-Image-2025-04-22-at-23-05-56-2183d559.jpg",
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
    title: "Ta3leemi LMS: Powering Modern Learning Experiences",
    slug: "ta3leemi-lms",
    clientName: "Ta3leemi",
    problem: "Ta3leemi needed a scalable learning platform to support a growing number of students and educators. Their existing system lacked real-time features, flexible course management, and efficient communication tools between learners and instructors.",
    solution: "We built a full-featured LMS using Vue.js and Laravel, with real-time communication powered by Socket.io. The platform allows admins and instructors to create and manage courses, track learner progress, and hold interactive discussions. Key features include live notifications, role-based access, assessment tools, and a clean, mobile-friendly interface.",
    techStack: ["Vuejs", "Laravel", "Socket.io", "MySQL"],
    results: "Since launch, Ta3leemi has seen a 60% increase in course completion rates and a 50% boost in active user engagement. Instructors report smoother course delivery, and learners benefit from better feedback and real-time updates.",
    images: [
      "https://i.ibb.co/whbQ09Wj/Screenshot-2025-06-29-030526.png",
      "https://i.ibb.co/KxhFcXCk/Screenshot-2025-06-29-034350.png",
      "https://i.ibb.co/HD5nymvh/Screenshot-2025-06-29-034559.png"
    ],
    projectId: 1
  },
  {
  id: 2,
  title: "ShopHub: Scalable eCommerce Made Simple",
  slug: "shophub-ecommerce",
  clientName: "ShopHub",
  problem: "ShopHub needed a modern eCommerce platform that could handle high traffic and offer a seamless shopping experience. Their previous setup lacked performance, scalability, and flexibility in managing product inventory and orders.",
  solution: "We developed a robust eCommerce system using TypeScript with Express.js on the backend, PostgreSQL for data management, and Redis for fast caching and session handling. The platform supports advanced product filtering, real-time inventory updates, order tracking, and a secure checkout flow. It's optimized for both desktop and mobile to ensure a smooth user experience.",
  techStack: ["TypeScript", "ExpressJs", "PostgreSQL", "Redis"],
  results: "ShopHub saw a 70% improvement in page load speed and a 45% increase in completed purchases within the first two months. Store admins now spend less time on manual tasks, and customers benefit from faster, more reliable service.",
  images: [
    "https://i.ibb.co/Zp2b0c7f/Screenshot-2025-06-29-032327.png",
    "https://i.ibb.co/cc0ZzDjL/Screenshot-2025-06-29-035620.png",
    "https://i.ibb.co/nNnGhsyF/Screenshot-2025-06-29-035834.png"
  ],
  projectId: 2
},
  {
  id: 3,
  title: "MentorQuest: Smart Mentoring Platform",
  slug: "mentor-quest",
  clientName: "MentorQuest",
  problem: "MentorQuest wanted to create a digital platform to support structured mentorship programs. Their existing tools—spreadsheets, emails, and calendar apps—were fragmented and difficult to manage, making it hard to match users effectively and track progress over time.",
  solution: "We built a dedicated mentoring platform using Laravel, JavaScript, and MySQL. The system allows mentors and mentees to connect, schedule sessions, set goals, and share feedback. It includes automated matching based on interests and expertise, real-time notifications, session reminders, and progress tracking features to help participants stay on track.",
  techStack: ["Laravel", "Js", "Mysql"],
  results: "Since launching MentorQuest, the platform has seen a 3x increase in active mentoring sessions and improved participant satisfaction scores by 55%. Organizations using the platform report smoother coordination, better engagement, and more measurable outcomes from their mentorship programs.",
  images: [
    "https://i.ibb.co/bgv9wxbM/Screenshot-2025-06-29-041432.png",
    "https://i.ibb.co/Fk0qp8pL/Screenshot-2025-06-29-041724.png",
    "https://i.ibb.co/KctywZxt/Screenshot-2025-06-29-042140.png"
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
