import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import axios from "axios"
import io from "socket.io-client"

const socket = io.connect("http://localhost:3000");

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
        onChange={async (event, value)=>{
          // alert(value)  brings what is clicked
          const clickedUser = value ;
          const userData = await axios.post("http://localhost:3000/v1/UserByUsername", {username: clickedUser})
          localStorage.setItem("broughtUsername", JSON.stringify(userData.data[0]));
          socket.emit("searchUser", value);
          window.location.href = "/profiles";
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


