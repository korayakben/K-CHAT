import React from 'react'

function ChangeUsername() {
  return (
    <form action="" className='changeEmailForm'>
        <div className='privSecForm-container'>
            <label htmlFor="currentUsername" className='privSecForm-title'>Current Username</label>
            <input type="text" name="currentUsername"/>
        </div>

        <div className='privSecForm-container'>
            <label htmlFor="newUsername" className='privSecForm-title'>New Username</label>
            <input type="text" name="newUsername"/>
        </div>

        <div className='privSecForm-container'>
            <label htmlFor="confirmUsername" className='privSecForm-title'>Confirm New Username</label>
            <input type="text" name="confirmUsername"/>
        </div>

        <button className='privSecForm-btn'>Change Username</button>
    </form>
  )
}

export default ChangeUsername