import { db } from "../../utils/database/defineDb.js";

export const getUserByUsername = async (req, res)=>{
        const username = req.body.username;
    try{
        const query = 'SELECT * FROM users WHERE username = $1'
        const userData = await db.query(query, [username]);
        
        userData.rows.length > 0 ? res.status(200).json(userData.rows) : res.status(404).json({message: "No user related to the username"})  
    }
    catch(err){
        console.log(`An error occured while finding the user. ${err}`);
        res.status(500).json({message: "Internal Server Error"});
    }
}