import React from 'react';
import { motion } from 'framer-motion';

import  { images } from '../../constants';
import './Header.scss';

const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0,1]}}
        transition={{ duration: 3.20 }}
        className="app__header-info"
      >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span>👋</span>
          <div style={{marginLeft: 20} }>
              <p className="p-text">Hello, I Am</p>
              <h1 className="head-text">Lawrence</h1>
          </div>
        </div>
        <div className="tag-cmp app__flex">
        <h4 className="p-text">Full Stack Web Developer &</h4>

        <h4 className="p-text">   Cyber Security Enthusiast</h4>
        </div>
      </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0,1]}}
        transition={{ duration: 2.50, delayChildren: 0.5}}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile_bg"/>
      </motion.div>

      <motion.div>

      </motion.div>
    </div>
  )
}

export default Header;