import React from 'react'
import DrawerAppBar from '../../components/Chat/Navbar/Navbar'
import SettingsCard from '../../components/Settings/MainSettings/SettingsCard'
import SettingsTitles from '../../components/Settings/SettingsTitles'
import { settingsCardList } from '../../src/utils/settingsCardList'

function Settings() {

  return (
    <div className='settings-container'>
        <DrawerAppBar/>
        <SettingsTitles title="Settings"/>
        <div className='settingsCard-container'>
                {
                    settingsCardList.map((element, index)=>{
                        return(
                            <SettingsCard key={index}
                                img={element.img}
                                title={element.title}
                                desc={element.desc}
                                button={element.button}
                                href={element.href}
                            />
                        )
                    })
                }
        </div>
    </div>
  )
}

export default Settings