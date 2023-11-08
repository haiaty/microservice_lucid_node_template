"use strict";

const path = require("path");

//
// see: https://fastify.dev/docs/latest/Reference/Hooks/#preserialization
//
module.exports = async function(request, reply, payload) {
    return { wrapped: payload }

};
