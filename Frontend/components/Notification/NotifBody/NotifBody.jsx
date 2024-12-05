import React from 'react'
import NotifUser from './NotifUser'
import NotifRouter from './NotifRouter'
import NotifCounter from './NotifCounter'

function NotifBody() {

  const notificationsLength = JSON.parse(localStorage.getItem("notifications")).length;

  localStorage.setItem("notifCounter", notificationsLength);

  return (
    <div className='notifBody-container'>
        <NotifUser name={localStorage.getItem("name") + " " + localStorage.getItem("surname")} username={localStorage.getItem("username")}/>
        <div style={{width: "70%", display: "flex", alignItems: "center"}}>
            <NotifCounter counter={notificationsLength}/>
            <NotifRouter/>
        </div>
    </div>
  )
}

export default NotifBody