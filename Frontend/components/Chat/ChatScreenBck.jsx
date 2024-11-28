import React, { useEffect, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import CollectionsIcon from '@mui/icons-material/Collections';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import SendIcon from '@mui/icons-material/Send';
import io from "socket.io-client"

const socket = io.connect("http://localhost:3000"); 

function ChatScreenBck() {

  const [message, setMessage] = useState("");
  const [ShownMessage, setShownMessage] = useState("");

  function clearInput(){
    const input = document.getElementById("messageInput");
    input.value = "";
  }


  function handleChange(e){
    setMessage(e.target.value);
  }

  function sendMessage(){
    // setShownMessage(message);
    clearInput();
    socket.emit("sendChatMessage", message);
  }

  useEffect(()=>{
    socket.on("receiveChatMessage", (data)=>{
      setShownMessage(data);  // My socket based message
    });
  },[socket]);


  return (
    <div className='chatScreenBck-container'>
      <div className='chatScreenBck'>
      <span className='messageBalloonBck' style={{display: ShownMessage ? "flex" : "none"}}>{ShownMessage}</span>
      </div>

      <div className='inputBck-container'>

        <div className='inputIconsbck-container'>
          <button className='inputIconbck'><AddIcon/></button>
          <button className='inputIconbck'><CollectionsIcon/></button>
          <button className='inputIconbck'><EmojiEmotionsIcon/></button>
        </div>

          <input type="text" id="messageInput" onChange={handleChange}/>
          <button className='inputIconbck' id="sendBtnBck" onClick={sendMessage}><SendIcon/></button>
      </div>
      
    </div>
  )
}

export default ChatScreenBck