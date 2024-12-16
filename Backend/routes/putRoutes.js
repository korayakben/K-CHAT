import express from "express";
import { emailModifier } from "../controllers/modifiers/emailModifier.js";
import { usernameModifier } from "../controllers/modifiers/usernameModifier.js";
import { passwordModifier } from "../controllers/modifiers/passwordModifier.js";
import { btnStateModifier } from "../controllers/modifiers/buttonStateModifier.js";

const putRoutes = express.Router();

// The Endpoint that updates user's email
putRoutes.put("/updateEmail", emailModifier);

// The Endpoint that updates user's username
putRoutes.put("/updateUsername", usernameModifier);

// The Endpoint that updates user's password
putRoutes.put("/updatePassword", passwordModifier);

// The Endpoint that updates users' friendship button state
putRoutes.put("/updateBtnState", btnStateModifier);

export default putRoutes;