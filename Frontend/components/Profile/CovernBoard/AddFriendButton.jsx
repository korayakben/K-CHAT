import React, { useState } from 'react'
import Button from '@mui/material/Button';

function AddFriendButton() {

    const [buttonState, setButtonState] = useState("Add Friend");

    const handleClick = ()=>{
        buttonState === "Requested" ? setButtonState("Friend :)") : setButtonState("Requested");
    }

  return (
    <div className='addFriend-container'>
        <Button id='addFriend-btn' variant="contained" onClick={handleClick}>{buttonState}</Button>
    </div>
  )
}

export default AddFriendButton