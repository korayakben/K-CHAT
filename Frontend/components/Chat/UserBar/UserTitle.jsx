import React from 'react'
import { userList } from '../../../src/utils/usersList'

function UserTitle() {

  return (
    <div>
        <div className='usersBar-title'>Chats</div>
        <div className='contactCount'>{Object.keys(userList).length} Contacts</div>
    </div>
  )
}

export default UserTitle