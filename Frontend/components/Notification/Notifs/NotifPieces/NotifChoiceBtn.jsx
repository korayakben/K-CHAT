import React, { useEffect } from 'react'
import Button from '@mui/material/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { io } from 'socket.io-client';

const socket = io.connect("http://localhost:3000");

function NotifChoiceBtn({ index, type }) {

  const navigate = useNavigate();

  const acceptingUser = localStorage.getItem("username");

  const acceptFriend = async ()=>{
    // Adding the friend into the DB...
    const acceptedUser = JSON.parse(localStorage.getItem("notifications"))[index][0].from_username;
    
    // The friendship is being added into the db...
    await axios.post("http://localhost:3000/v1/acceptFriend", {
      acceptingUser: acceptingUser,
      acceptedUser: acceptedUser
    });

    // Deleting the notification...
    const response = await axios.delete(`http://localhost:3000/v1/notifications`, {
      data: {
        notifArr: JSON.parse(localStorage.getItem("notifications")),
        index: index
      }
    });
    
    // Updating the notification storage...
    localStorage.setItem("notifications", JSON.stringify(response.data.newArr));

    localStorage.setItem("myContactNumber", Number(localStorage.getItem("myContactNumber"))+1);

    // Sending acceptance notification to the accepted user...
    socket.emit("acceptanceNotification", {
      acceptedUser: acceptedUser,
      acceptingUser: acceptingUser
    });

    navigate("/notifications");
  }

  const rejectFriend = async ()=>{
    const response = await axios.delete(`http://localhost:3000/v1/notifications`, {
      data: {
        notifArr: JSON.parse(localStorage.getItem("notifications")),
        index: index
      }
    });
    
    localStorage.setItem("notifications", JSON.stringify(response.data.newArr));

    navigate("/notifications");
  }

  return (
    <div className='choiceBtn-container' style={{display: 
      type === "Friendship" ? "flex" : "none"
    }}>
        <Button variant="contained" style={{backgroundColor: "rgb(4, 190, 4)"}} onClick={acceptFriend}>Accept</Button>
        <Button variant="contained" style={{backgroundColor: "rgb(215, 8, 8)"}} onClick={rejectFriend}>Reject</Button>
    </div>
  )
}

export default NotifChoiceBtn