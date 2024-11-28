import React, { useEffect, useState } from 'react'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import VideocamIcon from '@mui/icons-material/Videocam';
import SearchIcon from '@mui/icons-material/Search';
import io from "socket.io-client"
import { userList } from '../../src/listsUsed/usersList';

const socket = io.connect("http://localhost:3000"); 

function ChatHeaderBck() {

  const [headerForm, setHeaderForm] = useState({
    image: userList[0].img,
    name: userList[0].name
  });

  useEffect(()=>{
    socket.on("putHeader", (data)=>{
      console.log(data);  //works up until here tho
      setHeaderForm(data);
    });
  }, []);

  useEffect(()=>{
    // console.log(headerForm);
  }, [headerForm]);
  
  return (
    <div className='chatHeader-bck'>
    <div className='chatHeaderbck-container'>
        <img src={headerForm.image} />

        <div className='userStates'>
            <span id="username-bck">{headerForm.name}</span>
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