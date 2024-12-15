import React from 'react'

function NotifType({ type }) {

  const notificationColorist = (typeValue)=>{
    switch(typeValue){
      case "Friendship" : return "rgb(77, 142, 254)";
      case "Acceptance" : return "green";
      case "Message" : return "orange";
      default : return "null"; 
    }
  }

  return (
    <div className='notifType' style={{backgroundColor: notificationColorist(type)}}> 
        {type}
    </div>
  )
}

export default NotifType