import React from 'react'
import FriendAboutTitle from './FriendAboutTitle'
import AboutDesc from '../Profile/AboutSection/Sections/About/AboutDesc'
import AboutIcons from '../Profile/AboutSection/Sections/About/AboutIcons'
import FriendAboutInfo from './FriendAboutInfo'

function FriendAbout() {
  return (
    <div className='about-container'>
        <FriendAboutTitle/>
        <AboutDesc/>
        <AboutIcons/>
        <FriendAboutInfo/>
    </div>
  )
}

export default FriendAbout