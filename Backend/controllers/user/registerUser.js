import { db } from "../../utils/database/defineDb.js";

export const registerUser = async (req, res)=>{
    try {
        const {
            name,
            surname,
            username,
            email,
            password,
            gender,
            country
        } = req.body;

        const query = `
            INSERT INTO users (name, surname, username, email, password, gender, country) 
            VALUES ($1, $2, $3, $4, $5, $6, $7)
        `;

        const enteredDatas = [name, surname, username, email, password, gender, country];
    
        await db.query(query, enteredDatas);

        res.status(201).json({ message: "Registration successfully completed" });
    } 
    catch (err) {
        console.log(`An error occurred while registering a user: ${err}`);
        res.status(500).json({ message: "Internal Server Error" });
    }
}