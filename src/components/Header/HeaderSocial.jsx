import React from 'react'
import {BsLinkedin} from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import {FaGoogle} from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"> <BsLinkedin /></a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer"> <BsGithub /></a>
        <a href="https://google.com" target="_blank" rel="noopener noreferrer"> <FaGoogle /></a>

       
    </div>
  )
}

export default HeaderSocials