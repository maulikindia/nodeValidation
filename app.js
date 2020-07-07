let express = require('express');
let logger = require('morgan');
let bodyParser = require('body-parser');

let expressValidation = require('express-validator');
let app = express();
let port = 3500;


// load app middlewares
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidation());

let demoRoutes = require('./routes/demoRoute');
let db = require('./db');
let mongoose = require('mongoose');
let opts =
{
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect(db.dbUrl, opts, async (err) => {
    if (!err)
        console.log(`db url is:${db.dbUrl}`);
})

// load our API routes
app.use('/', demoRoutes);

// establish http server connection
app.listen(port, (err) => {
    if (!err)
        console.log(`App running on port ${port}`);
});