const express = require('express');
const app = express();
const student = require('./api/routes/student');

app.use('/student', student);

app.use((req, res, next) => {
    res.status(200).json({
        message: 'app is running'
    })
})

module.exports = app;