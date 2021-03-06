import React, { useState, useEffect } from 'react';
import  { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper'
import './About.scss';
import { urlFor, client } from '../../client';

// const abouts = [
//   { title: 'Full Stack P.R.E.N Web Dev', description: 'I am a passionate web developer.', imgUrl: images.about01 },
//   { title: 'Web Design', description: 'I create simple yet elegant websites.', imgUrl: images.about02  },
//   { title: 'UI/UX', description: 'I create beautiful UI/UX designs.', imgUrl: images.about03  },
//   { title: ' Database/Back-end', description: 'I create secure and encrypted databases', imgUrl: images.about04 },
//   { title: 'SEO Specialist', description: 'Gain Organic Ranking through SEO', imgUrl: images.about01 },
//   { title: 'Ethical Hacker', description: 'Cyber Security & Web Penetration Testing.', imgUrl: images.about02 }
// ];

const About = () => {

  const [abouts, setAbouts] = useState([])

  useEffect(() => {
    const query = '*[_type == "abouts"]'

    client.fetch(query)
      .then((data) => setAbouts(data))
  }, []);


  return (

    <>
      <h2 className="head-text">
        I Know that <span> Good Quality Apps</span><br /> Means <span>Good Business.</span>
      </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
          whileInView={{ opacity: 1} }
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: 'tween' }}
          className="app__profile-item"
          key={about.title + index}
          >
      <img src={urlFor(about.imgUrl)} alt={about.title} />
      <h2 className="bold-text" style={{ marginTop: 20}}>{about.title}</h2>
      <p className="p-text" style={{ marginTop: 10}}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(About, 'about');