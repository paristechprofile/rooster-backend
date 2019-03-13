const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/wayfarer', { useNewUrlParser: true })

module.exports = {
    course: require('./course'),
    student: require('./student')
}