import React, { useEffect } from 'react'
import ChatImg from '../components/Home/ChatImg'
import DarkMode from '../components/Home/DarkMode'
import Title from '../components/Home/Title'
import BasicButtons from '../components/Home/Button'
import "../public/styles.css"

function Home() {

  useEffect(()=>{
    document.body.style.backgroundColor = "#fff"
  },[]);

  return (
    <div className='home-container'>
        <div className='left-side'>
        <DarkMode/>
        <Title/>
        <div className='buttons-container'>
        <BasicButtons text="Register" link="/register"/>
        <BasicButtons text="Login" link="/login"/>
        </div>
        </div>
        <ChatImg/>
    </div>
  )
}

export default Home