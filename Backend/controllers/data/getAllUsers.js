import { db } from "../../utils/database/defineDb.js";

export const getAllUsers = async (req, res)=>{
    try {
        const query = "SELECT * FROM users";
        const allUsers = await db.query(query);
        res.status(200).json(allUsers.rows);
    } 
    catch (err) {
        console.log(`An error occurred while fetching all users: ${err}`);
        res.status(500).json({ message: "Internal Server Error" });
    }
}