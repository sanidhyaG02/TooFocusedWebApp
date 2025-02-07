const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');

//Middleware Dependencies
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//CORS overriding sections 
app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    if(req.method === 'OPTIONS'){
        res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
        return res.status(200).json({});
    }
    next();
});

const userRoutes = require('./api/routes/user');
const tasksRoutes = require('./api/routes/tasks');


mongoose.connect(
    'mongodb+srv://HackathonFILgroup:3czWIjO9QXPI64tL@toofocuseddb.hwuzyar.mongodb.net/?retryWrites=true&w=majority'
);

app.use('/users', userRoutes);
app.use('/tasks',tasksRoutes);

//ERROR Handling
app.use((req, res, next)=>{
    const error = new Error('Not Found');
    error.status=404;
    next(error);
});
app.use((error, req, res, next)=>{
    res.status(error.status||500).json({
        error: {
            message: error.message
        }
    })
});

module.exports = app;