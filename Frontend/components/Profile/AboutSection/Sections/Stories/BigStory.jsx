import React, { useEffect, useState } from 'react'
import {io} from "socket.io-client"

const socket = io.connect("http://localhost:3000");

function BigStory() {

  const [img, setImg] = useState("../../../../public/images/storyImages/6.jpg");

  useEffect(()=>{
      socket.on("transferStoryProfile", (data)=>{
        setImg(data.imgUrl);
      });
    }, []);

  return (
   <div className='bigPhoto-container'>
        <img src={img} alt="storyPhoto" className='bigPhoto'/>
   </div>
  )
}

export default BigStory