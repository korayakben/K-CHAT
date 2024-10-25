import React from 'react'
import "../../public/stories.css"
import DrawerAppBar from '../../components/Chat/Navbar/Navbar'
import StoriesBar from '../../components/Stories/storiesBar'
import StBigPhoto from '../../components/Stories/StBigPhoto'

function StoriesPage() {
  return (
    <div className='storiesPage-container'>
        <DrawerAppBar/>
        <div className='storiesPage-body'>
            <StoriesBar/>
            <StBigPhoto/>
        </div>
    </div>
  )
}

export default StoriesPage