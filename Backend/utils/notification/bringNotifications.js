import { db } from "../database/defineDb.js";

export const bringNotifications = async (UUID)=>{
    try{
        const query = "SELECT * FROM notifications WHERE notifid = $1";
        const values = [UUID];
        
        const notifications_data = await db.query(query, values);

        const notifications = notifications_data.rows;

        return notifications;

    }
    catch(err){
        console.log(`An error occured while bringing the user's notifications. ${err}`);
    }
}