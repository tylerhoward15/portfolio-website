"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import Typewriter from "typewriter-effect";
import { Rock_Salt, VT323, Comic_Neue, Dosis } from "next/font/google";
import { NextFont } from "next/dist/compiled/@next/font";

const rock_salt = Rock_Salt({
  weight: ["400"],
  subsets: ["latin"],
});

const dosis = Dosis({
  weight: ["400"],
  subsets: ["latin"],
});

const vt323 = VT323({
  weight: ["400"],
  subsets: ["latin"],
});

const comic_neue = Comic_Neue({
  weight: ["400"],
  subsets: ["latin"],
});

function fontify(str: string, font: NextFont): string {
  return `<span style="font-family:${font.style.fontFamily}">${str}</span>`;
}

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem] -mt-10"
    >
      <h1 className="mb-10 mt-4 px-4 text-3xl font-bold !leading-[1.5] sm:text-6xl text-center italic min-h-[50px] sm:min-h-[100px]">
        <Typewriter
          options={{
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString(fontify("Tyler Howard.", rock_salt))
              .pauseFor(1000)
              .deleteAll()
              .typeString(fontify("Software Engineer.", vt323))
              .pauseFor(1000)
              .deleteAll()
              .typeString(fontify("Web Developer.", dosis))
              .pauseFor(1000)
              .deleteAll()
              .changeDelay(40)
              .typeString(fontify("Narcissist.", comic_neue))
              .changeDelay(60)
              .pauseFor(1000)
              .typeString(fontify("..jk lol", comic_neue))
              .pauseFor(100)
              .deleteAll()
              .start();
          }}
        />
      </h1>
      <div className="flex flex-col items-center justify-center drop-shadow-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.2,
          }}
          className="sm:grid sm:grid-cols-2 gap-10"
        >
          <div className="avatar">
            <div className="rounded-3xl border-double border border-indigo-500 mb-10 drop-shadow-2xl">
              <Image
                src="/headshot2.jpg"
                alt="Tyler portrait"
                width="300"
                height="300"
                quality="95"
                priority={true}
              />
            </div>
          </div>
          <motion.h2
            className="flex flex-col justify-center items-center text-xl !leading-[1.5] sm:text-3xl sm:text-center mb-10"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div>
              I'm a <span className="font-extrabold">software engineer</span>{" "}
              currently looking for a position where I can grow as an engineer
              while providing value to a team of great people.
            </div>
          </motion.h2>
        </motion.div>
      </div>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/CV.pdf"
          download
        >
          Download Resume{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <div className="grid gap-2 grid-cols-2">
          <a
            className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 "
            href="https://www.linkedin.com/in/tyler-howard-892502a5"
            target="_blank"
          >
            <BsLinkedin />
          </a>

          <a
            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://github.com/tyler98ky"
            target="_blank"
          >
            <FaGithubSquare />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
