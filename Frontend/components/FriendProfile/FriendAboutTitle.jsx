import React from 'react'

function FriendAboutTitle() {

    const friend = JSON.parse(localStorage.getItem("broughtUsername"));

  return (
    <div className='about-title'>
        About {friend.name}
    </div>
  )
}

export default FriendAboutTitle