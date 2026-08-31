const multer = require("multer");

//internal import
const singleUploaders=require("../../utilites/singleUploaders")

function avaterUpload(req,res,next){
    const upload=singleUploaders("avaters",["image/png","image/jpeg"],100000,"Only .jpg, jpeg or .png format allowed!");

    upload.any()(req,res,(err)=>{
        if(err){
            res.status(500).json({
                errors:{
                    avaters:{
                        msg:err.message
                    }
                }
            });
        }else{
            next()
        }
    });
}

module.exports=avaterUpload;