import React from 'react'
import Button from '@mui/material/Button';
import "../../public/register.css"

function BasicButton(props) {

  return (
    <Button type="submit" className='button' variant="contained" sx={{backgroundColor: props.bgColor, color:props.color ,display: "flex", gap:"0.5rem"}}>
        {props.icon} {props.textContent}
    </Button>
  )
}

export default BasicButton