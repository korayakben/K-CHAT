import React from 'react'
import CoverPhoto from './CovernBoard/CoverPhoto'
import ProfileBoard from './CovernBoard/ProfileBoard'

function CovernBoard({name, username}) {
  return (
    <div className='photo-container'>
          <CoverPhoto/>
          <ProfileBoard name={name} username={username}/>
    </div>
  )
}

export default CovernBoard