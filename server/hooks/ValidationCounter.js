"use strict";

module.exports = async function(request, reply) {
    try {

      // do whatever is needed here.

        // You can also call services, features, operations, jobs here
        console.log("hook");
    } catch (err) {
        return reply.send(err)
    }
};