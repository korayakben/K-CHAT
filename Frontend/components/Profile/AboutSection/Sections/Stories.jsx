import React, { useState } from 'react'
import StoryTitle from './Stories/StoryTitle';
import StoryBar from './Stories/StoryBar';
import BigStory from './Stories/BigStory';

function Stories() {

  return (
    <div className='stories-container'>
        <div className='stories'>
          <StoryTitle/>
          <StoryBar/>
        </div>

        <BigStory/>
    </div>
  )
}

export default Stories