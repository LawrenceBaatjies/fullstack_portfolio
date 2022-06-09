import React from 'react'
import {  FaFacebookF } from 'react-icons/fa';

import { 
        BsTwitter, 
        BsInstagram,
        BsGithub,BsWhatsapp 
        } from 'react-icons/bs';

const SocialMedia = () => {
  return (
    <div className="app__social">
     <div>
        <BsWhatsapp />
      </div>
      <div>
        <FaFacebookF />
      </div>
      <div>
        <BsInstagram />
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