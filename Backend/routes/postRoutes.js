import express from "express";
import { registerUser } from "../controllers/user/registerUser.js";
import { loginUser } from "../controllers/user/loginUser.js";
import { inquiryGrabber } from "../controllers/user/inquiryGrabber.js";
import { getUserByEmail } from "../controllers/data/getUserByEmail.js";
import { checkEmailExists } from "../controllers/checkEmailExists.js";
import { checkUsernameExists } from "../controllers/checkUsernameExists.js";
import { getUserByUsername } from "../controllers/data/getUserByUsername.js";

const postRoutes = express.Router();

// Register user
postRoutes.post("/register", registerUser);

// Login user
postRoutes.post("/login", loginUser);

// The Endpoint that sends the inquiry requests to the server
postRoutes.post("/inquiryRequest", inquiryGrabber);

// Get a user by email
postRoutes.post("/userByEmail", getUserByEmail);

//Get a user by username
postRoutes.post("/userByUsername", getUserByUsername);

// The Endpoint that checks out if the email entered exists or not
postRoutes.post("/emailCheck", checkEmailExists);

// The Endpoint that checks out if the email entered exists or not
postRoutes.post("/usernameCheck", checkUsernameExists);

export default postRoutes;