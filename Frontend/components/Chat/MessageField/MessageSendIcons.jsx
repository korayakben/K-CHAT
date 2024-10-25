import React from 'react'
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import SendIcon from '@mui/icons-material/Send';


function MessageSendIcons() {

  return (
    <div style={{display: "flex", gap: "1rem"}}>

        <button className='messageSendIcons'><KeyboardVoiceIcon/></button>
        <button className='messageSendIcons'><SendIcon/></button>

    </div>
  )
}

export default MessageSendIcons