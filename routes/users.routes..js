import router from "express";
import {register} from "../services/userService.js";

// const router = require("express").Router();
// const { register } = require("../services/userService.js");

router.post('/', register);

module.exports = router;