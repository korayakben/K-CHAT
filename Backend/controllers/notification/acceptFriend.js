import { db } from "../../utils/database/defineDb.js";

export const acceptFriend = async (req, res)=>{
    try{
        const {acceptingUser, acceptedUser} = req.body;
        const query = "INSERT INTO friends (username, friendusername) VALUES ($1, $2)"
        const values = [acceptingUser, acceptedUser];

        await db.query(query, values);

        res.status(200).json({
            acceptingUser: acceptingUser,
            acceptedUser: acceptedUser
        });
    }
    catch(err){
        console.log(`An error occured while accepting the friend. ${err}`);
        res.status(500).json({message: "Internal Server Error"});
    }
}