import React from 'react'
import CakeIcon from '@mui/icons-material/Cake';
import FemaleIcon from '@mui/icons-material/Female';
import LanguageIcon from '@mui/icons-material/Language';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

function FriendAboutInfo() {

    const friendForm = JSON.parse(localStorage.getItem("broughtUsername")) || "";

  return (
    <div className='about-basicInfo' style={{backgroundColor: "#fff"}}>

                <span className='basicInfo-title'>Basic Info</span>

                <div className='basicInfo-container'>
                        <div className='basicInfo-Icons'>
                                <a><CakeIcon/></a>
                                <span className='basicInfo-birth'>Birthday</span>
                                <span className='basicInfo-birthday'>June 26</span>
                        </div>

                        <div className='basicInfo-Icons'>
                                <a><FemaleIcon/></a>
                                <span className='basicInfo-birth'>Gender</span>
                                <span className='basicInfo-birthday'>{friendForm.gender}</span>
                        </div>

                        <div className='basicInfo-Icons'>
                                <a><LanguageIcon/></a>
                                <span className='basicInfo-birth'>Language</span>
                                <span className='basicInfo-birthday'>English</span>
                        </div>

                        <div className='basicInfo-Icons'>
                                <a><LocationCityIcon/></a>
                                <span className='basicInfo-birth'>Country</span>
                                <span className='basicInfo-birthday'>{friendForm.country}</span>
                        </div>

                        <div className='basicInfo-Icons'>
                                <a><LocalPhoneIcon/></a>
                                <span className='basicInfo-birth'>Phone</span>
                                <span className='basicInfo-birthday'>+98 257 6985</span>
                        </div>

                        <div className='basicInfo-Icons'>
                                <a><EmailIcon/></a>
                                <span className='basicInfo-birth'>Emails</span>
                                <span className='basicInfo-birthday'>{friendForm.email}</span>
                        </div>

                </div>

        </div>
  )
}

export default FriendAboutInfo