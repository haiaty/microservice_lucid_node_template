"use strict";

const path = require("path");
const GetMariaDbConnection = require(path.resolve(process.cwd(), "drivers", "GetMariaDbConnection"));


async function ExecuteSqlQuery(query, inputs) {

    const connection = await GetMariaDbConnection();

    return new Promise((resolve, reject) => {

        connection.query(query, inputs, (error, results, fields) => {
            if (error) {
                return reject(error.message);
            }
            resolve(results);
            connection.end();

        });
    });

}

module.exports = ExecuteSqlQuery;