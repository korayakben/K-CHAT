import React, { useEffect } from 'react'
import "../public/profile.css"
import PrimarySearchAppBar from "../components/Chat/Navbar/Navbar"
import UsersBar from '../components/Chat/UserBar/UsersBar'
import ChatHeaderBck from '../components/Chat/ChatHeaderBck'
import ChatScreenBck from '../components/Chat/ChatScreenBck'


function ChatPage() {

  useEffect(()=>{
    document.body.style.overflowX = "hidden"
  },[]);

  return (
    <div className='chat-container'>
        <PrimarySearchAppBar/>
        <div className='chat-whole'>
        <UsersBar/>
        <div className='chatBody-bck'>
            <ChatHeaderBck/>
            <ChatScreenBck/>
        </div>
        </div>
    </div>
  )
}

export default ChatPage