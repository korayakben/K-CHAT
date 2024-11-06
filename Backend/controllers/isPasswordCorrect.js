import { db } from "../utils/database/defineDb.js";

export const isPasswordCorrect = async (req, res)=>{
    try{
        const email = req.query.email;
        const query = "SELECT password FROM users WHERE email = $1";
        const passwordData = await db.query(query, [email]);
        const thePassword = passwordData.rows[0].password; 
        res.status(200).json(thePassword);
    }
    catch(err){
        console.log(`An error occured. While checking the password. ${err}`);
        res.status(500).json({message: "Internal Server Error"})
    }
}