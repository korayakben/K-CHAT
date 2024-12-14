import React, { useContext, useEffect } from 'react';
import "../../../public/profile.css";
import UserSearchBar from './UserSearchBar';
import UserDiv from './UserDiv';
import UserTitle from './UserTitle';
import { userList } from '../../../src/listsUsed/usersList';
import { ChatContext } from '../../../src/App';
import axios from 'axios';

function UsersBar() {

  const [userBarForm, setUserBarForm] = useContext(ChatContext);

  const [friendsList, setFriendsList] = React.useState([]);

  React.useEffect(() => {
    const fetchFriends = async () => {
      const friendsData = await axios.post("http://localhost:3000/v1/bringFriends", { username: localStorage.getItem("username") });

      if(friendsData.data.length > 0){
        const friendsArray = friendsData.data.friends.map((element) => {
          const randomNumber = Math.floor(Math.random() * 26);
          return { name: element, img: userList[randomNumber].img }; 
        });
  
        setFriendsList(friendsArray);
        setUserBarForm(friendsArray[0]);
        localStorage.setItem("clickedReceiver", friendsArray[0].name);
      }
    };

    fetchFriends();
  }, []); 

  const handleClick = (img, name) => {
    // console.log("Image Source:", img);
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
            <UserDiv img={element.img} name={element.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default UsersBar;
