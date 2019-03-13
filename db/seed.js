const 
    db = require('../models'),
    course = require('./course'),
    student = require('./student')

db.Course.deleteMany({},(err,courses)=>{
    db.Course.create(course, (err, courses)=>{
        if(err) {throw err};

        db.Student.deleteMany({}, (err, students)=>{
            if (err) {throw err};

            db.Student.create(data, (err, students)=>{
                if (err) {throw err};

            });
        });
    });
});