/**
 * @copyright 2025 avtarsingh
 * @license Apache-2.0
 */

// components
import SkillCard from "./SkillCard";
import { motion } from "motion/react";

const cardVariants = {
  offscreen: {
    y: 300,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity:1,
    transition: {
      
      duration: 1.5,
    },
  },
};

const skillItem = [
  
  {
    imgSrc: '/images/css3.svg',
    label: 'CSS',
    desc: 'User Interface'
  },
  {
    imgSrc: '/images/javascript.svg',
    label: 'JavaScript',
    desc: 'Interaction'
  },
  {
    imgSrc: '/images/nodejs.svg',
    label: 'NodeJS',
    desc: 'Web Server'
  },
  {
    imgSrc: '/images/expressjs.svg',
    label: 'ExpressJS',
    desc: 'Node Framework'
  },
  {
    imgSrc: '/images/mongodb.svg',
    label: 'MongoDB',
    desc: 'Database'
  },
  {
    imgSrc: '/images/react.svg',
    label: 'React',
    desc: 'Framework'
  },
  {
    imgSrc: '/images/tailwindcss.svg',
    label: 'TailwindCSS',
    desc: 'User Interface'
  },
];

function Skill() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2">
          Essential Tools I use
        </h2>

        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
        Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
        </p>

        <motion.div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]" initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0 }}
      variants={cardVariants}>
          {
            skillItem.map(({imgSrc, label, desc}, key) => (
              <SkillCard
                key={key}
                imgSrc={imgSrc}
                label={label}
                desc={desc}
              />
            ))
          }
        </motion.div>
      </div>
    </section>
  )
}

export default Skill