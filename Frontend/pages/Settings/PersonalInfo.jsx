import React from 'react'
import DrawerAppBar from '../../components/Chat/Navbar/Navbar'
import SettingsTitles from "../../components/Settings/SettingsTitles"
import PersonalInfoForm from '../../components/Settings/PersonalInfo/PersonalInfoForm'

function PersonalInfo() {
  return (
    <div className='personalInfo-container'>
      <DrawerAppBar/>
      <SettingsTitles title="Personal Information"/>
      <PersonalInfoForm/>
    </div>
  )
}

export default PersonalInfo