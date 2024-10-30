import express from "express";
import bodyParser from "body-parser";    
import { dirname, join } from "path";          
import { fileURLToPath } from "url"; 
import cors from "cors";   
import { connectDb } from "./utils/database/connectDb.js";
import axios from "axios";       
import pg from "pg";
import bcrypt from "bcrypt";
import { createUser } from "./utils/database/userModel.js";
import createUserR from "./routes/userRoutes.js"

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(cors());

// Set EJS as view engine
app.set('view engine', 'ejs');
app.set('views', join(__dirname, 'views'));

//Connects to the DB
connectDb();

//THE API ALREADY INCLUDES IT. :))
app.post("/register", (req, res)=>{  
    try{
        const userInfoSet = req.body;
        const {name, surname, email, password, gender, country, username} = userInfoSet
        createUser(name, surname ,username ,email, password, gender, country);
        res.status(200).json({ message: "Registration successfully completed." });
        
    }
    catch(err){
        console.log(`An error occured. ${err}`);
        res.status(500).json({ message: "An error occurred." });
    }
})

app.use("/", createUserR);


const port = 3000;
app.listen(port, ()=>{
    console.log(`Listening port ${port}...`);
});