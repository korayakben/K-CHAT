import React, { useContext, useEffect } from 'react';
import "../../../public/profile.css";
import UserSearchBar from './UserSearchBar';
import UserDiv from './UserDiv';
import UserTitle from './UserTitle';
import { userList } from '../../../src/listsUsed/usersList';
import { ChatContext } from '../../../src/App';


function UsersBar() {

  const [userBarForm, setUserBarForm] = useContext(ChatContext);

  const handleClick = (img, name) => {
    console.log("Image Source:", img);
    console.log("User Name:", name);
    setUserBarForm({
      img: img,
      name: name
    });
  };

  useEffect(()=>{
    // console.log("CONTEXT FORM");
    // console.log(userBarForm);
  },[userBarForm]);

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
