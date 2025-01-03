import React, { useContext, useEffect, useState } from 'react';
import "../../../public/profile.css";
import UserSearchBar from './UserSearchBar';
import UserDiv from './UserDiv';
import UserTitle from './UserTitle';
import { userList } from '../../../src/listsUsed/usersList';
import { ChatContext } from '../../../src/App';
import axios from 'axios';
import { io } from 'socket.io-client';

const socket = io.connect("http://localhost:3000")

function UsersBar() {

  const [userBarForm, setUserBarForm] = useContext(ChatContext);
  const [friendsList, setFriendsList] = useState([]);
  const [messages, setMessages] = useState({}); // Array to store messages

  useEffect(() => {
    const fetchFriends = async () => {
      const friendsData = await axios.post("http://localhost:3000/v1/bringFriends", { username: localStorage.getItem("username") });

      if (friendsData.data.length > 0) {
        const friendsArray = friendsData.data.friends.map((element) => {
          const randomNumber = Math.floor(Math.random() * 26);

          // userList[randomNumber].img
          socket.emit("getSearchBarPhoto", { 
            name: element, 
            img: userList[randomNumber].img 
          })

          return { name: element, img: userList[randomNumber].img };
        });

        setFriendsList(friendsArray);
        setUserBarForm(friendsArray[0]);
        localStorage.setItem("clickedReceiver", friendsArray[0].name);
        
        // Get the last messages
        for (const friend of friendsArray) {
          const responseData = await axios.post("http://localhost:3000/v1/bringMessages", {
            sender: localStorage.getItem("username"),
            receiver: friend.name
          });

          const lastMessage = responseData.data.length > 0 ? responseData.data[responseData.data.length - 1].message : "No messages yet. Start the conversation!";
          
          // Update the last message
          setMessages(prevMessages => ({
            ...prevMessages,
            [friend.name]: lastMessage
          }));
        }
      }
    };

    fetchFriends();
  }, []);


  useEffect(()=>{
    localStorage.setItem("myContactNumber", friendsList.length);
  }, [friendsList.length]);

  const handleClick = async (img, name) => {
    localStorage.setItem("clickedReceiver", name);
    setUserBarForm({
      img: img,
      name: name
    });
  };

  return (
    <div className='usersBar' id="usersBar">
      <UserTitle />
      <div className='userSearchBar'>
        <UserSearchBar />
      </div>
      <div className='allUsers' id="allUsers">
        {friendsList.map((element, index) => (
          <div key={index} onClick={() => handleClick(element.img, element.name)}>
            <UserDiv 
              img={element.img} 
              name={element.name} 
              message={messages[element.name] || "No messages yet. Start the conversation!"}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default UsersBar;
