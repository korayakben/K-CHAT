import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import io from 'socket.io-client';
import axios from 'axios';

const socket = io.connect('http://localhost:3000');

function AddFriendButton() {
  const [addButtonState, setAddButtonState] = useState(
    localStorage.getItem('buttonStatus') || 'Add Friend'
  );

  const clickedUser = JSON.parse(localStorage.getItem('broughtUsername')).username;
  const whoClicked = localStorage.getItem('username');

  const handleClick = async () => {
    
    if (addButtonState === 'REQUESTED...') {
      await axios.post('http://localhost:3000/v1/requestBreaker', {
        from_user: whoClicked,
        to_user: clickedUser,
      });
      setAddButtonState('ADD FRIEND');
      localStorage.setItem('buttonStatus', 'ADD FRIEND');

      await axios.put("http://localhost:3000/v1/updateBtnState", {
        newStatus: "ADD FRIEND",
        from_username: whoClicked,
        to_username: clickedUser
      });
    } 
    
    else if (addButtonState === 'FRIEND :)') {
      const choice = confirm(`Are you sure you want to unfriend ${clickedUser}?`);

      if (choice) {
        await axios.post('http://localhost:3000/v1/unfriend', {
          username: whoClicked,
          friendusername: clickedUser,
        });

        await axios.put("http://localhost:3000/v1/updateBtnState", {
          newStatus: "DELETE",
          from_username: whoClicked,
          to_username: clickedUser
        });
        setAddButtonState('ADD FRIEND');
        localStorage.setItem('buttonStatus', 'ADD FRIEND');
        localStorage.setItem('contactNumber', Number(localStorage.getItem("contactNumber"))-1);
      }
    } 
    
    else {
      setAddButtonState('REQUESTED...');
      localStorage.setItem('buttonStatus', 'REQUESTED...');

      socket.emit('sendFriendship', { from: whoClicked, to: clickedUser });
      await axios.post('http://localhost:3000/v1/addfriend', {
        from_username: whoClicked,
        to_username: clickedUser,
      });
    }
  };

  useEffect(() => {
    const checkFriendStatus = async () => {
      const response = await axios.post('http://localhost:3000/v1/areFriends', {
        username: whoClicked,
        friendUsername: clickedUser,
      });

      const areFriends = response.data;

      if (areFriends) {
        setAddButtonState('FRIEND :)');
        localStorage.setItem('buttonStatus', 'FRIEND :)');
      } else {
        socket.emit('bringFriendBtnState', {
          from_username: whoClicked,
          to_username: clickedUser,
        });

        socket.on('friendBtnState', (data) => {
          const newState = data?.status || 'Add Friend';
          setAddButtonState(newState);
          localStorage.setItem('buttonStatus', newState);
        });
      }
    };

    checkFriendStatus();

    return () => {
      socket.off('friendBtnState');
    };
  }, [whoClicked, clickedUser]);

  useEffect(() => {
    setAddButtonState(localStorage.getItem('buttonStatus'));
  }, []);

  return (
    <Button id="addFriend-btn" variant="contained" onClick={handleClick}>
      {addButtonState}
    </Button>
  );
}

export default AddFriendButton;
