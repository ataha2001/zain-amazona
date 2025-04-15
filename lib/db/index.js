// import mongoose from "mongoose";
const mongoose = require('mongoose');

// const cached = (global).mongoose || {conn: null, promise: null};
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const connectToDatabase = async()=>{

    MONGODB_URI = process.env.MONGODB_URI
    console.log('check env',MONGODB_URI );
    
    if(cached.conn) return cached.conn;

    if(!MONGODB_URI) throw new Error("MONGODB_URI is not defined");

    cached.promise = cached.promise || mongoose.connect(MONGODB_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    cached.conn = await cached.promise;

    return cached.conn
    
}

module.exports = { connectToDatabase };