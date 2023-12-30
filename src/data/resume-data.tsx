import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Ashkan Yadegari",
  initials: "AY",
  location: "Shanghai, China",
  locationLink: "https://www.google.com/maps/place/shanghai",
  about:
    "Full Stack Engineer with a focus on building products people actually need.",
  summary:
    "Multi-lingual (both in linguistic and engineering 🚀) full stack developer with a background in programming, problem solving, and business, I help non-technical founders navigate the digital transformation of their businesses. My expertise in product development and project management has allowed me to successfully bring numerous ideas to life, and I am dedicated to helping others do the same. Currently I work in TypeScript, NextJS, TailwindCSS, Ruby on Rails, Supabase, WeChat Mini Programs",
  avatarUrl: "https://avatars.githubusercontent.com/u/69116400?v=4",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    // email: "bartosz.jarocki@hey.com",
    tel: "+86 138 1843 2014",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/ashkanyadegari",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ashkanyadegari/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Rotterdam University of Applied Sciences",
      degree: "Bachelor's Degree in Business Administration",
      start: "2007",
      end: "2012",
    },
  ],
  work: [
    {
      company: "Brainchild",
      link: "https://brainchild.digital",
      badges: ["Co-Founder"],
      title: "Co-Founder/Engineer",
      logo: ParabolLogo,
      start: "2021",
      end: "Present",
      description:
        "Brainchild (formerly Codesmiths) is a digital agency that helps businesses turn imaginative concepts into tangible outcomes. We specialize in working with startups and established brands to help them bring their vision to life, whether it's through building an MVP, a full-scale project, or a creative marketing campaign.",
    },
    {
      company: "Relay Club",
      link: "https://boostbot.ai",
      badges: ["Consulting"],
      title: "CTO",
      logo: ClevertechLogo,
      start: "2022",
      end: "2023",
      description:
        "Built an influencer marketing platform using Ruby on Rails, NextJS and WeChat Mini Program to offer a cross platform and cross market influencer marketing experience.",
    },
    {
      company: "Le Wagon",
      link: "https://lewagon.com",
      badges: ["Consulting"],
      title: "Lead Instructor",
      logo: ClevertechLogo,
      start: "2021",
      end: "present",
      description:
        "Teach core programming concepts and new programming languages to Le Wagon's newest batches. Provided advanced workshops for Alumni's to upskill themselves",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js/React Native",
    "Node.js",
    "GraphQL",
    "Vue/NuxtJS",
    "Ruby on Rails",
    "WeChat Mini Programs",
  ],
  projects: [
    {
      title: "PadelNow",
      techStack: ["Side Project", "Ruby On Rails", "WeChat Mini Program"],
      logo: JarockiMeLogo,
      description:
        "A platform to allow padel players in China discover courts and hold tournaments in their own communities. 1300+ active users",
    },
    {
      title: "Method Online",
      techStack: [
        "Client Project",
        "TypeScript",
        "Next.js",
        "Ruby On Rails",
        "Stripe",
        "Video on Demand",
      ],
      description:
        "A brazilian jiu jutsu learning platform with video courses and subscriptions",
      logo: MonitoLogo,
      link: {
        label: "method.online",
        href: "https://method.online",
      },
    },
    {
      title: "AL Leone",
      techStack: ["Client Project", "WeChat Mini Program", "Shopify"],
      description:
        "First attempt to integration Shopify to the Chinese WeChat ecosystem to allow consumers within China and outside of China to order from the brand.",
      logo: JarockiMeLogo,
      link: {
        label: "alleone.shop",
        href: "https://alleone.shop/",
      },
    },
    {
      title: "Maxxelli Portal",
      techStack: ["Client Project", "Next.js", "Ruby on Rails"],
      description:
        "Turn a traditional process into a modern day web portal for clients to manage their relocation process.",
      logo: Minimal,
    },
    {
      title: "Bremont Luxury Watches",
      techStack: ["Client Project", "WeChat Mini Program", "Node.JS"],
      description:
        "A WeChat Mini Program to allow western brand bremont to enter the Chinese market.",
      logo: Minimal,
    },
  ],
} as const;
