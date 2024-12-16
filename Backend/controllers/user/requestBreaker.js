import { db } from "../../utils/database/defineDb.js";

export const requestBreaker = async (req, res)=>{
    try{
        // Button State Handling...
        const {from_user, to_user} = req.body;
        const query = "DELETE FROM friend_requests WHERE from_username = $1 AND to_username = $2;";
        const values = [from_user, to_user];
        await db.query(query, values);

        // Notification Removal handling...
        const queryRemove = "DELETE FROM notifications WHERE from_username = $1 AND to_username = $2 AND type = 'Friendship'";

        const valuesRemove = [from_user, to_user];
        await db.query(queryRemove, valuesRemove);

        res.status(200).json({
            message: `${to_user} has been unfriended.`
        });
    }
    catch (err) {
        console.log(`An error occurred while unfriending a user.`);
        res.status(500).json({
            message: "Internal Server Error",
            error: `${err}`
        });
    }
}