


module.exports = function(fastify) {


    fastify.get('/bic/:bic',  async function handler(request, reply) {

        console.log("bic");

        return reply.send({"bic": "ll"});

    });

}