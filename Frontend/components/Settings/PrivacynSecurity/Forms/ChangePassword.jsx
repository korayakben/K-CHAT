import React, { useContext, useState } from 'react'
import axios from "axios"
import { Context } from '../../../../src/App';

function ChangePassword() {

  const [isAuthenticated, setIsAuthenticated] = useContext(Context);

  const [changePassForm, setChangePassForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  const [currentWarner, setCurrentWarner] = useState(null);
  const [confirmWarner, setConfirmWarner] = useState(null);

  const currentEmail = localStorage.getItem("userEmail");

  const handleChange = (e)=>{
    const {name, value} = e.target;
    setChangePassForm({...changePassForm, [name]: value});
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    
    const getCredentials = await axios.post("http://localhost:3000/v1/userByEmail", {email: currentEmail});
    
    const userPassword = getCredentials.data[0].password;
    
    if(userPassword === changePassForm.currentPassword){
      if(changePassForm.newPassword === changePassForm.confirmPassword){
          try{
            await axios.put("http://localhost:3000/v1/updatePassword", {
              currentEmail: currentEmail,
              newPassword: changePassForm.newPassword
            });
            setCurrentWarner(null);
            setConfirmWarner(<span style={{color: "green"}}>Your password has successfully been changed</span>);
            setTimeout(()=>{
              setIsAuthenticated(false);
            }, 1500);
          }
          catch(err){
            console.log(err);
            setCurrentWarner(null);
            setConfirmWarner(<span>An error occured while changing your password</span>);
          }
      }
      else{
        setConfirmWarner(<span>Passwords do not match</span>);
        setCurrentWarner(null);
      }
    }
    else{
      setCurrentWarner(<span>Your password is wrong</span>);
      setConfirmWarner(null);
    }
  }

  return (
    <form action="" className='changeEmailForm' onSubmit={handleSubmit}>
        <div className='privSecForm-container'>
            <label htmlFor="currentPassword" className='privSecForm-title'>Current Password</label>
            <input type="password" required name="currentPassword" onChange={handleChange}/>
        </div>

        <div className='loginWarner'>
          {currentWarner}
        </div>

        <div className='privSecForm-container'>
            <label htmlFor="newPassword" className='privSecForm-title'>New Password</label>
            <input type="password" required name="newPassword" onChange={handleChange}/>
        </div>

        <div className='privSecForm-container'>
            <label htmlFor="confirmPassword" className='privSecForm-title'>Confirm New Password</label>
            <input type="password" required name="confirmPassword" onChange={handleChange}/>
        </div>

        <div className='loginWarner'>
          {confirmWarner}
        </div>

        <button className='privSecForm-btn' type="submit">Change Password</button>
    </form>
  )
}

export default ChangePassword