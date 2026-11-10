const express = require('express')
const User = require('../models/user.model.js')

const userRouter = express.Router();

//SignUp Route

userRouter.post('/register', async (req, res) => {
    try{
        const userExists = await User.findOne({
            email : req.body.email
        })
        if(userExists)
        {
            res.send({
                success : false, 
                message : "User already exists with the email"
            })
        }

        const newUser = await User(req.body);
        await newUser.save();

        res.send(
            {
                success : true,
                message : 'User registered successfully',
                user : newUser
            }
        )
    }
    catch(err)
    {
        res.status(500).json({message : err})
    }
})

module.exports = userRouter;