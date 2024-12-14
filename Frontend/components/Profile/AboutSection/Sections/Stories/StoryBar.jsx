import React from 'react';
import {io} from "socket.io-client"

const socket = io.connect("http://localhost:3000");

function StoryBar() {
  const images = [
    'story1.jpg', 'story2.jpg', 'story3.jpg', 'story4.jpg',
    'story1.jpg', 'story2.jpg', 'story3.jpg', 'story4.jpg',
    'story1.jpg', 'story2.jpg', 'story3.jpg', 'story4.jpg'
  ];

  const handleImageClick = (src) => {
    const img_URL = `../../../../public/images/storyImages/${src}`;
    socket.emit("getStoryProfile", {imgUrl: img_URL});
  };

  return (
    <div className='storiesDiv'>
      {images.map((image, index) => (
        <img
          key={index}
          src={`../../../../public/images/storyImages/${image}`}
          alt="storyPhoto"
          className='storyPhoto'
          onClick={() => handleImageClick(image)}
        />
      ))}
    </div>
  );
}

export default StoryBar;
