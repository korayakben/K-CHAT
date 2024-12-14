import React from 'react';
import StBarTitles from './StBarTitles';
import StAddIcon from './StAddIcon';
import {io} from "socket.io-client"

const socket = io.connect("http://localhost:3000");

function StoriesBar() {
  const handleImageClick = (src) => {
    const img_URL = `../../public/images/storyImages/${src}`;
    socket.emit("getStory", {imgUrl: img_URL});
  };

  return (
    <div className='storiesBar-container'>
      <div className='storiesBarTitle-container'>
        <StBarTitles />
        <StAddIcon />
      </div>

      <div className='storiesBarDiv'>
        {[
          'story1.jpg',
          'story2.jpg',
          'story3.jpg',
          'story4.jpg',
          'story5.jpg',
          'story6.jpg',
          'story1.jpg',
          'story2.jpg',
          'story1.jpg',
          'story2.jpg',
          'story1.jpg',
          'story2.jpg',
        ].map((image, index) => (
          <img
            key={index}
            src={`../../../../public/images/storyImages/${image}`}
            alt="storyPhoto"
            className='storiesBarPhoto'
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>
    </div>
  );
}

export default StoriesBar;
