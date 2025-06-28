/**
 * @copyright 2025 avtarsingh
 * @license Apache-2.0
 */

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



const aboutItems = [
  {
    label: "Project done",
    number: 2,
  },
  {
    label: "Years of experience",
    number: 1,
  },
];

function About() {
  return (
    <motion.section
      id='about'
      className='section'
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0 }}
      variants={cardVariants}
    >
      <div className='container' >
        <div className='bg-zinc-800/50 p-7 rounded-2xl md:p-12'>
          <p className='text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]'>
          Passionate Web Developer skilled in JavaScript, React.js, Node.js, Express.js, and MongoDB. Experienced in building scalable apps,
          REST APIs, and clean UI/UX.
          </p>

          <div className='flex flex-wrap w-[100%] md:items-center gap-4 md:gap-7 md:flex-row'>
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className='flex items-center md:mb-2'>
                  <span className='text-2xl font-semibold md:text-4xl'>{number}</span>
                  <span className='text-sky-400 font-semibold md:text-3xl'>+</span>
                </div>

                <p className='text-sm text-zinc-400'>{label}</p>
              </div>
            ))}

            <img
              src='/images/ASlogo.png'
              alt='Logo'
              width={120}
              height={120}
              className='ml-auto border-5 border-blue-500 max-[460px]:m-auto w-[80px] h-[80px] md:w-[120px] md:h-[120px] rounded-full '
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}



export default About;
