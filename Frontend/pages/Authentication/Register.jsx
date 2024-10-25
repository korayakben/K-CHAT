import React, { useEffect, useState } from 'react'
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

    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        password: '',
        passwordRepeat: '',
        gender: '',
        country: ''
    });

    useEffect(()=>{
        document.body.style.overflow = "auto"
    },[]);

    const onChange = (e)=>{
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        alert(formData);
        console.log(formData);
    }
    
  return (
    <div className='register-container'>
        <div className='title'>K Chat Register</div>
        <div className='form-container'>
            <div id="form-title">Create Account</div>
            <form action="" onSubmit={handleSubmit}>

                <div> 
                    <Input type="text" title="Your Name" placeholder="yourname" name="name" onChange={onChange}/>
                    <Input type="text" title="Surname" placeholder="surname" name="surname" onChange={onChange}/>
                </div>

                <div style={{display: "flex", flexDirection: "column", gap: "0"}}>
                    <div style={{fontSize: "90%", marginBottom: "7px"}}>Email:</div>
                    <TextField className="outlined-basic" variant="outlined" type="email" placeholder='email' name="email" onChange={onChange} required InputProps={{style:{height: "5vh"}}}/>
                </div>

                <div>
                    <Input type="password" title="Password" placeholder="password" name="password" onChange={onChange}/>
                    <Input type="password" title="Password Repeat" placeholder="password again" name="passwordRepeat" onChange={onChange}/>
                </div>

                <div className='genderRadio-container'>
                    <GenderRadio onChange={onChange}/>
                </div>
                
                <div className='genderRadio-container'>
                    <CountrySelect onChange={onChange}/>
                </div>


                <PrivPol/>

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