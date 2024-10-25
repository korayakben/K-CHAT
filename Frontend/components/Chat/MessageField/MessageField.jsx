import React from 'react'
import MessageIcons from './MessageIcons'
import MessageInput from './MessageInput'
import MessageSendIcons from './MessageSendIcons'

function MessageField() {

  return (
    <div className='messageField-container'>
            <MessageIcons/>
            <MessageInput/>
            <MessageSendIcons/>
            
    </div>
  )
}

export default MessageField