import React from 'react'
import "../../public/explore.css"
import DrawerAppBar from '../../components/Chat/Navbar/Navbar'
import ExploreTitle from '../../components/Explore/ExploreTitle'
import ExploreSearchBar from '../../components/Explore/ExploreSearchBar'
import ExploreIcon from '../../components/Explore/ExploreIcon'

function ExplorePage() {;

  return (
    <div className='ExplorePage-container'>
        <DrawerAppBar/>
        <ExploreIcon/>
        <ExploreTitle/>
        <div style={{display: "flex", justifyContent: "center"}}>
          <ExploreSearchBar/>
        </div>
    </div>
  )
}

export default ExplorePage