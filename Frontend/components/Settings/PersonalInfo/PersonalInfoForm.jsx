import React, { useContext, useEffect, useState } from 'react';
import { loginContext } from '../../../src/App';

function PersonalInfoForm() {

    const [loginForm, setLoginForm] = useContext(loginContext);
    const [gender, setGender] = useState(() => localStorage.getItem('gender') || ''); 
    const [country, setCountry] = useState(() => localStorage.getItem('country') || ''); 
    const [email, setEmail] = useState(() => localStorage.getItem('email') || ''); 
    const [name, setName] = useState(() => localStorage.getItem('name') || ''); 
    const [surname, setLastName] = useState(() => localStorage.getItem('surname') || ''); 

    useEffect(() => {
        const fetchData = async () => {
        try {
            const userData = await axios.post("http://localhost:3000/v1/userByEmail", { email: String(loginForm.email) });
            const user = userData.data[0]; 

            setName(user.name); 
            setLastName(user.surname)
            setGender(user.gender); 
            setCountry(user.country); 
            setEmail(user.email);

            // Save it to local storage
            localStorage.setItem('gender', user.gender);
            localStorage.setItem('country', user.country);
            localStorage.setItem('email', user.email);
            localStorage.setItem('name', user.name);
            localStorage.setItem('surname', user.surname);
            
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
        };

        if (loginForm.email) {
        fetchData();
        }
    }, [loginForm.email]);

  return (
    <div className='personalForm-container'>
        <form action="" className='personalForm'>
                <div className='personalFormDiv'>
                    <label className='personalLeft'>Name</label>
                    <input type="text" value={name} disabled/>
                </div>

                <div className='personalFormDiv'>
                    <label className='personalLeft'>Surname</label>
                    <input type="text" value={surname} disabled/>
                </div>

                <div className='personalFormDiv'>
                    <label className='personalLeft'>Email</label>
                    <input type="text" value={email} disabled/>
                </div>

                <div className='personalFormDiv'>
                    <label className='personalLeft'>Birthday</label>
                    <input type="text" value="Birthday" disabled/>
                </div>

                <div className='personalFormDiv'>
                    <label className='personalLeft'>Gender</label>
                    <input type="text" value={gender} disabled/>
                </div>
        </form>
    </div>
  )
}

export default PersonalInfoForm