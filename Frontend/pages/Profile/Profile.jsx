import React, { useContext, useEffect, useState } from 'react';
import DrawerAppBar from '../../components/Chat/Navbar/Navbar';
import CoverPhoto from '../../components/Profile/CovernBoard/CoverPhoto';
import ProfileBoard from '../../components/Profile/CovernBoard/ProfileBoard';
import AboutBar from '../../components/Profile/AboutSection/AboutBar';
import axios from "axios";
import { loginContext, Context } from '../../src/App';

function Profile() {
  const [loginForm] = useContext(loginContext);
  const [isAuthenticated] = useContext(Context); 
  const [name, setName] = useState(() => localStorage.getItem('name') || '');
  const [username, setUsername] = useState(() => localStorage.getItem('username') || '');
  const [contactNumber, setContactNumber] = useState(() => localStorage.getItem('myContactNumber') || 0);

  const fetchContactNumber = async (username) => {
    try {
      const myContactNumberData = await axios.post("http://localhost:3000/v1/bringFriends", { username: username });
      const contactCount = myContactNumberData.data.length;

      setContactNumber(contactCount);

      localStorage.setItem("myContactNumber", contactCount);
    } catch (error) {
      console.error("Error fetching contact number:", error);
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await axios.post("http://localhost:3000/v1/userByEmail", { email: String(loginForm.email) });
        const user = userData.data[0];

        setName(user.name);
        setUsername(user.username);
        fetchContactNumber(user.username);

        localStorage.setItem('name', user.name);
        localStorage.setItem('username', user.username);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (loginForm.email && isAuthenticated) {
      fetchUserData();
    }
  }, [loginForm.email]);

  return (
    <div className='profile-container'>
      <DrawerAppBar />
      <CoverPhoto />
      <ProfileBoard name={name} username={username} contactNumber={contactNumber} />
      <AboutBar />
    </div>
  );
}

export default Profile;
