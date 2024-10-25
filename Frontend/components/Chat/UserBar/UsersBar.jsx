import React from 'react'
import "../../../public/profile.css"
import UserSearchBar from './UserSearchBar'
import UserDiv from './UserDiv'
import UserTitle from './UserTitle'
import { userList } from '../../../src/utils/usersList'

function UsersBar() {

  return (
    <div className='usersBar' id="usersBar">
        <UserTitle/>

            <div className='userSearchBar'>
                <UserSearchBar/>
            </div>
            
            <div className='allUsers' id="allUsers">
            {userList.map((element, index)=>{
              return(
                  <UserDiv key={index} img={element.img} name={element.name}/>
              );
            })}
            </div>
    </div>
  )
}

export default UsersBar