import React, { useEffect, useState } from 'react';
import DrawerAppBar from '../../components/Chat/Navbar/Navbar';
import CovernBoard from '../../components/Profile/CovernBoard';
import FriendAboutBar from '../../components/FriendProfile/FriendAboutBar';
import io from "socket.io-client";

const socket = io.connect("http://localhost:3000");

function FriendProfile() {
    const [broughtUsername, setBroughtUsername] = useState("");

    useEffect(() => {
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

        return () => {
            socket.off("bringProfile");
        };
    }, []);

    return (
        <div className='profile-container'>
            <DrawerAppBar />
            <CovernBoard name={JSON.parse(localStorage.getItem("broughtUsername")).name} username = {JSON.parse(localStorage.getItem("broughtUsername")).username}/> 
            <FriendAboutBar />
        </div>
    );
}

export default FriendProfile;
