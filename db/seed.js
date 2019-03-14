const 
    db = require('../models'),
    course = require('./course'),
    student = require('./student')

db.Student.deleteMany({}, (err, students)=>{
    if (err) {throw err};
    console.log(`removed all`, students)
    db.Student.create(student, (err, students)=>{
        if (err) {throw err};
        console.log(`adding`, students)
        db.Course.deleteMany({},(err,courses)=>{
            if (err) {throw err};
            console.log(`removed all`, courses)
            course.forEach(course => {
                let newCourse = new db.Course({
                    name: course.name,
                    description: course.description,
                    location: course.location,
                    startDate: course.startDate
                })
                db.Student.findOne({name: student.name}, (err, foundStudent)=>{
                    if (err) {throw err};
                    newCourse.student = foundStudent;
                    newCourse.save((err, savedCourse) =>{
                        if (err) {throw err};
                        console.log(`enrolled ${savedCourse.student} into ${savedCourse.name}`)
                    });
                });       
            });
        });
    });
});