import React, { useContext, useEffect, useState } from 'react'
import { loginContext } from '../../../../../src/App';
import axios from "axios"

function AboutTitle() {

  const [loginForm, setLoginForm] = useContext(loginContext);
  const [name, setName] = useState(() => localStorage.getItem('name') || ''); 
  const [username, setUsername] = useState(() => localStorage.getItem('username') || ''); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await axios.post("http://localhost:3000/v1/userByEmail", { email: String(loginForm.email) });
        const user = userData.data[0]; 

        setName(user.name); 
        setUsername(user.username); 

        // Save it to local storage
        localStorage.setItem('name', user.name);
        localStorage.setItem('username', user.username);
        
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (loginForm.email) {
      fetchData();
    }
  }, [loginForm.email]);

  return (
    <div className='about-title'>
        About {name}
    </div>
  )
}

export default AboutTitle