import React, { useEffect, useState } from 'react'
import {io} from "socket.io-client"

const socket = io.connect("http://localhost:3000");

function StBigPhoto() {

  const [img, setImg] = useState("../../public/images/storyImages/6.jpg");

  useEffect(()=>{
    socket.on("transferStory", (data)=>{
      setImg(data.imgUrl);
    });
  }, []);

  return (
    <div className='stBigPhoto-container'>       
        <img src={img} alt="storyBigPhoto" className='stBigPhoto'/>
    </div>
  )
}

export default StBigPhoto