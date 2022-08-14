import router from "express";
import {login} from "../services/authService.js";

// const router = require("express").Router();
// const { login } = require("../services/authService.js");

router.post('/', login);

export default router;