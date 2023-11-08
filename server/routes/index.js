"use strict";

const path = require("path");
const ServiceExample = require(path.resolve(process.cwd(), "src", "services", "ServiceExample"));
const ValidationCounter = require(path.resolve(process.cwd(), "server", "hooks", "ValidationCounter"));
const ManipulateResponseBeforeSendingExample = require(path.resolve(process.cwd(), "server", "hooks", "ManipulateResponseBeforeSendingExample"));




module.exports = function(fastify) {



    //===============================
    // Route example
    //===============================
    //
    // Description: it's an example
    //
    fastify.get('/example',  async function handler(request, reply) {

        const userAgent = request.headers["user-agent"];

        let response  = await ServiceExample(userAgent);

        return reply.send(response);

    });




    //===============================
    // Route example 2
    //===============================
    //
    // Description: it's an example with preHandler hooks
    //
    fastify.get('/example2',
        {
            "preHandler": [ValidationCounter]
        },
        async function handler(request, reply) {

        const userAgent = request.headers["user-agent"];

        let response  = await ServiceExample(userAgent);

        return reply.send(response);

    });


    //===============================
    // Route example 3
    //===============================
    //
    // Description: it's an example where we use a 'prehandler' hook to do things before entering in the handler,
    // and then we use the 'preSerialization' hook to change the reponse before it is send. (it's a middleware for the response in lumen)
    //
    fastify.get('/example3',
        {
            "preHandler": [ValidationCounter],
            "preSerialization": [ManipulateResponseBeforeSendingExample]
        },
        async function handler(request, reply) {

            const userAgent = request.headers["user-agent"];

            let response  = await ServiceExample(userAgent);

            return reply.send(response);

        });

}


