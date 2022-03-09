const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/mobigic").then((response)=>{
    console.log("database connection scuccessfull")
}).catch((error)=>{
    console.log("db connection failed", error)
})