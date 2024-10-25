import React from 'react'
import DrawerAppBar from '../../components/Chat/Navbar/Navbar'
import CovernBoard from '../../components/Profile/CovernBoard'
import AboutBar from '../../components/Profile/AboutSection/AboutBar'

function Profile() {
  return (
    <div className='profile-container'>
          <DrawerAppBar/>        
          <CovernBoard/>
          <AboutBar/>
    </div>
  )
}

export default Profile