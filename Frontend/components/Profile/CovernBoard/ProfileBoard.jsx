import React, { useEffect } from 'react'
import ProfilePhoto from './ProfilePhoto'
import AddFriendButton from './AddFriendButton'

function ProfileBoard({ name, username, contactNumber }) {
  return (
    <div className='profileBoard-container'>
        <div className='profileBoard'>
        <ProfilePhoto/>
        <div className='credentials-container'>
        <div className='nicks-container'>
          <span id="username">{name}</span>
          <span id="nickname">@{username}</span>
        </div>

        <div className='contacts-container'>
            <span id="contact-count">{contactNumber} contacts</span>
            <span id="contactPoint" style={{opacity: "0.5"}}>•</span>
            <span id="mutual-count">8 mutual</span>
        </div>
        </div >
        <div className='addFriend-container' style={{display: username === localStorage.getItem("username") ? "none" : "flex"}}>
            <AddFriendButton/>
        </div>
        </div>
    </div>
  )
}

export default ProfileBoard