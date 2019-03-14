const 
    db = require('../models');

module.exports = {
    findAll: (req,res)=>{
        db.Course.find({})
            .populate('students')
            .exec((err, foundCourses) =>{
            if(err) {
                console.log('error retriving courses', err)
            } 
            res.json(foundCourses)
        });
    },
    findById: (req,res)=>{
        db.Course.find({_id: req.params.id}, (error,foundCourse)=>{
            if (err) throw err;
        }); res.json(foundCourse);
    }
};