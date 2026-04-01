const express = require("express");
const router = express.Router();

const usersController = require("../sys_3_controllers/controllers_users");

router.get("/users", usersController.getAllUsers);
router.get("/users/name/:name", usersController.getUserByName);
router.get("/users/search", usersController.searchUsers);

module.exports = router;