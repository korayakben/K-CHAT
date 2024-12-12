import React, { useEffect, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import CollectionsIcon from '@mui/icons-material/Collections';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import SendIcon from '@mui/icons-material/Send';
import io from "socket.io-client"
import axios from 'axios';

const socket = io.connect("http://localhost:3000"); 

function ChatScreenBck() {

  const [message, setMessage] = useState("");
  const [ShownMessage, setShownMessage] = useState("");

  const [messageArr, setMessageArr] = useState([]);
  const [myID, setMyID] = useState(null);

  function clearInput(){
    const input = document.getElementById("messageInput");
    input.value = "";
  }

  function handleChange(e){
    setMessage(e.target.value);
  }

  function sendMessage(){
    // setShownMessage(message);
    clearInput();
    socket.emit("sendChatMessage", {
      sender_username: localStorage.getItem("username"),
      message: message,
      receiver_username: localStorage.getItem("clickedReceiver")
    });
  }

  useEffect(async ()=>{
    socket.on("receiveChatMessage", (data)=>{
      setShownMessage(data.message); // My socket based message
    });

    const responseID = await axios.post("http://localhost:3000/v1/userByUsername", {username: localStorage.getItem("username")});

    setMyID(responseID.data[0].id);
  },[]);

  useEffect(()=>{
    const fetchData = async ()=>{
      const messagesData = await axios.post("http://localhost:3000/v1/bringMessages", {
        sender: localStorage.getItem("username"),
        receiver: localStorage.getItem("clickedReceiver")
      });

      console.log(messagesData.data);
      setMessageArr(messagesData.data);
    }

    fetchData();
  }, [localStorage.getItem("clickedReceiver")]);


  return (
    <div className='chatScreenBck-container'>
      <div className='chatScreenBck'>
      {
        messageArr.map((index, element)=>{
          return(
            <div className='messageBalloon-container' 
            style={{display: "flex", justifyContent: 
              messageArr[element].sender_id === myID ? "start" : "end"
            }}>
              <span className='messageBalloonBck' key={index} style={{backgroundColor: 
              messageArr[element].sender_id === myID ? "rgb(42, 248, 42)" : "rgb(74, 110, 254)"
            }}>{messageArr[element].message}</span>
            </div>
          )
        })
      }
      <span className='messageBalloonBck' style={{display: ShownMessage ? "flex" : "none"}}>{ShownMessage}</span>
      </div>

      <div className='inputBck-container'>

        <div className='inputIconsbck-container'>
          <button className='inputIconbck'><AddIcon/></button>
          <button className='inputIconbck'><CollectionsIcon/></button>
          <button className='inputIconbck'><EmojiEmotionsIcon/></button>
        </div>

          <input type="text" id="messageInput" onChange={handleChange}/>
          <button className='inputIconbck' id="sendBtnBck" onClick={sendMessage}><SendIcon/></button>
      </div>
      
    </div>
  )
}

export default ChatScreenBck