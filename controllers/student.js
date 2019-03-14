const 
    db = require('../models');

module.exports = {
    findAll: (req,res)=>{
        db.Student.find({}, (err, foundStudents) =>{
            if(err) {
                console.log('error retriving students', err)
            } res.json(foundStudents);
        });
    },
    findById: (req,res)=>{
        db.Student.find({_id: req.params.id}, (err,foundStudent)=>{
            if (err){
                console.log('error retrieving student', err)
            } res.json(foundStudent);
        });
    },
    addStudent: (req,res)=>{
        let newStudent = new db.Student({
            name: req.body.name,
            age: req.body.age,
            bio: req.body.bio,
            DOB: req.body.DOB
        });
        newStudent.save((err, addedStudent) =>{
            if (err) {throw err}; //note: changing err to save time
            res.json(addedStudent)
        }); 
    },
    editStudent: (req,res)=>{
        const studentId = req.params.id;
        db.Student.findOneAndUpdate({_id: studentId},req.body,{new:true},
            (err, modifiedStudent) => {
                if(err) {throw err}
                res.json(modifiedStudent);
            } 
        );
    },
    deleteStudent:(req,res)=>{
        const studentId = req.params.id;
        db.Student.findOneAndDelete({_id: studentId}, (err, deletedStudent)=>{
            if(err) {throw err}
            res.json(deletedStudent);
        })
    }
};