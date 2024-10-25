import React, { useEffect } from 'react'
import "../../public/register.css"
import Input from '../../components/Register/Input';
import BasicButton from '../../components/Register/Button';
import StrategyButtons from '../../components/Register/StrategyButtons';
import { Link } from "react-router-dom"

function Login() {

  useEffect(()=>{
    document.body.style.overflowX = "hidden"
  },[]);

  return (
    <div className='login-container' style={{width:"120%", marginLeft:"-10%"}}>
      <div className='title'>K Chat Login</div>
      <div className='form-container-login'>
            <div id="form-title">Login</div>
            <form action="">

                <div> 
                  <Input type="email" title="Email Address" placeholder="email@example.com" width="270px"/>
                </div>

                <div style={{display:"flex", flexDirection: "column", marginTop: "-2rem"}}>
                  <Link to="/resetpass" style={{textAlign: "end", position:"relative", top:"35px"}}>Forgot ?</Link>
                    <Input type="password" title="Password" placeholder="password" width="270px"/>
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