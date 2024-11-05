import { db } from "../../utils/database/defineDb.js";

export const usernameModifier = async (req, res)=>{
    try{
        const {currentUsername, newUsername} = req.body;
        const query = "UPDATE users SET username = $1 WHERE username = $2";
        await db.query(query, [newUsername, currentUsername]);
        res.status(200).json({message: `${currentUsername} successfully changed to ${newUsername}`});
    }
    catch(err){
        console.log(`An error occured while changing your username. ${err}`);
        res.status(500).json({message: "Internal Server Error"});
    }
}