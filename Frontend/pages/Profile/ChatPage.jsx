import React, { useEffect } from 'react'
import "../../public/profile.css"
import PrimarySearchAppBar from "../../components/Chat/Navbar/Navbar"
import UsersBar from '../../components/Chat/UserBar/UsersBar'
import ChatHeaderBck from '../../components/Chat/ChatHeaderBck'
import ChatScreenBck from '../../components/Chat/ChatScreenBck'
import { Link } from 'react-router-dom'

function ChatPage() {

  useEffect(()=>{
    document.body.style.overflowX = "hidden"
  },[]);

  return (
    <div className='chat-container'>
        <PrimarySearchAppBar/>
        <div className='chat-whole' style={{display: 
          localStorage.getItem("contactNumber") > 0 ? "flex" : "none"
        }}>
        <UsersBar/>
        <div className='chatBody-bck'>
            <ChatHeaderBck/>
            <ChatScreenBck/>
        </div>
        </div>

        <div className='addUser-container' style={{display:
          localStorage.getItem("contactNumber") > 0 ? "none" : "flex"
        }}>
          <Link to="/explore" id="addUserPhoto"><img src="../../public/images/add-user.png" alt="addUser" /></Link>
          <Link id="addUserLink" to="/explore">You don't have any friends yet. Click to add some...</Link>
        </div>
    </div>
  )
}

export default ChatPage