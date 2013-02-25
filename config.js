var config = null;

if (process.env.NODE_ENV == "production") {
    config = {
        host: "qwitter.azurewebsites.net",
        protocol: "http",

        mongodb_connection_string: "mongodb://MongoLab-1:xKQHaYM_B4nYSg_wwCxvV39E9MnNbwyv7GbIo_t4x4I-@ds041167.mongolab.com:41167/MongoLab-1"
    };
} else if (process.env.NODE_ENV == "test") {
    config = {
        host: "localhost",
        http_port: 3050,
        protocol: "http",

        mongodb_connection_string: "mongodb://localhost/messages_test",
    };
} else {
    config = {
        host: "localhost",
        http_port: 3030,
        protocol: "http",

        mongodb_connection_string: "mongodb://localhost/messages_dev",
    };        
}

// computed properties 

config.base_url = config.protocol + "://" + config.host + ":" + config.http_port;

module.exports = config;