import React, { useContext, useEffect, useState } from 'react'
import "../../public/register.css"
import Input from '../../components/Register/Input'
import BasicButton from '../../components/Register/Button';
import PrivPol from '../../components/Register/PrivPol';
import StrategyButtons from '../../components/Register/StrategyButtons';
import { Link, useNavigate } from "react-router-dom"
import TextField from '@mui/material/TextField';
import GenderRadio from '../../components/Register/GenderRadio';
import CountrySelect from '../../components/Register/CountrySelect';
import { sendDatas } from '../../src/utils/sendFormDatas';
import { isPasswordMatch } from '../../src/utils/isPasswordMatch';
import { passwordLengthDetecter } from '../../src/utils/passwordLengthDetecter';
import { Context } from '../../src/App';

function Register() {

    const [formData, setFormData] = useContext(Context);

    const [passLenghtWarning, setPassLenghtWarning] = useState(null);
    const [passMatchWarning, setPassMatchWarning] = useState(null);

    const [successWarner, setSuccessWarner] = useState(null);

    const navigate = useNavigate();

    useEffect(()=>{
        document.body.style.overflow = "auto"
    },[]);

    const handleChange = (e)=>{
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = (e)=>{
        passwordLengthDetecter(formData.password) && isPasswordMatch(formData.password, formData.passwordRepeat) ? sendDatas(formData) : null;

        setSuccessWarner(<span style={{color: "green"}}>Registration is done. Welcome to K Chat</span>);

        navigate("/login");
    }


    const passLengthWarner = ()=>{
        passwordLengthDetecter(formData.password) ? setPassLenghtWarning(<span id='validPassword'>Nice Password</span>) : setPassLenghtWarning(<span id='invalidPassword'>Invalid Password</span>);
    }

    
    const passMatchWarner = ()=>{
        document.getElementById("passLengthWarner").style.display = "none"
        isPasswordMatch(formData.password, formData.passwordRepeat) ? setPassMatchWarning(<span id="validMatching">Passwords correctly match :)</span>) : setPassMatchWarning(<span id="invalidMatching">Passwords do not match!</span>)
    }
    
  return (
    <div className='register-container'>
        <div className='title'>K Chat Register</div>
        <div className='form-container'>
            <div id="form-title">Create Account</div>
            <form action="" onSubmit={(e)=>{
                e.preventDefault();
                handleSubmit();
                passwordLengthDetecter(formData.password) ? passMatchWarner() : null;
            }}>

                <div> 
                    <Input type="text" title="Your Name" placeholder="yourname" name="name" onChange={handleChange}/>
                    <Input type="text" title="Surname" placeholder="surname" name="surname" onChange={handleChange}/>
                </div>


                <div style={{display: "flex", flexDirection: "column", gap: "0"}}>
                    <div style={{fontSize: "90%", marginBottom: "7px"}}>Username:</div>
                    <TextField className="outlined-basic" variant="outlined" type="text" placeholder='username' name="username" onChange={handleChange} required InputProps={{style:{height: "5vh"}}}/>
                </div>


                <div style={{display: "flex", flexDirection: "column", gap: "0"}}>
                    <div style={{fontSize: "90%", marginBottom: "7px"}}>Email:</div>
                    <TextField className="outlined-basic" variant="outlined" type="email" placeholder='email' name="email" onChange={handleChange} required InputProps={{style:{height: "5vh"}}}/>
                </div>

                <div>
                    <Input type="password" title="Password" placeholder="password" name="password" onChange={(e)=>{
                        handleChange(e);
                        passLengthWarner()
                    }}/>
                    <Input type="password" title="Password Repeat" placeholder="password again" name="passwordRepeat" onChange={handleChange}/>
                </div>

                <div className='passwordWarning-container' id="passLengthWarner">
                    {passLenghtWarning}
                </div>

                <div className='passwordWarning-container'>
                {passMatchWarning}
                </div>

                <div className='genderRadio-container'>
                    <GenderRadio onChange={handleChange}/>
                </div>
                
                <div className='genderRadio-container'>
                    <CountrySelect onChange={handleChange}/>
                </div>


                <PrivPol/>

                <div className='loginWarner'>
                    {successWarner}
                </div>

                <div style={{display: "flex", flexDirection: "column", marginTop:"-0.5rem", position:"relative", top:"-0.7rem"}}>
                    <BasicButton bgColor="" color="#fff" textContent="Account Register"/>
                    <hr style={{position: "relative", top:"-10px"}}/>
                </div>

                <span style={{color:"grey", textAlign: "center", position: "relative", top:"-2rem"}}>Or sign up with</span>

                <StrategyButtons/>
                
            </form>
        </div>
        <div className='haveAccount'>Already have an account? <Link to="/login">Login</Link></div>
    </div>
  )
}

export default Register