import React from 'react'
import Button from '@mui/material/Button';
import "../../public/register.css"

function BasicButton(props) {

  const handleClick = ()=>{
    alert(1)
}

  return (
    <Button onClick={handleClick} className='button' variant="contained" sx={{backgroundColor: props.bgColor, color:props.color ,display: "flex", gap:"0.5rem"}}>
        {props.icon} {props.textContent}
    </Button>
  )
}

export default BasicButton