import React, { useEffect } from 'react'
import "../../public/register.css"
import Input from '../../components/Register/Input'
import BasicButton from '../../components/Register/Button';
import PrivPol from '../../components/Register/PrivPol';
import StrategyButtons from '../../components/Register/StrategyButtons';
import { Link } from "react-router-dom"
import TextField from '@mui/material/TextField';
import GenderRadio from '../../components/Register/GenderRadio';
import CountrySelect from '../../components/Register/CountrySelect';


function Register() {

    useEffect(()=>{
        document.body.style.overflow = "auto"
    },[]);
    
  return (
    <div className='register-container'>
        <div className='title'>K Chat Register</div>
        <div className='form-container'>
            <div id="form-title">Create Account</div>
            <form action="">

                <div> 
                    <Input type="text" title="Your Name" placeholder="yourname"/>
                    <Input type="text" title="Surname" placeholder="surname"/>
                </div>

                <div style={{display: "flex", flexDirection: "column", gap: "0"}}>
                    <div style={{fontSize: "90%", marginBottom: "7px"}}>Email:</div>
                    <TextField className="outlined-basic" variant="outlined" type="email" placeholder='email' required InputProps={{style:{height: "5vh"}}}/>
                </div>

                <div>
                    <Input type="password" title="Password" placeholder="password"/>
                    <Input type="password" title="Password Repeat" placeholder="password again"/>
                </div>

                <div className='genderRadio-container'>
                    <GenderRadio/>
                </div>
                
                <div className='genderRadio-container'>
                    <CountrySelect/>
                </div>


                <PrivPol/>

                <div style={{display: "flex", flexDirection: "column", marginTop:"-0.5rem", position:"relative", top:"-0.7rem"}}>
                    <BasicButton bgColor="" color="#fff" textContent="Account Register"/>
                    <hr style={{position: "relative", top:"-10px"}}/>
                </div>

                <span style={{color:"grey", textAlign: "center", position: "relative", top:"-2rem"}}>Or sign up with</span>

                <StrategyButtons/>

                <button>Wait a min</button>
                <button>Wait a min</button>
                <button>Wait a min</button>
                
            </form>
        </div>
        <div className='haveAccount'>Already have an account? <Link to="/login">Login</Link></div>
    </div>
  )
}

export default Register