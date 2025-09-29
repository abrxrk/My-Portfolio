import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, FileTextIcon } from "lucide-react";

export const DATA = {
  name: "Abrar Khawar",
  initials: "AK",
  url: "https://github.com/abrxrk",
  location: "Navi Mumbai, India",
  locationLink: "https://www.google.com/maps/place/navi+mumbai",
  description: "Trust me, I'm a software engineer.",
  summary:
    "A passionate technologist focused on building innovative software and learning new technologies.",
  avatarUrl: "/abrar.jpeg", // Replace with your profile image
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Express",
    "REST API",
    "Python",
    "C++",
    "Java",
    "FastAPI",
    "MongoDB",
    "Git",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "scikit-learn",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    {
      href: "https://abrarhub.bearblog.dev/",
      icon: NotebookIcon,
      label: "Blog",
    },
    { href: "/resume.pdf", icon: FileTextIcon, label: "Resume" },
  ],
  contact: {
    email: "abrarkhawarwork@gmail.com",
    tel: "+123456789", // Add your phone number if you want
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/abrxrk",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/abrar-khawar",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:abrarkhawarwork@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
      "TUF+": {
        name: "TakeUForward+",
        url: "https://takeuforward.org/plus/profile/abrxrk",
        icon: Icons.tuf,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Eastri",
      href: "https://eastri.in",
      badges: [],
      location: "Remote",
      title: "Software Engineering Intern",
      logoUrl: "/eastri_logo.jpeg",
      start: "August 2025",
      end: "Present",
      description: "Transforming how India irons, one line of code at a time.",
    },
  ],
  education: [
    {
      school: "DY Patil University",
      href: "https://dypatil.edu/",
      degree: "B.Tech Computer Engineering",
      logoUrl: "/college.webp",
      start: "2022",
      end: "2026",
    },
  ],
  projects: [
    {
      title: "PaisaFlow",
      href: "https://paisaflow-inxp.onrender.com/",
      dates: "July 2025",
      active: true,
      description:
        "PaisaFlow is a modern full-stack web application designed to help users take control of their financial health. It provides tools to monitor spending, manage budgets, track goals, and gain personalized insights from an AI-powered chatbot.",
      technologies: ["React", "Tailwind CSS", "Appwrite", "Render"],
      links: [
        {
          type: "Website",
          href: "https://paisaflow-inxp.onrender.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/abrxrk/PaisaFlow",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "AbliHUB",
      href: "https://github.com/abrxrk/abliHUB",
      dates: "Ongoing",
      active: true,
      description:
        "AbliHUB is an AI-powered project-based learning platform that helps learners choose a skill, generate a personalized roadmap, build mini-projects, and get instant feedback — all in one place.",
      technologies: [
        "React",
        "Vite",
        "Tailwind CSS",
        "FastAPI",
        "Python",
        "OpenAI API",
      ],
      links: [
        {
          type: "Website",
          href: "https://ablihub.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/abrxrk/abliHUB",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "WatchWise",
      href: "https://github.com/abrxrk/WatchWise",
      dates: "August 2025",
      active: true,
      description:
        "WatchWise is a Chrome extension that analyzes viewing history from Netflix, Prime Video, and Hotstar to deliver personalized AI-powered recommendations using Google's Gemini AI with a modern glassmorphism UI.",
      technologies: [
        "React",
        "Vite",
        "Tailwind CSS",
        "Chrome APIs",
        "Google Gemini API",
        "Manifest V3",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/abrxrk/WatchWise",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "SkillScore.AI",
      href: "https://skillscore-ai.streamlit.app/",
      dates: "2024",
      active: true,
      description:
        "SkillScore.AI is a simple Streamlit web app that allows users to rate their confidence in various tech skills and instantly get a visual analysis of their strengths.",
      technologies: ["Streamlit", "Python", "Pandas", "Plotly"],
      links: [
        {
          type: "Website",
          href: "https://skillscore-ai.streamlit.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/abrxrk/SkillScore-AI",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "IEEE TechSangam Hackathon",
      dates: "August 2025",
      location: "Pune, India",
      description:
        "Built Medscope AI, a full-stack medical insight platform using React (frontend) and FastAPI (backend) that converts 2D MRI and X-ray scans into interactive 3D visualizations, alongside AI-powered analysis of medical images and blood test reports with plain-language explanations. Secured Top 10 position among 300+ teams",
      win: "Finalist",
      image: "", // Add hackathon image if you have one
      links: [
        // Add links to your project, GitHub repo, or any other relevant links if available
        // {
        //   title: "Source",
        //   icon: <Icons.github className="h-4 w-4" />,
        //   href: "https://github.com/abrxrk/medscope-ai",
        // },
      ],
    },
    {
      title: "Vibe-a-thon (EmpireUI Track)",
      dates: "May 2025",
      location: "Remote",
      description:
        "Participated in the EmpireUI open-source track organized by Geek Room X Pathway. Built an AI-focused UI component using React designed for integration with OpenAI and Whisper APIs. Explored real-time AI UI patterns and submitted a functional prototype with documentation during the hackathon.",
      image: "", // Add hackathon image if you have one
      links: [
        // Add links to your project, GitHub repo, or any other relevant links if available
        // {
        //   title: "Source",
        //   icon: <Icons.github className="h-4 w-4" />,
        //   href: "https://github.com/abrxrk/your-project",
        // },
      ],
    },
  ],
} as const;
