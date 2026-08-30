const { model } = require("mongoose");

function decorateHtmlRespose(page_title){
    return function(req,res,next){
        res.locals.title=`${page_title}- Chating App`;
        res.locals.html=true;
        next();
    }
}

module.exports=decorateHtmlRespose;