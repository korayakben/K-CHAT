import React, { useEffect, useState } from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import NotifType from './NotifPieces/NotifType';
import NotifTopic from './NotifPieces/NotifTopic';
import NotifContent from './NotifPieces/NotifContent';
import NotifPerson from './NotifPieces/NotifPerson';
import NotifDate from "./NotifPieces/NotifDate";
import NotifChoiceBtn from './NotifPieces/NotifChoiceBtn';
import axios from "axios";
import io from "socket.io-client";
import { useNavigate } from 'react-router-dom';

const socket = io.connect("http://localhost:3000");

function Notifications() {

  const [emptiness, setEmptiness] = useState("No notifications you've got");

  const usersNotifications = JSON.parse(localStorage.getItem("notifications"));

  const navigate = useNavigate();

  useEffect(async ()=>{
    const allNotifies = await axios.post("http://localhost:3000/v1/notifications", { username: localStorage.getItem("username") });

    const notifiesLength = JSON.stringify(allNotifies.data.length);

    socket.emit("bringNotifications", {
      data: allNotifies.data,
      length: notifiesLength
    });

    socket.on("usersNotifications", (data)=>{
      localStorage.setItem("notifications", JSON.stringify(data));
    });

    notifiesLength > 0 ? setEmptiness(null) : setEmptiness(<span>No notifications you've got</span>);
  }, []);


  const deleteNotification = async (index)=>{
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
    <div className='notifications-container'>

      <span id="noNotifications">{emptiness}</span>
      {
        usersNotifications.map((element, index)=>{
          return(
            <div className='notification-holder' key={index}>
              <button variant="contained" id='deleteNotif-btn' onClick={()=>deleteNotification(index)}>
                <ClearIcon/>
              </button>
              <div className='notifications'>
                <NotifType type={element[0].type}/>
                <NotifTopic topic={element[0].title}/>
                <NotifContent content={element[0].content}/>
                <NotifChoiceBtn index={index} type={element[0].type}/>
              </div>
              <NotifDate date={element[0].createdat}/>
      </div>
          )
        })
      }

    </div>
  )
}

export default Notifications