const 
    controllers = require('../controllers'),
    express = require('express'),
    router = express.Router()

router.get('/', controllers.course.findAll);
router.get('/:id', controllers.course.findById);