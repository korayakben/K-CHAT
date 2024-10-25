import React from 'react'
import "../../public/register.css"
import TextField from '@mui/material/TextField';

function Input(props) {

  return (
    <div className='input-container'>
        <div style={{fontSize: "90%", marginBottom: "7px"}}>{props.title}</div>
        <TextField className="outlined-basic" placeholder={props.placeholder} variant="outlined" type={props.type} name={props.name} value={props.value} required InputProps={{style:{width: props.width, height: "5vh"}}} onChange={props.onChange}/>
    </div>
  )
}

export default Input