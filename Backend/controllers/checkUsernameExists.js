import { db } from "../utils/database/defineDb.js";

export const checkUsernameExists = async (req, res)=>{
    try{
        const username = req.body.username;
        const query = "SELECT username FROM users WHERE username = $1";
        const usernameData = await db.query(query, [username]);
      
        usernameData.rows.length > 0 ? res.status(200).json({usernameExistence: true}) :  res.status(200).json({usernameExistence: false})   
        
    }
    catch(err){
        console.log(`An error occured. While checking the username. ${err}`);
        res.status(500).json({message: "Internal Server Error"})
    }
}