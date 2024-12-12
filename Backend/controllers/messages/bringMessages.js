import { db } from "../../utils/database/defineDb.js";
import { userIDFinder } from "../../utils/notification/userIDFinder.js";

export const bringMessages = async (req, res) => {
    try {
        const { sender, receiver } = req.body;

        if (!sender || !receiver) {
            return res.status(400).json({ message: "Sender and receiver are required." });
        }

        const sender_id_data = await userIDFinder(sender);
        const receiver_id_data = await userIDFinder(receiver);

        if (sender_id_data.rows.length === 0 || receiver_id_data.rows.length === 0) {
            return res.status(404).json({ message: "Sender or receiver not found." });
        }

        const sender_id = sender_id_data.rows[0].id;
        const receiver_id = receiver_id_data.rows[0].id;

        const query = `
            SELECT * FROM messages 
            WHERE (sender_id = $1 AND receiver_id = $2) 
               OR (sender_id = $2 AND receiver_id = $1)
            ORDER BY created_at;
        `;

        const values = [sender_id, receiver_id];

        const response = await db.query(query, values);

        res.status(200).json(response.rows);
    } catch (err) {
        console.error(`An error occurred while bringing the messages: ${err}`);
        res.status(500).json({
            message: "Internal Server Error",
            error: `${err}`
        });
    }
};
