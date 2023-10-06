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
    title: "Pursue B.S Computer Science",
    location: "Philadelphia, PA",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: React.createElement(LuGraduationCap),
    date: "2016",
  },
  {
    title: "Software Development Engineer - Intern",
    location: "Seattle, WA",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: React.createElement(CgWorkAlt),
    date: "2018",
  },
  {
    title: "Software Development Engineer - Intern",
    location: "New York, NY",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: React.createElement(CgWorkAlt),
    date: "2019",
  },
  {
    title: "Software Development Engineer",
    location: "Austin, TX",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: React.createElement(CgWorkAlt),
    date: "2020-2022",
  },
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
