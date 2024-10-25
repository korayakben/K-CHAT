import React from 'react'

function ChangeEmail() {
  return (
    <form action="" className='changeEmailForm'>
        <div className='privSecForm-container'>
            <label htmlFor="currentEmail" className='privSecForm-title'>Current Email</label>
            <input type="email" name="currentEmail"/>
        </div>

        <div className='privSecForm-container'>
            <label htmlFor="newEmail" className='privSecForm-title'>New Email</label>
            <input type="email" name="newEmail"/>
        </div>

        <div className='privSecForm-container'>
            <label htmlFor="confirmEmail" className='privSecForm-title'>Confirm New Email</label>
            <input type="email" name="confirmEmail"/>
        </div>

        <button className='privSecForm-btn'>Change Email</button>
    </form>
  )
}

export default ChangeEmail