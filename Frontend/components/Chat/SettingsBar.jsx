import React, { useContext } from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import SearchIcon from '@mui/icons-material/Search';
import { Link, useNavigate } from "react-router-dom"
import { Context } from '../../src/App';
import axios from 'axios';

function SettingsBar() {

  const [isAuthenticated, setIsAuthenticated] = useContext(Context);
  const navigate = useNavigate();

  const handleMouseOver = ()=>{
    document.getElementById("settingsBar-container").style.display = "flex";
  }

  const handleMouseOut = ()=>{
    document.getElementById("settingsBar-container").style.display = "none";
  }

  const logOut = ()=>{
    setIsAuthenticated(false);
    navigate("/");
  }

  const fetchPersonalData = async ()=>{
    const contactNumberData = await axios.post("http://localhost:3000/v1/bringFriends", {username: localStorage.getItem("username")});

    const contactNumber = contactNumberData.data.length;
    localStorage.setItem("contactNumber", contactNumber);
  }

  return (
    <div className='settingsBar-container' id="settingsBar-container" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}> 

      <div className='settingsLink-container'>
        <SearchIcon/>
        <Link to="/explore" className='settingsLink'>Explore</Link>
      </div>

      <div className='settingsLink-container' onClick={fetchPersonalData}>
        <PersonIcon/><Link to="/profile" className='settingsLink'>Profile</Link>
      </div>

      <div className='settingsLink-container'>
        <SettingsIcon/>
        <Link to="/settings" className='settingsLink'>Settings</Link>
      </div>

      <div className='settingsLink-container' onClick={logOut}>
        <LogoutIcon/>Log Out
        </div>
    </div>
  )
}

export default SettingsBar