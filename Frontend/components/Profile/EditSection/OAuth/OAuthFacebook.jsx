import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import Button from '@mui/material/Button';

function OAuthFacebook() {
  return (
    <div className='editOAuth-container'>
                
                <div className='facebookIcon'>
                    <FacebookIcon/>
                </div>

                <div className='OAuth-titles'>
                    <span className='OAuth-upperTitle'>Facebook Account</span>
                    <span className='OAuth-lowerTitle'>You can connect with your facebook account.
                    </span>
                </div>

                <Button variant="contained">Connect</Button>

    </div>
  )
}

export default OAuthFacebook