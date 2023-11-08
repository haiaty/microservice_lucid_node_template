'use strict';

const path = require("path");
const beforeGatewayInitOperations = require(path.resolve(process.cwd(), "server", "beforeGatewayInitOperations"));
const StartFastifyServer = require(path.resolve(process.cwd(), "server", "index"));

//===================
// Before starting the Fastify server
// we perform some operations, like checks, if any
//=====================
beforeGatewayInitOperations().then(function () {

    //===================
    // after operations has been done,
    // we start the server
    //==================
    StartFastifyServer();


}).catch(function (e) {
    throw e;
});