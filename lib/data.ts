import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import nginxLogoImg from "@/public/Nginx-Logo.png";
import carSuggImg from "@/public/car-suggestorator.png";
import portfolioImg from "@/public/portfolio.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },

  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "B.S Computer Science - 3.7 GPA",
    location: "Philadelphia, PA",
    description:
      "Recipient of Recipient of President’s Scholarship (Full Tuition + Stipends). Member of Temple’s Honors College.",
    tags: ["AI", "Mobile Development", "Operating Systems", "React Native"],
    icon: React.createElement(LuGraduationCap),
    date: "Starting 2016",
  },
  {
    title: "Software Development Engineer - Intern",
    location: "Seattle, WA",
    description:
      "Android development for Alexa Automotive. Designed/implemented an Android testing suite that simulates driving any route.",
    tags: ["Android", "Java", "bash", "git", "JIRA", "Python"],
    icon: React.createElement(CgWorkAlt),
    date: "Summer 2018",
  },
  {
    title: "Software Development Engineer - Intern",
    location: "New York, NY",
    description:
      "Architecture scalability research/prototyping for high-scale, real-time databse caching solutions within Amazon Advertising. Created AWS fargate prototyping environment to stress test a throughput of 100,000 TPS.",
    tags: ["ApacheDB", "Redis", "ECS Fargate", "CloudFormation"],
    icon: React.createElement(CgWorkAlt),
    date: "Summer 2019",
  },
  {
    title: "Software Development Engineer - Full Time",
    location: "Austin, TX",
    description:
      "Full stack engineering solutions for Amazon Global Expansions. Led launch of Amazon services in new markets that convert around 1 million transactions per month of Amazon purchases to accounting entries in new countries (e.g. www.amazon.pl, www.amazon.eg, and more).",
    tags: ["Javascript", "React.js", "Node.js", "Angular", "Java", "ElasticSearch", ],
    icon: React.createElement(CgWorkAlt),
    date: "2020-2022",
  },
  {
    title: "Freelance Web Dev and Digital Services",
    location: "Los Angeles",
    description:
      "Providing miscellaneous digital services for local entertainment industry professionals. Deveoloping, hosting, and maintaining websites portfolios and providing professional photo/video services for headshots and audition taping.",
    tags: ["React", "Next.js", "Tailwind", "Vercel", "PostgreSQL", "Vite"],
    icon: React.createElement(CgWorkAlt),
    date: "2022-Current",
  }
] as const;

export const projectsData = [
  {
    title: "Car Suggest-O-Rator",
    description:
      "Web app that takes a user's prompt describing any and everything they want from their next car, and returns an AI generated suggestion and justification. Powered by the new ChatGPT Functions API and Google Cloud for image retrieval.",
    tags: ["React", "Tailwind", "ChatGPT", "GCP"],
    imageUrl: carSuggImg,
    link: "https://car-suggestorator.vercel.app/"
  },
  {
    title: "On Premises Server Hosting",
    description:
      "Built and programmed a dedicated server for home that serves many professional and recreational uses. Utilizing NGINX reverse proxy and docker for personal and client websites.",
    tags: ["Docker", "NGINX", "UnRaid", "WireGuard"],
    imageUrl: nginxLogoImg,
    link: "https://www.nginx.com/"
  },
  {
    title: "Portfolio Websites",
    description:
      "I've been building modern and responsive portfolio websites for artists and professionals, such as the one you're reading this on! The goal is to provide a refined experience with unique experiences built on my engineering background. You can see an example actress client site clicking here.",
    tags: ["React", "Next.js", "Tailwind", "DaisyUI", "Vercel", "PostgreSQL"],
    imageUrl: portfolioImg,
    link: "https://tyler-howard.vercel.app/"
  },
] as const;

export const skillsData = [
  "Java",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "NGINX",
  "Docker",
  "Git",
  "Tailwind",
  "Prisma",
  "PostgreSQL",
  "Python",
  "AWS",
  "Android",
  "Scrapy",
  "Vercel"
] as const;
