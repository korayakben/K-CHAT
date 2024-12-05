import { db } from "../database/defineDb.js";
import { v4 as uuidv4 } from 'uuid';
import { userNotificationMatcher } from "./userNotificationMatcher.js";

export const storeNotificationinDb = async (type, title, content, createdAt, fromUser, toUser)=>{
    try{
        const query_notification = "INSERT INTO notifications VALUES ($1, $2, $3, $4, $5, $6, $7)";

        const newUUID = uuidv4();  // Unique UUID for the notification

        const values_notification = [newUUID, type, title, content, createdAt, fromUser, toUser];

        await db.query(query_notification, values_notification);

        userNotificationMatcher(toUser, newUUID);
    }
    catch(err){
        console.log(`An error occured while storing the notification into the database. ${err}`);
    }
}