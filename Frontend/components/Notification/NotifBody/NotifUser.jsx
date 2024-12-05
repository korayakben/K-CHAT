import React from 'react'
import { Link } from 'react-router-dom'


function NotifUser({name, username}) {
  return (
    <div className='notifUser-container'>
        <Link to="/profile"><img src="../../public/images/userImages/1.jpg" className='notif-img' alt="notification photo" /></Link>
        <div className='userInfos-container'>
            <Link to="/profile"><span className='notif-name'>{name}</span></Link>
            <span className='notif-username'>@{username}</span>
        </div>
    </div>
  )
}

export default NotifUser