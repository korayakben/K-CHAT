import React, { useContext, useState } from 'react'
import axios from "axios"
import { Context } from '../../../../src/App';

function DeleteAccount() {

  const [isAuthenticated, setIsAuthenticated] = useContext(Context);

  const [deleteForm, setDeleteForm] = useState({
    currentPassword: "",
    confirmPassword: ""
  });

  const [currentWarner, setCurrentWarner] = useState(null);
  const [confirmWarner, setConfirmWarner] = useState(null);

  const currentEmail = localStorage.getItem("userEmail");

  const handleChange = (e)=>{
    const {name, value} = e.target;
    setDeleteForm({...deleteForm, [name]: value});
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    const response = await axios.post("http://localhost:3000/v1/userByEmail", {email: currentEmail});

    const username = response.data[0].username;
    const oldPassword = response.data[0].password;

      if(deleteForm.currentPassword === oldPassword){
        if(deleteForm.currentPassword === deleteForm.confirmPassword){

          try{
            await axios.delete("http://localhost:3000/v1/users", {data: { username: username }});
            setCurrentWarner(null);
            setConfirmWarner(<span style={{color: "green"}}>Your account has been deleted. Glad to have you :(</span>);

            setTimeout(()=>{
              setIsAuthenticated(false);
            }, 1500);
          }
          catch(err){
            setCurrentWarner(null);
            setConfirmWarner(<span>An error occured while deleting your account</span>);
          }
        }
        else{
          setCurrentWarner(null);
          setConfirmWarner(<span>Passwords do not match</span>);
        }
      }
      else{
        setConfirmWarner(null);
        setCurrentWarner(<span>Your password is wrong</span>);
      }
  }

  return (
    <form action="" className='changeEmailForm' onSubmit={handleSubmit}>
        <div className='privSecForm-container'>
            <label htmlFor="currentPassword" className='privSecForm-title'>Password</label>
            <input type="password" required name="currentPassword" onChange={handleChange}/>
        </div>

        <div className='loginWarner'>
          {currentWarner}
        </div>

        <div className='privSecForm-container'>
            <label htmlFor="confirmPassword" className='privSecForm-title'>Confirm Password</label>
            <input type="password" required name="confirmPassword" onChange={handleChange}/>
        </div>

        <div className='loginWarner'>
          {confirmWarner}
        </div>

        <button className='privSecForm-btn' id="deleteAccount-btn" type="submit">Delete Account</button>
    </form>
  )
}

export default DeleteAccount