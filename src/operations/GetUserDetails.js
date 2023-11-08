"use strict";

const path = require("path");
const ExecuteSqlQuery = require(path.resolve(process.cwd(), "src", "jobs", "ExecuteSqlQuery"));

module.exports =  async function (email) {

    let query = "SELECT * FROM users where email = ?"

    let data = await ExecuteSqlQuery(query, [email]);

    return data;
}