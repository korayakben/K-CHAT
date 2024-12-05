import { db } from "../../utils/database/defineDb.js";

export const bringFriendButtonState = async (req, res)=>{
    try{
        const {from_username, to_username} = req.body;
        const query = "SELECT status from friend_requests WHERE from_username = $1 AND to_username = $2"
        const values = [from_username, to_username]

        const response = await db.query(query, values);

        res.status(200).json({
            buttonState: response.rows
        });
    }
    catch(err){
        console.log(`An error occured while handling add-friend requests. ${err}`);

        res.status(500).json({message: "Internal Server Error"});
    }
}