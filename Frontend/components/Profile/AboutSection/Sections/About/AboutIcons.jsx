import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';

function AboutIcons() {
  return (
    <div className='about-socialIcons'>
        <button><FacebookIcon/></button>
        <button><XIcon/></button>
        <button><InstagramIcon/></button>
    </div>
  )
}

export default AboutIcons