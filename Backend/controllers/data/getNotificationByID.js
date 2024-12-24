import { db } from "../../utils/database/defineDb.js";

export const getAllNotificationsByID = async (req, res)=>{
    try {
        const {notifid} = req.body;
        const query = "SELECT * FROM notifications WHERE notifid = $1";
        const values = [notifid];
        
        const AllNotifications = await db.query(query, values);
        res.status(200).json(AllNotifications.rows);
    } 
    catch (err) {
        console.log(`An error occurred while fetching all notifications: ${err}`);
        res.status(500).json({ 
            message: "Internal Server Error",
            error: `${err}` 
        });
    }
}