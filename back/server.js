const express= require("express");
const cors = require("cors");
const mongoose=require("mongoose");
const dotenv=require("dotenv");
const pinRouter = require("./router/pinRouter");

const app=express();
dotenv.config();
app.use(express.json());
app.use(cors());
app.use(pinRouter);


mongoose.connect(process.env.Mongo_URL,{useNewUrlParser:true})
.then(()=>{
    console.log("DataBase connected!");
})
.catch((err)=>{
    console.log(err);
})

app.listen(8080,()=>{
    console.log("server is working")
})
