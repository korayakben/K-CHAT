import express from "express";
import bodyParser from "body-parser";    
import { dirname, join } from "path";          
import { fileURLToPath } from "url"; 
import cors from "cors";   
import { connectDb } from "./utils/database/connectDb.js";
import helmet from "helmet"
import createUserR from "./routes/userRoutes.js"

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

//Connects to the DB
connectDb();

app.use("/", createUserR);

const port = 3000;
app.listen(port, ()=>{
    console.log(`Listening port ${port}...`);
});