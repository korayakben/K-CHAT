import { db } from "../database/defineDb.js";
import { userIDFinder } from "./userIDFinder.js";

export const userNotificationMatcher = async (username, notificationUUID)=>{
    try{

        const userID_data = await userIDFinder(username);
        const userID = userID_data.rows[0].id;

        const query = "INSERT INTO user_notification (user_id, notifid) VALUES ($1, $2)";

        const values = [userID, notificationUUID];

        await db.query(query, values);
    }
    catch(err){
        console.log(`An error occured while matching the user and the notification. ${err}`);
    }
};