import React, { useState, useEffect } from 'react';
import  { motion } from 'framer-motion';

import './About.scss';

const about = [
  { title: 'Full Stack P.R.E.N Web Dev', description: 'I am a passionate web developer.', imgUrl: '' },
  { title: 'Web Design', description: 'I create simple yet elegant websites.', imgUrl: '' },
  { title: 'UI/UX', description: 'I create beautiful UI/UX designs.', imgUrl: '' },
  { title: ' Database/Back-end', description: 'I create secure and encrypted databases', imgUrl: '' },
  { title: 'Ethical Hacker', description: 'Cyber Security & Web Penetration Tester.', imgUrl: '' }
];
const About = () => {
  return (
    <>

      <h2 classNAme="head-text">
        I Know that...
        <span>Good Designs</span>
        <br />
        Means...
        <span>Good Business</span>
      </h2>
      <div className="app__profiles">

      </div>
    </>
  )
}

export default About;