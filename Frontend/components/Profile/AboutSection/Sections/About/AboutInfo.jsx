import React, { useContext, useEffect, useState } from 'react';
import CakeIcon from '@mui/icons-material/Cake';
import FemaleIcon from '@mui/icons-material/Female';
import LanguageIcon from '@mui/icons-material/Language';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import axios from "axios";
import { loginContext } from '../../../../../src/App';

function AboutInfo() {

  const [loginForm, setLoginForm] = useContext(loginContext);
  const [gender, setGender] = useState(() => localStorage.getItem('gender') || ''); 
  const [country, setCountry] = useState(() => localStorage.getItem('country') || ''); 
  const [email, setEmail] = useState(() => localStorage.getItem('email') || ''); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await axios.post("http://localhost:3000/v1/userByEmail", { email: String(loginForm.email) });
        const user = userData.data[0]; 

        setGender(user.gender); 
        setCountry(user.country); 
        setEmail(user.email);

        // Save it to local storage
        localStorage.setItem('gender', user.gender);
        localStorage.setItem('country', user.country);
        localStorage.setItem('email', user.email);
        
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (loginForm.email) {
      fetchData();
    }
  }, [loginForm.email]);


  return (
    <div className='about-basicInfo'>

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
                                <span className='basicInfo-birthday'>{gender}</span>
                        </div>

                        <div className='basicInfo-Icons'>
                                <a><LanguageIcon/></a>
                                <span className='basicInfo-birth'>Language</span>
                                <span className='basicInfo-birthday'>English</span>
                        </div>

                        <div className='basicInfo-Icons'>
                                <a><LocationCityIcon/></a>
                                <span className='basicInfo-birth'>Country</span>
                                <span className='basicInfo-birthday'>{country}</span>
                        </div>

                        <div className='basicInfo-Icons'>
                                <a><LocalPhoneIcon/></a>
                                <span className='basicInfo-birth'>Phone</span>
                                <span className='basicInfo-birthday'>+98 257 6985</span>
                        </div>

                        <div className='basicInfo-Icons'>
                                <a><EmailIcon/></a>
                                <span className='basicInfo-birth'>Emails</span>
                                <span className='basicInfo-birthday'>{email}</span>
                        </div>

                </div>

        </div>
  )
}

export default AboutInfo