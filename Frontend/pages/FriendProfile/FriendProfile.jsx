import React, { useEffect, useState } from 'react';
import DrawerAppBar from '../../components/Chat/Navbar/Navbar';
import FriendAboutBar from '../../components/FriendProfile/FriendAboutBar';
import io from "socket.io-client";
import axios from 'axios';
import CoverPhoto from '../../components/Profile/CovernBoard/CoverPhoto';
import ProfileBoard from '../../components/Profile/CovernBoard/ProfileBoard';

const socket = io.connect("http://localhost:3000");

function FriendProfile() {
    const [broughtUsername, setBroughtUsername] = useState("");
    const searchedUser = JSON.parse(localStorage.getItem("broughtUsername")).username;

    useEffect(() => {
        const fetchData = async () => {
            // Fetch data for the friend's contact number
            const contactNumberData = await axios.post("http://localhost:3000/v1/bringFriends", { username: searchedUser });
            const contactNumber = contactNumberData.data.length;
            localStorage.setItem("contactNumber", contactNumber);

            // Load initial data from Local Storage
            const savedUsername = localStorage.getItem("broughtUsername");
            if (savedUsername) {
                setBroughtUsername(savedUsername);
            }

            // Listen for updates from the server
            socket.on("bringProfile", (data) => {
                setBroughtUsername(data);
                localStorage.setItem("broughtUsername", JSON.stringify(data));
                console.log("Profile data received:", data);
            });
        };

        fetchData();

        return () => {
            socket.off("bringProfile");
        };
    }, []); // Empty dependency array ensures this effect runs only once on mount

    return (
        <div className='profile-container'>
            <DrawerAppBar />
            <CoverPhoto />
            <ProfileBoard 
                name={JSON.parse(localStorage.getItem("broughtUsername")).name} 
                username={JSON.parse(localStorage.getItem("broughtUsername")).username}
                contactNumber={localStorage.getItem("contactNumber")}
            />
            <FriendAboutBar />
        </div>
    );
}

export default FriendProfile;
