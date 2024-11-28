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
    // console.log(`User connected. ID => ${socket.id}`);
    socket.on("takeHeader", (data)=>{
        socket.broadcast.emit("putHeader", data);
    });
});

const port = 3000;
server.listen(port, ()=>{
    console.log(`Listening port ${port}...`);
});