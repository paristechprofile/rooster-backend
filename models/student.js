const  
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,

    StudentSchema = new Schema({
        name: String,
        age: Number, 
        bio: String, 
        DOB: String,
        WDI: Boolean, DSI: Boolean, UXDI: Boolean
    })
module.exports = mongoose.model('Student', StudentSchema)