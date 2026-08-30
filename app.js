//external Import
const express=require("express");
const mongoose=require("mongoose");
const dotenv=require("dotenv");
const cookieParser=require("cookie-parser");
const path=require("path");


//internal Import
const {errorHandler,notFoundHandler}=require("./middlerwares/common/errorHandler");
const loginRouter=require("./router/longinRouter");
const inboxRouter=require("./router/inboxRouter");
const usersRouter=require("./router/usersRouter");

//create app
const app=express();

//set view engine 
app.set("view engine","ejs")
dotenv.config();

//databse Connection
mongoose.connect(process.env.DB_STRING)
.then(()=>console.log("connettion is successfull"))
.catch((err)=>console.log(err));


//request parsers
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//cookie parsers
app.use(cookieParser(process.env.COOKIE_SECRET));

//set static folder
app.use(express.static(path.join(__dirname,"public")));

//set router
app.use("/",loginRouter);
app.use("/inbox",inboxRouter);
app.use("/users", usersRouter);

//not found error handler
app.use(notFoundHandler);

//common error handler 
app.use(errorHandler);


app.listen(process.env.PORT,()=>{
    console.log("app is listing in 5000 port");
})