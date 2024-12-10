import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';

export default function UserSearchBar() {

  const [friendsList, setFriendsList] = React.useState([]);

  React.useEffect(() => {
    const fetchFriends = async () => {
      const friendsData = await axios.post("http://localhost:3000/v1/bringFriends", { username: localStorage.getItem("username") });

      const friendsArray = friendsData.data.friends.map(element => ({ name: element }));
      setFriendsList(friendsArray);
    };

    fetchFriends();
  }, []); 

  return (
    <Stack spacing={2} id="userSearchBar" sx={{ width: "75%" }}>
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={friendsList.map((element) => element.name)}
        renderInput={(params) => <TextField {...params} label="Search Users" />}
      />
    </Stack>
  );
}
