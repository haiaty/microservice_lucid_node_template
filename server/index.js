"use strict";

const path = require("path");
const config = require(path.resolve(process.cwd(), "config"));
const ErrorHandler = require(path.resolve(process.cwd(), "server", "errorHandler"));


//=================================
// instantiate the fastify server object
//================================

const fastify = require("fastify")({
    ignoreDuplicateSlashes: true,
});

//=================================
// define the error handler
//================================

// NOTE: throw new Error inside promises, will not pass here. You need to catch them and handle them
fastify.setErrorHandler(ErrorHandler);


//=================================
// define the routes
//================================
require(path.resolve(process.cwd(), "server", "routesloader"))(fastify);


module.exports = function() {

    //=================================
    // Run the server
    //================================
    fastify.listen({ port: config.HTTP_PORT }, function (err, address) {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        console.log("server listening on: " + JSON.stringify(address));
    });

}

