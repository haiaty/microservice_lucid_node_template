"use strict";

const path = require("path");

const indexRoutes = require(path.resolve(process.cwd(), "server", "routes", "index"));
const bicRoutes = require(path.resolve(process.cwd(), "server", "routes", "bic"));


function routes (fastify) {

    indexRoutes(fastify);

    bicRoutes(fastify);

}


module.exports = routes
