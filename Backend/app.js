import express from "express";
import bodyParser from "body-parser";    
import { dirname, join } from "path";          
import { fileURLToPath } from "url"; 
import cors from "cors";   
import { connectDb } from "./utils/database/connectDb.js";
import helmet from "helmet"
import getRoutes from "./routes/getRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import putRoutes from "./routes/putRoutes.js";
import deleteRoutes from "./routes/deleteRoutes.js";
import http from "http";
import { Server } from "socket.io"; 
import axios from "axios"
import { sendFriendship } from "./utils/notification/sendFriendship.js";
import { storeNotificationinDb } from "./utils/notification/storeNotification.js";
import { bringNotifications } from "./utils/notification/bringNotifications.js";
import { notificationExists } from "./controllers/notificationExists.js";
import { acceptanceNotification } from "./utils/notification/acceptanceNotification.js";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(helmet()); //Add helmet.js
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(cors());

// Set EJS as view engine
app.set('view engine', 'ejs');
app.set('views', join(__dirname, 'views'));

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",  //FRONTEND URL
        methods: ["GET", "POST"]
    }
}); 

//Connects to the DB
connectDb();

app.use("/v1", getRoutes);
app.use("/v1", postRoutes);
app.use("/v1", putRoutes);
app.use("/v1", deleteRoutes);

io.on("connection", (socket)=>{

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
        // console.log("STATUSSS");
        // console.log(status);
        socket.emit("friendBtnState", status);
    });  

    //Acceptance Notification
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


});

const port = 3000;
server.listen(port, ()=>{
    console.log(`Listening port ${port}...`);
});