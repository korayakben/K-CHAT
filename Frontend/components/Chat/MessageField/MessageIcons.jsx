import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import CollectionsIcon from '@mui/icons-material/Collections';
import AddReactionIcon from '@mui/icons-material/AddReaction';

function MessageIcons() {

  return (
    <div style={{display: "flex", gap: "0.75rem"}}>
        <button className='MessageBarIcons'><AddIcon/></button>
        <button className='MessageBarIcons'><CollectionsIcon/></button>
        <button className='MessageBarIcons'><AddReactionIcon/></button>
    </div>
  )
}

export default MessageIcons