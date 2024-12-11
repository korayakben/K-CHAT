import React, { useEffect, useState } from 'react';
import { userList } from '../../../../src/listsUsed/usersList';
import { truncateText } from '../../../../src/utils/truncateText';
import { io } from 'socket.io-client';

const socket = io.connect("http://localhost:3000");

function MutualContacts() {
  const [truncatedUsernames, setTruncatedUsernames] = useState([]);

  const [mutualList, setMutualList] = useState([]);

  useEffect(() => {
    const elements = document.getElementsByClassName('username');
    const truncatedList = [];

    for (let element of elements) {
      const font = window.getComputedStyle(element).font;
      const truncated = truncateText(element.textContent, 150, font);
      truncatedList.push(truncated);
    }

    setTruncatedUsernames(truncatedList);

    socket.on("getMutuals", (data)=>{
      setMutualList(data);
    });

  }, []);


  return (
    <div className='mutual-container'>
      {mutualList.map((element, index) => (
        <div className='mutualCard' key={index}>
          <img src="../../../../public/images/userImages/2.jpg" alt="mutualPhoto" className='mutualPhoto' />
          <span className='nickname'>{element.username}</span>
          <span className='username' style={{ maxWidth: '150px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {truncatedUsernames[index] || element.name + " " + element.surname}
          </span>
        </div>
      ))}
    </div>
  );
}

export default MutualContacts;