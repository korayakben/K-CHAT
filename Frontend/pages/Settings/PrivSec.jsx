import React from 'react'
import DrawerAppBar from '../../components/Chat/Navbar/Navbar'
import AccordionForm from '../../components/Settings/PrivacynSecurity/AccordionForm'
import "../../public/settings.css"
import SettingsTitles from '../../components/Settings/SettingsTitles'

function PrivSec() {

  return (
    <div>
        <DrawerAppBar/>
        <div style={{position: "relative", top: "-2vh"}}>
            <SettingsTitles title="Privacy and Security"/>
        </div>
        <AccordionForm/>
    </div>
  )
}

export default PrivSec