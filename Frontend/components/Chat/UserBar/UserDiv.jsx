import React, { useRef, useEffect, useState } from 'react';
import { truncateText } from '../../../src/utils/truncateText';

function UserDiv(props) {

  const divRef = useRef(null);
  const [truncatedMessage, setTruncatedMessage] = useState('');
  const message = props.message;  // Getting the message from props...

  const windowWidth = window.innerWidth;

  useEffect(() => {
    if (divRef.current) {
      const widthRanges = [
        { min: 681, max: 835, maxWidth: 570 },
        { min: 625, max: 680, maxWidth: 520 },
        { min: 541, max: 624, maxWidth: 470 },
        { min: 490, max: 540, maxWidth: 440 },
        { min: 450, max: 489, maxWidth: 400 },
        { min: 410, max: 449, maxWidth: 370 },
        { min: 0, max: 409, maxWidth: 320 }
      ];

      let maxWidth = 320;

      for (let range of widthRanges) {
        if (windowWidth <= range.max && windowWidth >= range.min) {
          maxWidth = range.maxWidth;
          break;
        }
      }

      const font = window.getComputedStyle(divRef.current).font;
      setTruncatedMessage(truncateText(message, maxWidth, font));
    }
  }, [message, windowWidth]);

  return (
    <div className='userDiv' id="userDiv" >
      <img src={props.img} alt="photo" className='userPhotos' />
      
      <div ref={divRef} style={{ display: "flex", flexDirection: "column", justifyContent: "center", paddingLeft: "2%" }}>
        <span className='userDivName' id="userDivName">{props.name}</span>
        <span className='truncatedMessage'>{truncatedMessage}</span>
      </div>
    </div>
  );
}

export default UserDiv;
