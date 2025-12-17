/**
 * @copyright 2025 avtarsingh
 * @license Apache-2.0
 */

import React from "react";
import CertificateCard from "./CertificateCard";
import { motion } from "motion/react";

const cardVariants = {
  offscreen: {
    y: 150,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
    },
  },
};

const certificates = [
  {
    imgSrc: "/images/certificates/fsd.jpg",
    title: "Full Stack Development with AI [MERN]",
    issuedBy: "AIMERZ",
    certificateLink: "https://res.cloudinary.com/anmol22/image/upload/v1765130173/user_photos/4275323-Full_Stack_Development_With_AI_-_SU_LAJ-Anmol_Deep_page-0001_w4b7pw.jpg",
    issuedDate: "July 2025",
  },

  {
    imgSrc: "/images/certificates/DCPA.jpg",
    title: "Diploma in Computer-Application & Programming",
    issuedBy: "ITDA Calc",
    certificateLink: "https://res.cloudinary.com/anmol22/image/upload/v1765957848/IMG_20250628_201946_1_tqxxg9.jpg",
    issuedDate: "FEB 2024",
  },
  
  {
    imgSrc: "/images/certificates/Anmol_Intern.jpg",
    title: "Internship completion certificate",
    issuedBy: "MEPL",
    certificateLink: "https://res.cloudinary.com/anmol22/image/upload/v1765956917/ANMOL_SINGH_-_Certificate.pdf_page-0001_bev8nu.jpg",
    issuedDate: "June 2025",
  }
  
];

function Certificate() {
  return (
    <section
      id='certificate'
      className='section'
    >
      <div className='container'>
        <h2 className='headline-2 mb-8'>Certificates</h2>

        <div className='grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]'>
          {certificates.map(({ imgSrc, title, issuedBy, certificateLink, issuedDate }, key) => (
            <motion.div
              key={key}
              initial='offscreen'
              whileInView='onscreen'
              viewport={{ once: true, amount: 0 }}
              variants={cardVariants}
            >
              <CertificateCard
                key={key}
                imgSrc={imgSrc}
                title={title}
                issuedBy={issuedBy}
                issuedDate={issuedDate}
                certificateLink={certificateLink}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificate;
