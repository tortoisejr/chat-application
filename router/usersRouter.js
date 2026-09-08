//external import
const express = require("express");

//internal import
const {
  getUsers,
  addUser,
  removeUser,
} = require("../controller/usersController");
const decorateHtmlRespose = require("../middlerwares/common/decorateHtmlResponse");
const avatarUpload = require("../middlerwares/users/avatarupload");
const {
  addUserValidators,
  addUserValidationHandler,
} = require("../middlerwares/users/userValidators");

const router = express.Router();

router.get("/", decorateHtmlRespose("Users"), getUsers);

router.post(
  "/",
  avatarUpload,
  addUserValidators,
  addUserValidationHandler,
  addUser,
);

router.delete("/:id", removeUser);

module.exports = router;
