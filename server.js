var config = require('./config'),
    controllers = require('./controllers'),
    express = require('express'),
    mongoose = require('mongoose');

var app = express();

/* enable us to parse json content from body */
app.use(express.bodyParser());

app.use(function(req, res, next) {
    // very permissive origin setting, in production you'd allow only your site to connect.
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'OPTIONS,GET,POST,PUT,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    // intercept OPTIONS method and just send result immediately
    if ('OPTIONS' == req.method) {
        res.send(200);
    } else {
        next();
    }
});

app.use(express.logger());

/* routes to hook up messages resource endpoints. */
app.post('/messages', controllers.messages.create);
app.get('/messages', controllers.messages.index);
app.get('/messages/:id', controllers.messages.show);

mongoose.connect(config.mongodb_connection_string);

port = process.env.PORT || config.http_port || 3030;

app.listen(port);
console.log('backend ready, listening on port ' + port + '...');
