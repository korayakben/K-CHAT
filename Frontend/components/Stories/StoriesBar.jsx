import React from 'react'
import StBarTitles from './StBarTitles';
import StAddIcon from './StAddIcon';

function StoriesBar() {
  return (
    <div className='storiesBar-container'>
        
        <div className='storiesBarTitle-container'>
            <StBarTitles/>
            <StAddIcon/>
        </div>

        <div className='storiesBarDiv'>
        <img src="../../../../public/images/storyImages/story1.jpg" alt="storyPhoto" className='storiesBarPhoto'/>
        <img src="../../../../public/images/storyImages/story2.jpg" alt="storyPhoto" className='storiesBarPhoto'/>
        <img src="../../../../public/images/storyImages/story3.jpg" alt="storyPhoto" className='storiesBarPhoto'/>
        <img src="../../../../public/images/storyImages/story4.jpg" alt="storyPhoto" className='storiesBarPhoto'/>
        <img src="../../../../public/images/storyImages/story5.jpg" alt="storyPhoto" className='storiesBarPhoto'/>
        <img src="../../../../public/images/storyImages/story6.jpg" alt="storyPhoto" className='storiesBarPhoto'/>
        <img src="../../../../public/images/storyImages/story1.jpg" alt="storyPhoto" className='storiesBarPhoto'/>
        <img src="../../../../public/images/storyImages/story2.jpg" alt="storyPhoto" className='storiesBarPhoto'/>
        <img src="../../../../public/images/storyImages/story1.jpg" alt="storyPhoto" className='storiesBarPhoto'/>
        <img src="../../../../public/images/storyImages/story2.jpg" alt="storyPhoto" className='storiesBarPhoto'/>
        <img src="../../../../public/images/storyImages/story1.jpg" alt="storyPhoto" className='storiesBarPhoto'/>
        <img src="../../../../public/images/storyImages/story2.jpg" alt="storyPhoto" className='storiesBarPhoto'/>
        </div>
    </div>
  )
}

export default StoriesBar