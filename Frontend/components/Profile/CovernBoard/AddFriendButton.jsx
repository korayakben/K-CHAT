import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import io from 'socket.io-client';
import axios from 'axios';

const socket = io.connect('http://localhost:3000');

function AddFriendButton() {

  const clickedUser = JSON.parse(localStorage.getItem('broughtUsername')).username;

  const whoClicked = localStorage.getItem('username');

  const defaultState = JSON.parse(localStorage.getItem("friendList"))[clickedUser];

  const [buttonState, setButtonState] = useState(defaultState ||  "ADD FRIEND");

  const [friendsList, setFriendsList] = useState(
    JSON.parse(localStorage.getItem('friendList'))
  );

  const handleClick = async () => {
    socket.emit('bringFriendBtnState', {
      from_username: whoClicked,
      to_username: clickedUser,
    });

    // Notification sending...
    socket.emit('sendFriendship', { from: whoClicked, to: clickedUser });

    socket.emit("getCredentials", {
      fromUser: whoClicked,
      toUser: clickedUser
    });

    await axios.post('http://localhost:3000/v1/addfriend', {
      from_username: whoClicked,
      to_username: clickedUser,
    });

  };

  useEffect(() => {
    socket.on('friendBtnState', (data) => {
      setButtonState(data.status);

      setFriendsList((prevFriendsList) => {
        const updatedList = {
          ...prevFriendsList,
          [clickedUser]: data.status,
        };
        localStorage.setItem('friendList', JSON.stringify(updatedList));
        return updatedList;
      });
    });

    return () => {
      // Clean the socket listeners
      socket.off('friendBtnState');
    };
  }, [clickedUser]);

  return (
    <Button id="addFriend-btn" variant="contained" onClick={handleClick}>
      {buttonState}
    </Button>
  );
}

export default AddFriendButton;
