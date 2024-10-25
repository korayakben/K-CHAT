import React from 'react'

function DeleteAccount() {
  return (
    <form action="" className='changeEmailForm'>
        <div className='privSecForm-container'>
            <label htmlFor="currentPassword" className='privSecForm-title'>Password</label>
            <input type="password" name="currentPassword"/>
        </div>

        <div className='privSecForm-container'>
            <label htmlFor="confirmPassword" className='privSecForm-title'>Confirm Password</label>
            <input type="password" name="confirmPassword"/>
        </div>

        <button className='privSecForm-btn' id="deleteAccount-btn">Delete Account</button>
    </form>
  )
}

export default DeleteAccount