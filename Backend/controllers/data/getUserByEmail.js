import { db } from "../../utils/database/defineDb.js";

export const getUserByEmail = async (req, res)=>{
        const email = req.body.email;
    try{
        const query = 'SELECT * FROM users WHERE email = $1'
        const userData = await db.query(query, [email]);
        
        userData.rows.length > 0 ? res.status(200).json(userData.rows) : res.status(404).json({message: "No user related to the email"})  
    }
    catch(err){
        console.log(`An error occured while finding the user. ${err}`);
        res.status(500).json({message: "Internal Server Error"});
    }
}