import React from 'react'
import "../../public/register.css"
import TextField from '@mui/material/TextField';

function Input(props) {

  const handleChange = (e)=>{
    console.log(e.target.value);
  }

  return (
    <div className='input-container'>
        <div style={{fontSize: "90%", marginBottom: "7px"}}>{props.title}</div>
        <TextField className="outlined-basic" placeholder={props.placeholder} variant="outlined" type={props.type} required InputProps={{style:{width: props.width, height: "5vh"}}} onChange={handleChange}/>
    </div>
  )
}

export default Input