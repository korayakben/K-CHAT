import React, { useContext, useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { loginContext } from '../../../../src/App';
import axios from "axios"
import { useNavigate } from 'react-router-dom';

function OnlineInqForm() {

  const [loginForm, setLoginForm] = useContext(loginContext);
  const [name, setName] = useState(() => localStorage.getItem('name') || ''); 
  const [email, setEmail] = useState(() => localStorage.getItem('email') || ''); 

  const [inquiryWarner, setInquiryWarner] = useState(null);

  const [inqData, setInqData] = useState({
    name: name,
    email: email,
    phone: "",
    topic: "",
    message: ""
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await axios.post("http://localhost:3000/v1/userByEmail", { email: String(loginForm.email) });
        const user = userData.data[0]; 

        setName(user.name); 
        setEmail(user.email);

        // Save it to local storage
        localStorage.setItem('name', user.name);
        localStorage.setItem('email', user.email);

      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (loginForm.email) {
      fetchData();
    }
  }, [loginForm.email]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setInqData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const sendToServer = async (inq)=>{
    try{
      const dataForm = await axios.post("http://localhost:3000/v1/inquiryRequest", {inquiry: inq});
      setInquiryWarner(<span className='inquiryWarnerSuccess'>Your inquiry has successfully been sent</span>);
    }
    catch(err){
      console.log(`An error occured while grabbing the inquiry. ${err}`);
      setInquiryWarner(<span className='inquiryWarnerError'>An error occured while sending your inquiry</span>);
    }
  } 

  const handleSubmit = (e) => {
    e.preventDefault();
    sendToServer(inqData);
  };

  return (
    <form action="" className='onlineInq-Form' onSubmit={handleSubmit}>
        <TextField className='onlineInq-input' value={name} variant="outlined" required disabled/>
        <TextField className='onlineInq-input' value={email} variant="outlined" required disabled/>
        <TextField className='onlineInq-input' name="phone" placeholder='Phone' variant="outlined" required onChange={handleChange}/>
        <TextField className='onlineInq-input' name="topic" placeholder='Topic' variant="outlined" required onChange={handleChange}/>
        <textarea id="textArea" className='onlineInq-input' name="message" placeholder='Message...' variant="outlined" required onChange={handleChange}/>
        <Button variant="contained" id="contactSend-btn" type='submit'>Send</Button>
        <div>
          {inquiryWarner}
        </div>
    </form>
  )
}

export default OnlineInqForm