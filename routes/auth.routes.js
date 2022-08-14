import express from "express";
import {login} from "../services/authService.js";

const userLoginRouter = express.Router();
userLoginRouter.post('/login', login);

export default userLoginRouter;