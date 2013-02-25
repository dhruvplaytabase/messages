var config = require('./config'),
    controllers = require('./controllers'),
    express = require('express'),
    mongoose = require('mongoose');

var app = express();

/* enable us to parse json content from body */
app.use(express.bodyParser());

/* serve static content out of 'build' directory */ 
app.use(express.static(__dirname + '/build'));

app.post('/messages', controllers.messages.create);
app.get('/messages', controllers.messages.index);
app.get('/messages/:id', controllers.messages.show);

console.log("mongodb connection string: " + config.mongodb_connection_string);
mongoose.connect(config.mongodb_connection_string);

var db = mongoose.connection;
db.once('open', function callback() {
	console.log("mongodb connection established");
});

port = process.env.PORT || config.http_port || 3030;

app.listen(port);
console.log('backend ready, listening on port ' + port + '...');