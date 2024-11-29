import React, { useState } from 'react'
import Button from '@mui/material/Button';

function AddFriendButton() {

    const [buttonState, setButtonState] = useState("Add Friend");

    const handleClick = ()=>{
        buttonState === "Requested" ? setButtonState("Friend :)") : setButtonState("Requested");
    }

  return (
        <Button id='addFriend-btn' variant="contained" onClick={handleClick}>{buttonState}</Button>
  )
}

export default AddFriendButton