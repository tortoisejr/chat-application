//external Import 
const express=require("express");


//internal Import
const {getInbox}=require("../controller/inboxController");
const decorateHtmlRespose=require("../middlerwares/common/decorateHtmlResponse");

const router=express.Router();

router.get("/",decorateHtmlRespose("Inbox"),getInbox);


module.exports=router;
