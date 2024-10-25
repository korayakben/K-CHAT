import React from 'react'
import { contactAddresses } from '../../../../src/utils/contactAddresses'

function DetailAddresses() {
  return (
    <div className='detailAddresses-container'>
        <div className='contactWays'>
            <span className='emailContact'>korayakben@kchat.com</span>
            <span className='phoneContact'>(908)-725-1256</span>
        </div>

        {
            contactAddresses.map((element, index)=>{
                return(
                    <div className='openAddress' key={index}> 
                        <span className='cityContact'>{element.state}</span>
                        <span className='openAddContact'>{element.address}</span>
                    </div>
                )
            })
        }


    </div>
  )
}

export default DetailAddresses