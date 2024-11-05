import axios from 'axios';
import React, { useContext, useState } from 'react'
import { Context } from '../../../../src/App';

function ChangeUsername() {

    const [isAuthenticated, setIsAuthenticated] = useContext(Context);

    const [usernameChange, setUsernameChange] = useState({
      newUsername: "",
      currentPassword: ""
    });

    const [usernameWarner, setUsernameWarner] = useState(null);
    const [passwordWarner, setPasswordWarner] = useState(null);

    const currentEmail = localStorage.getItem("userEmail");

    const handleChange = (e)=>{
      const {name, value} = e.target;
      setUsernameChange({...usernameChange, [name]: value});
    }

    const handleSubmit = async (e)=>{
      e.preventDefault();

      const response = await axios.post("http://localhost:3000/v1/userByEmail", {email: currentEmail});

      const oldUsername = response.data[0].username;
      const oldPassword = response.data[0].password;

      const existenceChecker = await axios.post("http://localhost:3000/v1/usernameCheck", {username: usernameChange.newUsername});

      const usernameExists = existenceChecker.data.usernameExistence;
      
        if(oldUsername === usernameChange.newUsername){
          setUsernameWarner(<span>Your username can't be the same as the old one</span>);
          setPasswordWarner(null);
        }
        else if(usernameExists){
          setUsernameWarner(<span>This username is already taken</span>);
          setPasswordWarner(null);
        }
        else{
          if(oldPassword === usernameChange.currentPassword){
            try{
              await axios.put("http://localhost:3000/v1/updateUsername", {
                currentUsername: oldUsername,
                newUsername: usernameChange.newUsername
              });
              setPasswordWarner(<span style={{color: "green"}}>Your username has successfully been changed</span>);
              setTimeout(()=>{
                setIsAuthenticated(false);
              },1500);
            }
            catch(err){
              console.log(err);
              setPasswordWarner(<span>An error occured while changing your username</span>);
            }
            setUsernameWarner(null);
          }
          else{
            setUsernameWarner(null);
            setPasswordWarner(<span>Wrong password</span>);
          }
        }
    }

  return (
    <form action="" className='changeEmailForm' onSubmit={handleSubmit}>
        <div className='privSecForm-container'>
            <label htmlFor="newUsername" className='privSecForm-title'>New Username</label>
            <input type="text" required name="newUsername" onChange={handleChange}/>
        </div>

        <div className='loginWarner'>
          {usernameWarner}
        </div>

        <div className='privSecForm-container'>
            <label htmlFor="currentPassword" className='privSecForm-title'>Confirm Password</label>
            <input type="password" required name="currentPassword" onChange={handleChange}/>
        </div>

        <div className='loginWarner'>
          {passwordWarner}
        </div>

        <button className='privSecForm-btn' type='submit'>Change Username</button>
    </form>
  )
}

export default ChangeUsername