const 
    db = require('../models'),
    courseData = require('./course'),
    studentData = require('./student')

db.Student.deleteMany({}, (err, students)=>{
    if (err) throw err;
    db.Student.create(studentData, (err, students)=>{
        if (err) throw err;
        db.Course.deleteMany({},(err,courses)=>{
            if (err) throw err;
            db.Course.create(courseData, (err, courses)=>{
                if (err) throw err;
                courseData.find(courseData =>{
                    let newCourse = new db.Course({
                        name: courseData.name,
                        description: courseData.description,
                        location: courseData.location,
                        dates: courseData.dates,
                        });
                    studentData.forEach(student =>{
                        db.Student.find((err, foundStudents)=>{
                        if (err) throw err;
                        newCourse.students = foundStudents;
                        newCourse.students.push(student)
                        console.log(newCourse.students);
                        })
                    })
                    newCourse.save()
                    console.log(newCourse)
                });
            });
        });
    });
});