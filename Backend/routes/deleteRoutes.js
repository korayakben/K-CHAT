import express from "express";
import { deleteUser } from "../controllers/user/deleteUser.js";
import { deleteNotification } from "../controllers/notification/deleteNotification.js";

const deleteRoutes = express.Router();

// Delete user by username
deleteRoutes.delete("/users", deleteUser);

// Delete notification by its index
deleteRoutes.delete("/notifications", deleteNotification);

export default deleteRoutes;