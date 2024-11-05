import express from "express";
import {registerUser} from "../controllers/user/registerUser.js"
import { loginUser } from "../controllers/user/loginUser.js";
import { getAllUsers } from "../controllers/data/getAllUsers.js";
import { getAllEmails } from "../controllers/data/getAllEmails.js";
import { getAllUsernames } from "../controllers/data/getAllUsernames.js"
import { checkEmailExists } from "../controllers/checkEmailExists.js";
import { checkUsernameExists } from "../controllers/checkUsernameExists.js";
import { isPasswordCorrect } from "../controllers/isPasswordCorrect.js";
import { getUserByEmail } from "../controllers/data/getUserByEmail.js";
import { inquiryGrabber } from "../controllers/user/inquiryGrabber.js";
import { emailModifier } from "../controllers/modifiers/emailModifier.js";
import { usernameModifier } from "../controllers/modifiers/usernameModifier.js";
import { passwordModifier } from "../controllers/modifiers/passwordModifier.js";
import { deleteUser } from "../controllers/user/deleteUser.js";

const router = express.Router();

// Register user
router.post("/v1/register", registerUser);

// Login user
router.post("/v1/login", loginUser);

// The Endpoint that sends the inquiry requests to the server
router.post("/v1/inquiryRequest", inquiryGrabber);

// Get a user by email
router.post("/v1/userByEmail", getUserByEmail);

// The Endpoint that checks out if the email entered exists or not
router.post("/v1/emailCheck", checkEmailExists);

// The Endpoint that checks out if the email entered exists or not
router.post("/v1/usernameCheck", checkUsernameExists);

// The Endpoint that updates user's email
router.put("/v1/updateEmail", emailModifier);

//The Endpoint that updates user's username
router.put("/v1/updateUsername", usernameModifier);

//The Endpoint that updates user's password
router.put("/v1/updatePassword", passwordModifier);

// Get all users
router.get("/v1/users", getAllUsers);

// Get all emails
router.get("/v1/email", getAllEmails);

// Get all usernames
router.get("/v1/username", getAllUsernames);

// The Endpoint that checks out if the email entered exists or not
router.get("/v1/passwordCheck", isPasswordCorrect);

// Delete user by username
router.delete("/v1/users", deleteUser);

export default router;
