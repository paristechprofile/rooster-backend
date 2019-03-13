const 
    db = require('../models');

module.exports = {
    findAll: (req,res)=>{
        db.Course.find({}, (err, foundCourses) =>{
            if(err) {
                console.log('error retriving courses', err)
            } res.json(foundCourses)
        });
    },
    findById: (req,res)=>{
        db.Course.find({_id: req.params.id}, (error,cities)=>{
            res.json(cities);
        });
    }
};