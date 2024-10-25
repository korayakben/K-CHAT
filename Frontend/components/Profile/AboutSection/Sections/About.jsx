import React from 'react'
import AboutTitle from './About/AboutTitle';
import AboutDesc from './About/AboutDesc';
import AboutIcons from './About/AboutIcons';
import AboutInfo from './About/AboutInfo';

function About() {
  return (
    <div className='about-container'>
        <AboutTitle/>
        <AboutDesc/>
        <AboutIcons/>
        <AboutInfo/>
    </div>
  )
}

export default About