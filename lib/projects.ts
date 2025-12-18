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
      slug: "Campus-Connect",
      title: "Campus-Connect",
      summary:
        "Campus Connect is a full-stack platform for creating, managing, and attending campus events with secure roles, QR tickets, and real-time attendance tracking.",
      description:
        "Campus Connect is a full-stack campus event management platform that allows organizers to create and manage events while enabling students to discover, register, and access QR-based digital tickets. It supports secure role-based access, real-time attendance tracking, and a complete end-to-end campus event workflow.",
      tags: ["web", "Full-Stack", "Event Management"],
      tech: ["Next.js", "Node.js", "Express.js", "MongoDB", "JWT"],
      cover: "images/projects/campus-connect.png",
      repo: "https://github.com/Nagendar23/Campus-Connect",
      featured: true,
      date: "2025-09-28",
    },
    {
      slug: "airbnb-clone",
      title: "Airbnb Clone",
      summary: "Accommodation booking app with geolocation and maps API.",
      description:
        "A responsive Airbnb-like web application with JWT authentication, CRUD operations, RESTful APIs, geolocation, and maps integration. Improved performance by 40% through frontend and backend optimization.",
      tags: ["web", "Backend", "Booking"],
      tech: ["EJS", "Express.js", "MongoDB", "JWT", "Maps API"],
      cover: "/images/projects/airBnb.png",      
      repo: "https://github.com/Nagendar23/Air-Bnb",
      url: "https://air-bnb-fnxw.onrender.com/listings",
      featured: true,
      date: "2025-04-25",
    },
    {
      slug: "VideoMeetZ",
      title: "VideoMeetZ",
      summary: "A MERN-based web app offering high-quality video conferencing with real-time WebRTC streaming, screen sharing, and seamless multi-user communication via WebSockets.",
      description:
        "A full stack web application enabling high-quality video conferencing with screen sharing, built using the MERN stack. Implemented WebRTC for real-time media streaming and WebSockets for signaling and instant communication, allowing multiple users to join rooms, share screens, and communicate seamlessly.",
      tags: ["web", "full-stack", "Video Conferencing", "Collaboration App"],
      tech: ["React", "Express.js","Node.js", "MongoDB", "WebRTC","WebSockets"],
      cover: "/images/projects/VideoMeetZ.png",
      repo: "https://github.com/Nagendar23/VideoConferenceApp/",
      featured: true,
      date: "2024-09-10",
    },

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

  ];
}

export function getProject(slug: string): Project | undefined {
  return getProjects().find((project) => project.slug === slug);
}
