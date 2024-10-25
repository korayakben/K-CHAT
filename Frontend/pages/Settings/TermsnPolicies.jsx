import React from 'react'
import DrawerAppBar from "../../components/Chat/Navbar/Navbar";
import Terms from '../../components/Settings/TermsnPolicies.jsx/Terms';
import SettingsTitles from '../../components/Settings/SettingsTitles';

function TermsnPolicies() {
  return (
    <div>
        <DrawerAppBar/>
        <SettingsTitles title="Terms and Policies for K Chat Application"/>
        <Terms/>
    </div>
  )
}

export default TermsnPolicies