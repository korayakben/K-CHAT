import express from "express";
import { deleteUser } from "../controllers/user/deleteUser.js";

const deleteRoutes = express.Router();

// Delete user by username
deleteRoutes.delete("/users", deleteUser);

export default deleteRoutes;