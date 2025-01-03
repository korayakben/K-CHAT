import React, { useContext, useEffect, useState } from 'react'
import "../../public/register.css"
import Input from '../../components/Register/Input';
import BasicButton from '../../components/Register/Button';
import StrategyButtons from '../../components/Register/StrategyButtons';
import { Link, useNavigate } from "react-router-dom"
import { Context } from '../../src/App';
import { loginContext } from '../../src/App';
import axios from 'axios';
import { io } from 'socket.io-client';

const socket = io.connect("http://localhost:3000");

function Login() {

  const [ isAuthenticated, setIsAuthenticated ] = useContext(Context);
  const navigate = useNavigate();

  const [emailWarner, setEmailWarner] = useState(null);
  const [passwordWarner, setPasswordWarner] = useState(null);

  useEffect(()=>{
    document.body.style.overflowX = "hidden"
  },[]);


  const [loginForm, setLoginForm] = useContext(loginContext);
  

  const handleChange = async (e)=>{
    const {name, value} = e.target;

    setLoginForm({
            ...loginForm,
            [name]: value
        });
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    const {email, password} = loginForm;

    localStorage.setItem('userEmail', loginForm.email);

    const authForm = await axios.post("http://localhost:3000/v1/authenticator", {
      email: email,
      password: password
    });

    if(!authForm.data.isAuthenticated){
      if(!authForm.data.isEmailCorrect){
        setEmailWarner("User not found"); 
        setIsAuthenticated(false);
      }
      else{
        setPasswordWarner("Password is wrong");
        setEmailWarner(null);
        setIsAuthenticated(false);
      }
    }
    else if(authForm.data.isAuthenticated === "error"){
        setPasswordWarner("An error came up while logging in");
    }
    else{
      socket.emit("loginDatas", {
        email: email,
        password: password
      });
      localStorage.setItem("broughtUsername", '{"id":37,"name":"default","surname":"default","username":"default","email":"default","password":"default","gender":"male","country":"default"}');
      localStorage.setItem("notifications", JSON.stringify([[
        {
          "notifid": "bca645d5-9b71-4a7e-b0e7-5e12a9a03fe8",
          "type": "Friendship",
          "title": "You Have a New Friend Request!",
          "content": "default wanted to add you as a friend. Click to accept the request!",
          "createdat": "2024-12-17T21:49:00.000Z",
          "from_username": "default",
          "to_username": "default"
        }
      ]]));
      
    
      localStorage.setItem("notifCounter", '0');
      
      setIsAuthenticated(true);
      navigate("/profile");
    }
  }

  return (
    <div className='login-container' style={{width:"120%", marginLeft:"-10%"}}>
      <div className='title'>K Chat Login</div>
      <div className='form-container-login'>
            <div id="form-title">Login</div>
            <form action="" onSubmit={handleSubmit}>

                <div> 
                  <Input type="email" title="Email Address" name="email" placeholder="email@example.com" width="270px" onChange={handleChange}/>
                </div>

                <div className='loginWarner'> 
                    {emailWarner}
                </div>

                <div style={{display:"flex", flexDirection: "column", marginTop: "-2rem"}}>
                  <Link to="/resetpass" style={{textAlign: "end", position:"relative", top:"35px"}}>Forgot ?</Link>
                    <Input type="password" title="Password" name="password" placeholder="password" width="270px" onChange={handleChange}/>
                </div>

                <div className='loginWarner'> 
                    {passwordWarner}
                </div>

                <div style={{display: "flex", flexDirection: "column"}}>
                    <BasicButton bgColor="" color="#fff" textContent="Account Login"/>
                    <hr/>
                </div>

                <span style={{color:"grey", textAlign: "center", position: "relative", top:"-2rem"}}>Or log in with</span>
                <StrategyButtons/>
                
            </form>
        </div>
        <div className='haveAccount'>Don't have an account? <Link to="/register">Register</Link></div>

    </div>
  )
}

export default Login