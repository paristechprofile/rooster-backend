const 
    controllers = require('../controllers'),
    express = require('express'),
    app = express()

app.get('/', controllers.course.findAll);
app.get('/:id', controllers.course.findById);

module.exports = app;