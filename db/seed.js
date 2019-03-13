const 
    db = require('../models'),
    course = require('./course'),
    student = require('./student')

db.Course.deleteMany({},(err,courses)=>{
    if (err) {throw err};
    console.log(courses)
    db.Course.create(course, (err, courses)=>{
        if(err) {throw err};
        console.log(courses)

        db.Student.deleteMany({}, (err, students)=>{
            if (err) {throw err};
            console.log(students)
            db.Student.create(student, (err, students)=>{
                if (err) {throw err};
                console.log(students)
            });
        });
    });
});