import { sendFriendship } from "./utils/notification/templates/sendFriendship.js";
import { storeNotificationinDb } from "./utils/notification/storeNotification.js";
import { bringNotifications } from "./utils/notification/bringNotifications.js";
import { notificationExists } from "./controllers/notificationExists.js";
import { acceptanceNotification } from "./utils/notification/templates/acceptanceNotification.js";
import { messageNotification } from "./utils/notification/templates/messageNotification.js";
import axios from "axios";

export const socketManager = (socket)=>{

    // Sending Datas from Login Page...
    socket.on("loginDatas", async (data)=>{
        const responseData = await axios.post("http://localhost:3000/v1/userByEmail", {
            email: data.email
        })
        const response = responseData.data;
        socket.broadcast.emit("getLoginDatas", response);
    });

    // Friendship sending...
    socket.on("sendFriendship", async (data)=>{
        const friendship_notification = sendFriendship(data.from, data.to);

        // Prevention against notification duplication
        const notificationExistence = await notificationExists(data.from, data.to, friendship_notification.type);

        if(!notificationExistence){
            storeNotificationinDb(
                friendship_notification.type,
                friendship_notification.topic,
                friendship_notification.content,
                friendship_notification.date,
                data.from,
                data.to
            );
    
            socket.emit("getFriendData", friendship_notification);
        }
    });

    socket.on("bringNotifications", async (data)=>{
        const notifications = [];
        for(let i=0;i<data.length;i++){
            const lilNotify = await bringNotifications(data.data[i].notifid);
            notifications.push(lilNotify);
        }
        socket.emit("usersNotifications", notifications);
    });

    // Button State...
    socket.on("bringFriendBtnState", async (data)=>{
        const buttonState = await axios.post("http://localhost:3000/v1/friendButtonState", data); 
        const status = buttonState.data.buttonState[0];
        socket.emit("friendBtnState", status);
    });  

    // Acceptance Notification
    socket.on("acceptanceNotification", async (data)=>{
        const notification = acceptanceNotification(data.acceptingUser, data.acceptedUser);

        // Prevention against notification duplication
        const notificationExistence = await notificationExists(data.acceptingUser, data.acceptedUser, notification.type)

        if(!notificationExistence){
            storeNotificationinDb(
                notification.type,
                notification.topic,
                notification.content,
                notification.date,
                data.acceptingUser,
                data.acceptedUser
            );
        }
    });

    // Message Notification
    socket.on("messageNotification", async (data)=>{
        const notification = messageNotification(data.sender, data.receiver, data.message);

        storeNotificationinDb(
            notification.type,
            notification.topic,
            notification.content,
            notification.date,
            data.sender,
            data.receiver
        );
        
    });

    // Mutual Friends...
    socket.on("mutualFriends", (data)=>{
        socket.broadcast.emit("getMutuals", data);
    });

    // Handling Chat Messages...
    socket.on("sendChatMessage", async (data)=>{
        // socket.emit("receiveChatMessage", data)
        socket.broadcast.emit("receiveChatMessage", data)

        await axios.post("http://localhost:3000/v1/storeMessage", {
            sender: data.sender_username,
            message: data.message,
            receiver: data.receiver_username
        });
    });

    // Transferring stories
    socket.on("getStory", (data)=>{
        socket.broadcast.emit("transferStory", data);
    });

    socket.on("getStoryProfile", (data)=>{
        socket.broadcast.emit("transferStoryProfile", data);
    });

};

