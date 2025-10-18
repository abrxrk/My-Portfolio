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
    "I break things, learn fast, and love diving deep into code and CS fundamentals.",
  avatarUrl: "/abrar.jpeg", // Replace with your profile image
  skills: [
    "TypeScript",
    "React",
    "Next.js",
    "Express",
    "Python",
    "C++",
    "Java",
    "FastAPI",
    "Framework agnostic ;)",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    {
      href: "https://abrxrk.hashnode.dev/",
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
      company: "PlaytPlus",
      href: "https://playtplus.com",
      badges: [],
      location: "Remote",
      title: "Frontend Engineer Intern",
      logoUrl: "/PlaytPlus.png",
      start: "November 2025",
      end: "Ongoing",
      description:
        "Merging code and creativity to redefine how the world plays.",
    },
    {
      company: "Eastri",
      href: "https://eastri.in",
      badges: [],
      location: "Remote",
      title: "Software Engineering Intern",
      logoUrl: "/eastri_logo.jpeg",
      start: "August 2025",
      end: "November 2025",
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
        "A full stack finance app that helps users track spending, manage budgets, set goals, and get AI driven financial insights.",
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
        "An AI powered platform for personalized, project based learning from skill roadmaps to instant feedback.",
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
        "A Chrome extension that uses AI to analyze your streaming history and deliver smart, personalized show recommendations.",
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
        "A Streamlit app that visualizes your tech skill confidence levels to highlight strengths and growth areas.",
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
