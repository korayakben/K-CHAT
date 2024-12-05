import React from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function NotifDate({ date }) {
  return (
    <div className='notifDate'>
        <AccessTimeIcon/>
        <span>{date}</span>
    </div>
  )
}

export default NotifDate