"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 0.4);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Born and raised in a small town in Kentucky, I grew up loving things
        that aren't very common for the typical self-proclaimed nerd. I have
        loved technology my whole life, but outside of that, sports have also
        always been a pillar of my hobbies and interests. In high school, I
        played baseball, basketball, and golf; I still jump at the chance to
        play today! Once upon a time, I was a single-digit handicap golfer, so
        I’m always looking for a "business meeting" if you know what I mean!
      </p>
      <br />
      <p className="mb-3">
        Beyond sports and the outdoors, I am also a huge motorsports fan. I have
        been deeply obsessed with cars my whole life. From working on cars,
        going to track days, or participating in racing sim competitions, I
        adore motorsports. I am one of the select few masochists who drives a
        manual car in Los Angeles, and I fully deserve any judgment I get for
        that. &#128517;
      </p>
      <br />
      <p className="mb-3">
        However, nothing beats my love for technology. From a very young age,
        video games and smartphones were the first things that truly captivated
        my curiosity and wonder. The intense motivation I have for my tech
        career can be directly traced to the excitement of moments such as
        seeing the first iPhone be released. This intrinsic fascination with all
        things "tech" continues to push me to be a better engineer every day.
        So, if you are looking for an engineer <strong>AND</strong> a 4th for
        your golf outings...I would be an unreasonably great fit.
      </p>
    </motion.section>
  );
}
