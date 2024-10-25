import React from 'react'

function PersonalInfoForm() {
  return (
    <div className='personalForm-container'>
        <form action="" className='personalForm'>
                <div className='personalFormDiv'>
                    <label htmlFor="" className='personalLeft'>Name</label>
                    <input type="text" value="Name" disabled/>
                </div>

                <div className='personalFormDiv'>
                    <label htmlFor="" className='personalLeft'>Surname</label>
                    <input type="text" value="Surname" disabled/>
                </div>

                <div className='personalFormDiv'>
                    <label htmlFor="" className='personalLeft'>Email</label>
                    <input type="text" value="Email" disabled/>
                </div>

                <div className='personalFormDiv'>
                    <label htmlFor="" className='personalLeft'>Birthday</label>
                    <input type="text" value="Birthday" disabled/>
                </div>

                <div className='personalFormDiv'>
                    <label htmlFor="" className='personalLeft'>Gender</label>
                    <input type="text" value="Gender" disabled/>
                </div>
        </form>
    </div>
  )
}

export default PersonalInfoForm