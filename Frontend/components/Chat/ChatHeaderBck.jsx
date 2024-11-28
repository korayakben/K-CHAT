import React, { useContext, useEffect, useState } from 'react'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import VideocamIcon from '@mui/icons-material/Videocam';
import SearchIcon from '@mui/icons-material/Search';
import io from "socket.io-client"
import { userList } from '../../src/listsUsed/usersList';
import { ChatContext } from '../../src/App';

function ChatHeaderBck() {

  const [userBarForm, setUserBarForm] = useContext(ChatContext);

  const [headerForm, setHeaderForm] = useState({
    image: userList[0].img,
    name: userList[0].name
  });


  useEffect(()=>{
    // console.log(headerForm);
  }, [headerForm]);
  
  return (
    <div className='chatHeader-bck'>
    <div className='chatHeaderbck-container'>
        <img src={userBarForm.img} />

        <div className='userStates'>
            <span id="username-bck">{userBarForm.name}</span>
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