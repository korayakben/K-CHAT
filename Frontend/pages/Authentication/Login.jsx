import React, { useContext, useEffect, useState } from 'react'
import "../../public/register.css"
import Input from '../../components/Register/Input';
import BasicButton from '../../components/Register/Button';
import StrategyButtons from '../../components/Register/StrategyButtons';
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { Context } from '../../src/App';
import { loginContext } from '../../src/App';
import { authenticator } from '../../src/utils/authenticator';

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

    authenticator(email, password, setIsAuthenticated, setEmailWarner, setPasswordWarner, navigate);
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