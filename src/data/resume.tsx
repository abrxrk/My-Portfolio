import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, FileTextIcon } from "lucide-react";

export const DATA = {
  name: "Abrar Khawar",
  initials: "AK",
  url: "https://github.com/abrxrk",
  location: "Navi Mumbai, India",
  locationLink: "https://www.google.com/maps/place/navi+mumbai",
  description: "Software Developer. I like to build software products.",
  summary:
    "I am a passionate software developer who enjoys creating innovative solutions and building software products. I have experience in full-stack development, AI/ML integration, and data visualization. I love participating in hackathons and working on projects that solve real-world problems.",
  avatarUrl: "/abrar.jpeg", // Replace with your profile image
  skills: [
    "Python",
    "Java",
    "JavaScript",
    "SQL",
    "React.js",
    "Next.js",
    "FastAPI",
    "Flask",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "scikit-learn",
    "Git",
    "Postman",
    "Pytest",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
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
        url: "https://www.linkedin.com/in/abrar-ateeq-3aa875254/",
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
    // Add your work experience here if you have any
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
      technologies: ["React.js", "Tailwind CSS", "Appwrite", "Render"],
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
        "Built Medscope AI – an AI-Powered Medical Insight Web App. Developed a full-stack frontend using Next.js to support upload and AI-based analysis of MRI scans, chest X-rays, and blood test PDFs, with interactive visualizations and plain-language insights. Integrated Google OAuth authentication for secure user login, enabling personalized dashboards and future doctor feedback features.",
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
