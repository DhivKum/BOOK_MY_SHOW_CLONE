const mongoose = require('mongoose'); 
require('dotenv').config();

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.mongodbURL)
        console.log("DB Connected")
    }
    catch(err){
        console.error(err);
    }
}

module.exports={
    connectDB
}