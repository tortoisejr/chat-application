//external import
const express=require("express");


//internal import
const {getUsers}=require("../controller/usersController");
const decorateHtmlRespose=require("../middlerwares/common/decorateHtmlResponse");

const router =express.Router();

router.get("/",decorateHtmlRespose("Users"),getUsers);

module.exports=router;