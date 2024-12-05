import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import io from 'socket.io-client';
import axios from 'axios';

const socket = io.connect('http://localhost:3000');

function AddFriendButton() {

  const [addButtonState, setAddButtonState] = useState("Add Friend");

  const savedState = localStorage.getItem("buttonStatus");

  const clickedUser = JSON.parse(localStorage.getItem('broughtUsername')).username;

  const whoClicked = localStorage.getItem('username');


  const handleClick = async () => {
    socket.emit('bringFriendBtnState', {
      from_username: whoClicked,
      to_username: clickedUser,
    });

    addButtonState === "Add Friend" ? setAddButtonState("Requested...") : setAddButtonState("Friend :)");

    // Notification sending...
    socket.emit('sendFriendship', { from: whoClicked, to: clickedUser });


    await axios.post('http://localhost:3000/v1/addfriend', {
      from_username: whoClicked,
      to_username: clickedUser,
    });

  };

  useEffect(async () => {

    const areFriendsData = await axios.post("http://localhost:3000/v1/areFriends", {
      username: whoClicked,
      friendUsername: clickedUser
    });

    const areFriends = areFriendsData.data

    if(areFriends){
      setAddButtonState("FRIEND :)");
      localStorage.setItem("buttonStatus", "FRIEND :)");
    }
    else{
      socket.emit('bringFriendBtnState', {
        from_username: whoClicked,
        to_username: clickedUser,
      });
  
      socket.on('friendBtnState', (data) => {
  
        if(data == undefined){
          
          setAddButtonState("ADD FRIEND");
          localStorage.setItem("buttonStatus", "Add Friend");
        }
        
        setAddButtonState(data.status);
        localStorage.setItem("buttonStatus", data.status);
    }
      )
    };

    return () => {
      // Clean the socket listeners
      socket.off('friendBtnState');
    };
  }, []);

  return (
    <Button id="addFriend-btn" variant="contained" onClick={handleClick}>
      {savedState || addButtonState}
    </Button>
  );
}

export default AddFriendButton;
