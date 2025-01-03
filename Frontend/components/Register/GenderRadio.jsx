import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function GenderRadio({onChange}) {
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel onChange={onChange} name="gender" value="Female" control={<Radio />} label="Female" required/>
        <FormControlLabel onChange={onChange} name="gender" value="Male" control={<Radio />} label="Male" required/>
        <FormControlLabel onChange={onChange} name="gender" value="Other" control={<Radio />} label="Other" required/>
    
      </RadioGroup>
    </FormControl>
  );
}
