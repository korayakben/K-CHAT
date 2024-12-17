import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function ExploreSearchBar() {
  const [allUsers, setAllUsers] = React.useState([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchAllUsers() {
      try {
        const response = await axios.get('http://localhost:3000/v1/username');
        if (response.data && Array.isArray(response.data)) {
          setAllUsers(response.data);
        }
      } catch (err) {
        console.error('Error fetching usernames:', err);
      }
    }

    fetchAllUsers();
  }, []);

  return (
    <div className="exploreSearchBar-container">
      <Stack spacing={2} id="exploreSearchBar">
        <Autocomplete
          freeSolo
          disableClearable
          options={allUsers.map((element) => element.username)}
          onChange={async (event, value) => {
            try {
              const userData = await axios.post('http://localhost:3000/v1/UserByUsername', {
                username: value,
              });
              if (userData.data && userData.data.length > 0) {
                localStorage.setItem('broughtUsername', JSON.stringify(userData.data[0]));
                navigate('/profiles'); // SPA yönlendirmesi
              }
            } catch (err) {
              console.error('Error fetching user data:', err);
            }
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="Search People"
              InputProps={{
                ...params.InputProps,
                type: 'search',
              }}
            />
          )}
        />
      </Stack>
    </div>
  );
}
