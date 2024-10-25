import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import ChangeEmail from './Forms/ChangeEmail'; 
import ChangeUsername from './Forms/ChangeUsername';
import ChangePassword from './Forms/ChangePassword';
import DeleteAccount from './Forms/DeleteAccount';

export default function AccordionForm() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <span className='accordionForm-titles'>Change Your Email</span>
        </AccordionSummary>
        <AccordionDetails>
          <ChangeEmail/>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <span className='accordionForm-titles'>Change Your Username</span>
          </AccordionSummary>
        <AccordionDetails>
          <ChangeUsername/>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <span className='accordionForm-titles'>Change Your Password</span>
          </AccordionSummary>
        <AccordionDetails>
          <ChangePassword/>
        </AccordionDetails>
        <AccordionActions>
        </AccordionActions>
      </Accordion>

      <Accordion id="deleteAccount">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <span className='accordionForm-titles'>Delete Your Account</span>
          </AccordionSummary>
        <AccordionDetails>
          <DeleteAccount/>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
