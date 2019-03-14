const mongoose = require('mongoose');
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/wayfarer', { useNewUrlParser: true })
mongoose.connect('mongodb://localhost:3005/rooster', {useNewUrlParser: true});

module.exports = {
    course: require('./course'),
    student: require('./student')
}