import React, { useEffect } from 'react'
import "../../public/register.css"
import Input from '../../components/Register/Input'
import BasicButton from '../../components/Register/Button';
import { Link } from "react-router-dom"

function ResetPass() {

  useEffect(()=>{
    document.body.style.overflow = "hidden"
  },[]);

  return (
    <div className='register-container' style={{width:"120%", marginLeft:"-10%", marginTop: "7rem"}}>
      <div className='title'>K Chat Reset Password</div>
      <div className='form-container'>
            <div id="form-title">Recovery Password</div>
              <form action="" className='resetPass-form'>

                  <div id="resetPass-Input"> 
                    <Input type="email" title="Email Address" placeholder="email@example.com" width="180%"/>
                  </div>

                  <div style={{display: "flex", flexDirection: "column"}}>
                      <BasicButton bgColor="" color="#fff" textContent="Reset Password"/>
                  </div>

              </form>
        </div>
        <div className='haveAccount'>Somehow remembered? <Link to="/login">Login</Link></div>

    </div>
  )
}

export default ResetPass