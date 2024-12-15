import React, { useEffect, useState, useRef, useContext } from "react";
import AddIcon from "@mui/icons-material/Add";
import CollectionsIcon from "@mui/icons-material/Collections";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import SendIcon from "@mui/icons-material/Send";
import io from "socket.io-client";
import axios from "axios";
import { Context } from "../../src/App";

const socket = io.connect("http://localhost:3000");

function ChatScreenBck() {
  const [message, setMessage] = useState("");
  const [messageArr, setMessageArr] = useState([]);
  const [myID, setMyID] = useState(null);

  const [isAuthenticated, setIsAuthenticated] = useContext(Context);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messageArr]);

  function clearInput() {
    const input = document.getElementById("messageInput");
    input.value = "";
  }

  function handleChange(e) {
    setMessage(e.target.value);
  }

  function sendMessage(e) {
    e.preventDefault();
    if (message.trim() === "") return;
    const newMessage = {
      sender_id: myID,
      receiver_username: localStorage.getItem("clickedReceiver"),
      message: message,
    };
  
    setMessageArr((prev) => [...prev, newMessage]);
    clearInput();

    socket.emit("sendChatMessage", {
      sender_username: localStorage.getItem("username"),
      message: message,
      receiver_username: localStorage.getItem("clickedReceiver"),
    });

    // IsAuthenticated!!!!!!!!
    if(isAuthenticated){
      socket.emit("messageNotification", {
        sender: localStorage.getItem("username"),
        receiver: localStorage.getItem("clickedReceiver"),
        message: message
      });
    }
  }

  useEffect(() => {
    socket.on("receiveChatMessage", (data) => {
      if (data.sender_id === myID) return; 
      setMessageArr((prev) => [...prev, data]); 
    });

    const fetchMyID = async () => {
      const responseID = await axios.post("http://localhost:3000/v1/userByUsername", {
        username: localStorage.getItem("username"),
      });
      setMyID(responseID.data[0].id);
    };
    fetchMyID();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const clickedReceiver = localStorage.getItem("clickedReceiver");
      const messagesData = await axios.post("http://localhost:3000/v1/bringMessages", {
        sender: localStorage.getItem("username"),
        receiver: clickedReceiver,
      });
      setMessageArr(messagesData.data);
    };
    fetchData();
  }, [localStorage.getItem("clickedReceiver")]);

  return (
    <div className="chatScreenBck-container">
      <div className="chatScreenBck">
        {messageArr.map((message, index) => (
          <div
            key={index}
            className="messageBalloon-container"
            style={{
              display: "flex",
              justifyContent: message.sender_id === myID ? "start" : "end",
            }}
          >
            <span
              className="messageBalloonBck"
              style={{
                backgroundColor: message.sender_id === myID ? "rgb(42, 248, 42)" : "rgb(74, 110, 254)",
              }}
            >
              {message.message}
            </span>


          </div>
        ))}
        <div ref={messagesEndRef}></div>
      </div>

      <div className="inputBck-container">
      <form action="" id="messageScreen-form" onSubmit={sendMessage}>
        <div className="inputIconsbck-container">
          <button className="inputIconbck">
            <AddIcon />
          </button>
          <button className="inputIconbck">
            <CollectionsIcon />
          </button>
          <button className="inputIconbck">
            <EmojiEmotionsIcon />
          </button>
        </div>
        
        <input type="text" id="messageInput" onChange={handleChange} />
        <button className="inputIconbck" id="sendBtnBck">
          <SendIcon />
        </button>
        </form>
      </div>
    </div>
  );
}

export default ChatScreenBck;
