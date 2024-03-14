import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaDribbble} from 'react-icons/fa'


const HeaderSocila = () => {
  return (
    <div className='header_socials'>
      <a href="https://www.linkedin.com/in/mahmoud-elkhour-998300286/" target='_blank'><BsLinkedin/></a>
      <a href="https://github.com/ELKHOUR" target='_blank'><FaGithub/></a>
      <a href="https://dribbble.com" target='_blank'><FaDribbble/></a>
    </div>
  )
}

export default HeaderSocila
