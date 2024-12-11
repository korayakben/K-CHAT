import React, { useEffect, useState } from 'react';
import { userList } from '../../../../src/listsUsed/usersList';
import { truncateText } from '../../../../src/utils/truncateText';
import { io } from 'socket.io-client';

const socket = io.connect("http://localhost:3000");

function MutualContacts() {
  const [truncatedUsernames, setTruncatedUsernames] = useState([]);

  const [mutualList, setMutualList] = useState([]);
  const [mutualWarner, setMutualWarner] = useState(null);

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
      data.length > 0 ? setMutualWarner(null) : setMutualWarner(<span style={{color: "rgb(201, 6, 6)"}}>No Mutual Friends Yet :(</span>);
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
      {mutualWarner}
    </div>
  );
}

export default MutualContacts;