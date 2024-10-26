import { db } from "./defineDb.js"

export const createUser = async (name, surname, username, email, password, gender, country)=>{
    const createQuery = `
        INSERT INTO users (name, surname, username, email, password, gender, country) VALUES ($1, $2, $3, $4, $5, $6, $7)
    `;

    const values = [name, surname, username, email, password, gender, country]

    try{
        await db.query(createQuery, values)
        console.log("The user successfully added to the db");
    }
    catch(err){
        console.log(`An error occured while adding user to the db. ${err}`);
    }
}


export const bringAllUsers = async ()=>{
    try{
        const allUsers = await db.query(`SELECT * FROM users`);
        console.log(`All the users successfully brought.`);
        return allUsers.rows;
    }
    catch(err){
        console.log(`An error occured while bringing all the users. ${err}`);
    }
}


export const deleteAllUsers = async ()=>{
    try{
        await db.query(`DELETE FROM users`);
        console.log("All users deleted.");
    }
    catch(err){
        console.log(`An error occured while deleting all the users. ${err}`);
    }
}