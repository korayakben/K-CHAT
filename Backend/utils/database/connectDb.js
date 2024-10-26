import { db } from "./defineDb.js";

//Connects to the DB.
export const connectDb = async ()=>{
    try{
        await db.connect();
        console.log(`Connected to the DB`);
    }
    catch(err){
        console.log(`An error occured while connecting to the DB. ${err}`);
    }
}