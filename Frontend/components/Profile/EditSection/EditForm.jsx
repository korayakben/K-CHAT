import React, { useContext, useEffect, useState } from 'react';
import axios from "axios";
import { loginContext } from '../../../src/App';

function EditForm() {

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
        <form className='editForm-container'>
            <div className='firstRow'>

                <div>
                    <label className='editSpans' htmlFor="name">First Name</label>
                    <input 
                        type="text" 
                        name="name" 
                        value={name} 
                        className='editInput' 
                        onChange={(e) => setName(e.target.value)}
                        readOnly
                    />
                </div>

                
                <div>
                    <label className='editSpans' htmlFor="lastname">Last Name</label>
                    <input 
                        type="text" 
                        name="lastname" 
                        value={surname} 
                        className='editInput' 
                        onChange={(e) => setLastName(e.target.value)}
                        readOnly
                    />
                </div>

            </div>

            <div className='midRow'>
                <label className='editSpans' htmlFor="email">Main Email</label>
                <input 
                    type="email" 
                    value={email}  
                    name="email" 
                    className='editInput'
                    readOnly
                />
                <span id="emailDesc">You need to have at least one email connected with your account</span>
            </div>

            <div className='firstRow'>

                <div>
                    <label className='editSpans' htmlFor="phone">Phone Number</label>
                    <input 
                        type="text" 
                        name="phone" 
                        className='editInput' 
                        value='+98 257 6985' 
                        readOnly
                    />
                </div>

                
                <div id="countryEdit">
                    <label className='editSpans' htmlFor="country">Country</label>
                    <input 
                        type="text" 
                        name="country" 
                        className='editInput' 
                        value={country} 
                        onChange={(e) => setCountry(e.target.value)}
                        readOnly
                    />
                </div>

            </div>
        </form>
    )
}

export default EditForm;
