
export interface OpenSourceProject {
  id: number;
  name: string;
  repo: string;
  description: string;
  link: string;
  contributions: string[];
  technologies: string[];
}

// Open source contributions data
export const openSourceProjects: OpenSourceProject[] = [
  {
    id: 1,
    name: "Framework Component Library",
    repo: "framework/components",
    description: "Contributed several UI components and fixed accessibility issues in a popular open-source component library.",
    link: "https://github.com/framework/components",
    contributions: ["Feature Implementation", "Bug Fixes", "Documentation"],
    technologies: ["React", "TypeScript"]
  },
  {
    id: 2,
    name: "Server-side Cache Library",
    repo: "cache/redis-adapter",
    description: "Added performance improvements and new features to a caching library used by thousands of applications.",
    link: "https://github.com/cache/redis-adapter",
    contributions: ["Performance Optimization", "New Features"],
    technologies: ["Node.js", "Redis"]
  },
  {
    id: 3,
    name: "Database ORM Tool",
    repo: "database/orm",
    description: "Fixed critical bugs and improved query performance in a popular database ORM library.",
    link: "https://github.com/database/orm",
    contributions: ["Bug Fixes", "Performance Optimization"],
    technologies: ["PHP", "MySQL", "PostgreSQL"]
  },
];
