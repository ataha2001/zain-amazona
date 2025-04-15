// import mongoose from "mongoose";

const mongoose = require('mongoose');

const startDb = async()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/amazona")
        console.log("MongoDb Connected");
        
    } catch (err) {
        console.error("Error in connecting to MongoDb",err);
        process.exit(1)
        
    }
}
module.exports = { startDb };