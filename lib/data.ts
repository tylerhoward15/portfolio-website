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
    location: "Orlando, FL",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: React.createElement(CgWorkAlt),
    date: "2018",
  },
  {
    title: "Software Development Engineer - Intern",
    location: "Houston, TX",
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
    title: "Website",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      tags: ["React", "Next.js", "Tailwind"],
    imageUrl: websiteImg,
  },
  {
    title: "App",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      tags: ["React", "Next.js", "Tailwind"],
    imageUrl: websiteImg,
  },
  {
    title: "Website App",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: ["React", "Next.js", "Tailwind"],
    imageUrl: websiteImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
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
