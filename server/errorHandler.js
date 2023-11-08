

const IS_PROD = process.env.NODE_ENV === "production"

module.exports =  function (error, request, reply) {
    if (IS_PROD) {
        reply.code(418).send({msg: "generic"});
    } else {
        console.log("ERROR", error);
        reply.status(500).send(error);
    }
}
