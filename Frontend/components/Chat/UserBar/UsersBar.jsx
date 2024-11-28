import React, { useContext } from 'react';
import "../../../public/profile.css";
import UserSearchBar from './UserSearchBar';
import UserDiv from './UserDiv';
import UserTitle from './UserTitle';
import { userList } from '../../../src/listsUsed/usersList';
import io from "socket.io-client"

const socket = io.connect("http://localhost:3000"); 

function UsersBar() {

  const handleClick = (img, name) => {
    // console.log("Image Source:", img);
    // console.log("User Name:", name);

    socket.emit("takeHeader", {image: img, name: name});
  };

  return (
    <div className='usersBar' id="usersBar">
      <UserTitle />
      <div className='userSearchBar'>
        <UserSearchBar />
      </div>
      <div className='allUsers' id="allUsers">
        {userList.map((element, index) => (
          <div key={index} onClick={() => handleClick(element.img, element.name)}>
            <UserDiv img={element.img} name={element.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default UsersBar;
