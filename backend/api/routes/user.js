const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/user');
const router = express.Router();


router.get('/', (req, res, next)=>{
    res.status(200).json({
        message: "Handle user get request"
    });
});

router.post('/', (req, res, next)=>{
    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password
    });
    user.save().then(result =>{
        console.log(result);
    }).catch(err=>console.log(err));
    res.status(201).json({
        message: "Handle Post Request to users",
        createdUser: user
    });
});

router.get('/:userID', (req, res, next)=>{
    const userId = req.params.userID;
    //TODO: do this later 
});

module.exports = router;