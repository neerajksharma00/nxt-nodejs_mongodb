const express = require("express");
const router = express.Router();

router.get("/", usersController.homePage);

module.exports = router;