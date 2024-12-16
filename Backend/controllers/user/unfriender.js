import { db } from "../../utils/database/defineDb.js";

export const unfriender = async (req, res)=>{
    try{
        // Button State Handling...
        const {username, friendusername} = req.body;
        const query = "DELETE FROM friends WHERE username = $1 AND friendusername = $2;";
        const values = [username, friendusername];
        const valuesReverse = [friendusername, username]
        await db.query(query, values);
        await db.query(query, valuesReverse);

        res.status(200).json({
            message: `${friendusername} has been unfriended.`
        });
    }
    catch (err) {
        console.log(`An error occurred while calling a request off.`);
        res.status(500).json({
            message: "Internal Server Error",
            error: `${err}`
        });
    }
}
