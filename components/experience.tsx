'use client'

import React from 'react'
import SectionHeading from './section-heading'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { experiencesData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'
import { useTheme } from '@/context/theme-context'
import Tags from './tags'

export default function Experience() {
  const { ref } = useSectionInView('Experience', 0.3)
  const { theme } = useTheme()

  return (
    <section
      id="experience"
      ref={ref}
      className="scroll-mt-28 mb-28 sm:mb-40 text-center max-w-[60rem]"
    >
      <SectionHeading>My experience</SectionHeading>
      <p className="mb-3">
        I worked very hard to receive a Presidential Scholarship to pursue a
        degree in computer science at Temple University in Philadelphia, PA,
        which covered all of my tuition. At Temple, I diligently worked to grow
        my talents as a software engineer. In my sophomore year, I was offered
        the position to be a software engineer intern at Amazon's headquarters
        in Seattle. After another internship the next summer in New York City
        while still in school, I joined Amazon full-time in 2020 in Austin, TX.
      </p>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === 'light' ? '#f3f4f6' : 'rgba(255, 255, 255, 0.05)',
                boxShadow: 'none',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                textAlign: 'left',
                padding: '1.3rem 2rem',
              }}
              contentArrowStyle={{
                borderRight:
                  theme === 'light'
                    ? '0.4rem solid #9ca3af'
                    : '0.4rem solid rgba(255, 255, 255, 0.5)',
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === 'light' ? 'white' : 'rgba(255, 255, 255, 0.15)',
                fontSize: '1.5rem',
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
              <Tags tags={item.tags} />
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>

      <h3 className="font-semibold mt-10">Additional Context</h3>
      <p className="mb-3 mt-3">
        In late 2021, a very close loved one who lived in Los Angeles was
        diagnosed with late-stage cancer. As return-to-office mandates began,
        and the burden of time approached, I decided to reduce my
        responsibilities in my career and move to Los Angeles to help take care
        of and spend time with my family.
      </p>
      <p className="mb-3">
        While in Los Angeles, I have provided part-time services to actors
        needing help with audition taping and their online portfolio. I have
        been able to deliver professional assistance to a network of local
        friends and acquaintances in the entertainment industry. My knowledge in
        tech allowed me to work part-time designing websites, taking headshots,
        and editing while still embracing extremely valuable time with family.
      </p>
      <p className="mb-3">
        I am now navigating the process of reentering the tech world and I am
        extremely excited to pursue my ambitions again. The same drive that
        helped me succeed in my time at college and landing my first dream job
        is still with me and as strong as ever. I am so eager to see what
        oppurtunities and challenges I am presented with so that I can continue
        to grow and figure out the next steps in my career to achieve all the
        things I have set out to do.
      </p>
    </section>
  )
}
