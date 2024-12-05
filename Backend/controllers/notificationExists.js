import { db } from "../utils/database/defineDb.js";

export const notificationExists = async (fromUser, toUser, notifType)=>{
    try{
        const query = "SELECT * FROM notifications WHERE from_username = $1 AND to_username = $2 AND  type = $3"
        const values = [fromUser, toUser, notifType]
        const response = await db.query(query, values);

        const responseLength = response.rows.length;
        
        return responseLength > 0 ? true : false;
    }
    catch(err){
        console.log(`An error occured while looking for the notification existence. ${err}`);
    }
}