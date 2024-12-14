import { db } from "../../utils/database/defineDb.js";

export const cancelFriendship = async (req, res)=>{
    try{
        const {senderUsername, receiverUsername} = req.body;
        const query = "DELETE FROM friend_requests WHERE from_username = $1 AND to_username = $2";
        const values = [senderUsername, receiverUsername];

        await db.query(query, values);

        res.status(200).json({
            message: `The friendship request has successfully been called off.`
        });
    }
    catch (err) {
        console.log(`An error occurred while cancelling the friendship request. ${err}`);
        res.status(500).json({ message: "Internal Server Error" });
    }
}