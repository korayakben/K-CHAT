import React from 'react'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import VideocamIcon from '@mui/icons-material/Videocam';
import SearchIcon from '@mui/icons-material/Search';


function ChatHeaderBck() {
  return (
    <div className='chatHeader-bck'>
    <div className='chatHeaderbck-container'>
        <img src="../../public/images/userImages/1.jpg" alt="userPhoto" />

        <div className='userStates'>
            <span id="username-bck">Jasmine Thompson</span>
            <span id="state-bck">Active</span>
        </div>

        <div className='chatHeaderBck-icons-container'>
            <button><LocalPhoneIcon/></button>
            <button><VideocamIcon/></button>
            <button><SearchIcon/></button>
        </div>
    </div>
    </div>
  )
}

export default ChatHeaderBck