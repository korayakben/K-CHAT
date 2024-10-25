import React from 'react'

function EditForm() {
  return (
    <form className='editForm-container'>
        <div className='firstRow'>

            <div>
                <label className='editSpans' htmlFor="name">First Name</label>
                <input type="text" name="name" value="Nina" className='editInput'/>
            </div>

            
            <div>
                <label className='editSpans' htmlFor="lastname">Last Name</label>
                <input type="text" name="lastname" value="Dubois" className='editInput'/>
            </div>

        </div>



        <div className='midRow'>
                <label className='editSpans' htmlFor="email">Main Email</label>
                <input type="email" value="nina_dubois@themeyn.com" disabled name="email" className='editInput'/>
                <span id="emailDesc">You need to have at least one email connected with your account</span>
        </div>


        <div className='firstRow'>

            <div>
                <label className='editSpans' htmlFor="phone">Phone Number</label>
                <input type="text" name="phone" className='editInput' placeholder='Your Number'/>
            </div>

            
            <div id="countryEdit">
                <label className='editSpans' htmlFor="country">Country</label>
                <input type="text" name="country" className='editInput' placeholder='America'/>
            </div>

        </div>


    </form>
  )
}

export default EditForm