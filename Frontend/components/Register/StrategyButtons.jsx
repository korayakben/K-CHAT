import React from 'react'
import BasicButton from './Button'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

function StrategyButtons() {
  return (
    <div className='googleSign'>
        <div style={{display: "flex", gap:"1rem"}}>
            <BasicButton bgColor="rgb(221, 221, 221)" color="rgb(59,59,59)" icon={<GoogleIcon/>} textContent="Google"/>
            <BasicButton bgColor="rgb(221, 221, 221)" color="rgb(59,59,59)" icon={<FacebookOutlinedIcon/>} textContent="Facebook"/>
        </div>
    </div>
  )
}

export default StrategyButtons