import express from "express";
import bodyParser from "body-parser";    // Kullanıcının girdiği verileri yakalar.
import { dirname, join } from "path";   // Güncel dosya konumunu getirir.          
import { fileURLToPath } from "url"; 
import cors from "cors";   
import axios from "axios";       
import pg from "pg";
import bcrypt from "bcrypt";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(cors());

// View engine olarak EJS ayarlama
app.set('view engine', 'ejs');
app.set('views', join(__dirname, 'views'));




const port = 3000;
app.listen(port, ()=>{
    console.log(`Listening port ${port}...`);
});