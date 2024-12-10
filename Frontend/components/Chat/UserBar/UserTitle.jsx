import React from 'react'

function UserTitle() {

  return (
    <div>
        <div className='usersBar-title'>Chats</div>
        <div className='contactCount'>{localStorage.getItem("contactNumber")} Contacts</div>
    </div>
  )
}

export default UserTitle