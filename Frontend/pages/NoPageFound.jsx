import React, { useEffect } from 'react'
import "../public/styles.css"
import BasicButton from '../components/Register/Button';
import { Link } from "react-router-dom"

function NoPageFound() {

  useEffect(()=>{
    document.body.style.backgroundColor = "rgb(211, 234, 255)"
  },[])

  return (
    <div className='nopagefound'>
        <img src="../public/icons/404.png" alt="404" style={{width: "350px"}} id="nopage-img"/>
        <span className='nopage-title'>Oops! Page does not exist</span>
        <span className='nopage-text'>Looks like you've stumbled upon a page that doesn't exist.</span>

        <Link to="/home"><BasicButton textContent="Back to Home"/></Link>
        
    </div>
  )
}

export default NoPageFound