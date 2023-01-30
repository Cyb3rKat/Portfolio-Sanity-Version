const express = require("express");
const usersController = require("../controllers/usersController");

const router = express.Router();

router
  .route("/")
  .get(usersController.getAllUsers)
  .post(usersController.createUser);

module.exports = router;
