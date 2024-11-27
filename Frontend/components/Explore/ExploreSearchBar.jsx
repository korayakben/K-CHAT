import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import axios from "axios"

export default function ExploreSearchBar() {

  const [allUsers, setAllUsers] = React.useState([]);

  React.useEffect(async ()=>{
    try{
      const allUsernames = await axios.get("http://localhost:3000/v1/username");
      setAllUsers(allUsernames.data);
    }
    catch(err){
      console.log(err);
    }
  }, []);


  return (
    <div className='exploreSearchBar-container'>
    <Stack spacing={2} id="exploreSearchBar">
      <Autocomplete
        freeSolo
        disableClearable
        options={allUsers.map((element) => element.username)}
        onChange={(event, value)=>{
          alert(value)
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Search People"
            slotProps={{
              input: {
                ...params.InputProps,
                type: 'search',
              },
            }}
          />
        )}
      />
    </Stack>
    </div>
  );
}


