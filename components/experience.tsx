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
              <h3 className="font-semibold">{item.company}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
              <Tags tags={item.tags} />
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  )
}
