"use strict";

const path = require("path");
const GetUserDetails = require(path.resolve(process.cwd(), "src", "operations", "GetUserDetails"));



module.exports =  async function (email) {

    let data = await GetUserDetails(email);

    return {
        "user": "Tizio",
        "email": "tizio@example.it"
    };


}