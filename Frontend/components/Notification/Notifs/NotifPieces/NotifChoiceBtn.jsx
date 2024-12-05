import React, { useEffect } from 'react'
import Button from '@mui/material/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function NotifChoiceBtn({index}) {

  const navigate = useNavigate();

  const acceptingUser = localStorage.getItem("username");

  const acceptFriend = async ()=>{
    // Adding the friend into the DB...
    const acceptedUser = JSON.parse(localStorage.getItem("notifications"))[index][0].from_username;
    
    await axios.post("http://localhost:3000/v1/acceptFriend", {
      acceptingUser: acceptingUser,
      acceptedUser: acceptedUser
    });

    const response = await axios.delete(`http://localhost:3000/v1/notifications`, {
      data: {
        notifArr: JSON.parse(localStorage.getItem("notifications")),
        index: index
      }
    });
    
    localStorage.setItem("notifications", JSON.stringify(response.data.newArr));

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
    <div className='choiceBtn-container'>
        <Button variant="contained" style={{backgroundColor: "rgb(4, 190, 4)"}} onClick={acceptFriend}>Accept</Button>
        <Button variant="contained" style={{backgroundColor: "rgb(215, 8, 8)"}} onClick={rejectFriend}>Reject</Button>
    </div>
  )
}

export default NotifChoiceBtn