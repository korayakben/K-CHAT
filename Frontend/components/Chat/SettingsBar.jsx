import React, { useContext } from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import SearchIcon from '@mui/icons-material/Search';
import { Link, useNavigate } from "react-router-dom"
import { Context } from '../../src/App';

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

  return (
    <div className='settingsBar-container' id="settingsBar-container" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}> 
      <button><SearchIcon/><Link to="/explore">Explore</Link></button>
      <button><PersonIcon/><Link to="/profile">Profile</Link></button>
      <button><SettingsIcon/><Link to="/settings">Settings</Link></button>
      <button onClick={logOut}><LogoutIcon/>Log Out</button>
    </div>
  )
}

export default SettingsBar