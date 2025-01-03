import express from "express";
import { registerUser } from "../controllers/user/registerUser.js";
import { loginUser } from "../controllers/user/loginUser.js";
import { inquiryGrabber } from "../controllers/user/inquiryGrabber.js";
import { getUserByEmail } from "../controllers/data/getUserByEmail.js";
import { checkEmailExists } from "../controllers/checkEmailExists.js";
import { checkUsernameExists } from "../controllers/checkUsernameExists.js";
import { getUserByUsername } from "../controllers/data/getUserByUsername.js";
import { getAllNotifications } from "../controllers/data/getAllNotifications.js";
import { addFriend } from "../controllers/notification/addFriend.js";
import { bringFriendButtonState } from "../controllers/notification/bringFriendButtonState.js";
import { acceptFriend } from "../controllers/notification/acceptFriend.js";
import { areFriends } from "../controllers/notification/areFriends.js";
import { bringFriends } from "../controllers/notification/bringFriends.js";
import { bringMutuals } from "../controllers/notification/bringMutuals.js";
import { storeMessage } from "../controllers/messages/storeMessage.js";
import { bringMessages } from "../controllers/messages/bringMessages.js";
import { passwordHasher } from "../controllers/user/passwordHasher.js";
import { authenticator } from "../controllers/user/authenticator.js";
import { unfriender } from "../controllers/user/unfriender.js";
import { requestBreaker } from "../controllers/user/requestBreaker.js";
import { getAllNotificationsByID } from "../controllers/data/getNotificationByID.js";

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

// The Endpoint that brings all notification IDs by user ID
postRoutes.post("/notifications", getAllNotifications);

// The Endpoint that brings all notification by its ID
postRoutes.post("/notificationsByID", getAllNotificationsByID);

// The Endpoint that handles friend requests
postRoutes.post("/addfriend", addFriend);

// The Endpoint that takes friend button state out.
postRoutes.post("/friendButtonState", bringFriendButtonState); 

// The Endpoint that accepts the friend and stores in the db
postRoutes.post("/acceptFriend", acceptFriend);

// The Endpoint that checks if the two are friends or not
postRoutes.post("/areFriends", areFriends);

// The Endpoint that brings the friends of the asked user
postRoutes.post("/bringFriends", bringFriends);

// The Endpoint that brings mutual friends of two users
postRoutes.post("/mutualFriends", bringMutuals);

// The Endpoint that stores the messages into the db
postRoutes.post("/storeMessage", storeMessage);

// The Endpoint that takes the messages of two users out of the db
postRoutes.post("/bringMessages", bringMessages);

// The Endpoint that hashed the input password
postRoutes.post("/hashIt", passwordHasher);

// The Endpoint that authenticates users
postRoutes.post("/authenticator", authenticator);

// The Endpoint that calls a friendship request off
postRoutes.post("/requestBreaker", requestBreaker);

// The Endpoint that handles unfriending
postRoutes.post("/unfriend", unfriender);

export default postRoutes;