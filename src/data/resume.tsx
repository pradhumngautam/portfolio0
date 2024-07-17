import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";

export const DATA = {
  name: "Pradhumn Gautam",
  initials: "PG",
  url: "https://dub.sh/pradhumn",
  location: "New Delhi, India",
  locationLink: "sanfrancisco",
  description:
    "Software Engineer, Building seamless web solutions and passionate in machine learning.",
  summary:
    "I'm Pradhumn Gautam a Full Stack Developer from India. Passionate about Software Development, Cloud Engineering, Backend Systems & Open-Source Softwares.I'm currently an undergraduate, pursuing Computer Science majors with Specialization in Artificial Intelligence and Data Science from New Delhi, India. I am passionate about creating not just functional, but also aesthetically pleasing and intuitive user interfaces, ensuring a seamless user experience.",

  avatarUrl: "/mee.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Express.js",
    "prisma",
    "Tailwind Css",
    "My Sql",
    "Node.js",
    "Python",
    "Django",
    "Flask",
    "langchain",
    "Postgres",
    "Docker",
    "Redis",
    "Kubernetes",
    "NGiNX",
    "Github actions",
    "Java",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "#", icon: CodeIcon, label: "Projects" },
    { href: "#", icon: PencilLine, label: "Notes" },
  ],
  contact: {
    email: "pradhumngautam0506@gmail.com",
    tel: "+91-9410619162",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/KRdkAgQ",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/FK69xeE",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/JU7nUKI",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "pradhumngautam0506@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Google Developer Student Clubs",
      href: "https://developers.google.com/community/gdsc",
      badges: [],
      location: "Remote",
      title: "Web Lead",
      logoUrl: "/logo1.png",
      start: "Jan 2023",
      end: "Nov 2023",
      description:
        "Leading web development projects within the club, including planning, execution, and delivery.Organizing workshops, hackathons, and coding sessions to help members improve their web development skills.",
    },
    {
      company: "GirlScript Summer of Code",
      badges: [],
      href: "https://gssoc.girlscript.tech/",
      location: "Remote",
      title: "Mentor",
      logoUrl: "/logo2.png",
      start: "May 2024",
      end: "Aug 2024",
      description:
        "Providing technical guidance, assisting with problem-solving and overcoming project challenges. Helping participants to understand project scope, set realistic goals, and manage timelines.Offering insights into best practices in coding and software development, sharing resources to enhance participants' skills",
    },
  ],
  education: [
    {
      school: "St Paul's Sen. Sec. School",
      href: "https://www.stpaulmathura.com/",
      degree: "High School(10th)- 95.2%",
      logoUrl: "/logo3.png",
      start: "2018",
      end: "2019",
    },
    {
      school: "St Paul's Sen. Sec. School",
      href: "https://www.stpaulmathura.com/",
      degree: "Intermediate - 84.1%",
      logoUrl: "/logo3.png",
      start: "2020",
      end: "2021",
    },
    {
      school: "Maharaja Agrasen Institute of Technology (MAIT)",
      href: "https://www.mait.ac.in/",
      degree: "Bachelor's Degree of Technology -8.8 SGPA",
      logoUrl: "/logo4.png",
      start: "2022",
      end: "2026",
    },
    
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
} as const;
