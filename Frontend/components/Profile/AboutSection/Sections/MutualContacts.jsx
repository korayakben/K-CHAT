import React, { useEffect, useState } from 'react';
import { userList } from '../../../../src/utils/usersList';
import { truncateText } from '../../../../src/utils/truncateText';

// Util function to cut the username
truncateText();

function MutualContacts() {
  const [truncatedUsernames, setTruncatedUsernames] = useState([]);

  useEffect(() => {
    const elements = document.getElementsByClassName('username');
    const truncatedList = [];

    for (let element of elements) {
      const font = window.getComputedStyle(element).font;
      const truncated = truncateText(element.textContent, 150, font);
      truncatedList.push(truncated);
    }

    setTruncatedUsernames(truncatedList);
  }, []);



  return (
    <div className='mutual-container'>
      {userList.map((element, index) => (
        <div className='mutualCard' key={index}>
          <img src={element.img} alt="mutualPhoto" className='mutualPhoto' />
          <span className='nickname'>{element.nickname}</span>
          <span className='username' style={{ maxWidth: '150px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {truncatedUsernames[index] || element.name}
          </span>
        </div>
      ))}
    </div>
  );
}

export default MutualContacts;