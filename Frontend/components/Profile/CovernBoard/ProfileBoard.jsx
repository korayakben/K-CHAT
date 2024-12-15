import React, { useEffect, useState } from 'react'
import ProfilePhoto from './ProfilePhoto'
import AddFriendButton from './AddFriendButton'
import axios from 'axios';
import { io } from 'socket.io-client';

const socket = io.connect("http://localhost:3000");

function ProfileBoard({ name, username, contactNumber }) {

  const [mutualFriends, setMutualFriends] = useState([]);
  const [mutualLength, setMutualLength] = useState(null);

  const me = localStorage.getItem("username");
  const user = JSON.parse(localStorage.getItem("broughtUsername")).username;

  useEffect(() => {
    const fetchMutualFriends = async () => {
      try {
        const mutualFriendData = await axios.post("http://localhost:3000/v1/mutualFriends", {
          fUser: me,
          sUser: user
        });

        setMutualFriends(mutualFriendData.data.mutualData);
        setMutualLength(mutualFriendData.data.mutualData.length);

        socket.emit("mutualFriends", mutualFriendData.data.mutualData);
      } catch (error) {
        console.error("Error fetching mutual friends:", error);
      }
    };

    fetchMutualFriends(); 
  }, [me, user]); 

  return (
    <div className='profileBoard-container'>
      <div className='profileBoard'>
        <ProfilePhoto />
        <div className='credentials-container'>
          <div className='nicks-container'>
            <span id="username">{name}</span>
            <span id="nickname">@{username}</span>
          </div>

          <div className='contacts-container'>
            <span id="contact-count">{contactNumber} contacts</span>
            <span id="contactPoint" style={{ display: username === me ? "none" : "flex" }}>•</span>
            <span id="mutual-count" style={{ display: username === me ? "none" : "flex" }}>
              {mutualLength} mutual
            </span>
          </div>
        </div>
        <div className='addFriend-container' style={{ display: username === localStorage.getItem("username") ? "none" : "flex" }}>
          <AddFriendButton />
        </div>
      </div>
    </div>
  );
}

export default ProfileBoard;
