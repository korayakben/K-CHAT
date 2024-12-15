import React from 'react'
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

function NotifRouter() {
    const navigate = useNavigate();

  return (
    <div className='notifRouter-container'>
          <Button variant="contained" onClick={() => navigate("/profile")}>
              <ArrowBackIcon/>
              Go Back to Profile
          </Button>
    </div>
  )
}

export default NotifRouter