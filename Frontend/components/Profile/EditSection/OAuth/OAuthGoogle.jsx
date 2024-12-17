import React from 'react'
import GoogleIcon from '@mui/icons-material/Google';
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

function OAuthGoogle() {
  return (
    <div className='editOAuth-container'>
                
                <div className='googleIcon'>
                    <GoogleIcon/>
                </div>

                <div className='OAuth-titles'>
                    <span className='OAuth-upperTitle'>Google Account</span>
                    <span className='OAuth-lowerTitle'>Your google account is connected.
                    </span>
                </div>

                <Switch {...label} defaultChecked id="googleOAuthChecked"/>

    </div>
  )
}

export default OAuthGoogle