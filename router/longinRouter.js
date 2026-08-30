//external import
const express=require("express");

//internal import
const {getLogin}=require("../controller/loginController");
const decorateHtmlRespose=require("../middlerwares/common/decorateHtmlResponse");

const router =express.Router();

router.get("/",decorateHtmlRespose("Login"),getLogin);

module.exports=router;