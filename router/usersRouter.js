//external import
const express=require("express");


//internal import
const {getUsers}=require("../controller/usersController");
const decorateHtmlRespose=require("../middlerwares/common/decorateHtmlResponse");
const avaterUpload=require("../middlerwares/users/avaterupload");

const router =express.Router();

router.get("/",decorateHtmlRespose("Users"),getUsers);
router.post("/",avaterUpload,);

module.exports=router;