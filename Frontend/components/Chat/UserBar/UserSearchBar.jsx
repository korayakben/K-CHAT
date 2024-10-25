import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { userList } from '../../../src/utils/usersList';

export default function UserSearchBar() {
  return (
    <Stack spacing={2} id="userSearchBar" sx={{ width: "75%" }}>
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={userList.map((element) => element.name)}
        renderInput={(params) => <TextField {...params} label="Search Users" />}
      />
    </Stack>
  );
}

