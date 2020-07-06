let express = require('express');
let logger = require('morgan');
let bodyParser = require('body-parser');


let app = express();
let port = 3500;


// load app middlewares
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// load our API routes
// app.use('/', Routes);

// establish http server connection
app.listen(port, (err) => {
    if (!err)
        console.log(`App running on port ${port}`);
});