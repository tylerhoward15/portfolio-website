import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import websiteImg from "@/public/images.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
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
    icon: React.createElement(LuGraduationCap),
    date: "Starting 2016",
  },
  {
    title: "Software Development Engineer - Intern",
    location: "Seattle, WA",
    description:
      "Android development for Alexa Automotive. Designed/implemented an Android testing suite that simulates driving any route.",
    icon: React.createElement(CgWorkAlt),
    date: "Summer 2018",
  },
  {
    title: "Software Development Engineer - Intern",
    location: "New York, NY",
    description:
      "Architecture scalability research/prototyping for high-scale, real-time databse caching solutions within Amazon Advertising. Created AWS fargate prototyping environment to stress test a throughput of 100,000 TPS.",
    icon: React.createElement(CgWorkAlt),
    date: "Summer 2019",
  },
  {
    title: "Software Development Engineer - Full Time",
    location: "Austin, TX",
    description:
      "Full stack engineering solutions for Amazon Global Expansions. Led launch of Amazon services in new markets that convert around 1 million transactions per month of Amazon purchases to accounting entries in new countries (e.g. www.amazon.pl, www.amazon.eg, and more).",
    icon: React.createElement(CgWorkAlt),
    date: "2020-2022",
  },
  {
    title: "Freelance Web Dev and Digital Services",
    location: "Los Angeles",
    description:
      "Providing miscellaneous digital services for local entertainment industry professionals. Deveoloping, hosting, and maintaining websites portfolios and providing professional photo/video services for headshots and audition taping.",
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
    imageUrl: websiteImg,
  },
  {
    title: "On Premises Server Hosting",
    description:
      "Built and programmed a dedicated server for home that serves many professional and recreational uses. Utilizing NGINX reverse proxy and docke for personal and client websites.",
      tags: ["Docker", "NGINX", "UnRaid", "WireGuard"],
    imageUrl: websiteImg,
  },
  {
    title: "Portfolio Websites",
    description:
      "I've been building modern and responsive portfolio websites for artists and professionals, such as the one you're reading this on! The goal is to provide a refined experience with unique experiences built on my engineering background. You can see an example actress client site clicking here.",
    tags: ["React", "Next.js", "Tailwind", "DaisyUI", "Vercel", "PostgreSQL"],
    imageUrl: websiteImg,
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
