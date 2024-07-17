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
      title: "Medium",
      href: "https://medium-self-beta.vercel.app/",
      dates: "Blogging website",
      active: true,
      description:
        "Medium is a blogging website which allows user to do CRUD operations on their blogs. Hono.js library of wrangler is used here for writing backend server which is hosted on cloudflare workers, connection-pooling is used for maintaining postgress requests.",
      technologies: [
        "Typescript",
        "React.js",
        "Hono.js",
        "Prisma",
        "PostgreSQL",
        "Cloudflare",
        "Custom hooks",
        "TailwindCSS",
        "ShadcnUI",
    
      ],
      links: [
        {
          type: "Website",
          href: "https://medium-self-beta.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/pradhumngautam/medium",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/medium.jpeg",
      video: "",
    },
    {
      title: "Portfolio",
      href: "https://pradhumngautam.vercel.app/",
      dates: "Pradhumn gautam | portfolio",
      active: true,
      description:
        "The goal of this project is to design and develop a personal portfolio website that effectively highlights my skills, projects, and professional experience.",
      technologies: [
        "Next.js",
        "Typescript",
        "Framer motion",
        "Javascript",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://pradhumngautam.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/pradhumngautam/pradhumn-portfolio",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/portfolio.jpeg",
      video: "",
    },
    {
      title: "Swift Spend",
      href: "https://paytm-gules.vercel.app/",
      dates: "Banking website",
      active: true,
      description:
        "SWIFT SPEND is a banking app which enables user to transfer money to other users. Backend involves RESTful APIs and custom token-based authentication for secure access control including the password hashing through bCrypt, sessions are used for making transactions for controlling multiple transfer requests on same account.",
      technologies: [
        "Javascript",
        "Node.js",
        "Express.js",
        "Mongoose",
        "MongoDB",
        "JWT",
        "bCrypt",
      ],
      links: [
        {
          type: "Website",
          href: "https://paytm-gules.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/pradhumngautam/paytm",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/swift.jpeg",
      video: "",
    },
    {
      title: "Eventie",
      href: "https://eventie-uv1b-5uk3fta6w-pradhumn-gautams-projects.vercel.app/",
      dates: "Event Management",
      active: true,
      description:
        "Streamlining event planning with comprehensive platform.Effortless event management with creating, ticketing and managing events.",
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
          href: "https://eventie-uv1b-5uk3fta6w-pradhumn-gautams-projects.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/eventie.png",
      video:
        "",
    },
  ],
} as const;
