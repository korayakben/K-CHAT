import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
import { Context } from '../../../../src/App';

function ChangeEmail() {

  const [isAuthenticated, setIsAuthenticated] = useContext(Context);
  const [emailChange, setEmailChange] = useState({
    newEmail: "",
    currentPassword: ""
  });
  const currentEmail = localStorage.getItem("userEmail");

  const [emailWarner, setEmailWarner] = useState(null);
  const [passwordWarner, setPasswordWarner] = useState(null);

  const handleChange = (e)=>{
    const {name, value} = e.target;
    setEmailChange({...emailChange, [name]: value});
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();

    const emailExists = await axios.post("http://localhost:3000/v1/emailCheck", {email: emailChange.newEmail});

    const getCredentials = await axios.post("http://localhost:3000/v1/userByEmail", {email: currentEmail});

    const currentPassword = getCredentials.data[0].password;
  

    if(!emailExists.data.emailExistence){
        if(emailChange.currentPassword === currentPassword){
          try{
            await axios.put(`http://localhost:3000/v1/updateEmail`, {
              currentEmail: currentEmail,
              newEmail: emailChange.newEmail
            });
            setEmailWarner(null);
            setPasswordWarner(<span style={{color: "green"}}>Your email has successfully been changed</span>);
            setTimeout(()=>{
            setIsAuthenticated(false);
            },1500);
          }
          catch(err){
            setPasswordWarner("An error occured while changing your email");
          }
        }
        else{
          setPasswordWarner(<span>Your password is wrong</span>);
          setEmailWarner(null);
        }
    } 
    else{
      setEmailWarner(<span>This email is already taken</span>);
    }
  }

  return (
    <form action="" className='changeEmailForm' onSubmit={handleSubmit}>
        <div className='privSecForm-container'>
            <label htmlFor="newEmail" className='privSecForm-title'>New Email</label>
            <input type="email" name="newEmail" required onChange={handleChange}/>
        </div>

      <div className='loginWarner'>
        {emailWarner}
      </div>

        <div className='privSecForm-container'>
            <label htmlFor="currentPassword" className='privSecForm-title'>Confirm Password</label>
            <input type="password" required name="currentPassword" onChange={handleChange}/>
        </div>

        <div className='loginWarner'>
        {passwordWarner}
      </div>

        <button className='privSecForm-btn' type="submit">Change Email</button>
    </form>
  )
}

export default ChangeEmail