import { db } from "../utils/database/defineDb.js";

export const checkEmailExists = async (req, res)=>{
    try{
        const email = String(req.query.email);
        const query = "SELECT email FROM users WHERE email = $1";
        const emailData = await db.query(query, [email]);
      
        emailData.rows.length > 0 ? res.status(200).json({emailExistence: true}) :  res.status(200).json({emailExistence: false})   
        
    }
    catch(err){
        console.log(`An error occured. While checking the email. ${err}`);
        res.status(500).json({message: "Internal Server Error"})
    }
}