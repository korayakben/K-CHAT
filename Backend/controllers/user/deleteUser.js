import axios from "axios";
import { db } from "../../utils/database/defineDb.js";

export const deleteUser = async (req, res)=>{
    try{
        const username = req.body.username;
        const query = "DELETE FROM users WHERE username = $1";
        const response = await axios.post("http://localhost:3000/v1/usernameCheck", {username: username});

        response.data.usernameExistence ? (await db.query(query, [username]), res.status(200).json({"deleting": true})) : res.status(200).json({"deleting": false});
        
    }
    catch(err){
        console.log(`An error occured while deleting the user. ${err}`);
        res.status(500).json("Internal Server Error");
    }
}