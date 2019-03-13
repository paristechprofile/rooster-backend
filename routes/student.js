const 
    controllers = require('../controllers'),
    express = require('express'),
    router = express.Router()

router.get('/', controllers.student.findAll);
router.get('/:id', controllers.student.findById);
router.post('/add', controllers.student.addStudent);
router.put('/:id', controllers.student.editStudent);
router.delete('/:id', controllers.student.deleteStudent);
