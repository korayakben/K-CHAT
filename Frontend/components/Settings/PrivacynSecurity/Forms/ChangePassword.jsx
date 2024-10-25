import React from 'react'

function ChangePassword() {
  return (
    <form action="" className='changeEmailForm'>
        <div className='privSecForm-container'>
            <label htmlFor="currentPassword" className='privSecForm-title'>Current Password</label>
            <input type="password" name="currentPassword"/>
        </div>

        <div className='privSecForm-container'>
            <label htmlFor="newPassword" className='privSecForm-title'>New Password</label>
            <input type="password" name="newPassword"/>
        </div>

        <div className='privSecForm-container'>
            <label htmlFor="confirmPassword" className='privSecForm-title'>Confirm New Password</label>
            <input type="password" name="confirmPassword"/>
        </div>

        <button className='privSecForm-btn'>Change Password</button>
    </form>
  )
}

export default ChangePassword