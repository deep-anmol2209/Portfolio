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
    certificateLink: "https://res.cloudinary.com/anmol22/image/upload/v1753546731/fsd_yts7pe.jpg",
    issuedDate: "July 2025",
  },

  {
    imgSrc: "/images/certificates/DCPA.jpg",
    title: "Diploma in Computer-Application & Programming",
    issuedBy: "ITDA Calc",
    certificateLink: "https://res.cloudinary.com/anmol22/image/upload/v1753546796/DCPA_ol26i0.jpg",
    issuedDate: "FEB 2024",
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
