import React from 'react'

function NotifCounter({ counter }) {
  return (
    <div className='notifCounter-container'>
        <div id="notifCounter" variant="contained">{counter}</div>
    </div>
  )
}

export default NotifCounter