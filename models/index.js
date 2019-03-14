const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/rooster-app', { useNewUrlParser: true })

module.exports = {
    Course: require('./course'),
    Student: require('./student')
}