import express from "express";
import { getAllUsers } from "../controllers/data/getAllUsers.js";
import { getAllEmails } from "../controllers/data/getAllEmails.js";
import { getAllUsernames } from "../controllers/data/getAllUsernames.js";
import { isPasswordCorrect } from "../controllers/isPasswordCorrect.js";

const getRoutes = express.Router();

// Get all users
getRoutes.get("/users", getAllUsers);

// Get all emails
getRoutes.get("/email", getAllEmails);

// Get all usernames
getRoutes.get("/username", getAllUsernames);

// The Endpoint that checks out if the email entered exists or not
getRoutes.get("/passwordCheck", isPasswordCorrect);

export default getRoutes;