/**
 * @copyright 2025 avtarsingh
 * @license Apache-2.0
 */

// components
import ProjectCard from "./ProjectCard";
import { motion } from "motion/react";

const cardVariants = {
  offscreen: {
    y: 150,
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

const works = [
  {
    imgSrc: "/images/projects/ChitChatAppImage.webp",
    title: "Report System",
    tags: ["Bcrypt","JWT","MongoDB", "Node.js", "Nodemailer", "Puppeteer"],
    projectLink: "https://report-system-phi.vercel.app/",
  },
  {
    imgSrc: "/images/projects/EducationHub.png",
    title: "E-learning App",
    tags: ["React","Tailwind", "Node.js", "Nodemailer", "MongoDb", "JWT"],
    projectLink: "https://mentor-menti-uint.vercel.app/",
  }
  
  
];

function Work() {
  return (
    <section
      id='work'
      className='section'
    >
      <div className='container'>
        <h2 className='headline-2 mb-8'>My portfolio highlights</h2>

        <div className='grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]' >
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <motion.div key={key} initial='offscreen'
            whileInView='onscreen'
            viewport={{ once: true, amount: 0 }}
            variants={cardVariants}>
              <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              
            />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;
