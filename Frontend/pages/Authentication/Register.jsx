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
import { passwordLengthDetector } from '../../src/utils/passwordLengthDetector';
import { Context } from '../../src/App';
import axios from "axios"
import { usernameChecker } from '../../src/utils/userAPI/usernameChecker';
import { emailChecker } from '../../src/utils/userAPI/emailChecker';

function Register() {

    const [formData, setFormData] = useContext(Context);

    const [passLenghtWarning, setPassLenghtWarning] = useState(null);

    const [successWarner, setSuccessWarner] = useState(null);
    const [emailWarner, setEmailWarner] = useState(null);
    const [usernameWarner, setUsernameWarner] = useState(null);
    const [passwordWarner, setPasswordWarner] = useState(null);

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


    const handleSubmit = async (e)=>{
        e.preventDefault();

        try{
            const usernameExists = await usernameChecker(formData.username);
            const emailExists = await emailChecker(formData.email);

            if(!usernameExists){
                if(!emailExists){
                    const passwordLengthOk = passwordLengthDetector(formData.password);
                    if(passwordLengthOk){
                        if(formData.password === formData.passwordRepeat){
                        await axios.post("http://localhost:3000/v1/register", {
                            name: formData.name,
                            surname: formData.surname,
                            username: formData.username,
                            email: formData.email,
                            password: formData.password,
                            gender: formData.gender,
                            country: formData.country
                        });

                        setEmailWarner(null);
                        setPasswordWarner(null);
                        setUsernameWarner(null);

                        setSuccessWarner(<span style={{color: "green"}}>Your registration is successfully done</span>);

                        setTimeout(()=>{
                            navigate("/login");
                        }, 1500);
                        }
                        else{
                        setEmailWarner(null);
                        setUsernameWarner(null);
                        setPasswordWarner(<span>Passwords do not match</span>);  
                        }
                    }
                    else{
                        setEmailWarner(null);
                        setUsernameWarner(null);
                        setPasswordWarner(<span>Password is too short</span>);  
                    }
                    
                }
                else{
                    setPasswordWarner(null);
                    setUsernameWarner(null);
                    setEmailWarner(<span>This email is already taken</span>);
                }
            }
            else{
                setEmailWarner(null);
                setPasswordWarner(null);
                setUsernameWarner(<span>This username is already taken</span>);
            }

        }
        catch(err){
            setSuccessWarner(<span>An error occured in the registration process</span>);
        }
    }

    
  return (
    <div className='register-container'>
        <div className='title'>K Chat Register</div>
        <div className='form-container'>
            <div id="form-title">Create Account</div>
            <form action="" onSubmit={handleSubmit}>

                <div> 
                    <Input type="text" title="Your Name" placeholder="yourname" name="name" onChange={handleChange}/>
                    <Input type="text" title="Surname" placeholder="surname" name="surname" onChange={handleChange}/>
                </div>


                <div style={{display: "flex", flexDirection: "column", gap: "0"}}>
                    <div style={{fontSize: "90%", marginBottom: "7px"}}>Username:</div>
                    <TextField className="outlined-basic" variant="outlined" type="text" placeholder='username' name="username" onChange={handleChange} required InputProps={{style:{height: "5vh"}}}/>
                </div>

                <div className='loginWarner'>
                    {usernameWarner}
                </div>


                <div style={{display: "flex", flexDirection: "column", gap: "0"}}>
                    <div style={{fontSize: "90%", marginBottom: "7px"}}>Email:</div>
                    <TextField className="outlined-basic" variant="outlined" type="email" placeholder='email' name="email" onChange={handleChange} required InputProps={{style:{height: "5vh"}}}/>
                </div>

                <div className='loginWarner'>
                    {emailWarner}
                </div>

                <div>
                    <Input type="password" title="Password" placeholder="password" name="password" onChange={handleChange}/>
                    <Input type="password" title="Password Repeat" placeholder="password again" name="passwordRepeat" onChange={handleChange}/>
                </div>

                <div className='passwordWarning-container' id="passLengthWarner">
                    {passLenghtWarning}
                </div>

                <div className='loginWarner'>
                {passwordWarner}
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