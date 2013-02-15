var Config = require('./config'),
    controllers = require('./controllers'),
    express = require('express'),
    mongoose = require('mongoose');

var app = express();
var config = new Config();

app.use(express.bodyParser());

app.get('/messages/:id', controllers.messages.findById);
app.get('/messages', controllers.messages.findAll);
app.post('/messages', controllers.messages.create);

console.log("mongodb: " + config.mongodb_connection_string);
mongoose.connect(config.mongodb_connection_string);

var db = mongoose.connection;
db.once('open', function callback() {
	console.log("mongodb connection established");
});

port = process.env.PORT || config.http_port || 3030;

app.listen(port);
console.log('listening for http connections on port ' + port + '...');
