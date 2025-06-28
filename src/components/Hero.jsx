/**
 * @copyright 2025 avtarsingh
 * @license Apache-2.0
 */

// Components

import { ButtonPrimary, ButtonOutline } from "./Button";
import { motion } from "motion/react";

function Hero() {
  return (
    <section
      id='home'
      className='pt-28 lg:pt-30'
    >
      <div className='container relative lg:grid lg:grid-cols-2 items-center lg:gap-10'>
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <div className=' flex items-center gap-3'>
            <figure className='img-box w-9 h-9 rounded-lg'>
              <img
                src='/images/logo.svg'
                width={40}
                height={40}
                alt='Avtar Singh Portrait'
                className='img-cover'
              />
            </figure>

            <div className='flicker-1 flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide'>
              <span className='realtive w-2 h-2 rounded-full bg-emerald-400'></span>
              Available for work
            </div>
          </div>

          <h2 className='headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10'>
            Building Scalable Modern Website for the Future
          </h2>

          <div className='flex items-center gap-3'>
            <ButtonPrimary
              label='Download CV'
              href='/AnmolSingh_Resume.pdf'
              className='w-full jello-horizontal download-btn'
              imgSrc='/images/file_download.svg'
              download='AvtarSingh_Resume.pdf'
            />

            <ButtonOutline
              href='#footer'
              label='Scroll down'
              imgSrc='/images/arrow_downward.svg'
            />
          </div>
        </motion.div>

        <motion.div
          className='hidden lg:block relative'
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <figure className='absolute w-full ml-auto inset-shadow-md inset-shadow-gray-950 rounded-[20px] overflow-hidden h-full'></figure>
          <img
            src='/images/HeroImage.png'
            alt='Avtar Singh Profile Image'
            className='rounded-[20px] w-full h-full '
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
