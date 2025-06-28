/**
 * @copyright 2025 avtarsingh
 * @license Apache-2.0
 */

// Components
import Navbar from "./Navbar";

// Node_Modules
import { useState } from "react";
import { motion } from "motion/react";

import React from "react";

function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className='fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinz-900/0 p-8 '>
      <motion.div className='nav-menu ' initial={{ y: -300, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{duration: 0.8}}>
        <h1>
          <a
            href='/'
            className='logo'
          >
            {/* <img
              src='/images/ASLogo.png'
              width={60}
              height={60}
              alt='Avtar Singh'
              className="rounded-full"
            /> */}
            <h2 className='nav-text-headline max-w-[15ch] sm:max-w-[20ch] lg:max-w-[20ch] mt-5 mb-8 lg:mb-10 text-sm'>
            ANMOL DEEP SINGH
          </h2>
          </a>
        </h1>

        <div className='nav-menu-option' >
          <button
            className='menu-btn'
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <span>{navOpen ? <img src='/images/close.svg'/> : <img src='/images/menu.svg'/>}</span>
          </button>

          <Navbar navOpen={navOpen} />
        </div>

        <a
          href='#contact'
          className='btn btn-secondary '
        >
          Contact Me
        </a>
      </motion.div>
    </header>
  );
}

export default Header;
