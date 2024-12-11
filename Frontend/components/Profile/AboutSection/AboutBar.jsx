import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import About from './Sections/About';
import MutualContacts from './Sections/MutualContacts';
import Stories from './Sections/Stories';
import EditSection from '../EditSection/EditSection';

function AboutBar() {

    const [activeSection, setActiveSection] = useState("about");

    const displayStyles = (section) => {
      return section === activeSection ? "flex" : "none";
    };

    return (
        <div className='aboutSection-container'>
            <ButtonGroup aria-label="Basic button group" className='aboutBar-container'>
                <div className='aboutBar'>
                    <Button onClick={() => setActiveSection("about")}>About</Button>
                    {/* <Button onClick={() => setActiveSection("contacts")}>Mutual Contacts</Button> */}
                    <Button onClick={() => setActiveSection("stories")}>Stories</Button>
                    <Button onClick={() => setActiveSection("edit")}>Edit Profile</Button>
                </div>
            </ButtonGroup>

            <div className='sections-container'>
                <div id="aboutPart" style={{ display: displayStyles("about") }}><About /></div>
                <div id="mutualContactsPart" style={{ display: displayStyles("contacts") }}><MutualContacts /></div>
                <div id="storiesPart" style={{ display: displayStyles("stories") }}><Stories /></div>
                <div id="editPart" style={{ display: displayStyles("edit") }}><EditSection /></div>
            </div>
        </div>
    )
}

export default AboutBar;
