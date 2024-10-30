import React, { useEffect, useState } from 'react'
import "../../public/register.css"
import Input from '../../components/Register/Input'
import BasicButton from '../../components/Register/Button';
import { Link } from "react-router-dom"
import axios from "axios"

function ResetPass() {

  const [emailInput, setEmailInput] = useState(null);
  const [emailWarner, setEmailWarner] = useState("");

  const handleChange = (e)=>{
    setEmailInput(e.target.value);
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    const emailChecker = await axios.get(`http://localhost:3000/v1/emailCheck?email=${emailInput}`);

    let emailExists = emailChecker.data.emailExistence;
    console.log(emailExists);

    !emailExists ? setEmailWarner(<span style={{color: "red"}}>User not found</span>) : setEmailWarner(<span style={{color: "green"}}>An email to reset your password has been sent</span>);
  }

  useEffect(()=>{
    document.body.style.overflow = "hidden"
  },[]);

  return (
    <div className='register-container' style={{width:"120%", marginLeft:"-10%", marginTop: "7rem"}}>
      <div className='title'>K Chat Reset Password</div>
      <div className='form-container'>
            <div id="form-title">Recovery Password</div>
              <form action="" className='resetPass-form' onSubmit={handleSubmit}>

                  <div id="resetPass-Input"> 
                    <Input type="email" title="Email Address" placeholder="email@example.com" width="180%" name="resetPass" onChange={handleChange}/>
                  </div>

                  <div className='loginWarner'>
                      {emailWarner}
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