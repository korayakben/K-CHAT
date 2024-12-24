import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';
import {io} from "socket.io-client";
import { ChatContext } from '../../../src/App';

const socket = io.connect("http://localhost:3000");

export default function UserSearchBar() {
  const [friendsList, setFriendsList] = React.useState([]);
  const [userBarForm, setUserBarForm] = React.useContext(ChatContext);

  const [userBarPhotos, setUserBarPhotos] = React.useState([]);

  React.useEffect(() => {
    const fetchFriends = async () => {
      const friendsData = await axios.post("http://localhost:3000/v1/bringFriends", { username: localStorage.getItem("username") });

      const friendsArray = friendsData.data.friends.map(element => ({ name: element }));
      setFriendsList(friendsArray);

      socket.on("searchBarPhoto", (data)=>{
        setUserBarPhotos((prevPhotos) => [...prevPhotos, data]);
      });
    };

    fetchFriends();
  }, []);

  const chooseUser = (event, value) => {
    if(value){
      localStorage.setItem("clickedReceiver", value);
      socket.emit("friendBar", value);
      userBarPhotos.forEach((item)=>{
        if(item.name === value){
          setUserBarForm({
            img: item.img,
            name: value
          });
        }
      });
    }
  };

  return (
    <Stack spacing={2} id="userSearchBar" sx={{ width: "75%" }}>
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={friendsList.map((element) => element.name)}
        onChange={chooseUser}
        renderInput={(params) => <TextField {...params} label="Search Users" />}
      />
    </Stack>
  );
}
