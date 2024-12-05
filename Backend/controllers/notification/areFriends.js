import { db } from "../../utils/database/defineDb.js";

export const areFriends = async (req, res)=>{
    try{
        const {username, friendUsername} = req.body;
        const query = "SELECT * FROM friends WHERE username = $1 AND friendusername = $2";
        const first_values = [username, friendUsername]
        const second_values = [friendUsername, username]

        const first_response = await db.query(query, first_values);

        const second_response = await db.query(query, second_values);

        if(first_response.rows.length > 0 || second_response.rows.length){
            res.status(200).json(true);
        }
        else{
            res.status(200).json(false);
        }
    }
    catch(err){
        console.log(`An error occured while checking if the two are friends or not. ${err}`);
        res.status(500).json({message: "Internal Server Error"});
    }
}