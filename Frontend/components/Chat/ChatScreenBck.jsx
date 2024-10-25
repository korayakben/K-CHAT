import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import CollectionsIcon from '@mui/icons-material/Collections';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import SendIcon from '@mui/icons-material/Send';

function ChatScreenBck() {

  const [message, setMessage] = useState("");
  const [ShownMessage, setShownMessage] = useState("");

  function clearInput(){
    const input = document.getElementById("messageInput");
    input.value = "";
  }

  function createMessageBalloon(){
    const messageBalloons = document.getElementsByClassName("messageBalloonBck");
    messageBalloons[0].style.display = "flex"
  }

  function handleChange(e){
    setMessage(e.target.value);
  }

  function handleClick(){
    setShownMessage(message);
    clearInput();
    createMessageBalloon();
  }


  return (
    <div className='chatScreenBck-container'>
      <div className='chatScreenBck'>
      <span className='messageBalloonBck'>{ShownMessage}</span>
      </div>

      <div className='inputBck-container'>

        <div className='inputIconsbck-container'>
          <button className='inputIconbck'><AddIcon/></button>
          <button className='inputIconbck'><CollectionsIcon/></button>
          <button className='inputIconbck'><EmojiEmotionsIcon/></button>
        </div>

          <input type="text" id="messageInput" onChange={handleChange}/>
          <button className='inputIconbck' id="sendBtnBck" onClick={handleClick}><SendIcon/></button>
      </div>
      
    </div>
  )
}

export default ChatScreenBck