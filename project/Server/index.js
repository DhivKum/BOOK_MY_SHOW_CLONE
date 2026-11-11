const express = require("express");
const dbConfig = require('./dbConfig.js')
const cors = require('cors')

const app = express(); 
dbConfig.connectDB();

const userRouter = require('./routes/user.routes.js')
app.use(express.json())

app.use(cors({
    origin : 'http://localhost:5173'
}))

app.use('/api/auth', userRouter)

app.listen(8001, () => {
    console.log("Server Started");
})