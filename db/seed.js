const 
    db = require('../models'),
    course = require('./course'),
    student = require('./student')

db.Student.deleteMany({}, (err, students)=>{
    console.log(students)
    if (err) {throw err};
    db.Student.create(student, (err, students)=>{
        console.log(students)
        if (err) {throw err};
        db.Course.deleteMany({},(err,courses)=>{
            console.log(courses)
            if (err) {throw err};
            course.forEach(course => {
                console.log(course)
                let newCourse = new db.Course({
                    name: course.name,
                    description: course.description,
                    location: course.location,
                    startDate: course.startDate
                })
                db.Student.find({}, (err, foundStudent)=>{
                    console.log(foundStudent)
                    if (err) {throw err};
                    newCourse.students = foundStudent;
                    newCourse.save((err, savedCourse) =>{
                        console.log(savedCourse)
                        if (err) {throw err};
                    });
                });       
            });
        });
    });
});