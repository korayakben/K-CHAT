import { db } from "../../utils/database/defineDb.js";

export const emailModifier = async (req, res)=>{
    try{
        const {currentEmail, newEmail} = req.body;
        const query = "UPDATE users SET email = $1 WHERE email = $2";
        await db.query(query, [newEmail, currentEmail]);
        res.status(200).json({message: `${currentEmail} successfully changed to ${newEmail}`});
    }
    catch(err){
        console.log(`An error occured while changing your email. ${err}`);
        res.status(500).json({message: "Internal Server Error"});
    }
}