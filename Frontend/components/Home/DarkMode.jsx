import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

export default function RowRadioButtonsGroup() {
    const [buttonColor, setButtonColor] = React.useState("grey");

    const [modeImg, setModeImg] = React.useState(<DarkModeIcon className='mode-icon' sx={{position: "relative", top:"4px", left:"-3%"}}/>);
    
    const body = document.body;

    function seeDark(){
        body.style.backgroundColor = "rgb(35, 35, 35)";
        body.style.transition = "1s";
        body.style.color = "#fff";
        setButtonColor("#fff");
        setModeImg(<LightModeIcon className='mode-icon' sx={{position: "relative", top:"4px", left:"-3%"}}/>);

        document.getElementById("description").style.color = "#fff"
    }

    function seeLight(){
        body.style.backgroundColor = "#fff";
        body.style.transition = "1s";
        body.style.color = "grey";
        setButtonColor("grey");
        setModeImg(<DarkModeIcon className='mode-icon' sx={{position: "relative", top:"4px", left:"-3%"}}/>);

        document.getElementById("description").style.color = "rgb(112, 112, 112)"

    }

  return (
    <FormControl className='darkmode-container'>
      <FormLabel id="demo-row-radio-buttons-group-label" className='radio-title'>
        {modeImg}
        <span style={{fontWeight:"600"}}>DarkMode</span>
      </FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        className='radio-btn'
      >
        <FormControlLabel value="on" control={<Radio sx={{color: buttonColor}}/>} label="On" onClick={seeDark}/>
        <FormControlLabel value="off" control={<Radio sx={{color: buttonColor}}/>} label="Off" onClick={seeLight}/>
      </RadioGroup>
    </FormControl>
  );
}
