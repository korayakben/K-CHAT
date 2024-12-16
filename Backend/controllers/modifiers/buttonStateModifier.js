import { db } from "../../utils/database/defineDb.js";

export const btnStateModifier = async (req, res)=>{
    try{
        const {newStatus ,from_username, to_username} = req.body;

        if(newStatus === "DELETE"){
            const query = "DELETE FROM friend_requests WHERE from_username = $1 AND to_username = $2";
            const values = [from_username, to_username];
            await db.query(query, values); 
        }
        else{
            const query = "UPDATE friend_requests SET status = $1 WHERE from_username = $2 AND to_username = $3";
            const values = [newStatus, from_username, to_username];
            await db.query(query, values);
        }

        res.status(200).json({
            message: "Button state update has successfully been done."
        });

    }
    catch(err){
        console.log(`An error occured while modifying the button state. ${err}`);
        res.status(500).json({
            message: "Internal Server Error",
            error: `${err}`
        });
    }
}