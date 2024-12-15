import { db } from "../database/defineDb.js";
import { v4 as uuidv4 } from 'uuid';
import { userNotificationMatcher } from "./userNotificationMatcher.js";

export const storeNotificationinDb = async (type, title, content, createdAt, fromUser, toUser)=>{
    try{
        const query_notification = "INSERT INTO notifications VALUES ($1, $2, $3, $4, $5, $6, $7)";

        const newUUID = uuidv4();  // Unique UUID for the notification

        const values_notification = [newUUID, type, title, content, createdAt, fromUser, toUser];

        if(type === "Message"){
            const message_query = "SELECT * FROM notifications WHERE from_username = $1 AND to_username = $2"
            const values = [fromUser, toUser];

            const messageQueryData = await db.query(message_query, values);

            const messageNotifExists = (messageQueryData.rows.length > 0)

            if(messageNotifExists){
                const delete_query = "DELETE FROM notifications WHERE from_username = $1 AND to_username = $2";
                const values = [fromUser, toUser];
                await db.query(delete_query, values);
            }
            await db.query(query_notification, values_notification);
            userNotificationMatcher(toUser, newUUID);
        }
        else{
            await db.query(query_notification, values_notification);
            userNotificationMatcher(toUser, newUUID);
        }
    }
    catch(err){
        console.log(`An error occured while storing the notification into the database. ${err}`);
    }
}