import { db } from "../../utils/database/defineDb.js"

export const addFriend = async (req, res)=>{
    try{
        const {from_username, to_username} = req.body;
        const query = "INSERT INTO friend_requests (from_username, to_username, status) VALUES ($1, $2, $3)"
        const values = [from_username, to_username, "REQUESTED..."]

        await db.query(query, values);

        res.status(200).status({
            message: `User ${from_username} has successfully added user ${to_username} as a friend.`
        });
    }
    catch(err){
        console.log(`An error occured while handling add-friend requests. ${err}`);

        res.status(500).json({message: "Internal Server Error"});
    }
}