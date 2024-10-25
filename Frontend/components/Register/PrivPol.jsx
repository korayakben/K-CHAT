import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import { Link } from "react-router-dom"
import "../../public/register.css"

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function PrivPol() {
  return (
    <div className='priv-pol'>
        <Checkbox {...label} /> 
        <span>I agree with <Link to="/">privacy & policy terms</Link></span>
    </div>
  )
}

export default PrivPol