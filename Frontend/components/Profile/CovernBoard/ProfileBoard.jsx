import React from 'react'
import ProfilePhoto from './ProfilePhoto'
import AddFriendButton from './AddFriendButton'

function ProfileBoard() {
  return (
    <div className='profileBoard-container'>
        <div className='profileBoard'>
        <ProfilePhoto/>
        <div className='credentials-container'>
        <div className='nicks-container'>
          <span id="username">Nina Dubois</span>
          <span id="nickname">@nina_dubois</span>
        </div>

        <div className='contacts-container'>
            <span id="contact-count">287 contacts</span>
            <span id="contactPoint" style={{opacity: "0.5"}}>•</span>
            <span id="mutual-count">8 mutual</span>
        </div>
        </div>
            <AddFriendButton/>
        </div>
    </div>
  )
}

export default ProfileBoard