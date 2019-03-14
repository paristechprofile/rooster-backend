const  
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,

    CourseSchema = new Schema({
        name: String,
        description: String, 
        location: String, 
        class: String, 
        dates: String, 
        students: [String]
    })
module.exports = mongoose.model('Course', CourseSchema)


