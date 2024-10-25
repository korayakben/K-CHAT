import React from 'react'

function InternalHeader({upperTitle, lowerTitle}) {
  return (
    <div className='upperEdit-Title'>
        <span className="upperEdit-upperSpan">{upperTitle}</span>
        <span className="upperEdit-lowerSpan">{lowerTitle}</span>
    </div>
  )
}

export default InternalHeader