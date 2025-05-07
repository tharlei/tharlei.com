
export interface ProfessionalProject {
  id: number;
  name: string;
  company: string;
  companyId: string;
  description: string;
  image: string;
  link: string;
  technologies: string[];
}

// Professional projects data
export const professionalProjects: ProfessionalProject[] = [
  {
    id: 1,
    name: "E-commerce Platform",
    company: "Tech Company Inc.",
    companyId: "tech-company",
    description: "A scalable e-commerce platform handling thousands of daily transactions with advanced product filtering, cart management, and secure payment processing.",
    image: "/placeholder.svg",
    link: "https://example.com",
    technologies: ["React", "Node.js", "Redis", "AWS"]
  },
  {
    id: 2,
    name: "Financial Dashboard",
    company: "Digital Solutions Ltd.",
    companyId: "digital-solutions",
    description: "Interactive financial analytics dashboard for tracking investments, expenses, and financial goals with data visualization and reporting features.",
    image: "/placeholder.svg",
    link: "https://example.com/finance",
    technologies: ["Vue.js", "Laravel", "MySQL", "Docker"]
  },
  {
    id: 3,
    name: "Content Management System",
    company: "Creative Web Agency",
    companyId: "creative-web",
    description: "Custom CMS for a publishing company with content workflow, user management, and automated publishing features.",
    image: "/placeholder.svg",
    link: "https://example.com/cms",
    technologies: ["PHP", "JavaScript", "MySQL"]
  },
  {
    id: 4,
    name: "Healthcare Portal",
    company: "Digital Solutions Ltd.",
    companyId: "digital-solutions",
    description: "Patient management system with appointment scheduling, medical records, and telemedicine capabilities.",
    image: "/placeholder.svg",
    link: "https://example.com/healthcare",
    technologies: ["Laravel", "Vue.js", "PostgreSQL"]
  },
  {
    id: 5,
    name: "Real Estate Platform",
    company: "Tech Company Inc.",
    companyId: "tech-company",
    description: "Property listing and management platform with mapping integration, virtual tours, and agent communication tools.",
    image: "/placeholder.svg",
    link: "https://example.com/realestate",
    technologies: ["React", "Node.js", "MongoDB", "AWS"]
  },
];
