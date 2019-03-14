const  
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,

    CourseSchema = new Schema({
        name: String,
        description: String, 
        location: String, 
        dates: String, 
        students: [{
            type: Schema.Types.ObjectId,
            ref: 'Student'
        }]
    })
module.exports = mongoose.model('Course', CourseSchema)


