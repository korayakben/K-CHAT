import React from 'react'
import OAuthGoogle from './OAuthGoogle';
import OAuthFacebook from './OAuthFacebook';

function OAuthForm() {
  return (
    <div className='OAuths-box'>
        <OAuthGoogle/>
        <OAuthFacebook/>
    </div>
  )
}

export default OAuthForm