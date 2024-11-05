import { db } from "../../utils/database/defineDb.js";

export const passwordModifier = async (req, res)=>{
    try{
        const {currentEmail, newPassword} = req.body;
        const query = "UPDATE users SET password = $1 WHERE email = $2";

        await db.query(query, [newPassword, currentEmail]);
        res.status(200).json({message: `Your password has successfully been changed`});
    }
    catch(err){
        console.log(`An error occured while changing your password. ${err}`);
        res.status(500).json({message: "Internal Server Error"});
    }
}