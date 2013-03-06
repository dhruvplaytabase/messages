var config = require('./config'),
    controllers = require('./controllers'),
    express = require('express'),
    mongoose = require('mongoose');

var app = express();

/* enable us to parse json content from body */
app.use(express.bodyParser());

/* serve static content out of 'build' directory */ 
app.use(express.static(__dirname + '/build'));

/* routes to hook up messages resource endpoints. */
app.post('/messages', controllers.messages.create);
app.get('/messages', controllers.messages.index);
app.get('/messages/:id', controllers.messages.show);

mongoose.connect(config.mongodb_connection_string);

port = process.env.PORT || config.http_port || 3030;

app.listen(port);
console.log('backend ready, listening on port ' + port + '...');