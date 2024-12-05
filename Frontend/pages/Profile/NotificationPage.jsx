import React, { useEffect, useState } from 'react'
import "../../public/notifications.css"
import DrawerAppBar from '../../components/Chat/Navbar/Navbar';
import NotifHeader from '../../components/Notification/NotifHeader'
import NotifBody from '../../components/Notification/NotifBody/NotifBody'
import Notifications from '../../components/Notification/Notifs/Notifications'

function NotificationPage() {

  return (
    <div className='notifpage-container'>
      <DrawerAppBar/>
      <NotifBody/>
      <div className='notif-container'>
        <NotifHeader/>
        <Notifications/>
      </div>
    </div>
  )
}

export default NotificationPage