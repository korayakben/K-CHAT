import { db } from "../../utils/database/defineDb.js";

export const deleteUserByUsername = async (req, res)=>{
    try {
        const username = req.params.username;
        const query = "DELETE FROM users WHERE username = $1";
        await db.query(query, [username]);
        res.status(200).json({ message: "User successfully deleted" });
    } 
    catch (err) {
        console.log(`An error occurred while deleting the user '${req.params.username}': ${err}`);
        res.status(500).json({ message: "Internal Server Error" });
    }
}