const 
    controllers = require('../controllers'),
    express = require('express'),
    app = express()

app.get('/', controllers.student.findAll);
app.get('/:id', controllers.student.findById);
app.post('/add', controllers.student.addStudent);
app.put('/:id', controllers.student.editStudent);
app.delete('/:id', controllers.student.deleteStudent);

module.exports = app;