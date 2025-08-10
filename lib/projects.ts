export interface Project {
  slug: string;
  title: string;
  summary: string;
  description: string;
  tags: string[];
  tech: string[];
  cover: string;
  repo?: string;
  url?: string;
  featured: boolean;
  date: string;
}

export function getProjects(): Project[] {
  return [
    {
      slug: "expense-tracker",
      title: "Expense Tracker",
      summary:
        "Full-stack expense management app with budget analysis and visualizations.",
      description:
        "A responsive MERN stack expense manager with JWT-based authentication, categorized expense tracking, and data visualization charts for better financial insights. Achieved 99.9% uptime and 60% faster budget analysis.",
      tags: ["web", "full-stack", "finance"],
      tech: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Chart.js"],
      cover: "/images/projects/expense-tracker.png",
      repo: "https://github.com/Nagendar23/Expense-Tracker",
      featured: true,
      date: "2025-05-13",
    },
    {
      slug: "airbnb-clone",
      title: "Airbnb Clone",
      summary: "Accommodation booking app with geolocation and maps API.",
      description:
        "A responsive Airbnb-like web application with JWT authentication, CRUD operations, RESTful APIs, geolocation, and maps integration. Improved performance by 40% through frontend and backend optimization.",
      tags: ["web", "full-stack", "booking"],
      tech: ["EJS", "Express.js", "MongoDB", "JWT", "Maps API"],
      cover: "/images/projects/airBnb.png",      
      repo: "https://github.com/Nagendar23/Air-Bnb",
      url: "https://air-bnb-fnxw.onrender.com/listings",
      featured: true,
      date: "2025-04-25",
    },
    {
      slug: "notes-app",
      title: "Notes Application",
      summary: "Secure notes app with tagging, full-text search, and theming.",
      description:
        "A secure notes management app with JWT authentication, role-based access, tagging, full-text search, and theming options. Optimized state management improved response time by 45%.",
      tags: ["web", "full-stack", "productivity"],
      tech: ["React", "Node.js", "MongoDB", "JWT"],
      cover: "/images/projects/notes-app.png",
      repo: "https://github.com/Nagendar23/notes-app",
      featured: false,
      date: "2024-05-03",
    },
    {
      slug: "todo-app",
      title: "To-Do App",
      summary:
        "Task management app with CRUD operations and responsive design.",
      description:
        "A MERN stack to-do list application that allows users to add, edit, delete, and mark tasks as complete. Includes JWT authentication, MongoDB database integration, and a responsive UI for both desktop and mobile devices.",
      tags: ["web", "productivity", "full-stack"],
      tech: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
      cover: "/images/projects/ToDo-App.png",
      repo: "https://github.com/Nagendar23/ToDo-App",
      featured: false,
      date: "2025-04-27",
    },

    {
      slug: "landing-page",
      title: "Landing Page",
      summary: "A modern, responsive landing page built with React.js.",
      description:
        "A visually appealing and responsive landing page built using React.js, optimized for performance and user engagement. Includes smooth animations, reusable components, and mobile-friendly layouts.",
      tags: ["web", "ui"],
      tech: ["React.js"],
      cover: "/images/projects/landing-page.png",
      repo: "https://github.com/Nagendar23/landing-page",
      url: "https://landing-page-cyan-eight.vercel.app/",
      featured: false,
      date: "2025-04-02",
    },
    {
      slug: "qr-code-generator",
      title: "QR Code Generator",
      summary:
        "Customizable QR code generator with history and scanner features.",
      description:
        "A React-based QR code generator with download option, dark/light mode, custom size, error correction levels, save history, and optional QR scanner functionality.",
      tags: ["web", "tool"],
      tech: ["React", "QRCode.js"],
      cover: "/images/projects/qr-generator.png",
      repo: "https://github.com/Nagendar23/QR-Generator",
      url: "https://nagendar-qr.vercel.app/",
      featured: false,
      date: "2025-03-15",
    },
  ];
}

export function getProject(slug: string): Project | undefined {
  return getProjects().find((project) => project.slug === slug);
}
