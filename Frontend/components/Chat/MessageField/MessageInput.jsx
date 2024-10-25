import React, { useState } from 'react'

function MessageInput() {

    const [message, sendMessage] = useState("");
    

  function handleChange(e){
    sendMessage(e.target.value);
  }

  return (
    <div className='messageInput'>
        <input type="text" onChange={handleChange}/>
    </div>
  )
}

export default MessageInput