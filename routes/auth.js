const router = require("express").Router();
const { login } = require("../services/authService.js");

router.post('/', login);

module.exports = router;