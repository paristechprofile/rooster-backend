const  
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,

    StudentSchema = new Schema({
        name: String,
        age: Number, 
        bio: String, 
        DOB: String,
        courseID: String
    })
module.exports = mongoose.model('Student', StudentSchema)