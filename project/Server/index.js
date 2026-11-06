const express = require("express");
const dbConfig = require('./dbConfig.js')

const app = express(); 
dbConfig.connectDB();

app.get('/', (req, res) => {
    res.send("Hello Dhivya! Keep Learning, Don't ever GiveUp! ")
})

app.listen(8001, () => {
    console.log("Server Started");
})