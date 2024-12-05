import { db } from "../database/defineDb.js";

export const userIDFinder = async (username)=>{
    try{
        const query_user = "SELECT id FROM users WHERE username = $1";
        const userID = await db.query(query_user, [username]);

        return userID;
    }
    catch(err){
        console.log(`An error occured while finding the user's id. ${err}`);
    }
}