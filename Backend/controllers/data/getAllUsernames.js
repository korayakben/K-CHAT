import { db } from "../../utils/database/defineDb.js";

export const getAllUsernames = async (req, res)=>{
    try{
        const query = "SELECT username FROM users"
        const emailData = await db.query(query);
        res.status(200).json(emailData.rows);
    }
    catch(err){
        console.log(`An error occured. While getting all usernames. ${err}`);
        res.status(500).json({ message: "Internal Server Error" });
    }
}