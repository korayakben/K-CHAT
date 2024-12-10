import { db } from "../../utils/database/defineDb.js";

export const bringFriends = async (req, res) => {
    try {
        const { username } = req.body;

        const query = `
            SELECT 
                CASE 
                    WHEN username = $1 THEN friendusername
                    WHEN friendusername = $1 THEN username
                END AS friend
            FROM friends
            WHERE username = $1 OR friendusername = $1
        `;

        const values = [username];

        const response = await db.query(query, values);

        // Retrieves the friendlist
        const friends = response.rows.map(row => row.friend);

        // Creates the response object
        const responseObject = {
            length: friends.length, // Number of friends
            friends: friends       // List of friends
        };

        res.status(200).json(responseObject);
    } catch (err) {
        console.log(`An error occurred while bringing the friends of the asked user. ${err}`);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
