import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

export const db = new pg.Client({
    user: "secretadmin",
    password: "test123",
    database: "KChat",
    host: "localhost",
    port: 5432
});



