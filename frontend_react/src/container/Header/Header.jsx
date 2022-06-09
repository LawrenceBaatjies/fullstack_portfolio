import React from 'react';
import { motion } from 'framer-motion'; 
import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';

const scaleVariants = { 
  whileInView: {
    scale: [0,1],
    opacity: [0,1],
    transition: {
      duration : 1,
      ease: 'easeOut'
    }
  }
}
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
          <span>🖖</span>
          <div style={{marginLeft: 20} }>
              <h1 className="p-text ">Hello, I Am</h1>
              <h1 className="head-text">Lawrence</h1>
          </div>
        </div>
        <div className="tag-cmp app__flex">
        <h2 className="p-text">Full Stack Web Developer </h2>
        <h3 className="p-text">SEO Specialist &...</h3>
        <h4 className="p-text">Cyber Security Enthusiast</h4>
        </div>
      </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0,1]}}
        transition={{ duration: 2.50, delayChildren: 0.5}}
        className="app__header-img"
      >
        <img src={ images.profile }  alt="profile_bg" />
        <motion.img 
          whileInView={{ scale: [0.1,1]}}
        transition={{ duration: 1.50, ease: 'easeOut'}}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
        />
      </motion.div>

         <motion.div
          variant={scaleVariants}
          whileInView={scaleVariants.whileInView}
          className="app__header-circles"

          >
            {[images.react, images.redux, images.sass].map((circle, index) => (
              <div className="circle-cmp app__flex" key={`circle-${index}`}>
                <img src={circle}  alt="circle"/>

              </div>
            ))}
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home');