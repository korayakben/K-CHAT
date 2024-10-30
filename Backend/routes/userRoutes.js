import express from "express";
import {registerUser} from "../controllers/user/registerUser.js"
import { getAllUsers } from "../controllers/data/getAllUsers.js";
import { getAllEmails } from "../controllers/data/getAllEmails.js";
import { getAllUsernames } from "../controllers/data/getAllUsernames.js"
import {deleteUserByUsername} from "../controllers/user/deleteUserByUsername.js"
import { checkEmailExists } from "../controllers/checkEmailExists.js";
import { isPasswordCorrect } from "../controllers/isPasswordCorrect.js";

const router = express.Router();

// Register user
router.post("/v1/register", registerUser);

// Get all users
router.get("/v1", getAllUsers);

// Get all emails
router.get("/v1/email", getAllEmails);

// Get all usernames
router.get("/v1/username", getAllUsernames);

// The Endpoint that checks out if the email entered exists or not
router.get("/v1/emailCheck", checkEmailExists)

// The Endpoint that checks out if the email entered exists or not
router.get("/v1/passwordCheck", isPasswordCorrect)

// Delete user by username
router.delete("/v1/:username", deleteUserByUsername);



export default router;
