import { db } from "../../utils/database/defineDb.js";

export const getAllNotifications = async (req, res)=>{
    try{
        const username = req.body.username;
        const query = "SELECT id FROM users WHERE username = $1";
        const values = [username];

        let userID_data = await db.query(query, values);

        let userID = userID_data.rows[0].id;

        const notification_query = "SELECT notifid FROM user_notification WHERE user_id = $1";

        const notification_values = [userID]

        const allNotifications = await db.query(notification_query, notification_values);

        res.status(200).json(allNotifications.rows);
    }
    catch(err){
        console.log(`An error occured while getting notifications. ${err}`);

        res.status(500).json({message: "Internal Server Error"});
    }
}