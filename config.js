module.exports = function() {
    var config = null;

    if (process.env.NODE_ENV == "production") {
        config = {
            host: "qwitter.azurewebsites.net",
            protocol: "http",

            mongodb_connection_string: "mongodb://qwitter-mongodb:FoX2HADY1BXLUR20I_z0iYpyBM1LjyMUqg6ZyJ_8fl8-@ds041157.mongolab.com:41157/qwitter-mongodb"
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
    return config;
};
