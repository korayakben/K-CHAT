import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function OnlineInqForm() {
  return (
    <form action="" className='onlineInq-Form'>
        <TextField className='onlineInq-input' placeholder='Name' variant="outlined" />
        <TextField className='onlineInq-input' placeholder='Email' variant="outlined" />
        <TextField className='onlineInq-input' placeholder='Phone' variant="outlined" />
        <TextField className='onlineInq-input' placeholder='Topic' variant="outlined" />
        <TextField id="textArea" className='onlineInq-input' placeholder='Message...' variant="outlined" />
        <Button variant="contained" id="contactSend-btn">Send</Button>
    </form>
  )
}

export default OnlineInqForm