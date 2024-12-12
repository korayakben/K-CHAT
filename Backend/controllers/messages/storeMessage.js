import { db } from "../../utils/database/defineDb.js";
import { userIDFinder } from "../../utils/notification/userIDFinder.js";
import { getCurrentTime } from "../../utils/getCurrentTime.js";

export const storeMessage = async (req, res)=>{
    const current_time = getCurrentTime();
    try{
        const {sender, message, receiver} = req.body;
        const sender_id_data = await userIDFinder(sender);
        const receiver_id_data = await userIDFinder(receiver);

        const sender_id = sender_id_data.rows[0].id;
        const receiver_id = receiver_id_data.rows[0].id;

        const query = "INSERT INTO messages (sender_id, receiver_id, message, created_at) VALUES ($1, $2, $3, $4)";
        const values = [sender_id, receiver_id, message, current_time];

        await db.query(query, values);

        res.status(200).json({message: "Your message has successfully been sent."});
    }
    catch(err){
        console.log(`An error occured while saving the message into the db. ${err}`);
        res.status(500).json({
            message: "Internal Server Error",
            error: `${err}`
        });
    }
}