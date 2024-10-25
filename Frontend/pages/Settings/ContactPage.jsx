import React from 'react'
import DrawerAppBar from '../../components/Chat/Navbar/Navbar'
import SettingsTitles from '../../components/Settings/SettingsTitles'
import OnlineInqTitle from '../../components/Settings/ContactMe/OnlineInquiry/OnlineInqTitle';
import OnlineInqForm from '../../components/Settings/ContactMe/OnlineInquiry/OnlineInqForm';
import DetailsTitle from '../../components/Settings/ContactMe/ContactDetails/DetailsTitle';
import DetailAddresses from '../../components/Settings/ContactMe/ContactDetails/DetailAddresses';

function ContactPage() {
  return (
    <div className='contactPage-container'>
        <DrawerAppBar/>
        <SettingsTitles title="Contact Me"/>
        <div className='contactPage-body'>
                <div className='onlineInquiry'>
                    <OnlineInqTitle/>   
                    <OnlineInqForm/>
                </div>

                <div className='contactDetails-container'>
                    <DetailsTitle/>
                    <DetailAddresses/>
                </div>
        </div>
    </div>
  )
}

export default ContactPage