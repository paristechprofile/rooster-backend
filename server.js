const 
    express = require('express'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    courseRoutes = require('./routes/course'),
    studentRoutes = require('./routes/student'),
    app = express();

app.use(cors())
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", '*');
//     res.header("Access-Control-Allow-Credentials", true);
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//     res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
//     next();
// });
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'))

app.use('/course', courseRoutes)
app.use('/student', studentRoutes)

app.listen(process.env.PORT || 3005, () => console.log('Listening on port 3005'))
