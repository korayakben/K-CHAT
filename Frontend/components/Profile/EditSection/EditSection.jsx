import React from 'react'
import InternalHeader from './InternalHeader'
import EditForm from './EditForm'
import OAuthForm from './OAuth/OAuthForm'

function EditSection() {

  return (
    <div className='editSection-container'>
        <div className='editSection'>
            
            <div className='upperEdit-Section'>
              <InternalHeader upperTitle="Personal Information" lowerTitle="Edit Your personal Info"/>
              <EditForm/>
            </div>


            <div className='lowerEdit-Section'>
            <InternalHeader upperTitle="Sign-in Method" lowerTitle="Edit Your personal Info"/>
            <OAuthForm/>
            </div>

        </div>
    </div>
  )
}

export default EditSection