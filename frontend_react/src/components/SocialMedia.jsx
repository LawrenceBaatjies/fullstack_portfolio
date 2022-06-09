import React from 'react'
import {  FaFacebookF } from 'react-icons/fa';

import { 
        BsTwitter, 
        BsGithub,BsWhatsapp, 
        BsStackOverflow, 
        BsMedium,
        BsLinkedin,
        BsSlack
        } from 'react-icons/bs';

const SocialMedia = () => {
  return (
    <div className="app__social">
     <div>
        <BsWhatsapp />
      </div>
      <div>
        <BsSlack/>
      </div>
      <div>
        <FaFacebookF />
      </div>
      <div>
        <BsLinkedin   />
      </div>
      <div>
        <BsStackOverflow />
      </div>
      <div>
        <BsMedium />
      </div>
      <div>
        <BsTwitter />
      </div>
      <div>
        <BsGithub />
      </div>
    </div>
  )
}

export default SocialMedia;